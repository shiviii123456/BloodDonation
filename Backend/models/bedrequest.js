var mongoose = require("mongoose");

const bedRequest = new mongoose.Schema({
    HospitalDetails : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    NumberOfBed :{
        type : String,
        require : false
    }
});

module.exports = mongoose.model("BedRequest",bedRequest);