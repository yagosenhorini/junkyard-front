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
});

export const updateData = (product) => ({
  type: t.UPDATE_DATA,
  payload: product
})

export const update = (selectedProduct, editedData) => async (dispatch) => {
  dispatch(setError(false));
  dispatch(setLoading(true));

  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const options = {
      headers,
      method: 'PUT',
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(editedData),
    };
    const response = await request(`https://ferrovelho.herokuapp.com/v1/products/${selectedProduct}`, options);
    
    dispatch(fetchSuccess(true));
    dispatch(updateData(response));

  } catch(err) {
    dispatch(setError(true));
    throw new Error('Failed to get data', err);
  } finally {
    dispatch(setLoading(false));
  }
}

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

export const startProduct = (productSelected) => async (dispatch) => {
  dispatch(setError(false));
  dispatch(setLoading(true));

  try {
    const response = await request(`https://ferrovelho.herokuapp.com/v1/products/${productSelected}`);
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