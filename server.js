//___________________
//Dependencies
//___________________
const express = require('express');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Carbon = require('./models/carbon.js')
require('dotenv').config()
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT
//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
// May or may not need these depending on your Mongoose version
mongoose.connect(MONGODB_URI)

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project
//___________________
// Routes


app.get('/carbon', (req, res)=>{
  Carbon.find({})
  .then((foundCarbon) => {
      res.json(foundCarbon)
  })
});

app.delete('/carbon/:id', (req, res)=>{
  Carbon.findByIdAndRemove(req.params.id, (err, deletedCarbon)=>{
      res.json(deletedCarbon);
  });
});


app.put('/carbon/:id', (req, res)=>{
  Carbon.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCarbon)=>{
      res.json(updatedCarbon);
  });
});



//___________________
//localhost:3000
app.get('/' , (req, res) => {
  res.send('Hello World!');
});



//___________________
//Listener
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));