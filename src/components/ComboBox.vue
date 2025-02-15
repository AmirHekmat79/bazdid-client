<template>
  <ComboBox
    label="کمبو باکس"
    :items="itemsTest"
    :rules="[checkRequired('singleSelect')]"
    v-model="singleSelect"
  ></ComboBox>
  <MultiComboBox
    label="مولتی کمبو باکس"
    :items="itemsTest"
    :rules="[checkRequired('multiSelect')]"
    v-model="multiSelect"
  ></MultiComboBox>
</template>

<script>
import { required } from "../utils/filter";
export default {
  methods: {
    checkRequired(valueName) {
      return required(this[valueName]);
    },
  },
  data() {
    return {
      multiSelect: [],
      singleSelect: "",
      itemsTest: [
        {
          Title: "اردبيل",
          Id: "24",
        },
        {
          Title: "اصفهان",
          Id: "10",
        },
        {
          Title: "البرز",
          Id: "30",
        },
        {
          Title: "ايلام",
          Id: "16",
        },
        {
          Title: "آذربايجان شرقی",
          Id: "03",
        },
        {
          Title: "آذربايجان غربی",
          Id: "04",
        },
        {
          Title: "بوشهر",
          Id: "18",
        },
        {
          Title: "تهران",
          Id: "23",
        },
        {
          Title: "چهارمحال وبختياری",
          Id: "14",
        },
        {
          Title: "خراسان جنوبی",
          Id: "29",
        },
        {
          Title: "خراسان رضوی",
          Id: "09",
        },
        {
          Title: "خراسان شمالی",
          Id: "28",
        },
        {
          Title: "خوزستان",
          Id: "06",
        },
        {
          Title: "زنجان",
          Id: "19",
        },
        {
          Title: "سمنان",
          Id: "20",
        },
        {
          Title: "سيستان وبلوچستان",
          Id: "11",
        },
        {
          Title: "فارس",
          Id: "07",
        },
        {
          Title: "قزوين",
          Id: "26",
        },
        {
          Title: "قم",
          Id: "25",
        },
        {
          Title: "كردستان",
          Id: "12",
        },
        {
          Title: "كرمان",
          Id: "08",
        },
        {
          Title: "كهگيلويه وبويراحمد",
          Id: "17",
        },
        {
          Title: "کرمانشاه",
          Id: "05",
        },
        {
          Title: "گلستان",
          Id: "27",
        },
        {
          Title: "گيلان",
          Id: "01",
        },
        {
          Title: "لرستان",
          Id: "15",
        },
        {
          Title: "مازندران",
          Id: "02",
        },
        {
          Title: "مرکزی",
          Id: "00",
        },
        {
          Title: "هرمزگان",
          Id: "22",
        },
        {
          Title: "همدان",
          Id: "13",
        },
        {
          Title: "يزد",
          Id: "21",
        },
      ],
    };
  },
};
</script>
