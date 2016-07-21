import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';

import userReducer from './userReducer';
import companyReducer from './companyReducer';
import currentCompanyReducer from './currentCompanyReducer';
import currentClinicReducer from './currentClinicReducer';
import currentDoctorReducer from './currentDoctorReducer';

const rootReducer = combineReducers({
  user: userReducer,
  companies: companyReducer,
  currentCompany: currentCompanyReducer,
  currentClinic: currentClinicReducer,
  currentDoctor: currentDoctorReducer,
  toastr: toastrReducer
});

export default rootReducer;
