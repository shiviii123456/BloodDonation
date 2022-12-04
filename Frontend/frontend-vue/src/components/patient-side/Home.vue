<template>
  <div class="home-page">
    <Navbar :btnName="btnName" />
    <h1>Find Nearest blood donation Centers</h1>
    <div class="input-group">
      <div class="form-outline">
        <input
          type="search"
          id="form1"
          class="form-control"
          v-model="inputData"
          placeholder="Enter city to search blood donation centers"
        />
      </div>
      <button type="button" class="btn" v-on:click="getData(inputData)">
        <font-awesome-icon icon="fa-solid fa-search-location" />
      </button>
    </div>
    <Cards :list="list" />
  </div>
</template>
<script>
import Navbar from "../ui-elements/Navbar.vue";
import axios from "axios";
import Cards from "../ui-elements/Cards.vue";
import baseurl from "../../baseurl.js"
export default {
  name: "HomePage",
  components: {
    Navbar,
    Cards,
  },
  data() {
    return {
      list: [],
      inputData: "",
      btnName:"Become Volunteer"
    };
  },
  mounted() {
    // let result=await axios.get("http://localhost:8000/getAllHospital")
    axios
      .get(baseurl+"/getAllHospital")
      .then((response) => (this.list = response.data.List));
  },
  methods: {
   async getData(inputData) {
      console.warn(inputData);
       if(!inputData){
        console.log("Enter Valid Details")
       }
       else{
       let result=await axios.get(baseurl+"/getAllHospital/"+inputData)
       if(result.data.List.length==0) console.warn("no data")
       else console.log(result.data.List)
       this.list=result.data.List
       this.inputData=""
       }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap");
h1 {
  text-align: center;
  margin: 3rem 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
}
.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
#form1 {
  margin: auto;
  width: 38vw;
  border-radius: 1rem 0 0 1rem;
  height: 3.5rem;
  background: #eef0f4;
  border: none;
  padding-left: 1rem;
  outline: none;
}
#form1:focus {
  outline: none;
  border: 1px solid #fa575c;
}
button {
  height: 3.5rem;
  background: #fa575c !important;
  color: white;
}
</style>
