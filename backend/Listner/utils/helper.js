/**
 * !Here we Save The incoming encrypted into the mongoDbDatabase
 *
 */
const TimeSeriesObjectModel = require("../Model/TImeSeriesModel.js");

async function insertDataInDb(data) {
  const inputData = JSON.parse(data);
  try {
    const currentMinStart = new Date();
    /**
     * @Here we are making currentTime to (0)
     */
    currentMinStart.setSeconds(0);
    currentMinStart.setMilliseconds(0);

    /**
     * to query the data (conditon,update,option)
     * ! here we are using less the and grt then operator for range
     */

    const result = await TimeSeriesObjectModel.TimeSeriesDataModel.updateOne(
      {
        timestamp: {
          $gte: currentMinStart,
          $lt: new Date(currentMinStart.getTime() + 60000), //1 min
        },
      },
      { $push: { data: inputData } }, // Create or update a document in the TimeseriesModel.TimeSeriesDataModel collection
      { upsert: true } // Create a new document if it doesn't exist
    );
    // Log the success message along with the result
    console.log("Data saved to timeseries for", currentMinStart, result);
  } catch (err) {
    console.log("error ", err);
  }
}
module.exports = insertDataInDb;
