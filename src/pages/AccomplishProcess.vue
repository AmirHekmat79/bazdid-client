<template>
    <div class="mx-auto first-step text-center text-amber">
        <StepNavBar/>
    
      <div class="step-card-container text-black text-center">
        <h3 class="font-weight-bold">ثبت اطلاعات لوازم جانبی خودرو</h3>
        <h4 class="sub-notice-text">قبل از تصویربرداری راهنمای زیر را مشاهده کنید</h4>
      </div>
  
      <v-row>
      <v-col
        cols="11"
        class="mx-auto"
      >
       <v-card elavation="12" class="card-container">
        <div class="v-row justify-space-around align-center">
            <h3 class="font-weight-bold">سانروف(فابریک)</h3>
            <!-- <SecondaryButton>حذف این گزینه</SecondaryButton> -->
            <v-card-actions>
                <PrimaryButton color="orange" class="mx-auto text-white text-subtitle-1 text-center">حذف این گزینه</PrimaryButton>

            </v-card-actions>
        </div>
        
        <div class="">
         <v-container>
            <img
            :src="imageUrl"
            class="preview-image"
            aspect-ratio="1"
          />
          
          <div class="uploader-container py-1 mb-10">
            <SingleImage
            id="dashed-border"
            v-show="!imageUrl"
            ref="fileInputs"
            accept="image/*"
            label="افزودن تصویر"
            @change="(event) => onFileChange(event)"
            :rules="[checkFileSize('file')]"
            ></SingleImage>
          </div>

            <v-textarea
          label="توضیحات"
          row-height="25"
          rows="3"
          variant="outlined"
          auto-grow
        ></v-textarea>
        <TextInput
            label="قیمت"
          v-model="priceValue"
          @input="applyPriceFilter('priceValue')"
        />
         </v-container>
        </div>
       </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        cols="11"
        class="mx-auto"
      >
         <v-container>
            <v-expansion-panels>
            <v-expansion-panel>
                <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
                <h3>گارد جلو</h3>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <img
                    :src="secondImageUrl"
                    class="preview-image"
                    aspect-ratio="1"
                />
                <div class="uploader-container py-1 mb-10">
                    <SingleImage
                    id="dashed-border"
                    v-show="!secondImageUrl"
                    ref="secondFileInputs"
                    accept="image/*"
                    label="افزودن تصویر"
                    @change="(event) => onSecondFileChange(event)"
                    :rules="[checkSecondFileSize('file')]"
                    ></SingleImage>
                </div>
                </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels>
         </v-container>
      </v-col>
    </v-row>
    <v-row>
        <v-container>
            <v-col  cols="12">
            <PrimaryButton class="w-100 font-weight-bold text-subtitle-1" color="blue">تایید و ارسال اطلاعات</PrimaryButton>
        </v-col>
        </v-container>
    </v-row>
    </div>
  </template>
  
  <script>
import StepNavBar from '@/components/StepNavBar.vue';
import NoticeStepCard from '@/components/NoticeStepCard.vue';
import { FileSize } from "../utils/filter";
import {
  priceFilter,
} from "../utils/filter";

export default {
  components:{
    StepNavBar , 
    NoticeStepCard ,
    
  },
  data() {
    return {
     
    file: null,
    imageUrl: null,
    secondImageUrl:null ,
    priceValue: "",

    };
  },
  methods: {

onFileChange(event) {

  const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.imageUrl = URL.createObjectURL(selectedFile);
    }
  },
onSecondFileChange(event) {

  const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.file = selectedFile;
      this.secondImageUrl= URL.createObjectURL(selectedFile);
    }
  },
 
  checkFileSize(valueName) {
    console.log(valueName);
    return FileSize(valueName, 2); //2Mg
  },
  checkSecondFileSize(valueName) {
    console.log(valueName);
    return FileSize(valueName, 2); //2Mg
  },
  applyPriceFilter(valueName) {
      this[valueName] = priceFilter(this[valueName]);
    },
},
};
  </script>
<style scoped>

.step-card-container{
    margin-top: 20px;
    line-height: 60px ;
}
.sub-notice-text{
    font-size: 20px;
}
.preview-image {
  border-radius: 15px;
  margin-top: 10px;
  width: 50%;
}
.card-container{
  background: #fff;
  border-radius: 3px;
  border: 3px solid #eee;
  border-bottom-left-radius: 0px;
  padding: 16px;
}

</style>