const UserEvent = require("../models/UserEvent");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createUserEvent = async (req, res, next) => {
  try {
    const newUserEvent = new UserEvent();
    newUserEvent.name = req.body.name;
    newUserEvent.type = req.body.type;
    newUserEvent.place = req.body.place;
    newUserEvent.date = req.body.date;
    newUserEvent.time = req.body.time;

    const userEventDb = await newUserEvent.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: { UserEvent: userEventDb.name },
    });
  } catch (error) {
    return next(error);
  }
};

const getAllUserEvents = async (req, res, next) => {
  try {
    const userEvent = await UserEvent.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: { userEvent: userEvent },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { createUserEvent, getAllUserEvents };
