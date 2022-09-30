const express = require('express');
const mongodb = require('mongodb').MongoClient;
const app = express()
const { MongoClient, ObjectId } = require('mongodb');

var cors = require('cors')
app.use(cors())

app.use(express.json());

let db
let connectionString = 'mongodb://localhost:27017/traveldestinations'

mongodb.connect(
  connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    db = client.db()
    app.listen(5000)
  }
)


app.get('/', function (req, res) {
    // getting all the data
    db.collection('destinationsCollection')
      .find()
      .toArray(function (err, items) {
        res.send(items)
      })
  })

app.post('/create', function (req, res) {
    // Sending request to create a data
    db.collection('destinationsCollection').insertOne( req.body , function (
      err,
      info
    ) {
      res.status(201).json(info.ops[0])
    })
  })

app.put('/:id', async function (req, res) {
  db.collection('destinationsCollection').findOneAndUpdate({ _id: ObjectId(req.params.id) 
  }, { 
      $set: { travel: {
        country: req.body.country,
        location: req.body.location,
        period: req.body.period,
        description: req.body.description
      }
      } 
  },
      function () {
        res.status(418).json()
        res.send("wup wup update complete")
      }
  )
})

app.delete('/:id', async (req, res) => {
    const result = await db.collection('destinationsCollection').deleteOne({ _id : new ObjectId(req.params.id)
    },
    function () {
        res.send('Successfully deleted!')
    } );
    
    // //get reports
    // const reportInfo = await db.collection('reports').find().toArray()
    
    // //put returned reports into the result provided
    // res.status(200).json(reportInfo);
});
