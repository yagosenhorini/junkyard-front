import * as t from './types';

const initialState = {
  data: [],
  isError: null,
  isLoading: null,
  isSuccess: null
}

function reducer(state = initialState, { type, payload }) {
  switch(type){
    case t.SUCCESS:
      return {...state, isSuccess: true}
    case t.ERROR:
      return {...state, isError: payload}
    case t.LOADING:
      return {...state, isLoading: payload}
    case t.SAVE_FORM:
      return {...state, data: payload, isLoading: false, isError: null}
    case t.SET_DATA:
      return {...state, data: payload}
    case t.UPDATE_DATA:
      return {...state, data: payload}
    default:
      return state;
  }
}

export default reducer;