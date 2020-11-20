const express=require('express');
const bodyParser = require("body-parser");
const mongoose=require('mongoose');

const http=require('http');
const app=express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // response.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PATCH,DELETE,HEAD,PUT"
    );
  
    next();
  });


const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ib2iv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose
  .connect(url)
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });