<template>
  <div>
    <Navbar btnName="continue as patient" />
    <div className="HospitalSignup-Container">
      <div className="HospitalSignupCard-Wrapper">
        <div className="HospitalSignupHeading-Wrapper">
          <h1>Create New Account</h1>
          <p>Please Register your Hospital to continue</p>
          <p> {{success ? "Registration Success" : ""}} </p>
          <p style="color:red"> {{noerror ? msg:""}}</p>
        </div>
        <form className="HospitalSignupForm">
          <input
            v-model="userName"
            type="text"
            className="HospitalSignupForm-Input"
            placeholder="Hospital Name"
            name="userName"
          />
          <div class="Validation">
        
          </div>
          <input
            v-model="email"
            type="text"
            className="HospitalSignupForm-Input"
            placeholder="Email"
            name="email"
          />
          <div class="Validation">
          
          </div>
          <input
            v-model="password"
            type="password"
            className="HospitalSignupForm-Input"
            placeholder="Password"
            name="password"
          />
          <div class="Validation">
           
          </div>
          <div className="HospitalSignup-Button">
            <ButtonSecondary btn="SignUp" @click="formSubmit" />
          </div>
        </form>
        <p className="bottom-link">
          Already have an account? <span @click="gotoLogin()">Login</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../ui-elements/Navbar.vue";
import ButtonSecondary from "../ui-elements/ButtonSecondary.vue";
import axios from "axios"
import "./auth.css"
import baseurl from '@/baseurl';
export default {
  name: "SignUp",
  components: {
    Navbar,
    ButtonSecondary,
  },
  data() {
    return {
      userName: "",
      email: "",
      password: "",
      success:false,
      noerror:false,
      msg:""
    };
  },
  methods: {
  async  formSubmit(e) {
      e.preventDefault();
      if (!this.email) {
        this.msg = "Email Required";
        this.noerror = true;
      } else if (
        !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
        this.email)) {
        this.msg = "Email Address is Invalid";
        this.noerror = true;
      }
     else if (!this.password.trim()) {
        this.msg = "Password required";
         this.noerror = true;
      } else if (this.password.length < 6) {
        this.msg = "Password needs to be 6 characters or more";
        this.noerror = true;
      }

      else if (!this.userName.trim()) {
        this.msg = "Username Required";
        this.noerror = true;
      } else if (this.userName.length < 3) {
        this.msg = "Username needs to be 3 characters or more";
        this.noerror = true;
      }
      //data storage in vuejs
      else{
      const data = {
        HospitalName: this.userName,
        Email: this.email,
        Password: this.password
      };
      console.log(data)
       try{
       let result=await axios.post(baseurl+"/Hospital/Registration",data);
        console.warn(result)
         this.success=true
       }
      catch(error){
         this.msg="Error occured, please enter correct details"
      }
      }
       this.userName= "",
      this.email= "",
      this.password= ""
    },
    gotoLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
</style>
