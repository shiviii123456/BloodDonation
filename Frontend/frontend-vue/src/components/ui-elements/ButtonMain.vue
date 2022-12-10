<template>
<button type="button" class="btn">{{btnName}}</button>
</template>
<script>
  export default{
    name:"ButtonMain",
    props:{
      btnName:String
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
 button{
    text-decoration: none;
    border: 2px solid #fff;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 0.5rem 1.5rem;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 1.2rem;
    letter-spacing: .04em;
    color: #fff;
    transition: all .3s ease-in-out;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
 }
@media(max-width:435px){
  button{
      font-size: 0.9rem;
       padding: 0.3rem 1rem;
  }
}
</style>