const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({
  slugTitle: String,
  developerInfo: Object,
  serviceImage: Object,
  aboutService: String,
  serviceDetails: String,
  technology: Array,
  features: Array,
  categoryId: String,
});
module.exports = model("service", serviceSchema);
