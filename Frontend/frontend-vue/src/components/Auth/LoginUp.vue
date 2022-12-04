<template>
  <div>
    <Navbar btnName="continue as patient" />
    <div className="HospitalSignup-Container">
      <div className="HospitalSignupCard-Wrapper">
        <div className="HospitalSignupHeading-Wrapper">
          <h1>Welcome Back</h1>
          <p>Login to Continue</p>
          <p>{{ success ? "Login Success" : "" }}</p>
          <p style="color: red">{{ noerror ? msg : "" }}</p>
        </div>
        <form className="HospitalSignupForm">
          <input
            v-model="email"
            type="text"
            className="HospitalSignupForm-Input"
            placeholder="Email"
            name="email"
          />
          <div class="Validation"></div>
          <input
            v-model="password"
            type="password"
            className="HospitalSignupForm-Input"
            placeholder="Password"
            name="password"
          />
          <div class="Validation"></div>
          <div className="HospitalSignup-Button">
            <ButtonSecondary btn="Login" @click="formSubmit" />
          </div>
        </form>
        <p className="bottom-link">
          Don't have an account? <span @click="gotoRegister()">Register</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../ui-elements/Navbar.vue";
import ButtonSecondary from "../ui-elements/ButtonSecondary.vue";
import axios from "axios"
import "./auth.css";
import baseurl from '@/baseurl';
export default {
  name: "LoginUp",
  components: {
    Navbar,
    ButtonSecondary,
  },
  data() {
    return {
      email: "",
      password: "",
      success: false,
      noerror: false,
      msg: "",
    };
  },
  methods: {
   async formSubmit(e) {
      e.preventDefault();
       const data = {
        Email: this.email,
        Password: this.password
      };
      if(data.Email || data.Password){
        try{
        let result=await axios.post(baseurl+"/Hospital/Login",data);
        localStorage.setItem("HospitalData",result.data.HospitalDetails.HospitalName)
        localStorage.setItem("token",result.data.token)
        localStorage.setItem("id",result.data.HospitalDetails._id)
        this.$router.push("/home-hosp");
        }
        catch(error){
           console.log(error)
           this.noerror=true
           this.msg="Enter Correct Details"
        }
      }
      else{
        this.noerror=true
        this.msg="Enter Email or Password"
      }
      this.email="",
      this.password=""
   },
    gotoRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
