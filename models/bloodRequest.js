var mongoose = require("mongoose");

const BloodRequest = new mongoose.Schema({
    HospitalDetails : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    BloodType :{
        type : String,
        require : false
    }
});

module.exports = mongoose.model("BloodRequest",BloodRequest);