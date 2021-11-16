const express = require("express");
const cors = require("cors");
const corsConfig = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const logger = require("morgan");

const { connect } = require("./config/database");
const HTTPSTATUSCODE = require("./utils/httpStatusCode");
const albergue = require("./app/api/routes/albergue.routes");
const comedor = require("./app/api/routes/comedor.routes");
const user = require("./app/api/routes/user.routes");
const userEvent = require("./app/api/routes/userEvent.routes");

connect();

const app = express();

app.set("secretKey", "nodeRestApi");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(cors(corsConfig));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

app.use("/albergues", albergue);
app.use("/comedores", comedor);
app.use("/user", user);
app.use("/userEvent", userEvent);

app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Unexpected error");
});

app.disable("x-powered-by");

app.listen(3000, () => {
  console.log("Node server listening on port 3000");
});
