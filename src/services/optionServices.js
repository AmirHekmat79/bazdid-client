import baseServices from "./baseServices";
const optionServices = {
  getProvince() {
    return baseServices.get("/ComboData/Province", {});
  },
  getInsuranceTypeDamageForm() {
    return baseServices.get("/ComboData/InsuranceTypeDamageForm", {});
  },
  getInsuranceCompanies(insuranceTypeId) {
    let domain = baseServices.getDomain();
    return baseServices.get("/ComboData/InsuranceCompanies", {
      subDomain: domain,
      insuranceTypeId: insuranceTypeId,
    });
  },

  // getInsuranceTypeDamageForm() {
  //   return baseServices.get("/ComboData/Province", {});
  // },
  getCityByProvinceId(provinceId) {
    return baseServices.get("/ComboData/City", { provinceId });
  },
  getLastEducationalCertificate() {
    return baseServices.get("/ComboData/Education", {});
  },
  getWorkExperience() {
    return baseServices.get("/ComboData/WorkExperience", {});
  },
  getGenderTypes() {
    return baseServices.get("/ComboData/GenderTypes", {});
  },
  suggestionsCritic() {
    return baseServices.get("/SuggestionsCritic/0", {});
  },
  getAllInsuranceCompanies() {
    return baseServices.get("/ComboData/InsuranceCompany", {});
  },
  getPersonalityTypes() {
    return baseServices.get("/ComboData/PersonalityTypes", {});
  },
  getStartTimes() {
    return baseServices.get("/ComboData/StartTimes", {});
  },
  getEndTimes() {
    return baseServices.get("/ComboData/EndTimes", {});
  },
  getAdvertisements() {
    return baseServices.get("/ComboData/Advertisements", {});
  },
  getAdvertismentsList() {
    var domain = baseServices.getDomain();
    return baseServices.get(`/Article/Advertisement/${domain}`, {});
  },
};

export default optionServices;
