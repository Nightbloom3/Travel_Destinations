//filler
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

app.post("/auth/signup", function (req, res, next) {
  var post = new User({
    email: req.body.email,
    password: req.body.password,
  });
  post.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.status(201).json(post);
  });
});

app.get("/auth/users", function (req, res) {
  User.find({}).then(function (user, err) {
    if (err) {
      console.log(err);
    }
    res.status(200).send(user);
  });
});

app.get("/auth/login", function (req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }).then(
    function (user, err) {
      if (err) {
        console.log(err);
      }
      const token = jwt.sign({ _id: user._id }, "secret");
      res.status(200).send(token);
    }
  );
});

app.post("/", function (req, res, next) {
  var post = new Travel({
    country: req.body.country,
    location: req.body.location,
    period: req.body.period,
    description: req.body.description,
  });
  post.save(function (err, post) {
    if (err) {
      return next(err);
    }
    res.status(201).json(post);
  });
});

app.get("/", function (req, res) {
  Travel.find({}).then(function (travel) {
    res.status(200).send(travel);
  });
});

app.put("/:id", function (req, res) {
  Travel.updateOne(
    { _id: req.params.id },
    {
      country: req.body.country,
      location: req.body.location,
      period: req.body.period,
      description: req.body.description,
    },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.status(201).json(result);
      }
    }
  );
});

app.delete("/:id", function (req, res) {
  Travel.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      console.err(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Work in progress
// app.delete('/:id', ((req, res) => {
//     const deletedItem = Travel
//       .findByIdAndDelete(req.params.id)
//       .catch(err => res.status(400).send(err.message))

//     res.status(200).send(deletedItem)
//   }))

// Work in progress
// app.update('/:id', ((req, res) => {
//     const itemToUpdate = Travel
//       .findByIdAndUpdate(req.params.id)
//       .catch(err => res.status(400).send(err.message))

//     res.status(200).send(itemToUpdate)
//   }))
