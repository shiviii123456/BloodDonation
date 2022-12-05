<template>
<LoadersVue v-if="loader" />
  <div style="position: 'relative'" v-else>
    <Navbar :btnName="btnName" />
    <div className="VF-Container">
      <div className="VF-heading">
        <div>
          <p className="VF-h1">Please Fill Out Your Details</p>
          <p className="VF-h2">Donate Blood and Help Save Lives</p>
        
          <p class="VF-h1 success" >{{success?  "Data Added.Thank you for your Contribution":""}}</p>
          <p class="VF-h1 warning" >{{warn? "Enter all the details":""}}</p>
        </div>
      </div>
      <div className="HD-formContainer">
        <form className="HD-form">
          <input
            type="text"
            placeholder="Donor Name"
            name="DonorName"
            className="HD-form-input"
            v-model="DonorName"
          />
          <input
            type="number"
            min="0"
            placeholder="Contact"
            name="Number"
            className="HD-form-input"
            v-model="Numbers"
          />
          <div style='display: "flex", justifyContent: "space-between" '>
            <input
              type="text"
              placeholder="State"
              name="State"
              className="HD-form-input input-small"
              v-model="State"
            />
            <input
              type="text"
              placeholder="City"
              name="City"
              className="HD-form-input input-small"
              v-model="City"
            />
          </div>
          <div style='display: "flex", justifyContent: "space-between"'>
            <select name="Gender" v-model="Gender">
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <select name="BloodGroup" v-model="BloodType">
              <option value="" disabled selected>Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB+</option>
            </select>
          </div>
          <div className="HD-buttonContainer">
            <ButtonSecondary btn="Submit"  @click="formSubmit"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import "./blood.css";
import Navbar from "../ui-elements/Navbar.vue";
import ButtonSecondary from "../ui-elements/ButtonSecondary.vue";
import axios from 'axios';
import baseurl from "../../baseurl.js"
import LoadersVue from "../ui-elements/LoaderVue.vue"
export default {
  name: "BloodPatient",
  data() {
    return {
        DonorName: "",
        Numbers: "",
        City: "",
        State: "",
        Gender: "",
        BloodType: "",
        success:false,
        warn:false,
      btnName: "Donate Bed",
      loader:false
    };
  },
  components: {
    Navbar,
    ButtonSecondary,
    LoadersVue
  },
  methods:{
   async formSubmit(e){
      e.preventDefault();
      try{
      this.loader=true
      const {DonorName,Numbers,State,City,Gender,BloodType}=this
      if(!DonorName || !Numbers || !City || !State || !Gender || !BloodType){
      console.warn("Enter all the details")
        this.warn=true
        this.success=false
      }
      else{
       let result=await axios.post(baseurl+"/Donation/Blood",{DonorName,Numbers,State,City,BloodType});
       console.log(result)
          this.warn=false
          this.success = true;
      }
      }
      catch(error){
        console.log("error occured"+error)
      } 
       this.loader=false
       this.DonorName="",
       this.Numbers="",
       this.City="",
       this.State="",
       this.Gender="",
       this.BloodType=""
    }
  }
};
</script>

<style scoped>

.success{
   color: green;
}
.warning{
  color: red;
}
</style>