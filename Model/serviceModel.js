const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({
  slugTitle: String,
  developerInfo: Object,
  serviceImage: Object,
  aboutService: String,
  serviceDetails: String,
  technology: Array,
  features: Array,
  category: Object,
  price: number,
});
module.exports = model("service", serviceSchema);
