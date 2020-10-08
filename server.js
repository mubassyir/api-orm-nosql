require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 8080;
const subscriberRouter = require('./app/routes/routes.subscribers.js'); //importing route

//connect to noSql
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true});
const db = mongoose.connection;

db.on('error',(error)=> console.log(`error on ${error}`))
db.on('open',()=> console.log('connected to database'));
app.use(express.json());

app.use('/subscribers',subscriberRouter);

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}` );
})