<template>
  <v-toolbar
    class="row justify-space-between align-center bg-white elevation-4 py-3"
  >
    <img class="step-nav-icon" src="../../icons/umbrella.png" />
    <v-toolbar-title class="step-title text-center"
      ><h2 class="font-weight-bold text-info text-center">
        ایزی بیمه
      </h2></v-toolbar-title
    >

    <PrimaryButton class="font-weight-thin">
      <router-link to="/"
        ><v-icon class="login-icon text-white">mdi-login</v-icon></router-link
      ></PrimaryButton
    >
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.step-nav-icon {
  width: 14% !important;
}
.login-icon {
  font-size: 2rem !important;
}
</style>
