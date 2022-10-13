const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.delete("/:id", function (req, res) {
    Travel.deleteOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            console.err(err);
        } else {
            res.status(200).json(result);
        }
    });
});

// Alternative function for - delete
// app.delete('/:id', ((req, res) => {
//     const deletedItem = Travel
//       .findByIdAndDelete(req.params.id)
//       .catch(err => res.status(400).send(err.message))

//     res.status(200).send(deletedItem)
//   }))