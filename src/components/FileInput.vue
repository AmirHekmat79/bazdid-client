<template>
  <SingleFile label="فایل تکی"></SingleFile>
  <MultiFile label="فایل چندتایی"></MultiFile>
  <SingleImage
    accept="image/*"
    label="فایل تکی"
    :rules="[checkFileSize('file')]"
  ></SingleImage>
  <MultiImage accept="image/*" label="فایل چندتایی"></MultiImage>
</template>

<script>
import { FileSize } from "../utils/filter";
export default {
  data() {
    return {
      file: "",
    };
  },
  methods: {
    checkFileSize(valueName) {
      console.log(valueName);
      return FileSize(valueName, 2); //2Mg
    },
  },
};
</script>
