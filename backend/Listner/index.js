const express = require("express");
const app = express();
const io = require("socket.io-client");
const socketIO = require("socket.io");
const decryptData = require("./DataDecoder.js");
require("dotenv").config();
const mongoose = require("mongoose");
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URl);
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
const secretKey = process.env.PASS__KEY;
// console.log(secretKey);
const emitterURL = "http://localhost:6000";
const Socket = io(emitterURL);

let encryptedData;
let decryptedData;

Socket.on("connect", () => {
  console.log("successfully connected to the emitter server");
  /**
   * !Here will listen to the encrypted event emit in the emit service
   */
  Socket.on("EncryptedData", (encyValue) => {
    console.log("hashvalue from emmiter", encyValue);
    decryptData(encyValue, secretKey);
  });
});

app.listen(process.env.LISTENER__PORT, function onListening() {
  console.log(`Listening on ${process.env.LISTENER__PORT}`);
});
