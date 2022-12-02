<template>
  <div style="position: 'relative'">
    <Navbar :btnName="btnName" />
    <div className="VF-Container">
      <div className="VF-heading">
        <div>
          <p className="VF-h1">Please Fill Out Your Details</p>
          <p className="VF-h2">Donate Blood and Help Save Lives</p>
        
          <p class="VF-h1 success" v-if="success">Data Added.Thank you for your Contribution</p>
          <p class="VF-h1 warning" v-if="warn">Enter all the details</p>
        </div>
      </div>
      <div className="HD-formContainer">
        <form className="HD-form">
          <input
            type="text"
            placeholder="Donor Name"
            name="DonorName"
            className="HD-form-input"
            v-model="form.DonorName"
          />
          <input
            type="number"
            min="0"
            placeholder="Contact"
            name="Number"
            className="HD-form-input"
            v-model="form.Numbers"
          />
          <div style='display: "flex", justifyContent: "space-between" '>
            <input
              type="text"
              placeholder="State"
              name="State"
              className="HD-form-input input-small"
              v-model="form.State"
            />
            <input
              type="text"
              placeholder="City"
              name="City"
              className="HD-form-input input-small"
              v-model="form.City"
            />
          </div>
          <div style='display: "flex", justifyContent: "space-between"'>
            <select name="Gender" v-model="form.Gender">
              <option value="" disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            <select name="BloodGroup" v-model="form.BloodType">
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

export default {
  name: "BloodPatient",
  data() {
    return {
      form: {
        DonorName: "",
        Numbers: "",
        City: "",
        State: "",
        Gender: "",
        BloodType: "",
        success:false
      },
      btnName: "Donate Bed",
    };
  },
  components: {
    Navbar,
    ButtonSecondary,
  },
  methods:{
   async formSubmit(e){
      e.preventDefault();
      const {DonorName,Numbers,State,City,Gender,BloodType}=this.form
      if(!DonorName || !Numbers || !City || !State || !Gender || !BloodType){
      console.warn("Enter all the details")
       this.warn=true
        this.success=false
      }
      else{
       let result=await axios.post("http://localhost:8000/Donation/Blood",{DonorName,Numbers,State,City,BloodType});
       console.log(result)
          this.warn=false
        this.success = true;
      }
       this.form=""
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