<template>
    <HospitalSide/>
     <div class="right">
      <div className="HH-Container">
      <div style=" display: flex ">
        <!-- <img src={welcome} className="welcome-img" alt="welcome" /> -->
        <div>
          <p class="HH-h1"> Welcome {{name}}</p>
          <p class="HH-h2">
            Please update your details regularly regarding the availability of
            various medical facilities at your Hospital to avoid any
            inconvenience to the patients.
          </p>
        </div>
      </div>
    </div>
     </div>
</template>
<script>
import HospitalSide from "./HospitalSide.vue"
export default{
    name:"HomeHosp",
    components:{
        HospitalSide
    },
    data(){
        return{
            name:localStorage.getItem("HospitalData")
        }
    }
}
</script>
<style scoped>
.right{
    margin-left: 20rem;
}
.HH-Container {
  padding-top: 2rem;
  font-family: Montserrat, sans-serif;
  font-style: normal;
  color: #364863;
}
.welcome-img {
  height: 5.6rem;
  width: auto;
  padding-right: 2.5rem;
}
.HH-h1 {
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.2rem;
  letter-spacing: 0.03em;
  margin: 0%;
  width: 90%;
}
.HH-h2 {
  max-width: 70%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: 0.05em;
  margin: 0%;
  padding-top: 1rem;
}
</style>