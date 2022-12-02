const express = require("express");
const router = express.Router();

//middleware for protected routes
const isAuth=require('../middleware/isAuth');

//importing controllers 
const HospitalAuthController = require("../Controllers.js/HospitalAuth");
//route for authentication
router.post("/Hospital/Registration",HospitalAuthController.registration);
router.patch("/Hospital/Details/:id",HospitalAuthController.extradetails);
router.post("/Hospital/Login",HospitalAuthController.HospitalLogin);
router.get("/Hospital/:id",HospitalAuthController.getDetails);

module.exports = router;