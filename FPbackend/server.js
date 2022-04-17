const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const cors = require("cors");

// use dotenv
dotenv.config();

// CONNECT TO DB
const connectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URL, connectionConfig, () => {
  console.log("DB connected");
});

app.get("/", function (req, res) {
  res.send("hi");
});

//Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

// routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(3001, function () {
  console.log("Server is running in port 3000");
});
