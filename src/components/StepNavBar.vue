<template>
<v-toolbar class="bg-white elevation-4 py-3">
    <v-img   class="step-nav-icon w-25"    src="../../icons/umbrella.png"
    ></v-img>
    <v-toolbar-title class="step-title"><h2>ایزی بیمه</h2></v-toolbar-title>
      <v-spacer></v-spacer>
      <PrimaryButton class="bg-blue-darken-1  font-weight-thin" > <router-link to="/"><v-icon class="login-icon text-white">mdi-login</v-icon></router-link></PrimaryButton>
    </v-toolbar>
</template>

<script>
export default{
    data(){
        return{

        }
    } ,
}
</script>

<style scoped >
*{
    margin: 0;
    padding: 0;
}
.step-nav-icon{
    width: 8px !important;
}
.login-icon{
    font-size: 32px;
}
</style>