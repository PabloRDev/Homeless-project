const express = require("express");
const router = express.Router();

const {
  createUserEvent,
  getAllUserEvents,
} = require("../controllers/UserEvent.controllers");

router.post("/create", createUserEvent);
router.get("/", getAllUserEvents);

module.exports = router;
