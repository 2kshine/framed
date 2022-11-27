//importing path module
const path = require("path");
//Importing express package
const express = require("express");
//Importing mongoose for database connection
const mongoose = require("mongoose");
//importing morgan middleware to print the request format in console.
const morgan = require("morgan");
//importing cross origin resource sharing
const cors = require("cors");
// //importing express session
// const session = require("express-session");

//Importing Routes
const userRoute = require("./routes/userRoute")
const authRoute = require("./routes/authRoute")
const postRoute = require("./routes/postRoute")
//Initializing application
const app = express();

//Loading environment variables
if (process.env.NODE_ENV === "development") {
    //importing .env file
    require("dotenv").config({ path: "./config/.env" });
    //adding morgan middleware
    app.use(morgan("dev"));
  }

//port mapping
const PORT = process.env.PORT || PORT;
//storing env variable in local constant.
const MONGO_URI = process.env.MONGO_URI || MONGO_URI;

//body parser middleware to use req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/post", postRoute)
//connecting to the database and starting server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((connect) => {
    console.log(
      `Successfully connected to the database": ${connect.connection.host}`
    );
    app.listen(PORT, () => {
      console.log(`Successfully listening at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

