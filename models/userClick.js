const mongoose = require("mongoose");

const IpAddressSchema = new mongoose.Schema({
    ipAddress: {
      type: String,
      required: false,
    },
});

const IpAddress = mongoose.model("IpAddress", IpAddressSchema);
module.exports = IpAddress;
