<template>
    <v-container class="mx-auto">
   <v-row>
     <v-col
       cols="12"
       class="mx-auto"
       v-for="(item , index) in items"
       :key="index"
     >
     
     <v-card elavation="8" class="card-container h-auto">
          <div class="v-row justify-space-between   align-center">
            <!-- <img class="card-img" src="../../public/images/images_1662884527.jpg"/> -->
      
          <SingleImage
          v-if="!(item.imageUrl)"
           ref="fileInputs"
          accept="image/*"
          label="عکس خودرو"
          @change="(event) => onFileChange(event, index)"
          :rules="[checkFileSize('file')]"
        ></SingleImage>
        <img
          v-if="item.imageUrl"
          :src="item.imageUrl"
          class="preview-image"
          aspect-ratio="1"
        />
        <v-card-text>
           <h2 class="card-text">{{item.title}}</h2>
          </v-card-text>
          </div>
          <v-card-actions class="mt-4 mr-auto card-actions-container  w-50">
            <SecondaryButton @click="triggerFileInput(index)" class="text-black modal-btn mx-auto"> افزودن عکس </SecondaryButton>
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
        {id : 1 , title : 'جلو و پلاک' , imageUrl: null},
        {id : 2 , title : 'عقب و پلاک' , imageUrl: null},
        {id : 3 , title : 'جلو و راست' , imageUrl: null},
    ],
    file: null,
    imageUrl: null,
     
   };
 },
 methods: {

  onFileChange(event , index) {
    const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.items[index].file = selectedFile;
        this.items[index].imageUrl = URL.createObjectURL(selectedFile);
      }
    },
    triggerFileInput(index) {
      this.$refs.fileInputs[index].click(); 
    },
    checkFileSize(valueName) {
      console.log(valueName);
      return FileSize(valueName, 2); //2Mg
    },
 
 },
};
 </script>
<style scoped>
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
  width: 50%;
}
.card-container{
  background: #eee;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  padding: 16px;
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
</style>