const express=require("express")
const mongoose =require("mongoose")
const app=express()
const bodyParse=require("body-parser")
const Donation = require("./routes/Donor");
const HospitalReq=require("./routes/HospitalRequest")
const patient=require("./routes/Patient")
const HospitalAuth=require("./routes/HospitalAuth")
var cors = require('cors');
const Hospital = require("./models/Hospital");
const dotenv = require("dotenv");
dotenv.config();

const port= process.env.PORT || 8000
app.use(cors());
//middleware that parse the json
app.use(express.json())


app.use(Donation)
app.use(HospitalReq)
app.use(patient)
app.use(HospitalAuth)
app.use((req, res, next) =>{   
  res.setHeader('Access-Control-Allow-Origin',"*"); // to allow all client we use *
  res.setHeader('Access-Control-Allow-Methods',"OPTIONS,GET,POST,PUT,PATCH,DELETE"); //these are the allowed methods 
  res.setHeader('Access-Control-Allow-Headers', "*"); // allowed headers (Auth for extra data related to authoriaztiom)
  next();
});

mongoose
.connect("mongodb+srv://shivangi:Abc1234@blood-donations.4mrxcf6.mongodb.net/?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
  })
  .catch((err) => {
    console.log(err);
});

app.listen(port);
console.log("server started");