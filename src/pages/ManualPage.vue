<template>
  <v-container class="mx-auto">
    <v-row>
      <v-col cols="12" class="mx-auto">
        <v-img
          class="capture-img"
          src="../../public/images/51426-big.jpeg"
        ></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mx-auto">
        <v-card class="bg-black top-manual-card">
          <v-card-text class="text-center"
            ><h2>تصویربرداری از جلو و پلاک</h2></v-card-text
          >
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mx-auto">
        <v-card class="bottom-manual-card">
          <v-card-text>
            <h2 class="text-right text-justify mx-auto subtext">
              <p>
                زاویه مناسب: دوربین گوشی را در ارتفاع چشم و روبروی خودرو قرار
                دهید اطمینان حاصل کنید که پلاک و جلوی خودرو کاملا در کادر باشد.
              </p>
              <p>
                در محیط های روشن یا در روز عکس بگیرید. از بازتاب نور مستقیم روی
                پلاک جلوگیری کنید .
              </p>
              <p>
                ثبات دست: گوشی را ثابت نگه دارید یا از سه پایه استفاده کنید تا
                تصویر واضح باشد.
              </p>
              <p>
                مرکزیت پلاک: پلاک را در مرکز کادر قرار دهید تا سیستم آن را به
                درستی شناسایی کند.
              </p>
              <p>
                فشار دکمه:دکمه عکاسی را فشار دهید و منتظر بمانید تا پردازش تصویر
                تکمیل شود.
              </p>
            </h2>
          </v-card-text>
          <!-- <v-card-actions class="mt-16">
        <PrimaryButton class="mx-auto text-center">گرفتن عکس</PrimaryButton>
       </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.top-manual-card {
  border-radius: 6px;
  border-top-left-radius: 90px;
  border-top-right-radius: 90px;
  min-width: max-content;
  width: 100%;
}
.bottom-manual-card {
  border-radius: 6px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.subtext {
  line-height: 3rem;
}
.v-btn.v-btn--density-default {
  width: 100%;
  font-size: 20px;
}
.capture-img {
  border-radius: 6px;
}
</style>
