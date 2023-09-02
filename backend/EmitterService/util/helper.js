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
module.exports.getRange = getRandomInt;
module.exports.getRadomElement = getRandomElementsFromArray;
