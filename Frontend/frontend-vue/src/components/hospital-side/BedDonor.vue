<template>
  <HospitalSide />
  <div class="right">
    <div className="DL-Container">
      <DonorCard :list="list" :type="type" />
    </div>
  </div>
</template>
<script>
import HospitalSide from "./HospitalSide.vue";
import DonorCard from "../ui-elements/DonorCard.vue";
import axios from "axios";
import baseurl from '@/baseurl';
export default {
  name: "BedDonor",
  components: {
    HospitalSide,
    DonorCard,
  },
  data() {
    return {
      list: [],
      type: "bed",
    };
  },
  async mounted() {
    try {
      let result = await axios.get(
        baseurl+"/Donation/GetBedDonorList",{ headers: {"authorization" : `Bearer ${localStorage.getItem("token")}`} }
      );
      if (result.data.length > 0) this.list = result.data;
      console.warn(result.data);
    } catch (e) {
      console.log(e);
      this.$router.push("/login");
    }
  },
};
</script>
<style scoped>
.right {
  margin-left: 25rem;
  margin-top: 5rem;
}
.DL-Container {
  display: flex;
  flex-wrap: wrap;
}
</style>
