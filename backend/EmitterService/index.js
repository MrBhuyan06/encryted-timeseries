const { log } = require("console");
const { Server } = require("http");

const app = require(express)();
const server = require("http").createServer(app);
const io = require("socket.io")(Server);

io.on("connection", () => {
  console.log("connection Successfull");
});
