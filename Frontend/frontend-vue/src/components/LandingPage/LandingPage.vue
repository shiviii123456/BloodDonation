<template>
  <div class="main-landing">
    <Navbar :btnName="btnName" />
    <h1>Donate blood and be the reason for someones existence.</h1>
    <div class="button-flex">
    <ButtonSecondry :btn="btn1" @click="goToHospital()"/>
    <ButtonSecondry :btn="btn2" @click="goToHome()"/>
    </div>
  </div>
</template>

<script>
import Navbar from "../ui-elements/Navbar.vue";
import ButtonSecondry from "../ui-elements/ButtonSecondary.vue";
export default {
  name: "LandingPage",
  components: {
    Navbar,
    ButtonSecondry
  },
  data(){
    return{
        btn1:"continue as hospital",
        btn2:"continue as patient",
        btnName:"Become Volunteer"
    }
  },
   methods:{
   goToHome(){
   this.$router.push('/patient-home'); 
      },
    goToHospital(){
    this.$router.push('/register'); 
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Raleway:wght@500&display=swap');
.main-landing {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/background-main.jpeg") no-repeat center ;
   background-size: cover;
}
h1{
   padding:8rem 20rem 3rem 20rem;
   font-size:4rem;
   font-family: 'Raleway', sans-serif;
   text-align: center;
   color: #FA575C;
}
.button-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>