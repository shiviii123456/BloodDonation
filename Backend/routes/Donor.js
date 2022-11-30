const express=require("express");
const { appendFile } = require("fs");
const router=express.Router();
const Donation=require("../Controllers.js/donation")

router.post("/Donation/Bed",Donation.BedDonation)
router.post("/Donation/Blood",Donation.BloodDonation)
router.get("/Donation/GetBedDonorList",Donation.GetBedDonorList)
router.get("/Donation/GetBloodDonorList",Donation.GetBloodDonorList)
router.get("/Donation/GetHospitalBedRequest",Donation.GetHospitalBedRequest)
router.get("/Donation/GetHospitalBloodRequest",Donation.GetHospitalBloodRequest)
router.post("/Donation/searchblood/city",Donation.SearchBlood)
router.post("/Donation/searchbed/city",Donation.SearchBed)
// router.post("/Donation/BloodRequest/City",Donation.SearchBlood)

module.exports=router