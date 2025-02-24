<template>
     <v-container class="mx-auto">
    <v-row>
      <v-col
        cols="12"
        class="mx-auto"
      >
        <v-card  color="surface-variant" class="card-container text-center">
          <v-card-text>
            <h3 class="card-text text-right">قبل از تصویر برداری راهنمای زیر را مشاهده کنید</h3>
          </v-card-text>
          <v-card-actions class="mt-4">
            <router-link to="/ManualPage"> <SecondaryButton class="text-white modal-btn ">راهنمای تصویربرداری از خودرو</SecondaryButton></router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </template>
  
  <script>

import { RouterLink } from 'vue-router';
export default {
    data() {
    return {
      
      
    };
  },
  methods: {
  showManual(){
    console.log('sdaad');
  }

  },
};
  </script>
<style scoped>
.card-container{
    /* background-image: url(../../public/images/51426-big.jpeg);
    background-size: cover;
    background-position: center; */
    border-radius:26px;
    height:22vh;
    
}
.card-text{
    width:290px;
    font-size:20px;
}

.modal-btn{
   padding:10px 90px;
   font-size:16px;
}
</style>