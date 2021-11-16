const mongoose = require("mongoose");

const userEventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserEvent = mongoose.model("UserEvent", userEventSchema);
module.exports = UserEvent;
