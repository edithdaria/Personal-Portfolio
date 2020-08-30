//setup server
const express = require('express');
const logger = require('morgan');
const db = require('./config/connection');

//listening port from heroku or localhost://3000
const PORT = process.env.PORT || 3000;

//import the schema model
const Inquire = require('./email.js');

//fire up the server
const app = express();

//log the requests
app.use(logger('dev'));

//parsing url with extended limit on chars
app.use(express.urlencoded({ extended: true }));

//middleware to parse json objects
app.use(express.json());

//middleware to render static content
app.use(express.static('public'));



// Route to post our form submission to mongoDB via mongoose
app.post('/submit', ({ body }, res) => {
    Inquire.create(body)
        .then(inquireDoc => {
            res.redirect("../index.html");
        })
        .catch(err => {
            res.json(err);
        });

});

//start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}!`);
    })
});