<template>
  <sidebar-menu :menu="menu" />
</template>
<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
export default {
  name: "HospitalSide",
  data() {
    return {
      menu: [
        {
          header: "Youth For Blood",
          hiddenOnCollapse: true,
        },
        {
          href: "/home-hosp",
          title: "Home",
        },
        {
          href: "/bed-donors",
          title: "Bed Donors",
        },
        {
          href: "/blood-donors",
          title: "Blood Donors",
        },
        {
          href: "/editDetails",
          title: "Edit Details",
        },
        {
          href: "/logout",
          title: "Logout",
        },
      ],
    };
  },
  components: {
    SidebarMenu,
  },
};
</script>
<style scoped>

</style>