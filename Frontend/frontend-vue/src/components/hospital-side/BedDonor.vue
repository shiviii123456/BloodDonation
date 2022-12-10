<template>
  <LoadersVue v-if="loader" />
  <div v-else>
  <HospitalSide />
  <div class="right">
    <div className="DL-Container">
      <DonorCard :list="list" :type="type" />
    </div>
  </div>
  </div>
</template>
<script>
import LoadersVue from "../ui-elements/LoaderVue.vue"
import HospitalSide from "./HospitalSide.vue";
import DonorCard from "../ui-elements/DonorCard.vue";
import axios from "axios";
import baseurl from '@/baseurl';

export default {
  name: "BedDonor",
  components: {
    HospitalSide,
    DonorCard,
    LoadersVue
  },
  data() {
    return {
      list: [],
      type: "bed",
      loader:false
    };
  },
  async mounted() {
    try {
      this.loader=true
      let result = await axios.get(
        baseurl+"/Donation/GetBedDonorList",{ headers: {"authorization" : `Bearer ${localStorage.getItem("token")}`} }
      );
      if (result.data.length > 0) this.list = result.data;
      console.warn(result.data);
    } catch (e) {
      console.log(e);
      this.$router.push("/login");
    }
    this.loader=false
  },
};
</script>
<style scoped>
.right {
  margin-left: 25rem !important;
  margin-top: 5rem !important;
}
.DL-Container {
  display: flex;
  flex-wrap: wrap;
}
@media(max-width:830px){
  .right{
    margin: 5rem !important;
  }
}
</style>
