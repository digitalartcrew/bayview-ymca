var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/d3-map-example");

mongoose.set("debug", true);

module.exports.User = require("./user");
