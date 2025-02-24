<template>
    <div class="mx-auto">
      <header class="text-white bg-header text-center">
      <h2 class="text-right font-weight-bold">ایزی بیمه</h2>
      <h3>دیدار،برای همه مردم ایران</h3>
      <v-card
       class="card-container text-center"
            subtitle="ورود به اپ بازدید"
            title="جهت ورود شماره همراه خود را وارد کنید"
            elevation="16"
        >
        <TextInput
        label="شماره موبایل"
        v-model="numericValue"
        @input="applyNumericFilter('numericValue')"
        class="mobile-input"
    />
      <PrimaryButton class="entrance-btn"> <RouterLink to="/SecurityPage">ادامه</RouterLink> </PrimaryButton>
    </v-card>
     </header>
    </div>
  </template>
  
  <script>
 import { RouterLink } from "vue-router";
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
  margin-bottom:47px !important;
}
.entrance-btn{
    padding: 10px 120px;
}
</style>