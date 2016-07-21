import {SET_CURRENT_DOCTOR,UPDATE_CURRENT_DOCTOR_FIELDS,SAVE_CURRENT_DOCTOR} from '../actions/types';

let currentDoctorReducer = function(currentDoctor={},action){
  switch(action.type){
    case SET_CURRENT_DOCTOR:
      return action.currentDoctor;
    case UPDATE_CURRENT_DOCTOR_FIELDS:
      if(action.subModel){
          var object2 = Object.assign({},currentDoctor[action.subModel],action.currentDoctor);
          console.log('currentDoctorReducer = ',object2);
          return Object.assign({},currentDoctor,{Person:object2});
      }else{
          return Object.assign({},currentDoctor,action.currentDoctor);
      }
    case SAVE_CURRENT_DOCTOR:
        return currentDoctor;
    default:
        return currentDoctor;
  }
}

export default currentDoctorReducer;
