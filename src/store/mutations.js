import  * as types from './mutationtype';

const mutations = {
  [types.SET_CARADDRESS](state , addressObj){
     state.carAddress = addressObj;
  }
};

export  default mutations;
