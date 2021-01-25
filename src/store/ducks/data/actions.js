import * as t from './types';
import { request }  from './utils';

export const fetchSuccess = (success) => ({
    type: t.SUCCESS,
    payload: success
});

export const saveForm = (e) => ({
    type: t.SAVE_FORM,
    payload: e,
})

export const setError = (state) => ({
  type: t.ERROR,
  payload: state,
})

export const setLoading = (state) => ({
  type: t.LOADING,
  payload: state,
})

export const setData = (data) => ({
  type: t.SET_DATA,
  payload: data,
})

export const start = () => async (dispatch) => {
  dispatch(setError(false));
  dispatch(setLoading(true));

  try {
    const response = await request('https://ferrovelho.herokuapp.com/v1/products/');
    const data = await response.json();
    
    dispatch(fetchSuccess(true));
    dispatch(setData(data));

  } catch(err) {
    dispatch(setError(true));
    throw new Error('Failed to get data', err);
  } finally {
    dispatch(setLoading(false));
  }

}