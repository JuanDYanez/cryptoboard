import {GET_ALL_CRYPTOS, GET_BY_NAME, SPECIFIC_PAGE, GET_BY_ID} from './action-types'

let initialState = {
  allCryptos: [],
  filteredCryptos: [],
  detailCrypto: [],
  currentPage: 1,
  isLoading: false,
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
    case SPECIFIC_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case GET_BY_ID:
      return {
        ...state,
        detailCrypto: action.payload
      }
    default:
      return state;
    }
  }

export default rootReducer;