// utils/filters.js

// فیلتر عدد
export const numericOnly = (value) => {
  return value
    .replace(/[^0-9\u06F0-\u06F9]/g, "") // فقط اعداد فارسی و انگلیسی را نگه می‌دارد
    .replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]) // تبدیل اعداد انگلیسی به فارسی
    .replace(
      /[\u06F0-\u06F9]/g,
      (digit) =>
        "۰۱۲۳۴۵۶۷۸۹"[
          "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(
            digit
          )
        ]
    ); // نگه داشتن اعداد فارسی
};
// فیلتر حروف الفبای انگلیسی
export const alphabetOnly = (value) => {
  return value.replace(/[^a-zA-Z\u0600-\u06FF]/g, ""); // فقط حروف را نگه می‌دارد
};
export const alphabetOnlyEn = (value) => {
  return value.replace(/[^a-zA-Z]/g, ""); // فقط حروف را نگه می‌دارد
};
export const alphabetOnlyFa = (value) => {
  return value.replace(/[^\u0600-\u06FF]/g, ""); // فقط حروف را نگه می‌دارد
};
// فیلتر ترکیبی (اعداد و حروف)
export const alphanumericOnly = (value) => {
  return value
    .replace(/[^0-9\u06F0-\u06F9a-zA-Z\u0600-\u06FF]/g, "") // فقط اعداد (فارسی/انگلیسی) و حروف را نگه می‌دارد
    .replace(/[0-9]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]) // تبدیل اعداد انگلیسی به فارسی
    .replace(
      /[\u06F0-\u06F9]/g,
      (digit) =>
        "۰۱۲۳۴۵۶۷۸۹"[
          "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9".indexOf(
            digit
          )
        ]
    ); // نگه داشتن اعداد فارسی
};
// فیلتر قیمت
export const priceFilter = (value) => {
  const isNegative = value.indexOf("-") > -1;
  console.log(isNegative);
  // 1. ابتدا همه کاراکترهای غیر عددی و جداکننده‌ها را حذف می‌کنیم
  const cleanedValue = value.replace(/[^0-9\u06F0-\u06F9.,]/g, ""); // فقط اعداد فارسی و انگلیسی و جداکننده‌ها را نگه می‌دارد

  // 2. تبدیل اعداد انگلیسی به فارسی
  const persianToEnglish = cleanedValue.replace(
    /[\u06F0-\u06F9]/g,
    (digit) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(digit)]
  );
  let containComa = persianToEnglish.indexOf(".") > -1;
  // 3. جدا کردن بخش صحیح و اعشاری (در صورتی که نقطه یا ویرگول باشد)
  const [integerPart, decimalPart] = persianToEnglish.split(/[٫.]/); // تقسیم به قسمت صحیح و اعشاری

  // 4. جدا کردن سه به سه برای قسمت صحیح
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, "٫"); // جدا کردن سه به سه برای قسمت صحیح

  // 5. اگر قسمت اعشاری وجود داشت، آن را به فرمت فارسی تبدیل کرده و به قسمت صحیح اضافه می‌کنیم
  const seperateValue = containComa
    ? `${integerWithCommas}.${decimalPart}`
    : integerWithCommas; // اگر اعشار داشت، به قسمت صحیح اضافه می‌کنیم

  // 6. تبدیل تمام اعداد انگلیسی به فارسی
  const finalValue = seperateValue.replace(
    /[0-9]/g,
    (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );

  return isNegative ? `${finalValue}-` : finalValue;
};
//آماده کردن دیتا برای ارسال
export const prepareForServer = (value) => {
  // 1. حذف فضاهای اضافی اطراف
  let cleanedValue = value.trim();
  // 2. تبدیل حروف عربی به حروف فارسی
  cleanedValue = cleanedValue.replace(/ك/g, "ک").replace(/ي/g, "ی"); // تبدیل حروف عربی به فارسی
  // 3. تبدیل اعداد فارسی به انگلیسی
  cleanedValue = cleanedValue.replace(
    /[\u06F0-\u06F9]/g,
    (digit) => "0123456789"["۰۱۲۳۴۵۶۷۸۹".indexOf(digit)]
  ); // تبدیل اعداد فارسی به انگلیسی
  // 4. حذف ویرگول‌ها
  cleanedValue = cleanedValue.replace(/,/g, ""); // حذف ویرگول‌ها
  // 5. حذف کاراکترهای غیرضروری (مثل علامت‌های خاص که برای ارسال به سرور نیاز نداریم)
  cleanedValue = cleanedValue.replace(/[^\w\s\-._@&=+%$#;:!?,]/g, ""); // فقط کاراکترهای مجاز (حروف، اعداد، فاصله و بعضی علامت‌ها)
  // 6. حذف اسپیس‌های اضافی (تبدیل دو یا چند فضای پشت سر هم به یک فضای ساده)
  cleanedValue = cleanedValue.replace(/\s+/g, " "); // تبدیل هر تعداد اسپیس پشت سر هم به یک فضای واحد
  return cleanedValue;
};
//حذف فضاهای اضافی (Trim)
export const trimSpaces = (value) => value.trim();
//حذف اسپیس‌های اضافی داخل رشته (نزدیک شدن به یک فضای واحد)
export const normalizeSpaces = (value) => value.replace(/\s+/g, " ");
//حذف کاراکترهای خاص یا غیرمجاز
export const removeSpecialChars = (value) =>
  value.replace(/[^\w\s\-._@&=+%$#;:!?,]/g, "");
// حذف تمام اسپیس‌ها (بدون در نظر گرفتن نوع فضاها)
export const removeAllSpaces = (value) => value.replace(/\s/g, "");
// تبدیل حروف عربی به فارسی (ك و ي)
export const arabicToPersianLetters = (value) =>
  value.replace(/ك/g, "ک").replace(/ي/g, "ی");

export const required = (value) => {
  if (value instanceof Array && value.length == 0) {
    return "لطفاً اطلاعات مورد نیاز را وارد نمایید.";
  }
  return !!value || "لطفاً اطلاعات مورد نیاز را وارد نمایید.";
};

export const FileSize = (value, size = 2) => {
  console.log(value[0].size, value);
  return (
    !!value ||
    !value.length ||
    value[0].size < size * 1000000 ||
    `Avatar size should be less than ${size} MB!`
  );
};
