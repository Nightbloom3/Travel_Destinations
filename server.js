const express = require("express");
const mongodb = require("mongodb").MongoClient;
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/traveldestinations")
    .catch((error) => console.log(error));

app.listen(5000);

setTimeout(function () {
    mongoose.connect("mongodb://localhost:27017/traveldestinations");
}, 60000);

const TravelSchema = new mongoose.Schema({
    country: { type: String },
    location: { type: String },
    period: { type: String },
    description: { type: String },
});

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

const Travel = mongoose.model("Travel", TravelSchema);
const User = mongoose.model("User", UserSchema);