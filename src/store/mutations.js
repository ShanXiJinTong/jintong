import  * as types from './mutationtype';

const mutations = {
  [types.set_caraddress](state , addressObj){
     state.carAddress = addressObj;
  },
  [types.set_car](state , carObj){
     state.car = carObj;
  },
  [types.set_catList](state , carArr){
     state.carList = carArr;
  }
};

export  default mutations;
