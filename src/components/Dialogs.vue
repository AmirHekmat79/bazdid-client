<template>
    <v-container class="mx-auto">
   <v-row>
     <v-col
       cols="12"
       class="mx-auto"
     >
     <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
            <v-expansion-panels>
        <v-expansion-panel
            title="عنوان مرحله اول"
            v-bind="activatorProps"
            class="text-info"
        >
        </v-expansion-panel>
        </v-expansion-panels>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="مراحل">
            <v-card-text :class="{'text-info': step === index + 1}">
                <v-stepper :items="items"  v-model="step" vertical>
                    <template v-slot:item.1>
                        <v-card title="مرحله اول" flat>تصویر برداری از خودرو</v-card>
                    </template>

                    <template v-slot:item.2>
                        <v-card title="مرحله دوم" flat>...</v-card>
                    </template>

                    <template v-slot:item.3>
                        <v-card title="تکمیل مشخصات" flat>...</v-card>
                    </template>
                    <template v-slot:item.4>
                        <v-card title="تایید و ارسال نهایی" flat>...</v-card>
                    </template>
                    <template v-slot:prev>
                        <v-btn @click="prevStep">قبلی</v-btn>
                           </template>
                         <template v-slot:next>
                            <v-btn @click="nextStep">بعدی</v-btn>
                         </template>             
                    </v-stepper>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
        </v-dialog>
     </v-col>
   </v-row>
 </v-container>
 </template>
 
 <script>


export default {
   data() {
    return {
        step: 1 ,
        items:['مرحله اول', 'مرحله دوم', 'تکمیل مشخصات', 'تایید و ارسال نهایی'],
    };
 },
 methods: {
    nextStep() {
            if (this.step < this.items.length) {
                this.step++;
            }
        },
        prevStep() {
            if (this.step > 1) {
                this.step--;
            }
        },

 },
};
 </script>
<style scoped>
.active-text{
    color:#2980b9 !important;
}
.v-expansion-panel{
    border-radius:10px; 
    border-bottom : 3px solid #2980b9;
    
}
</style>