import axios from 'axios'
import { GET_ALL_CRYPTOS, GET_BY_NAME } from './action-types'

export function getAllCryptos() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3001/allCryptos')

      console.log(response.data);
      
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