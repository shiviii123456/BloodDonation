<template>
    <div class="wrapper-hospital">
    <div className="HospitalCard-Container" v-for="items in list" :key="items.contact">
      <div className="HospitalCard-Details">
        <div className="HN-container">
          <p className="hospitalName"> <font-awesome-icon icon="fa-solid fa-hospital" />{{items.HospitalName}}</p>
          <p className="location">
           <font-awesome-icon icon="fa-solid fa-address-book" /> {{items.Address}}
          </p>
        </div>
        <p>
         <font-awesome-icon icon="fa-solid fa-bed" />  {{items.Bedavailability}}
        </p>
        <p>
        <font-awesome-icon icon="fa-solid fa-droplet" /> {{items.Bloodavailability}}
        </p>
        <p className="contact">
           <font-awesome-icon icon="fa-solid fa-contact-book" /> {{items.Contact}}
        </p>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"CardsHospital",
    props:{
       list:Array
    }
}
</script>
<style scoped>
.wrapper-hospital{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.HospitalCard-Container {
  min-width: 35vw;
  min-height: 12.3rem;
  margin: 2rem 1rem;
  background: #ffffff;
  border: 1px solid #e6eaee;
  box-sizing: border-box;
  border-radius: 1rem;
  padding: 1.5rem 1.7rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: #364863;
  letter-spacing: 0.03em;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  border: 3px solid #FA575C;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08), 0px 1px 6px rgba(0, 0, 0, 0.06);
}
.HospitalCard-Container:hover {
  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.12);
  transform: translateY(-5px);
}
.HospitalCard-Details svg {
  font-size: 1 rem;
  padding-right: 0.5rem;
}
.HN-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.hospitalName {
  font-size: 1.5rem !important;
  line-height: 1.6rem !important;
  padding-top: 0% !important;
}
.location {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  padding-top: 0% !important;
  width: 40%;
}
.contact {
  position: absolute;
  left: 1.7rem;
  bottom: 1rem;
}
.HospitalCard-Details p {
  margin: 0%;
  padding-top: 1rem;
  font-size: 1rem;
  line-height: 1.1rem;
  display: flex;
}
@media (max-width: 700px) {
  .HospitalCard-Container {
    width: 90vw;
  }
}

@media (max-width: 425px) {
  .location {
    position: relative;
    width: 100%;
    margin-left: 1.5rem !important;
    margin-bottom: 1rem !important;
  }
}
</style>