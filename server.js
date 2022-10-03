const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
//Tell server where to access the routes for each aspect of application
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env"});

//Passport config
require("./config/passport")(passport);

//Connect to Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder tells Server where to find css/js/assets
app.use(express.static("public"));