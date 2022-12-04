const asyncHandler = require('express-async-handler');
const bcrypt = require("bcryptjs");

const JWT = require("jsonwebtoken");
const HospitalAuth =  require("../models/Hospital");

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

exports.registration = asyncHandler( async (req,res,next) =>{
    const { Email,HospitalName , Password}=req.body;

    //check email validation
    console.log(HospitalName,Email);
    var valid = emailRegex.test(Email);

    if(!valid)
    {
        return res.status(422).json({error: "please enter a valid email"});
    }

    //all details should be mentioned
    if(!Email || !Password || !HospitalName) {
        
        return res.status(422).json({error:"please enter all the fields"});
    }

    //check if hospital is already registered or not
    const RegisteredHospital = await HospitalAuth.findOne({Email:Email});
    if(!RegisteredHospital)
    {
        //hashing password
        const hashedpassword = await bcrypt.hash(Password,12);
        req.body.Password = hashedpassword;

        //creating new instance of hospital & save details
        const NewHospiital = new HospitalAuth(req.body);
        await NewHospiital.save();
        res.status(200).json({Message : "hospital Successfully Registred "});
    }
    return res.status(500).json("already exist");
});


exports.HospitalLogin = asyncHandler ( async (req,res,next)=>{
    const{Email , Password}=req.body;
    console.log(Password+"hello")
    if(!Email || !Password) 
    {
        res.status(500).json({Error : "please fill all the fields "});
    }

    //check if hospital is registered or not
    const RegisteredHospital = await HospitalAuth.findOne({Email : Email});

    if(!RegisteredHospital)
    {
        res.status(500).json({Error : "No hospital is registered with this email id"});
    }

    //chekc if password entered is correct or not
    else{
    const Passwordmatch = await bcrypt.compare(Password,RegisteredHospital.Password);

    if(!Passwordmatch)
    {
      return res.status(500).json({Error : "Password entered is incorrect"});
    }

    //create jwt token
    const token=await JWT.sign({_id:RegisteredHospital._id},process.env.SUPERSECRET,{expiresIn:'6h'});
    console.log(token)
    return res.status(200).json({message:"logged in successfully",token:token,HospitalDetails:RegisteredHospital});
}
});


exports.getDetails  = asyncHandler (async (req,res,next)=>{
    //send hsopital details
    const HospitalData = await HospitalAuth.findById(req.params.id);
    res.status(200).json(HospitalData);
});



exports.extradetails = asyncHandler (async (req,res,next)=>{
    const {InchargeName,Address,State,City,Contact,Bedavailability,Bloodavailability} = req.body;
    console.log(req.body);
    console.log(req.params.id);

    //check everything is filled
    if (!InchargeName || !Address || !State || !City || !Contact || !Bedavailability || !Bloodavailability) {
        return res.status(500).json({ error: "please enter all the fields" });
    }

    //update hospital details
    const UpdatedData = await HospitalAuth.findByIdAndUpdate(req.params.id, req.body);
    //save it
    const data = await UpdatedData.save();
    console.log(data);
    return res.status(200).json({Message : "Details Successfully updated", data});
});
