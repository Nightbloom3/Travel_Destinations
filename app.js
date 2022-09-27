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

//   app.get('/', function (req, res) {
//     // getting all the data
//     db.collection('destinationsCollection')
//       .find()
//       .toArray(function (err, items) {
//         res.send(items)
//       })
//   })

app.post('/create', function (req, res) {
    // Sending request to create a data
    db.collection('destinationsCollection').insertOne( req.body , function (
      err,
      info
    ) {
      res.status(201).json(info.ops[0])
    })
  })

// app.put('/update/destination/:id', function (req, res) {
//     db.collection('destinationsCollection').findOneAndUpdate({ _id: new mongodb.ObjectId(req.body.id) 
//     }, { 
//         $set: { text: req.body.text } 
//     },
//         function () {
//             res.send('Success updated!')
//         }
//     )
// })

app.delete('/delete/destination/:id', async (req, res) => {
    //delete command 
    const result = await db.collection('destinationsCollection').deleteOne( { _id : new ObjectId(req.params.id)
    },
    function () {
        res.send('Successfully deleted!')
    } );
    
    // //get reports
    // const reportInfo = await db.collection('reports').find().toArray()
    
    // //put returned reports into the result provided
    // res.status(200).json(reportInfo);
});

// dosent work try look at request and response
// app.delete('/delete', function (req, res) {
//     db.collection('destinationsCollection').deleteOne({ 
//         _id: new mongodb.ObjectId(req.body.id) 
//     },
//         function () {
//             res.send('Successfully deleted!')
//         }
//     )
// })