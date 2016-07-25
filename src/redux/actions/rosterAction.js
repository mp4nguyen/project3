import axios from 'axios';

import * as types from './types';

export function openClickDayModal(){
    return{
      type: types.ROSTER_OPEN_CLICK_DAY_MODAL,
      isOpen: true
    }
};

export function closeClickDayModal(){
    return{
      type: types.ROSTER_CLOSE_CLICK_DAY_MODAL,
      isOpen: false
    }
};

export function openEventDayModal(currentRoster){
    return{
      type: types.ROSTER_OPEN_EVENT_DAY_MODAL,
      isOpen: true,
      currentRoster
    }
};

export function closeEventDayModal(){
    return{
      type: types.ROSTER_CLOSE_EVENT_DAY_MODAL,
      isOpen: false
    }
};

export function updateModalField(field){
    return{
      type: types.ROSTER_UPDATE_MODAL_FIELD,
      field
    }
};
