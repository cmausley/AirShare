const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const expressSession = require("express-session");
const db = require("./config/db");
const path = require("path");
const MongoStore = require("connect-mongo")(expressSession);

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// MW
const app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

// DB
db().then((connection) => {
  app.use(
    expressSession({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true,
      cookie: { secure: true },
      store: new MongoStore({ mongooseConnection: connection }),
    })
  );
});
// DB => API

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static(publicPath));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/accounts", require("./routes/api/accounts"));

// const publicPath = path.join(__dirname, './client/public');
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
