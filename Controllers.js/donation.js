const asyncHandler = require("express-async-handler");

const DonationBed = require("../models/bedDonation");
const BloodDonation=require("../models/bloodDonation")
const BloodReqByHospital = require("../models/bloodRequest");
const BedReqByHospital = require("../models/bedrequest");
const Hospital=require("../models/Hospital")

exports.BedDonation = asyncHandler(async (req, res, next) => {
  const { DonorName, Number, State, City, NoOfBed } = req.body;
  console.log(req.body);
  if (!DonorName || !Number || !City || !State || !NoOfBed) {
    return res
      .status(500)
      .json({ Error: "Please Fill all the require fields" });
  }
  const DonorDetails = new DonationBed(req.body);
  await DonorDetails.save();
  return res.status(200).json({ DonorDetails: DonorDetails });
});

exports.BloodDonation=asyncHandler(async(req,res,next)=>{
   const {DonorName,Number,State,City,BloodType}=req.body;
   console.log(req.body)
   if (!DonorName || !Number || !City || !State || !BloodType) {
    return res
      .status(500)
      .json({ Error: "Please Fill all the require fields" });
  }
  const DonorDetails = new BloodDonation(req.body);
  await DonorDetails.save();
  return res.status(200).json({ DonorDetails: DonorDetails });
})

exports.GetBedDonorList=asyncHandler(async (req,res,next)=>{
    const bedDonor=await DonationBed.find({})
    res.status(200).json(bedDonor)
})

exports.GetBloodDonorList=asyncHandler(async (req,res,next)=>{
    const bloodDonor=await BloodDonation.find({})
    res.status(200).json(bloodDonor)
})

exports.GetHospitalBedRequest=asyncHandler(async (req,res,next)=>{
    const BedReq = await BedReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
  res.status(200).json({ BedReq: BedReq });
})


exports.GetHospitalBloodRequest=asyncHandler(async (req,res,next)=>{
    const BloodReq = await BloodReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
  res.status(200).json({ BloodReq: BloodReq });
})


exports.SearchBlood=asyncHandler(async (req,res,next)=>{
  const bloodReq = await BloodReqByHospital.find()
    .populate(
      "HospitalDetails",
      "HospitalName Contact State City Address InchargeName"
    )
    .exec();
    const bloodArr=[]
    bloodReq.forEach((element) => {
      if (element.HospitalDetails.City.match(req.body.City)) {
        bloodArr.push(element);
      }
    });
  return  res.status(200).json(bloodArr);
})


exports.SearchBed=asyncHandler(async (req,res,next)=>{
  const bedReq = await BedReqByHospital.find()
  .populate(
    "HospitalDetails",
    "HospitalName Contact State City Address InchargeName"
  )
  .exec();
  const bedArr=[]
  bedReq.forEach((element) => {
    if (element.HospitalDetails.City.match(req.body.City)) {
      bedArr.push(element);
    }
  });
  res.status(200).json(bedArr);
})