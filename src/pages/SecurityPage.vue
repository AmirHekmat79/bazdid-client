<template>
    <div class="mx-auto login-card">
      <header class="text-white bg-header text-center">
      <h2 class="text-right font-weight-bold">ایزی بیمه</h2>
      <h3>دیدار،برای همه مردم ایران</h3>
      <v-card
       class="card-container text-center"
            title="کد دریافتی از طریق پیامک را وارد کنید"
            elevation="16"
        >
        <TextInput
        label="کد امنیتی"
        v-model="numericValue"
        @input="applyNumericFilter('numericValue')"
        class="mobile-input"
    />
      <PrimaryButton class="entrance-btn"><router-link to="/FirstStep">ورود به اپلیکیشن</router-link></PrimaryButton>
    </v-card>
     </header>
    </div>
  </template>
  
  <script>
 import {
  numericOnly,
} from "../utils/filter";

export default {
  data() {
    return {
      numericValue: "",
    };
  },
  methods: {
    applyNumericFilter(valueName) {
      this[valueName] = numericOnly(this[valueName]);
    },

  },
};
  </script>
<style scoped>
.login-card{
  background-image: url(../../public/images/images_1662884527.jpg);
  height: 100vh;
  background-position: center;
  /* background-repeat: no-repeat; */
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.bg-header{
  background: #2e2e2e;
  border-radius: 90px;
  padding: 5px;
  height: 68px;
  font-weight: bolder;
}
.card-container{
  width:100vw;
  border-radius: 18px;
  height: 41vh;
  padding: 22px;
}
.mobile-input{
  margin-bottom: 71px !important;
}
.entrance-btn{
    padding: 10px 120px;
}
</style>