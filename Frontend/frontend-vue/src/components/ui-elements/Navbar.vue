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
        else if(this.btnName==="continue as patient")
        this.$router.push('/patient-home')
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
    position: sticky;
    top:0%;
    z-index:10 ;
}
h1{
    color: white !important;
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 3rem;
    margin-bottom: 0;
    line-height: 1.2rem;
    letter-spacing: .04em;
}

@media (max-width: 700px) {
nav{
   padding-right: 1rem;
}
h1{
   margin-left: 1rem;
}
}
@media (max-width: 500px) {
nav{
  padding-right: 0rem;
}
h1{
   margin-left: 0rem;
}
}
@media(max-width:500px){
 h1{
   margin-left: 0rem;
   font-size: 0.8rem;
 }

}
</style>