<template>
  <TextInput
    label="فقط حروف وارد کنید"
    v-model="alphabetValue"
    @input="applyAlphabetFilter('alphabetValue')"
  />
  <TextInput
    label="فقط عدد وارد کنید"
    v-model="numericValue"
    @input="applyNumericFilter('numericValue')"
  />
  <TextInput
    label="فقط عدد و حرف وارد کنید"
    v-model="AlphaNumericValue"
    @input="applyAlphaNumericOnlyFilter('AlphaNumericValue')"
  />

  <TextInput
    label="فقط قیمت وارد کنید"
    v-model="priceValue"
    @input="applyPriceFilter('priceValue')"
  />

  <TextInputEn
    label="فقط حروف انگلیسی وارد کنید"
    v-model="alphabetValue"
    @input="applyAlphabetFilterEn('alphabetValue')"
  />

  <TextInputEn
    label="فقط حروف فارسی وارد کنید"
    v-model="alphabetValue"
    @input="applyAlphabetFilterFa('alphabetValue')"
  />
</template>

<script>
import {
  numericOnly,
  alphabetOnly,
  alphabetOnlyEn,
  alphabetOnlyFa,
  priceFilter,
  alphanumericOnly,
  prepareForServer,
} from "../utils/filter";

export default {
  data() {
    return {
      numericValue: "",
      alphabetValue: "",
      priceValue: "",
      AlphaNumericValue: "",
    };
  },
  methods: {
    prepareForServer(valueName) {
      prepareForServer(valueName);
    },
    applyNumericFilter(valueName) {
      this[valueName] = numericOnly(this[valueName]);
    },
    applyAlphabetFilter(valueName) {
      this[valueName] = alphabetOnly(this[valueName]);
    },
    applyAlphabetFilterFa(valueName) {
      this[valueName] = alphabetOnlyFa(this[valueName]);
    },
    applyAlphabetFilterEn(valueName) {
      console.log("jjjj");
      this[valueName] = alphabetOnlyEn(this[valueName]);
    },
    applyPriceFilter(valueName) {
      this[valueName] = priceFilter(this[valueName]);
    },
    applyAlphaNumericOnlyFilter(valueName) {
      this[valueName] = alphanumericOnly(this[valueName]);
    },
  },
};
</script>
