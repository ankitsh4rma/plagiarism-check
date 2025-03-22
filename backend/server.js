const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app=express();
app.use(express.json());
app.use(cors());




const authRoutes=require("./routes/authRoutes");
const analysisRoutes=require("./routes/analysisRoutes");
app.use("/api/auth",authRoutes);
app.use("/api",analysisRoutes);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongo connected")})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("Server has Started");
})