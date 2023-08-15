import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app=express();

app.use(bodyParser.json({limit:"30mb",extended:"true"}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));
app.use(cors());

const CONNECTION_URL="mongodb+srv://revisit:revisit123@cluster1.6ga21my.mongodb.net/?retryWrites=true&w=majority"
PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true ,useUnifiedTopology:true})
    .then()
    .catch()