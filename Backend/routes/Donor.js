const express=require("express");
const { appendFile } = require("fs");
const router=express.Router();
const Donation=require("../Controllers.js/donation")
const isAuth=require('../middleware/isAuth');

router.post("/Donation/Bed",Donation.BedDonation)
router.post("/Donation/Blood",Donation.BloodDonation)
router.get("/Donation/GetBedDonorList",isAuth,Donation.GetBedDonorList)
router.get("/Donation/GetBloodDonorList",isAuth,Donation.GetBloodDonorList)
router.get("/Donation/GetHospitalBedRequest",Donation.GetHospitalBedRequest)
router.get("/Donation/GetHospitalBloodRequest",Donation.GetHospitalBloodRequest)
router.post("/Donation/searchblood/city",Donation.SearchBlood)
router.post("/Donation/searchbed/city",Donation.SearchBed)
// router.post("/Donation/BloodRequest/City",Donation.SearchBlood)

module.exports=router