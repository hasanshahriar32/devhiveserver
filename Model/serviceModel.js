const { Schema, model } = require("mongoose");
const serviceSchema = new Schema({
  lugTitle : String,
developerinfo : String,  
serviceImage : String,
aboutService : String,
serviceDetails : String,
technology : String,
features : String,
category : String,
});
module.exports = model("service", serviceSchema);
