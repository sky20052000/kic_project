require("dotenv");
const config = require("./config.json");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors =  require("cors")

//configaration
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
//db connection

mongoose.connect(config.MONGO_URL).then((data)=>{
    console.log("db conneted ")
}).catch((err)=>{
    console.log("no connection");
})
// routes
app.use("/api/users/profile", require("./routes/users"));
app.use("/api/users/login", require("./routes/users"));
app.use("/api/users/dataList", require("./routes/users"));
app.use("/api/users/verifyOtp", require("./routes/users"));

const port = process.env.PORT ||4401  ;
app.listen(port,(req,res)=>{
    console.log(`Server is running on the :${port}`);
})