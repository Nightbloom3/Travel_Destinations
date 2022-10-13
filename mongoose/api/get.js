const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/auth/users", function (req, res) {
    User.find({}).then(function (user, err) {
        if (err) {
            console.log(err);
        }
        res.status(200).send(user);
    })
})

app.get("/auth/login", function (req, res) {
    User.findOne({ email: req.body.email, password: req.body.password }).then(
        function (user, err) {
            if (err) {
                console.log(err);
            }
            const token = jwt.sign({ _id: user._id }, "secret");
            res.status(200).send(token);
        }
    )
})

app.get("/", function (req, res) {
    Travel.find({}).then(function (travel) {
        res.status(200).json(travel);
    });
});

app.get("/:id", function (req, res) {
    console.log(req.params.id);
    Travel.findOne({ _id: req.params.id }, (err, travel) => {
        if (err) {
            console.log(err);
        }
        console.log(travel);
        res.status(200).json(travel);
    });
});