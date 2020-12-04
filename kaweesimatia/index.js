const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require('path');



const RegistrationRoute = require('./routes/registerroute');


const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const passport = require('passport');

const app = express();

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))



mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// database guidelines
mongoose.connect("mongodb://localhost:27017/Register", ()=>{
    console.log("successfully connected to database")
})












app.use('/', RegistrationRoute);
// app.use('/login',loginRoute)




app.get("*",(req,res)=>{
  res.send("The Page you are looking for can not be found!")
})

//created a server and have it listen on port 3000
app.listen(3000, () => {
  console.log("listening on port 3000")
})