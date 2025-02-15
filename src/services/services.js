import axios from "axios";
import baseServices from "./baseServices";

const services = {
  getInsurancePlans() {
    let domain = baseServices.getDomain();
    return baseServices.get("/InsurancePolicyPlan/SpecialPlan", {
      subDomain: domain,
    });
  },
  getSpecialPlansByCategoryId(categoryId) {
    let domain = baseServices.getDomain();
    return baseServices.get("/InsurancePolicyPlan/SpecialPlan", {
      subDomain: domain,
      categoryId: categoryId,
    });
  },

  getSuggestionForms() {
    let domain = baseServices.getDomain();
    return baseServices.get("/InsurancePolicyPlan/SuggestionForm_Plans", {
      subDomain: domain,
    });
  },
  getSuggestionFormsByCategoryId(categoryId) {
    let domain = baseServices.getDomain();
    return baseServices.get("/InsurancePolicyPlan/SuggestionForm_Plans", {
      subDomain: domain,
      categoryId: categoryId,
    });
  },
  getPortalLandingPage() {
    let domain = baseServices.getDomain();
    return baseServices.get("/InsuranceCentre/PortalLandingPage", {
      id: domain,
    });
  },
  getNews() {
    let domain = baseServices.getDomain();
    return baseServices.get(`/Article/NewsNotics/${domain}`);
  },
  getInsurancePolicies() {
    let domain = baseServices.getDomain();
    return baseServices.get("/ComboData/InsuranceCentrePolicyTypes", {
      landingCall: true,
      subDomain: domain,
    });
  },
  getInsuranceCentrePolicyTypesByCategoryId(categoryId) {
    let domain = baseServices.getDomain();
    return baseServices.get("/ComboData/InsuranceCentrePolicyTypes", {
      landingCall: true,
      subDomain: domain,
      categoryId: categoryId,
    });
  },
  getMenuesItem() {
    let domain = baseServices.getDomain();
    return baseServices.get("/ComboData/InsuranceCentrePortalMenues", {
      subDomain: domain,
    });
  },
  affiliationManager(id) {
    let domain = baseServices.getDomain();
    return baseServices.get("/affiliationManager/click", {
      redirectId:id
    });
  },
  sendSms(nationalCode, mobile) {
    let domain = baseServices.getDomain();
    return baseServices.get("/Account/SendSmsToken", {
      mobile: mobile,
      insuranceCentreSubDomain: domain,
    });
  },
  getMessageWithoutAuthorization(
    nationalCode,
    mobile,
    token,
    aliasName,
    resource,
    insuranceCentreSubDomain,
    onlyOtp
  ) {
    return baseServices.get("/Account/verifySmsToken", {
      nationalCode,
      mobile,
      token,
      aliasName,
      resource,
      insuranceCentreSubDomain,
      onlyOtp,
    });
  },
  verifySms(nationalCode, mobile, token, aliasName) {
    let domain = baseServices.getDomain();
    return baseServices.get("/Account/verifySmsToken", {
      nationalCode,
      mobile,
      token,
      aliasName,
      insuranceCentreSubDomain: domain,
    });
  },
  verifySmsWithOnlyOtp(nationalCode, mobile, token, aliasName, onlyOtp) {
    let domain = baseServices.getDomain();
    return baseServices.get("/Account/verifySmsToken", {
      nationalCode,
      mobile,
      token,
      aliasName,
      onlyOtp,
      insuranceCentreSubDomain: domain,
    });
  },
  getFaq() {
    let domain = baseServices.getDomain();
    return baseServices.get(`/Faq/InsuranceCentre/${domain}`, {});
  },
  getWeblog() {
    let domain = baseServices.getDomain();
    return baseServices.get(`/Article/Weblog/${domain}`, {});
  },
  getArticle(id) {
    let domain = baseServices.getDomain();
    return baseServices.get(`/Article/Detail/${id}`, {});
  },
  fastRegister(data) {
    let domain = baseServices.getDomain();
    data.insuranceCentreDomain = domain;
    return baseServices.post("/Account/FastRegister", data);
  },
  insertRequestDemo(data) {
    let domain = baseServices.getDomain();
    data.subDomainName = domain;
    return baseServices.post("/RequestDemo/InsertRequestDemo", data);
  },
  trackingDamage(data) {
    let domain = baseServices.getDomain();
    data.subDomainName = domain;
    return baseServices.post("/TrackingDamage", data);
  },
  logout(headers) {
    let data = {};
    return baseServices.post("/Account/logout", data, headers);
  },
  getCaptchCode() {
    var captchaUrl = "https://captcha.kn2.ir";
    return baseServices.getCaptch(
      `${captchaUrl}/captcha/get?rand=${Math.random()}`,
      {}
    );
  },
  trackingRequest(trackingCode, nationalCode) {
    let domain = baseServices.getDomain();
    return baseServices.get(`/InsurancePolicy/Tracking`, {
      trackingCode,
      nationalCode,
    });
  },
  upload(title, file) {
    let domain = baseServices.getDomain();
    return baseServices.postForm(
      "/FileManager/Upload?subDomain=" + domain + "&title=" + title,
      { domain, title },
      file
    );
  },
  findTracking(id) {
    return baseServices.get("/TrackingDamage/TrackingCode/" + id, {});
  },
  suggestionsCritic(data) {
    let domain = baseServices.getDomain();
    data["subDomain"] = domain;
    return baseServices.post("/SuggestionsCritic", data);
  },
  postMarketerInformations(data) {
    let domain = baseServices.getDomain();
    data["insuranceCentreDomain"] = domain;
    return baseServices.post("/Account/MarketerRegistration", data, {});
  },
  postAgentRegistrationInformations(data) {
    let domain = baseServices.getDomain();
    data["insuranceCentreDomain"] = domain;
    return baseServices.post("/Account/AgentRegistration", data, {});
  },
  suggestionsCritic(data) {
    var domain = baseServices.getDomain();
    data["subDomain"] = domain;
    return baseServices.post("/SuggestionsCritic", data, {});
  },
  postOtherJubsRegistration(data) {
    let domain = baseServices.getDomain();
    data["insuranceCentreDomain"] = domain;
    return baseServices.post("/Account/OtherRegistration", data, {});
  },
  getContractContent() {
    let domain = baseServices.getDomain();
    return baseServices.get(
      `/InsuranceCenterSetting/GetContractContent?SubDomainName=${domain}`
    );
  },
  async reminder(data) {
    var domain = baseServices.getDomain();
    data["subDomain"] = domain;
    return baseServices.post("/Reminder", data).catch((err) => {
      throw new Error("api error" + err);
    });
  },
  getProductCatsByInsuranceCenterInsuranceCategoryTags() {
    var subDomain = baseServices.getDomain();
    return baseServices.get(`/ComboData/GetProductCatsByInsuranceCenterInsuranceCategoryTags?subDomain=${subDomain}`, {});
  },
};

export default services;
