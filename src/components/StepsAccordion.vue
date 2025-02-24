<template>
    <v-container class="mx-auto">
   <v-row>
     <v-col
       cols="12"
       class="mx-auto"
     >
    <Dialogs/>
     </v-col>
   </v-row>
 </v-container>
 </template>
 
 <script>

import Dialogs from '@/components/Dialogs.vue';
export default {
  components:{
  Dialogs
 },
   data() {
   return {
     
     
   };
 },
 methods: {


 },

};
 </script>
<style scoped>

</style>