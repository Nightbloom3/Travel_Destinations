const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.put("/:id", function (req, res) {
    console.log(req.body);
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

// Alternative function for - update
// app.update('/:id', ((req, res) => {
//     const itemToUpdate = Travel
//       .findByIdAndUpdate(req.params.id)
//       .catch(err => res.status(400).send(err.message))

//     res.status(200).send(itemToUpdate)
//   }))