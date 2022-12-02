<template>
  <div className="DonorCard" v-for="items in list" :key="items.DonorName">
    <p className="DonorName">{{items.DonorName}}</p>
    <p><font-awesome-icon icon="fa-solid fa-address-book" /> {{items.City}}, {{items.State}}</p>
    <p v-if="type==='bed'"><font-awesome-icon icon="fa-solid fa-bed" />{{ items.NoOfBed+"  Bed Space Aavilable" }}</p>
    <p v-else><font-awesome-icon icon="fa-solid fa-droplet" />{{items.BloodType}}</p>
    <p>{{items.type}}</p>
    <p className="DonorContact"><font-awesome-icon icon="fa-solid fa-phone" /> {{items.Numbers}}</p>
  </div>
</template>
<script>
export default {
  name: "DonorCard",
  props:{
    list:Array,
    type:String
  }
};
</script>
<style scoped>
.DonorCard {
  width: 32vw;
  min-height: 12.3rem;
  margin: 2rem 1rem;
  background: #ffffff;
  border: 1px solid #e6eaee;
  box-sizing: border-box;
  border-radius: 1rem;
  padding: 1.5rem 1.7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  color: #364863;
  letter-spacing: 0.03em;
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.2rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.08), 0px 1px 6px rgba(0, 0, 0, 0.06);
}
.DonorCard p {
  margin: 0%;
  padding-top: 1rem;
  display: flex;
  text-transform: capitalize;
}

.DonorCard svg {
  padding-right: 0.5rem;
}

.DonorName {
  padding-top: 0% !important;
  font-size: 1.5rem;
  line-height: 1.8rem;
  letter-spacing: 0.03em;
}

.DonorCard:hover {
  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.12);
  transform: translateY(-5px);
}

@media (max-width: 700px) {
  .DonorCard {
    width: 85vw;
  }
}
</style>