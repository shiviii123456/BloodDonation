var mongoose=require("mongoose")

const bloodDonation=new mongoose.Schema({
    DonorName:{
        type:String,
        require:true
    },
    Numbers:{
        type:String,
        require:true
    },
    City:{
        type:String,
        require:true
    },
    State:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    BloodType:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("BloodDonation",bloodDonation)