var mongoose=require("mongoose")

const bloodDonation=new mongoose.Schema({
    DonorName:{
        type:String,
        require:true
    },
    Number:{
        type:String,
        require:true
    },
    State:{
        type:String,
        require:true
    },
    State:{
        type:String,
        require:true
    },
    BloodType:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("BloodDonation",bloodDonation)