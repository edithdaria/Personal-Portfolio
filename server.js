//setup server
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//listening port from heroku or localhost://3000
const PORT = process.env.PORT || 3000;

//import the schema model
const Inquire = require('./email.js');

//fire up the server
const app = express();

//log the requests
app.use(logger('dev'));

//parsing url with extended limit on chars
app.use(express.urlencoded({extended:true}));

//middleware to parse json objects
app.use(express.json());

//middleware to render static content
app.use(express.static('public'));

//connect to mongoose. url parser - useNewUrlParser - new version
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Inquire',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Route to post our form submission to mongoDB via mongoose
app.post('/submit', ({body}, res) =>{
    Inquire.create(body)
    .then(inquireDoc => {
        res.json(inquireDoc);
    })
    .catch(err => {
        res.json(err);
    });
    res.redirect("../index.html");
});

//start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
})