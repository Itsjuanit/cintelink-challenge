<template>
  <v-container class="Backg content" grid-list-md text-center fluid>
    <LoginComp />
  </v-container>
</template>

<script>
import LoginComp from "../components/LoginComp.vue";
export default {
  components: {
    LoginComp,
  },
  name: "LoginPage",
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.Backg {
  background-image: url("../assets/FONDO1.jpg");
  height: 100vh;
  background-size: cover;
  @media (max-width: 425px) {
    .Backg {
      background-image: none;
      background-color: #fff;
    }
  }
  .content {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>