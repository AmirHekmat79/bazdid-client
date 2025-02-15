let licensesName = {
  Notifaano: "notifaano",
  Notifaano_pwa: "notifaano_pwa",
  Novin: "novin",
  Novin_pwa: "novin_pwa",
  Movasa: "movasa",
  Movasa_pwa: "movasa_pwa",
  Fardaap: "fardaap",
  Fardaap_pwa: "fardaap_pwa",
};
let Config = {
  setConfig(license) {
    if (license == "notifaano") {
      return {
        title: "نوتیفانو",
        Server: "https://server.notifaano.ir/",
        media: "",
        domain: "notifaano.ir",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "375abcdde0dc461e85629483d46dc6f3",
        AppId: "d2bb0566-d575-4374-8330-b7db1f1a7cb0",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "Notifaano",
        licenseText: "",
        template: "default",
        isPwa: false,
        captcha: "https://captcha.kn2.ir/",
        cdn: "https://cdn.kn2.ir/",
      };
    } else if (license == "notifaano_pwa") {
      return {
        title: "نوتیفانو",
        Server: "https://server.notifaano.ir/",
        media: "",
        domain: "notifaano.ir",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "375abcdde0dc461e85629483d46dc6f3",
        AppId: "d2bb0566-d575-4374-8330-b7db1f1a7cb0",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "Notifaano",
        licenseText: "",
        template: "default",
        isPwa: true,
        captcha: "https://captcha.kn2.ir/",
        cdn: "https://cdn.kn2.ir/",
      };
    } else if (license == "novin") {
      return {
        title: "نوین",
        domain: "enovinplus.com",
        Server: "https://server.enovinplus.com/",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
        AppId: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "enovinplus",
        InsuranceTypes:
          "https://media.enovinplus.com/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png",
        akaGeneralApiUrl: "https://akageneralapi.enovinplus.com/",
        captcha: "https://captcha.kn2.ir/",
        cdn: "https://cdn.kn2.ir/",
        isPwa: false,
      };
    } else if (license == "novin_pwa") {
      return {
        title: "نوین",
        domain: "enovinplus.com",
        Server: "https://server.enovinplus.com/",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
        AppId: "4b1c37bd-0b75-42dd-81fc-41a74d4cf727",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "enovinplus",
        InsuranceTypes:
          "https://media.enovinplus.com/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png",
        akaGeneralApiUrl: "https://akageneralapi.enovinplus.com/",
        captcha: "https://captcha.enovinplus.com/",
        cdn: "https://cdn.enovinplus.com/",
        isPwa: true,
      };
    } else if (license == "movasa") {
      return {
        title: "مواسا",
        domain: "movasa.ir",
        Server: "https://server.movasa.ir/",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "2c39b0f9-d1e7-45e6-ae76-d7051d982846",
        AppId: "2c39b0f9-d1e7-45e6-ae76-d7051d982846",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "movasa",
        InsuranceTypes:
          "https://media.movasa.ir/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png",
        akaGeneralApiUrl: "https://akageneralapi.kn2.ir/",
        captcha: "https://captcha.kn2.ir/",
        cdn: "https://cdn.kn2.ir/",
        isPwa: false,
      };
    } else if (license == "movasa_pwa") {
      return {
        title: "مواسا",
        domain: "movasa.ir",
        Server: "https://server.movasa.ir/",
        SiteKey: "6Lf6f4cUAAAAAG3P63j4vTkkH2zJ9INY8KCFopqH",
        ApiKey: "2c39b0f9-d1e7-45e6-ae76-d7051d982846",
        AppId: "2c39b0f9-d1e7-45e6-ae76-d7051d982846",
        activeOnlinePayment: true,
        license: false,
        directLicense: false,
        className: "movasa",
        InsuranceTypes:
          "https://media.movasa.ir/Easybimeh/FileManager.Front/insurancepolicy/assets/images/insurance-types.png",
        akaGeneralApiUrl: "https://akageneralapi.kn2.ir/",
        captcha: "https://captcha.kn2.ir/",
        cdn: "https://cdn.kn2.ir/",
        isPwa: true,
      };
    } else if (license == "fardaap") {
      return {
        title: "فرداپ",
        Server: "https://server.fardaap.com/",
        media: "https://media.mbime.ir/",
        domain: "fardaap.com",
        SiteKey: "6LdS4IQUAAAAAOpA8djOw5NGJJiX1kfmJ_IS6qyM",
        ApiKey: "d6a7a906-7542-4f21-94c5-8d8190e9e9a0",
        AppId: "d6a7a906-7542-4f21-94c5-8d8190e9e9a0",
        activeOnlinePayment: true,
        license: true,
        directLicense: false,
        className: "fardaap",
        licenseText: "کلیه حقوق متعلق است به فرداپ @2024",
        template: "default",
        isPwa: false,
        captcha: "https://captcha.mbime.ir/",
        cdn: "https://cdn.mbime.ir/",
      };
    } else if (license == "fardaap_pwa") {
      return {
        title: "فرداپ",
        Server: "https://server.fardaap.com/",
        media: "https://media.mbime.ir/",
        domain: "fardaap.com",
        SiteKey: "6LdS4IQUAAAAAOpA8djOw5NGJJiX1kfmJ_IS6qyM",
        ApiKey: "d6a7a906-7542-4f21-94c5-8d8190e9e9a0",
        AppId: "d6a7a906-7542-4f21-94c5-8d8190e9e9a0",
        activeOnlinePayment: true,
        license: true,
        directLicense: false,
        className: "fardaap",
        licenseText: "کلیه حقوق متعلق است به فرداپ @2024",
        template: "default",
        isPwa: true,
        captcha: "https://captcha.mbime.ir/",
        cdn: "https://cdn.mbime.ir/",
      };
    }
  },
  getConfig() {
    let config = this.setConfig(licensesName.Notifaano);
    return config;
  },
};
export default Config;
