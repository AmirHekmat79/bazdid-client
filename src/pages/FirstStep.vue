<template>
    <div class="mx-auto first-step text-center text-amber">
        <StepNavBar/>
        <StepsAccordion/>
      <div class="step-card-container">
        <NoticeStepCard/>
      </div>
      <CarCards/>
    </div>
  </template>
  
  <script>
import StepNavBar from '@/components/StepNavBar.vue';
import NoticeStepCard from '@/components/NoticeStepCard.vue';
import StepsAccordion from '@/components/StepsAccordion.vue';



export default {
  components:{
    StepNavBar , 
    NoticeStepCard ,
    StepsAccordion
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
.step-card-container{
    margin-top: 20px;
}
</style>