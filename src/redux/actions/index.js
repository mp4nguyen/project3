import * as userActions from './userAction';
import * as companyActions from './companyAction';
import * as currentCompanyActions from './currentCompanyAction';
import * as currentClinicActions from './currentClinicAction';
import * as currentDoctorActions from './currentDoctorAction';

module.exports = {
  login: userActions.login,
  updateLoginFields: userActions.updateLoginFields,

  loadCompaniesFromServer: companyActions.loadCompaniesFromServer,

  setCurrentCompany: currentCompanyActions.setCurrentCompany,
  updateCurrentCompanyFields: currentCompanyActions.updateCurrentCompanyFields,
  saveCurrentCompany: currentCompanyActions.saveCurrentCompany,

  setCurrentClinic: currentClinicActions.setCurrentClinic,
  updateCurrentClinicFields: currentClinicActions.updateCurrentClinicFields,

  setCurrentDoctor: currentDoctorActions.setCurrentDoctor,
  updateCurrentDoctorFields: currentDoctorActions.updateCurrentDoctorFields,
  saveCurrentDoctor: currentDoctorActions.saveCurrentDoctor,
  uploadPhotoDoctor: currentDoctorActions.uploadPhotoDoctor
}
