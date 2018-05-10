var mongoose = require("mongoose");

// check if on prod or local
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/sellyourtoys");
}

// aggregate the models
module.exports.Item = require("./item");
