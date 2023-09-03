const app = require("express")();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const TimeSeriesObjectModel = require("../Listner/Model/TImeSeriesModel.js");
const { log } = require("console");
console.log(TimeSeriesObjectModel);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
require("dotenv").config();
console.log(process.env.MONGODB_URL);

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB CONNECTED");
    // express evenet listerner

    app.on("error", (err) => {
      console.log("Error", err);
      throw err;
    });
  } catch (err) {
    console.log("ERROR", err);
    throw err; // kill the execution
  }
})();
// TimeSeriesObjectModel.TimeSeriesDataModel
// WebSocket connection
io.on("connection", (socket) => {
  console.log("Client connected");

  // Send all documents to the frontend on initial connection

  TimeSeriesObjectModel.TimeSeriesDataModel.find({})
    .exec()
    .then((documents) => {
      socket.emit("initCon", documents);
    })
    .catch((error) => {
      console.error("Error fetching documents:", error);
    });
  // 64f43448aaf127af59fdffd1

  const changeStream = TimeSeriesObjectModel.TimeSeriesDataModel.watch();
  changeStream.on("change", (change) => {
    if (
      change.operationType === "insert" ||
      change.operationType === "update"
    ) {
      const updatedDocument = change.fullDocument;
      socket.emit("updatedoc", updatedDocument);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Usage:

server.listen(process.env.PORT, function onListening() {
  console.log(`Listening on ${process.env.PORT}`);
});
