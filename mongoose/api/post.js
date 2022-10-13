const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

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