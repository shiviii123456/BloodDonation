<template>
  <div className="LoaderContainer">
    <div className="loader-bg">
      <img src="../../assets/images/blood.png" className="loader" alt="spinner" />
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingVue"
};
</script>
<style scoped>
.LoaderContainer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 49;
  top: 0%;
  left: 0%;
  overflow: hidden;
}

.loader-bg {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(54, 72, 99, 0.4);
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loader {
  height: 10rem;
  width: auto;
  position: fixed;
  background-attachment: fixed;
}
</style>
