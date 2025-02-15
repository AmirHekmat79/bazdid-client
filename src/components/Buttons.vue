<template>
  <PrimaryButton>PrimaryButton </PrimaryButton>
  <PrimaryButton append-icon="mdi-arrow-left"
    >PrimaryButton(append-icon)
  </PrimaryButton>
  <PrimaryButton prepend-icon="mdi-arrow-left"
    >PrimaryButton(prepend-icon)
  </PrimaryButton>
  <span class="text-primary">PrimaryButton(icon)</span>
  <PrimaryButton icon="mdi-arrow-left" />
  <PrimaryButton append-icon="mdi-arrow-left" stacked
    >PrimaryButton(append-icon)
  </PrimaryButton>
  <PrimaryButton prepend-icon="mdi-arrow-left" stacked
    >PrimaryButton(prepend-icon)
  </PrimaryButton>
  <PrimaryButton :loading="loading" @click="load"
    >PrimaryButton(Loading)
  </PrimaryButton>
  <PrimaryButton append-icon="mdi-arrow-left" prepend-icon="mdi-arrow-left">
    <template v-slot:prepend>
      <v-icon color="success"></v-icon>
    </template>
    PrimaryButton(append-icon) (prepend-icon)(Color)
    <template v-slot:append>
      <v-icon color="warning"></v-icon>
    </template>
  </PrimaryButton>
  <br />
  <SecondaryButton>SecondaryButton </SecondaryButton>
  <SecondaryButton append-icon="mdi-arrow-left"
    >SecondaryButton(append-icon)
  </SecondaryButton>
  <SecondaryButton prepend-icon="mdi-arrow-left"
    >SecondaryButton(prepend-icon)
  </SecondaryButton>
  <span class="text-primary">SecondaryButton(icon)</span
  ><SecondaryButton icon="mdi-arrow-left" />
  <SecondaryButton append-icon="mdi-arrow-left" stacked
    >SecondaryButton(append-icon)
  </SecondaryButton>
  <SecondaryButton prepend-icon="mdi-arrow-left" stacked
    >SecondaryButton(prepend-icon)
  </SecondaryButton>
  <SecondaryButton :loading="loading" @click="load"
    >SecondaryButton(Loading)
  </SecondaryButton>
  <SecondaryButton append-icon="mdi-arrow-left" prepend-icon="mdi-arrow-left">
    <template v-slot:prepend>
      <v-icon color="success"></v-icon>
    </template>
    SecondaryButton(append-icon) (prepend-icon)(Color)
    <template v-slot:append>
      <v-icon color="warning"></v-icon>
    </template>
  </SecondaryButton>
  <br />
  <TertiaryButtin>TertiaryButtin</TertiaryButtin>
  <TertiaryButtin append-icon="mdi-arrow-left"
    >TertiaryButtin(append-icon)</TertiaryButtin
  >
  <TertiaryButtin prepend-icon="mdi-arrow-left"
    >TertiaryButtin(prepend-icon)</TertiaryButtin
  >
  <span class="text-primary">SecondaryButton(icon)</span
  ><TertiaryButtin icon="mdi-arrow-left" />
  <TertiaryButtin append-icon="mdi-arrow-left" stacked
    >TertiaryButtin(append-icon)</TertiaryButtin
  >
  <TertiaryButtin prepend-icon="mdi-arrow-left" stacked
    >TertiaryButtin(prepend-icon)</TertiaryButtin
  >
  <TertiaryButtin :loading="loading" @click="load"
    >TertiaryButtin(Loading)</TertiaryButtin
  >
  <TertiaryButtin append-icon="mdi-arrow-left" prepend-icon="mdi-arrow-left">
    <template v-slot:prepend>
      <v-icon color="success"></v-icon>
    </template>
    TertiaryButtin(append-icon) (prepend-icon)(Color)
    <template v-slot:append>
      <v-icon color="warning"></v-icon>
    </template>
  </TertiaryButtin>
</template>

<script>
export default {
  data: () => ({ loading: false }),

  methods: {
    load() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 1500);
    },
  },
};
</script>
