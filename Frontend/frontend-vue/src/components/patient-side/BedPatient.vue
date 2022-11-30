<template>
  <div style="position: 'relative'">
    <Navbar :btnName="btnName" />
    <div class="VF-Container">
      <div class="VF-heading">
        <div>
          <p class="VF-h1">Please Fill Out Your Details</p>
          <p class="VF-h2">To Support People Donate Beds here</p>
          <p class="VF-h1 success" v-if="success">Data Added.Thank you for your Contribution</p>
          <p class="VF-h1 warning" v-if="warn">Enter all the details</p>
        </div>
      </div>

      <div className="HD-formContainer">
        <form className="HD-form">
          <input
            type="text"
            placeholder="Name"
            name="DonorName"
            class="HD-form-input"
            v-model="DonorName"
          />
          <input
            type="number"
            min="0"
            placeholder="Contact"
            name="Number"
            class="HD-form-input"
            v-model="Numbers"
          />
          <div style='display: "flex", justifyContent: "space-between" '>
            <input
              type="text"
              placeholder="State"
              name="State"
              class="HD-form-input input-small"
              v-model="State"
            />
            <input
              type="text"
              placeholder="City"
              name="City"
              class="HD-form-input input-small"
              v-model="City"
            />
          </div>
          <input
            type="number"
            min="0"
            placeholder="No. of Beds"
            name="NoOfBed"
            class="HD-form-input"
            v-model="NoOfBed"
          />
          <div className="HD-buttonContainer">
            <ButtonSecondary btn="Submit" @click="formSubmit" />
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
import axios from "axios";
export default {
  name: "BedPatient",
  data() {
    return {
      DonorName: "",
      Numbers: "",
      City: "",
      State: "",
      NoOfBed: "",
      btnName: "Donate Blood",
      success: false,
      warn:false
    };
  },
  components: {
    Navbar,
    ButtonSecondary,
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault();
      console.log("hy");
      const { DonorName, Numbers, State, City, NoOfBed } = this;
      if (!DonorName || !Numbers || !City || !State || !NoOfBed){
        this.warn=true
        this.success=false
      }
      else {
        let result = await axios.post("http://localhost:8000/Donation/Bed", {
          DonorName,
          Numbers,
          State,
          City,
          NoOfBed,
        });
        console.log(result);
        this.warn=false
        this.success = true;
        
      }
      (this.DonorName = ""),
        (this.Numbers = ""),
        (this.State = ""),
        (this.City = ""),
        (this.NoOfBed = "");
    },
  },
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