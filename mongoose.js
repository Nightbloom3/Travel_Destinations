//filler
const express = require('express');
const mongodb = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/traveldestinations').catch(error => console.log(error));

app.listen(5000)

setTimeout(function() {
  mongoose.connect('mongodb://localhost:27017/traveldestinations');
}, 60000);


const TravelSchema = new mongoose.Schema({
    country: {type: String},
    location: {type: String},
    period: {type: String},
    description: {type: String}
  });

const Travel = mongoose.model("Travel", TravelSchema)

app.post('/', function (req, res, next) {
  var post = new Travel({
    country: req.body.country,
    location: req.body.location,
    period: req.body.period,
    description: req.body.description
  })
  post.save(function (err, post) {
    if (err) {return next(err)}
    res.status(201).json(post)
  })
})

app.get('/' , function (req , res) {
    Travel.find({}).then(function (travel) {
    res.send(travel);
    });
});

app.put('/:id', function(req, res) {
    Travel.updateOne({_id: req.params.id}, {
      country: req.body.country,
      location: req.body.location,
      period: req.body.period,
      description: req.body.description
    }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    })
  })
  
  app.delete('/:id', function(req, res) {
    Travel.remove({_id: req.params.id}, function(err, result) {
      if (err) {
        console.err(err);
      } else {
        res.json(result);
      }
    })
  })

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