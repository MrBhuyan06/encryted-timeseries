const mongoose = require("mongoose");

/**
 * !Here We Will define the individual dataObject schema field
 */
const DataObjectSchema = new mongoose.Schema({
  name: String,
  origin: String,
  destination: String,
  secretkey: String,
});

/**
 * Define TimeStamp Time-Series Data
 */
const DataObjectTimeSeriesSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now, //Default timestamp to the current date and time
  },
  data: {
    type: [DataObjectSchema], // Array of data elements
    default: undefined, // Default to an empty array
  },
});
DataObjectTimeSeriesSchema.index({ timestamp: 1 });

//Create A Mongoose model for the time-series data
const TimeSeriesDataModel = mongoose.model(
  "TimeSeriesData",
  DataObjectTimeSeriesSchema
);
module.exports = { TimeSeriesDataModel };
