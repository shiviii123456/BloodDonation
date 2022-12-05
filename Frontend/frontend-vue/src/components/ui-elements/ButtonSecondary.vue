<template>
<button type="button" class="btn">{{btn}}</button>
</template>
<script>
  export default{
    name:"ButtonSeconday",
    props:{
        btn:String,
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
 button{
    text-decoration: none;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.8rem 1.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.2rem;
    letter-spacing: .04em;
    background: #FA575C;
    color: white;
    /* color: #FA575C; */
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    margin:1rem;
 }
 button:hover{
  border: 2px solid #FA575C;
 }
</style>