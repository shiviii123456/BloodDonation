<template>
  <HospitalSide />
  <div className="ED-Container">
    <div className="ED-header">
      <div>
        <p className="ED-h1">Welcome</p>
        <p class="ED-h1" v-if="error">{{msg}}</p>
        <p class="ED-h1" >{{message}}</p>
      </div>
    </div>
    <div className="HD-formContainer">
      <form className="HD-form">
        <input
          type="text"
          placeholder="Incharge Name"
          name="InchargeName"
          className="HD-form-input"
          v-model="InchargeName"
        />
        <input
          type="number"
          min="0"
          placeholder="Contact"
          name="Contact"
          className="HD-form-input"
          v-model="Contact"
        />
        <input
          type="text"
          placeholder="Address"
          name="InchargeName"
          className="HD-form-input"
          v-model="Address"
        />
        <input
          type="text"
          placeholder="City"
          name="InchargeName"
          className="HD-form-input"
          v-model="City"
        />
        <input
          type="text"
          placeholder="State"
          name="InchargeName"
          className="HD-form-input"
          v-model="State"
        />
        <div className="HD-select-wrapper">
          <select placeholder="City" v-model="Bedavailability">
            <option value="Beds available">Beds available</option>
            <option value="Beds not available">Beds not available</option>
          </select>

          <select name="Bloodavailability" v-model="Bloodavailability">
            <option value="Blood available">Blood available</option>
            <option value="Blood not available">Blood not available</option>
          </select>
        </div>
        <div className="HD-buttonContainer">
          <ButtonSecondary btn="Submit" @click="formSubmit" />
        </div>
      </form>
    </div>
    <!-- {success ? <Alert alertdata={alertdata} /> : ""} -->
  </div>
</template>
<script>
import HospitalSide from "./HospitalSide.vue";
import ButtonSecondary from "../ui-elements/ButtonSecondary.vue";
import axios from "axios";
import baseurl from '@/baseurl';
export default {
  name: "EditDetails",
  components: {
    HospitalSide,
    ButtonSecondary,
  },
  data() {
    return {
      InchargeName: "",
      Contact: "",
      Address: "",
      City: "",
      State: "",
      Bedavailability: "",
      Bloodavailability: "",
      error: false,
      msg: "",
      message:""
    };
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault();
      try {
        const id = localStorage.getItem("id");
        const data = {
          InchargeName: this.InchargeName,
          Contact: this.Contact,
          Address: this.Address,
          City: this.City,
          State: this.State,
          Bedavailability: this.Bedavailability,
          Bloodavailability: this.Bloodavailability,
        };
        if (
          !this.InchargeName ||
          !this.Contact ||
          !this.Address ||
          !this.City ||
          !this.State ||
          !this.Bedavailability ||
          !this.Bloodavailability
        ) {
          this.error = true;
          this.msg="Enter all the details"
           this.message=""
        } else {
          const result = axios.patch(
            `${baseurl}/Hospital/Details/${id}`,
            data,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
         if(result)
          this.message="Details added Successfully"
          this.error=false
        }
      } catch (error) {
        this.error=true
        this.msg="Error Occured"
         this.message=""
      }
      (this.InchargeName = ""),
        (this.Contact = ""),
        (this.Address = ""),
        (this.City = ""),
        (this.State = ""),
        (this.Bedavailability = ""),
        (this.Bloodavailability = "");
    },
  },
};
</script>
<style scoped>
.ED-Container {
  margin-left: 20rem;
}
.HospitalDetailsContainer {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  font-family: Montserrat, sans-serif;
}

.HD-heading {
  display: flex;
}

.HD-heading p {
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 0%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #364863;
  padding: 1.5rem;
}

.HD-heading img {
  width: 6.6rem;
  height: auto;
}

.HD-form {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
}

.HD-form-input {
  width: 34.5rem;
  height: 3.25rem;
  background: #eef0f4;
  color: #364863;
  font-size: 1rem;
  border-radius: 1rem;
  margin: 1.2rem 1.9rem 0.5rem 1.9rem;
  outline: none;
  border: none;
  padding: 0px 0px 0px 2rem;
  line-height: normal;
  font-family: Montserrat, sans-serif;
}

.HD-form-input:focus {
  outline: none;
  box-shadow: inset 0 0 0 1px #fa575c;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  margin-right: 0.8rem;
  height: 2rem;
  width: auto;
}

.input-small {
  width: 14.25rem;
}

.HD-select-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.HD-select-wrapper select {
  width: 16rem;
  font-size: 1rem;
  font-weight: normal;
  font-family: Montserrat, sans-serif;
  color: #364863;
  line-height: normal;
  border-radius: 1rem;
  height: 3.25rem;
  margin: 1.2rem 2rem 0.5rem 1.8rem;
  border: 2px solid transparent;
  background: #eef0f4;
  padding: 0px 0px 0px 2rem;
}

.HD-select-wrapper select:focus {
  outline: none;
  border: 2px solid #fa575c;
}

.HD-select-wrapper option[value=""][disabled] {
  display: none;
}

.HD-select-wrapper option {
  font-size: 1rem;
  font-weight: normal;
  font-family: Montserrat, sans-serif;
  color: #364863;
  line-height: normal;
}

.HD-buttonContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36rem;
  height: 3.25rem;
  margin: 1.5rem 1.9rem 0.5rem 1.9rem;
}

.dropdown {
  width: 36rem !important;
}

select {
  cursor: pointer;
}
@media (max-width: 425px) {
  .HD-heading {
    padding: 0% 5vw;
  }
  .HD-form-input {
    margin: 1rem auto;
    width: 85vw;
  }

  .input-small {
    width: 36vw;
  }

  .HD-select-wrapper select {
    width: 40vw;
  }

  .HD-select-wrapper {
    margin: auto;
  }
  .HD-buttonContainer {
    width: 90vw;
    margin: 2rem auto;
  }

  .ED-Container input {
    width: 80vw !important;
  }

  .ED-Container .HD-select-wrapper select {
    width: 39vw !important;
    margin: 1.2rem;
  }

  .ED-Container .HD-buttonContainer {
    width: 80vw;
  }

  .dropdown {
    width: 40vw !important;
  }
}

/* Edit Details */

.ED-Container {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 6rem;
}

.ED-header {
  display: flex;
  padding: 1.5rem 0rem;
}

.ED-header img {
  height: 4.5rem;
  opacity: 0.8;
  width: auto;
  padding-right: 1rem;
}

.ED-h1 {
  font-style: normal;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.3rem;
  margin: 0%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #364863;
}

.ED-h2 {
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin: 0%;
  text-align: center;
  letter-spacing: 0.03em;
  color: #364863;
  padding-top: 0.5rem;
}

/* testing */

.select::after {
  border-radius: 1rem !important;
  border: 1px solid blue !important;
}
</style>