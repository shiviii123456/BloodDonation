const express=require("express")
const mongoose =require("mongoose")
const app=express()
const Donation = require("./routes/Donor");
const HospitalReq=require("./routes/HospitalRequest")
//middleware that parse the json
app.use(express.json())

app.use(Donation)
app.use(HospitalReq)
mongoose
.connect("mongodb://localhost:27017/BloodDonation", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(8000);
    console.log("server started");
  })
  .catch((err) => {
    console.log(err);
  });