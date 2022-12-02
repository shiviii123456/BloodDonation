<script>
export default{
    name:"logoutOne",
   async mounted(){
        localStorage.removeItem("HospitalData")
         localStorage.removeItem("token")
          localStorage.removeItem("id")
        this.$router.push("/login");
    }
}
</script>
