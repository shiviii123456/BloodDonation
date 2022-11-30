const express=require("express")
const route=express.Router()
const hospitalApi=require("../Controllers.js/hospitalApi")

route.get("/getAllHospital",hospitalApi.GetAllHospital)
route.get("/getAllHospital/:city",hospitalApi.GetCityHospital)

module.exports=route