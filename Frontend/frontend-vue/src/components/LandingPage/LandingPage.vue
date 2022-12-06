<template>
  <div class="main-landing">
    <Navbar :btnName="btnName" />
    <div class="navbar-main">
    <h1>Blood is meant to circulate .</h1>
    <h1>Pass it around.</h1>
    <h5>There are number of countries who don't have adequate number of blood suppliers and face the challenges of blood supply.
       We are trying to make available adequate blood to needy patients all over the world.      
    </h5>
     <ButtonSecondry :btn="btn1" @click="goToHospital()"/>
    <ButtonSecondry :btn="btn2" @click="goToHome()"/>
    </div>
    <div class="navbar-sec">
    <img src="../../assets/images/main.jpg" />
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
    ButtonSecondry,
  },
  data(){
    return{
        btn1:"continue as hospital",
        btn2:"continue as patient",
        btnName:"Become Volunteer",
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
  /* background: url("../../assets/images/background-main.jpeg") no-repeat center ;
   background-size: cover; */
}
.navbar-main{
    margin-left: 5rem;
    margin-top: 9rem;
    width: 50%;
}
.navbar-sec{
    width: 40%;
}
.navbar-main h5{
  margin: 2rem 0;
}
img{
  width: 500px;
  height: 500px;
  top:10rem;
  position: absolute;
  right: 3rem;
}
h1{
   font-size:3rem;
   top:5rem;
   font-weight: bold;
   font-family: 'Raleway', sans-serif;
   color: black;
}
.button-flex{
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>