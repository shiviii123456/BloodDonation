<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <h1>Youth For Blood</h1>
    <ButtonMain :btnName="btnName" @click="goToDonation()"/>
  </div>
</nav>
</template>
<script>
  import ButtonMain from "./ButtonMain.vue";
  export default{
    name:"Navbar-Vue",
    components:{
        ButtonMain
    },
    methods:{
      goToDonation(){
        if(this.btnName==="Donate Blood" || this.btnName==="Become Volunteer")
        this.$router.push('/donation-blood'); 
        else if(this.btnName==="Donate Bed")
        this.$router.push('/donation-bed');
      }
    },
    props:{
      btnName:String
    }
  }

</script>
<style scoped>
/* #FFC7C6 */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
nav{
    background-color: #FA575C;
    font-family: 'Montserrat', sans-serif;
    padding-right: 5rem;
}
h1{
    color: white !important;
    font-weight: bold;
    font-size: 2rem;
    margin-left: 3rem;
}
</style>