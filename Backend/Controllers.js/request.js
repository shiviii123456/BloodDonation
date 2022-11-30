const hospBed=require("../models/bedrequest")
const hospBlood=require("../models/bloodRequest")
const hospitalModel=require("../models/Hospital")
const asyncHandler = require("express-async-handler");
const mongoose=require("mongoose")

exports.HospitalBloodReq=asyncHandler(async(req,res,next)=>{
    const hospital=await hospitalModel.findById(req.params.id)
    console.log(hospital)
    if(!hospital){
        return res.status(500).json({Error : "No hospital is registered with this email id"});
    }
    const hospitalData=new hospBlood({
        HospitalDetails : req.params.id,
        BloodType: req.body.BloodType 
    })

   await hospitalData.save();
   console.log(req.params.id)
   return res.status(200).json(hospitalData)
})
exports.HospitalBedReq=asyncHandler(async(req,res,next)=>{
    const hospital=await hospitalModel.findById(req.params.id)
    console.log(hospital)
    if(!hospital){
        return res.status(500).json({Error : "No hospital is registered with this email id"});
    }
    const hospitalData=new hospBed({
        HospitalDetails : req.params.id,
        NumberOfBed : req.body.NumberOfBed
    })

   await hospitalData.save();
   return res.status(200).json(hospitalData)
})
exports.DeleteBloodReq=asyncHandler(async(req,res,next)=>{
  const delBlood= await hospBlood.findByIdAndDelete(req.params.id);
  res.json(delBlood)
})
exports.DeleteBedReq=asyncHandler(async(req,res,next)=>{
    const delBed=await hospBed.findByIdAndDelete(req.params.id);
    res.json(delBed)
})
exports.GetAllRequests=asyncHandler(async(req,res,next)=>{
    const hospitals=await hospitalModel.findById(req.params.ids)
    if(!hospitals){
        res.status(500).json("Hospital Not Found")
    }
    const BloodRequest = await hospBlood.find({HospitalDetails:req.params.ids});
    const BedRequest = await hospBed.find({HospitalDetails:req.params.ids});
    res.json({BloodRequest,BedRequest});
})