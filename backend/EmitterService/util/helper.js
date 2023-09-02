const crypto = require("crypto");
const fs = require("fs");
function getRandomInt(max, min) {
  let RandomNumber = Math.floor(Math.random() * (max - min) + min);
  return RandomNumber;
}
function getRandomElementsFromArray(namesArray, citiesArray) {
  //as we need the random values we can generate random value and access it
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  const name = namesArray[randomIndex];
  const origin = citiesArray[randomIndex];
  const destination = citiesArray[randomIndex + 1];

  return {
    name,
    origin: origin,
    destination: destination,
  };
}

function advanceEncrypt(data, key) {
  /**
   * Need IV initial Vector
   * ciper
   */
  //   console.log(typeof data);

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-ctr", key, iv);
  /**
   * TODO String
   */
  let stringData = typeof data === "string" ? data : JSON.stringify(data);
  //   console.log(stringData);
  let encData = cipher.update(stringData, "utf-8", "base64");
  encData += cipher.final("base64");
  //   console.log(encData);
  //   return Buffer.concat([iv, Buffer.from(encData, "base64")]).toString("base64");
  return encData;
}
module.exports.getRange = getRandomInt;
module.exports.getRadomElement = getRandomElementsFromArray;
module.exports.advanceEncryptFun = advanceEncrypt;
