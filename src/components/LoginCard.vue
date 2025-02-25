<template>
   <v-row class="bg-grey-lighten-1 h-100 mx-auto">
    
      <v-col cols="12">
     
     <v-img style="width: 100%;border-radius: 10px;margin: auto;" src="../../public/images/51426-big.jpeg"/>
  

 <v-row>
  
     <v-col cols="12">
      <header class="text-white bg-header text-center">
      <h2 class="text-right font-weight-bold mr-1">ایزی بیمه</h2>
      <h3>دیدار،برای همه مردم ایران</h3>
    </header>
     <v-card elavation="8"
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
    
     <v-row>
     <v-container>
         <v-col  cols="12">
         <PrimaryButton class="w-100 font-weight-bold text-subtitle-1 " color="blue"> <RouterLink to="/SecurityPage">ادامه</RouterLink> </PrimaryButton>
     </v-col>
     </v-container>
 </v-row>
   </v-card>
   </v-col>

 </v-row>
 
 </v-col>
    
   </v-row>
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
  /* border-radius: 90px; */
  padding: 5px;
  height: 68px;
  font-weight: bolder;
  border-radius: 27px;

}
.top-manual-card{
  border-radius: 6px;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  min-width: max-content;
  width:100%;
}
.card-container{
  width:100%;
  border-radius: 18px;
  height: 70vh;
  padding: 22px;
  border: 3px solid #d2d2d2;
}
.mobile-input{
  margin-bottom:47px !important;
}
.entrance-btn{
    padding: 10px 120px;
}
</style>