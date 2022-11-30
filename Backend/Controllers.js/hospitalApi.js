const AsyncHandler = require("express-async-handler");
const HospitalList = require("../models/Hospital");

exports.GetAllHospital = AsyncHandler ( async (req,res,next)=>{
    const List = await HospitalList.find({
        $and : [
            {$or : [
                {Bedavailability : "Beds available"},
                {Bloodavailability  : "Blood available"},
            ]}
        ]
    })
    .exec();

    return res.status(200).json({List : List});
});

exports.GetCityHospital = AsyncHandler ( async ( req,res,next)=>{
    const City = req.params.city;
    console.log(City);
    const List = await HospitalList.find({
        $and : [
            {Isverified : "true"},
            {City : { $regex: City,$options: 'i'}},
            {$or : [
                {Bedavailability : "Beds available"},
                {Bloodaavailability : "Blood available"},
                {Oxygenavailability : "Oxygen available"},
            ]}
        ]
    })

    res.status(200).json({List : List});
});