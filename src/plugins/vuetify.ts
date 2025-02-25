/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import { fa } from "vuetify/locale";
import { VBtn } from "vuetify/components/VBtn";
import { VCombobox } from "vuetify/components/VCombobox";
import { VTextField } from "vuetify/components/VTextField";
import { VCheckbox } from "vuetify/components/VCheckbox";
import { VDateInput } from "vuetify/labs/VDateInput";
import { VRadioGroup } from "vuetify/components/VRadioGroup";
import { VRadio } from "vuetify/components/VRadio";
import { VSwitch } from "vuetify/components/VSwitch";
import { VFileInput } from "vuetify/components/VFileInput";
import { VCarousel } from "vuetify/components/VCarousel";
import { VCarouselItem } from "vuetify/components/VCarousel";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

const Theme1: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#956FC0",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: "mdi", // This is already the default value - only for display purposes
  },
  locale: {
    locale: "fa",
  },
  theme: {
    defaultTheme: "Theme1",
    themes: {
      Theme1,
    },
  },
  aliases: {
    PrimaryButton: VBtn,
    SecondaryButton: VBtn,
    TertiaryButtin: VBtn,
    TextInput: VTextField,
    TextInputEn: VTextField,
    ComboBox: VCombobox,
    MultiComboBox: VCombobox,
    CheckBox: VCheckbox,
    DatePicker: VDateInput,
    RadioGroupColumn: VRadioGroup,
    RadioGroupRow: VRadioGroup,
    RadioButton: VRadio,
    Switch: VSwitch,
    SingleFile: VFileInput,
    MultiFile: VFileInput,
    SingleImage: VFileInput,
    MultiImage: VFileInput,
    Slider: VCarousel,
    NoArrowSlider: VCarousel,
    NoButtonSlider: VCarousel,
    SliderItem: VCarouselItem,
    SliderItemCover: VCarouselItem,
  },
  defaults: {
    PrimaryButton: {
      variant: "flat",
      color: "#2980b9",
      rounded: "lg",
      ripple: "false",
      class: "ma-1",
      bgColor: "surface",
      
    },
    SecondaryButton: {
      variant: "outlined",
      color: "black",
      rounded: "lg",
      ripple: "false",
      class: "ma-1",
      bgColor: "surface",
    },
    TertiaryButtin: {
      variant: "text",
      color: "primary",
      rounded: "lg",
      ripple: "false",
      class: "ma-1",
      bgColor: "surface",
    },
    TextInput: {
      variant: "outlined",
      color: "primary",
      rounded: "lg",
      class: "ma-1",
      bgColor: "surface",
    },
    TextInputEn: {
      variant: "outlined",
      color: "primary",
      rounded: "lg",
      class: "ma-1",
      style: "direction: ltr!important;text-align:left!important;",
      bgColor: "surface",
    },
    ComboBox: {
      variant: "outlined",
      rounded: "lg",
      class: "ma-1",
      color: "primary",
      clearable: true,
      bgColor: "surface",
      itemTitle: "Title",
      itemValue: "Id",
      returnObject: false,
    },
    MultiComboBox: {
      variant: "outlined",
      rounded: "lg",
      class: "ma-1",
      color: "primary",
      clearable: true,
      multiple: true,
      bgColor: "surface",
      chips: true,
      closableChips: true,
      itemColor: "primary",
      itemTitle: "Title",
      itemValue: "Id",
      returnObject: false,
    },
    CheckBox: {
      color: "primary",
      class: "ma-1",
    },
    DatePicker: {
      color: "primary",
      class: "ma-1",
      variant: "outlined",
      clearable: true,
      prependIcon: null,
      prependInnerIcon: "$calendar",
      okText: "تایید",
      cancelText: "لغو",
      hideActions: true,
      viewMode: "year",
    },
    RadioGroupColumn: {
      color: "primary",
      column: true,
      class: "ma-1",
    },
    RadioGroupRow: {
      color: "primary",
      inline: true,
      class: "ma-1",
    },
    RadioButton: {
      color: "primary",
      class: "ma-1",
    },
    Switch: {
      color: "primary",
      class: "ma-1",
      inset: true,
    },
    SingleFile: {
      color: "primary",
      class: "ma-1",
      variant: "outlined",
      clearable: true,
      prependInnerIcon: "$file",
      prependIcon: null,
    },
    MultiFile: {
      color: "primary",
      class: "ma-1",
      variant: "outlined",
      clearable: true,
      prependInnerIcon: "$file",
      prependIcon: null,
      chips: true,
      multiple: true,
    },
    SingleImage: {
      accept: "image/*",
      color: "primary",
      class: "ma-1",
      variant: "outlined",
      clearable: true,
      prependInnerIcon: "mdi-file-image-outline",
      prependIcon: null,
    },
    MultiImage: {
      accept: "image/*",
      color: "primary",
      class: "ma-1",
      variant: "outlined",
      clearable: true,
      prependInnerIcon: "mdi-file-image-outline",
      prependIcon: null,
      chips: true,
      multiple: true,
    },
    Slider: {
      color: "primary",
      class: "ma-1",
      cycle: true,
      interval: 3000,
    },
    NoArrowSlider: {
      color: "primary",
      class: "ma-1",
      cycle: true,
      interval: 3000,
      showArrows: "hover",
    },
    NoButtonSlider: {
      color: "primary",
      class: "ma-1",
      cycle: true,
      interval: 3000,
      showArrows: "hover",
      hideDelimiters: true,
    },
    SliderItemCover: {
      cover: true,
    },
  },
});
