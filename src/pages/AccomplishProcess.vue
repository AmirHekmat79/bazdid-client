<template>
  <div class="mx-auto first-step text-center text-amber">
    <StepNavBar />

    <div class="step-card-container text-black text-center">
      <h3 class="font-weight-bold">ثبت اطلاعات لوازم جانبی خودرو</h3>
      <h4 class="sub-notice-text">
        در صورت وجود لوازم جانبی در خودرو مورد بازدید، از لیست زیر اطلاعات آن را
        وارد نمایید.
      </h4>
    </div>

    <v-row>
      <v-col cols="11" class="mx-auto">
        <MultiComboBox
          label="لوازم جانبی خودرو"
          :items="selectedItems"
          v-model="itemsModel"
          :rules="[checkRequired('selectedItems')]"
        ></MultiComboBox>
        <template v-if="itemsModel.length">
          <div v-for="(itemId, index) in itemsModel" :key="index">
            <v-card elevation="12" class="card-container my-8">
              <div class="v-row justify-space-around align-center">
                <h3 class="font-weight-bold">{{ getItemTitle(itemId) }}</h3>
                <v-card-actions>
                  <PrimaryButton
                    @click="deleteSpecificItem(index)"
                    color="orange"
                    class="mx-auto text-white text-subtitle-1 text-center"
                    >حذف این گزینه</PrimaryButton
                  >
                </v-card-actions>
              </div>

              <div class="">
                <v-container>
                  <img
                    :src="toolImages[itemId]"
                    class="preview-image"
                    aspect-ratio="1"
                    v-if="toolImages[itemId]"
                  />

                  <div class="uploader-container py-1 mb-10">
                    <SingleImage
                      id="dashed-border"
                      v-show="!toolImages[itemId]"
                      ref="fileInputs"
                      accept="image/*"
                      capture="camera"
                      label="افزودن تصویر"
                      @change="(event) => onFileChange(event, itemId)"
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
                    v-model="priceValues[itemId]"
                    @input="applyPriceFilter(itemId)"
                  />
                </v-container>
              </div>
            </v-card>
          </div>
        </template>
      </v-col>
    </v-row>

    <v-row>
      <v-container>
        <v-col cols="12">
          <PrimaryButton
            class="w-100 font-weight-bold text-subtitle-1"
            color="blue"
            >تایید و ارسال اطلاعات</PrimaryButton
          >
        </v-col>
      </v-container>
    </v-row>
  </div>
</template>

<script>
import StepNavBar from "@/components/StepNavBar.vue";
import { FileSize, priceFilter, required } from "../utils/filter";

export default {
  components: {
    StepNavBar,
  },
  data() {
    return {
      file: null,
      priceValues: {},
      itemsModel: [],
      selectedItems: [
        { Title: "سانروف(فابریک)", Id: 1 },
        { Title: "رینگ و لاستیک پهن", Id: 2 },
        { Title: "رکاب های بغل", Id: 3 },
        { Title: "زاپاس بند", Id: 4 },
        { Title: "رادیو پخش", Id: 5 },
        { Title: "بلندگو/باند", Id: 6 },
        { Title: "ساب", Id: 7 },
        { Title: "آمیلی فایر", Id: 8 },
        { Title: "نمایشگر", Id: 9 },
      ],

      toolImages: {},
    };
  },
  methods: {
    onFileChange(event, toolId) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        this.toolImages[toolId] = imageUrl;
      }
    },
    checkFileSize(valueName) {
      return FileSize(valueName, 2); // 2MB
    },
    checkRequired(valueName) {
      return required(this[valueName]);
    },
    applyPriceFilter(toolId) {
      this.priceValues[toolId] = priceFilter(this.priceValues[toolId]);
    },
    deleteSpecificItem(index) {
      const itemId = this.itemsModel[index];
      this.itemsModel.splice(index, 1);
      delete this.toolImages[itemId];
      delete this.priceValues[itemId];
    },
    getItemTitle(itemId) {
      const item = this.selectedItems.find((item) => item.Id === itemId);
      return item ? item.Title : "";
    },
  },
};
</script>

<style scoped>
.step-card-container {
  margin-top: 20px;
  line-height: 40px;
}
.sub-notice-text {
  font-size: 20px;
}
.preview-image {
  border-radius: 15px;
  margin-top: 10px;
  width: 50%;
}
.card-container {
  background: #fff;
  border-radius: 15px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.v-textarea {
  margin-top: 20px;
}
.v-textarea textarea {
  border-radius: 10px;
}
.v-textarea label {
  font-weight: bold;
}
</style>
