<template>
<v-toolbar class="bg-white elevation-4 py-3">
    <v-img   class="step-nav-icon"    src="../../icons/umbrella.png"
    ></v-img>
    <v-toolbar-title class="step-title"><h3>ایزی بیمه</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <PrimaryButton class="bg-blue-darken-1" > <v-icon class="login-icon">mdi-login</v-icon></PrimaryButton>
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