const { log } = require("console");
const crypto = require("crypto");
require("dotenv").config();
let salt = process.env.SALT;
console.log(salt);

/**
 * !This file Decode the encrypted stram data
 * *This function Accept the Data and key to decryption
 */

function decryptData(enData, secretKey) {
  console.log(enData);
  let messageArray = enData.split("|");
  for (let i = 0; i < messageArray.length; i++) {
    // console.log(messageArray[i]);
    const combinedBuffer = Buffer.from(messageArray[i], "base64");
    console.log(combinedBuffer);
    const IV = combinedBuffer.slice(0, 16);
    const encryptedPayload = combinedBuffer.slice(16);
    console.log("IV", IV);
    console.log("encryptedPayload", encryptedPayload);
    console.log("secretKey:", secretKey);
    const key = crypto.pbkdf2Sync(secretKey, salt, 100000, 32, "sha256");

    console.log("Derived Key:", key.toString("hex"));
    try {
      const Decipher = crypto.createCipheriv("aes-256-ctr", key, IV);
      let decryptData = Decipher.update(encryptedPayload, "base64", "utf-8");
      decryptData += Decipher.final("utf-8");
      console.log("decrptmsg", decryptData);
    } catch (err) {
      continue;
    }
  }
}
module.exports = decryptData;
