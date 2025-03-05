<template>
  <v-row class="bg-grey-lighten-1 h-100 mx-auto">
    <v-col cols="12">
      <v-img
        style="width: 100%; border-radius: 10px; margin: auto;"
        src="../../public/images/car.png"
      />

      <v-row>
        <v-col cols="12">
          <header class="text-white bg-header text-center">
            <h2 class="text-right font-weight-bold mr-1">ایزی بیمه</h2>
            <h3>دیدار،برای همه مردم ایران</h3>
          </header>
          <v-card
            elavation="8"
            class="card-container text-center"
            subtitle="ورود به اپ بازدید"
            title="جهت ورود  کد امنیتی  را وارد کنید"
            elevation="16"
          >
            <TextInput
              label="فقط عدد وارد کنید"
              v-model="numericValue"
              @input="applyNumericFilter('numericValue')"
              :rules="[rules]"
            />

            <v-row>
              <v-container>
                <v-col cols="12">
                  <PrimaryButton
                    class="w-100 font-weight-bold text-subtitle-1"
                    color="blue"
                    @click="handleNavigation"
                    >ورود به اپلیکیشن
                  </PrimaryButton>
                </v-col>
              </v-container>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { RouterLink } from "vue-router";
import { numericOnly } from "../utils/filter";

export default {
  data() {
    return {
      numericValue: "",
    };
  },
  methods: {
    applyNumericFilter(valueName) {
      this[valueName] = numericOnly(this[valueName]);
    },
    handleNavigation() {
      if (this.numericValue) {
        this.$router.push("/FirstStep");
      }
    },
  },
};
</script>
<style scoped>
.bg-header {
  background: #2e2e2e;
  /* border-radius: 90px; */
  padding: 5px;
  height: 68px;
  font-weight: bolder;
  border-radius: 27px;
}
.top-manual-card {
  border-radius: 6px;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  min-width: max-content;
  width: 100%;
}
.card-container {
  width: 100%;
  height: 70vh;
  background: #fff;
  border-radius: 15px;
  border: 1px solid #ddd;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.mobile-input {
  margin-bottom: 47px !important;
}
.entrance-btn {
  padding: 10px 120px;
}
</style>
