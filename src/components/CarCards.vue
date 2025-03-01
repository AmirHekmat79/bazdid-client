<template>
    <v-container class="mx-auto">
   <v-row>
    <v-progress-circular
      :model-value="value"
      :rotate="360"
      :size="100"
      :width="15"
      color="teal"
      class="mx-auto"
    >
      {{ value }}
    </v-progress-circular>

     <v-col
       cols="12"
       class="mx-auto"
       v-for="(item , index) in items"
       :key="index"
      :ref="`card-${index}`"
     >
     <v-card elavation="8" class="card-container h-auto"  >
          <div class="v-row justify-space-between   align-center">
            <!-- <img class="card-img" src="../../public/images/images_1662884527.jpg"/> -->
            <img
            :src="item.imageUrl ? item.imageUrl : item.imageBaseUrl "
            ref="previewImgElement"
            class="preview-image"
            aspect-ratio="1"
          />
          
          <SingleImage
         v-show="!item.imageUrl"
           class="uploader"
           ref="fileInputs"
          accept="image/*"
          label="عکس خودرو"
          @change="(event) => onFileChange(event, index)"
          :rules="[checkFileSize('file')]"
          
        ></SingleImage>
      
        <v-card-text>
           <h2 class="card-text">{{item.title}}</h2>
          </v-card-text>
          </div>
          <v-card-actions class="mt-4 mr-auto card-actions-container  w-50">
            <SecondaryButton @click="triggerFileInput(index)" ref="addImageBtn"  :disabled="item.imageUrl"  class="text-black bg-info modal-btn mx-auto"> افزودن عکس </SecondaryButton>
          </v-card-actions>
        </v-card>
     </v-col>
   </v-row>
 </v-container>
 </template>
 
 <script>
import { FileSize } from "../utils/filter";
export default {
   data() {
   return {
    items : [
        {id : 1 , title : 'جلو و پلاک' , imageUrl: null ,imageBaseUrl : '../../public/images/frontSide.jpg'},
        {id : 2 , title : 'عقب و پلاک' , imageUrl: null ,imageBaseUrl : '../../public/images/backSide.webp'},
        {id : 3 , title : 'جلو و راست' , imageUrl: null ,imageBaseUrl : '../../public/images/rightSide.jpg'},
    ],
    file: null,
    imageUrl: null,
    interval: {},
    value: 30,
   };
 },
 beforeUnmount () {
      clearInterval(this.interval);
    },
 
 mounted(){
  this.startCountdown();
 }
,
 methods: {
  startCountdown() {
      this.interval = setInterval(() => {
        if (this.value > 0) {
          this.value--; 
        } else {
          clearInterval(this.interval); 
          this.$router.go(0);
        }
      }, 1000);
    },

  onFileChange(event , index) {

    const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.items[index].file = selectedFile;
        this.items[index].imageUrl = URL.createObjectURL(selectedFile);
      }
     
    },
    triggerFileInput(index) {
      const fileInput = this.$refs.fileInputs[index];
      if (fileInput) {
        fileInput.click();
       
      } else if( this.$refs.previewImgElement[index].src == this.items[index].imageUrl) {
        this.$refs.previewImgElement[index].src = '../../public/images/Page-1.png';
      }
     else {
      console.error(`File input for index ${index} is undefined.`);
     }
    },
    checkFileSize(valueName) {
      console.log(valueName);
      return FileSize(valueName, 2); //2Mg
    },
 
 
 },

};
 </script>
<style scoped>
.uploader{
  visibility: hidden;
}
.v-progress-circular {
  transition: all 1s linear;
}
.upload-card {
  max-width: 30px;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.file-input {
  margin-bottom: 20px;
  border: 3px dashed #929191 !important;
}

.preview-image {
  border-radius: 15px;
  margin-top: 10px;
  width: 51%;
}
.card-container{
  background: #fffffd;
  border-radius: 20px;
  border-bottom-left-radius: 0px;
  padding: 16px;
  border: 2px solid #d2d2d2;
}
.card-actions-container{
  background: #fff;
  border-radius: 5px;
  margin: 2px;
}
.card-text{
  font-size: 17px;
  color: #6a6969;
}
.card-img{
  width: 51%;
  margin: 20px 3px;
  border-radius: 10px;
}
.image-baseUrl{
  width:44%;
  border-radius: 6px;
}
.scroll-animation {
  transform: translateY(-100%);
}
</style>