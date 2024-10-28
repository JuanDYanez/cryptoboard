import {GET_ALL_CRYPTOS, GET_BY_NAME} from './action-types'

let initialState = {
  allCryptos: [],
  filteredCryptos: [],
  currentPage: 1,
}

function rootReducer (state = initialState, action) {
  switch(action.type) {
    case GET_ALL_CRYPTOS:
      return {
        ...state,
        allCryptos: action.payload
      };
    case GET_BY_NAME:
      return {
        ...state,
        filteredCryptos: action.payload,
        currentPage: 1,
      };
    default:
      return state;
    }
  }

export default rootReducer;