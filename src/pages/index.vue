<template>
 <div class="login-card">
     <LoginCard />
 </div>
</template>
<script>
import LoginCard from '@/components/LoginCard.vue';
export default{
  components:{
    LoginCard
  }
}
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
</style>