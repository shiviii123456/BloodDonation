const express=require("express")
const mongoose =require("mongoose")
const app=express()
const bodyParse=require("body-parser")
const Donation = require("./routes/Donor");
const HospitalReq=require("./routes/HospitalRequest")
const patient=require("./routes/Patient")
//middleware that parse the json
app.use(express.json())

app.get("/",(req,res)=>{
  res.json("hello")
})
app.use(Donation)
app.use(HospitalReq)
app.use(patient)

// mongoose
// .connect("mongodb://localhost:27017/BloodDonation", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//   })
//   .catch((err) => {
//     console.log(err);
// });

app.listen(8000);
console.log("server started");