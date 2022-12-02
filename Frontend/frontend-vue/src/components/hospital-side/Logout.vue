<script>
export default{
    name:"logoutOne",
   async mounted(){
        localStorage.removeItem("HospitalData")
        this.$router.push("/login");
    }
}
</script>
