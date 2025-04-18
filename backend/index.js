//const express=require('express')
import express from "express";
import mongoose from "mongoose"
import {PORT,mongodbURL} from "./config.js"
import {Book} from "./models/bookModels.js"
import bookRoutes from "./routes/bookRoutes.js"
import cors from "cors";


const app=express();

//middleware to parse request body
app.use(express.json());

//middleware for handling CORS Error
//option-1
app.use(cors());
//option -2
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type']
//     })
// )

app.get('/',(req,res)=>{
    return res.status(234).send('welcome')
});

app.use('/books',bookRoutes)//important





mongoose
    .connect(mongodbURL)
    .then(()=>{
    console.log('app connected to db')
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })
})
    .catch((err)=>{
    console.log(err)
})