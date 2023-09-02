const { log } = require("console");
const helper = require("./util/helper.js");
const crypto = require("crypto");
const fs = require("fs");
const getRandomInt = helper.getRange;
const getRandomElementsFromArray = helper.getRadomElement;

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
  console.log(reableStream);
  // as we get a buffer data or stram data parse of String
  const data = JSON.parse(reableStream);
  console.log(data);
  //   console.log(data);
  const msgRange = getRandomInt(49, 499);

  /**
   * * As we have get the range as per the range we need to define the number of message
   * !{name,origin,destination}
   */
  for (let i = 0; i < msgRange; i++) {
    const eleData = getRandomElementsFromArray(data.names, data.cities);
    console.log(eleData);
  }
}
generateRandomMessage();
