import swal from 'sweetalert';
import history from '../../utils/history'
const initialState = {
  getCart: [],
  loading :true
};
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CART_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_CART_SUCCESS":
      return {
        ...state,
        getCart: action.payload,
        loading: false,

      };
    case "GET_CART_FAIL":
      return {
        ...state,
        loading: true,
        getCart: [],
      };
    case "GET_CART_RESET":
      return {
        ...state,
        loading: true,
        getCart: [],
      };


    default: {
      return state;
    }
  }


}
