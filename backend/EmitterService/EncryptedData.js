const { log } = require("console");
const helper = require("./util/helper.js");
const crypto = require("crypto");

const bcrypt = require("bcrypt");
const fs = require("fs");
const { type } = require("os");
const getRandomInt = helper.getRange;
const getRandomElementsFromArray = helper.getRadomElement;
const advanceEncrypt = helper.advanceEncryptFun;
// console.log(advanceEncrypt);
// return;
require("dotenv").config();
/**
 * !This File Contain the Login for Encrypt the message
 *
 *
 */

/**
 * !GenarteRandomMessage and generate a periodic datas tream
 * * Read The data Use Random Number to determine the number of msg(49-499)
 *
 */
function generateRandomMessage() {
  /**
   * * get a random interger Range
   * !read the file data
   * !getNumberInt()
   */
  const reableStream = fs.readFileSync("data.json");
  //   console.log(reableStream);
  // as we get a buffer data or stram data parse of String
  const data = JSON.parse(reableStream);
  //   console.log(data);
  //   console.log(data);
  const msgRange = getRandomInt(3, 6);

  /**
   * * As we have get the range as per the range we need to define the number of message
   * !{name,origin,destination}
   * !Define data streamData and concatination with |
   */
  let streamingData = "";
  for (let i = 0; i < msgRange; i++) {
    const eleData = getRandomElementsFromArray(data.names, data.cities);
    // console.log(eleData);
    /**
     * !Covert the object to json(jsavScript Notation)
     */
    const dataNotation = JSON.stringify(eleData);
    // console.log(dataNotation);
    /**
     * !generate the hash value form the json data for per single session
     */
    const hashValue = crypto
      .createHash("sha256")
      .update(dataNotation)
      .digest("hex");
    // console.log(hashValue.length)

    /**
     * ! we have get the hashValue which is used as scret key and store in eleData
     */
    const secretKey = hashValue;
    eleData.secretKey = hashValue;
    // console.log(eleData);
    /**
     *  TODO HASH the pass key
     */
    let passkey = process.env.PASS__KEY;

    let saltValue = process.env.SALT;
    const key = crypto.pbkdf2Sync(passkey, saltValue, 100000, 32, "sha256");
    // console.log(key.toString("hex"));
    const encryptHasedValue = advanceEncrypt(eleData, key);
    // console.log(encryptHasedValue);

    // return hashValue;
    streamingData += encryptHasedValue;
    streamingData += "|";
  }
  console.log(typeof streamingData);
  streamingData = streamingData.slice(0, -1);
  return streamingData;
}
// console.log(hashValue);
const hashValue = generateRandomMessage();
// console.log(hashValue);
module.exports = generateRandomMessage;
