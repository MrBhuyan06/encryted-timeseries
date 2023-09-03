const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
require("dotenv").config();
const hashMsg = require("./EncryptedData.js");
const PORT = process.env.EMITTER__PORT;

io.on("connection", (socket) => {
  console.log("A User is Connected");
  socket.on("disconnted", () => {
    console.log("User has disconneted");
  });
  /**
   *! Emit the event
   */
  socket.emit("emitservice", "message from emitservice");
  /**
   * !connect the emit service connect to listerner server(10s)
   */
  setInterval(() => {
    console.log(hashMsg);
    socket.emit("EncryptedData", hashMsg());
  }, 10000);
});

server.listen(PORT, () => {
  console.log(`emitserviceserver is listening in port ${PORT}`);
});
