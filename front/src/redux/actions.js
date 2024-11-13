import axios from 'axios'
import { GET_ALL_CRYPTOS, GET_BY_NAME, SPECIFIC_PAGE, GET_BY_ID, ISLOADING } from './action-types'

export function getAllCryptos() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/allCryptos')
      
      return dispatch({
        type: GET_ALL_CRYPTOS,
        payload: response.data
      })
    } catch (error) {
      console.error(error);  
    }
  }
}

export const getCryptoByName = (name) => {
  return async (dispatch) => {
    try {
      const endpoint = `localhost:3001/search/name?name=${name}`
      const response = await axios.get(endpoint)
      
      dispatch({
        type: GET_BY_NAME,
        payload: response.data
      })
    } catch (error) {
      console.error(error);
      
    }
  }
}

export const specificPage = (page) => {
  return function (dispatch) {
    dispatch({
      type: SPECIFIC_PAGE,
      payload: page
    })
  }
}

export const isLoading = (boolean) => {
  return function (dispatch) {
    dispatch ({
      type: ISLOADING,
      payload: boolean,
    })
  }
}

export const getCryptoByID = (id) => {
  
  return async (dispatch) => {
    try {
      const endpoint = `http://localhost:3001/filter/${id}`
      const response = await axios.get(endpoint)

      dispatch({
        type: GET_BY_ID,
        payload: response.data
      })
    } catch (error) {
      console.error(error);
      
    }
  }
}
