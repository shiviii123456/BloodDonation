const express=require("express")
const router=express.Router();
const hosReq=require("../Controllers.js/request")

router.post("/:id/request/blood",hosReq.HospitalBloodReq)
router.post("/:id/request/bed",hosReq.HospitalBedReq)
router.get("/:ids/Request",hosReq.GetAllRequests);
router.delete("/:id/request/bloodDel",hosReq.DeleteBloodReq)
router.delete("/:id/request/bedDel",hosReq.DeleteBedReq)

module.exports=router