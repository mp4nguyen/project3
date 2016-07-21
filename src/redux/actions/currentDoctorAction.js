import axios from 'axios';
import {toastr} from 'react-redux-toastr';

import * as types from './types';
import {postRequest} from './lib/request';
import {mySqlDateToString} from './lib/mySqlDate';

export function setCurrentDoctor(currentDoctor){
    if(currentDoctor.Person){
      currentDoctor.Person.dob = mySqlDateToString(currentDoctor.Person.dob);
    }

    return{
      type: types.SET_CURRENT_DOCTOR,
      currentDoctor
    }
};

export function	updateCurrentDoctorFields(currentDoctor,subModel){
	return {
		type: types.UPDATE_CURRENT_DOCTOR_FIELDS,
    subModel,
		currentDoctor
	}
};

export function	saveCurrentDoctor(currentDoctor){
  /*
  console.log('will save currentDoctor = ',currentDoctor);
  var companyObject = currentDoctor;
  delete companyObject.Doctors;
  delete companyObject.Clinics;
	return function(dispatch){
    postRequest('/CCompanies/save',currentCompany)
      .then(res => {
        console.log('response=',res);
        toastr.success('', 'Saved company information successfully !')
      })
      .catch((err) => {
        console.log('err=',err);
        toastr.error('Fail to save company information (' + err + ')')
      });
  }*/
};

export function uploadPhotoDoctor(currentDoctor){
  console.log('uploadPhotoDoctor.currentDoctor = ',currentDoctor);
  currentDoctor.Person.avatar.append('container','doctorAvatar');
  //  '/CContainers/avatar/upload'   '/CFiles/upload'
  //params: {container: 'doctorAvatar'},
  var config = {
    headers:{Authorization:'lpAccessToken'},
    params: {container: 'doctorAvatar'},
    options:{id:1}
  };

  postRequest('/Files/upload',currentDoctor.Person.avatar,{container: 'doctorAvatar'})
    .then(succ => {
        console.log('uploadfile = ',succ);
    })
    .catch(err => {
        console.log('uploadfile = ',err);
    });
}
