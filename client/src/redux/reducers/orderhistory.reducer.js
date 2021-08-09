import swal from 'sweetalert';
import history from '../../utils/history'
const initialState = {
  historyProductArr :[]
};
export default function orderhistoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_HISTORYPRODUCT_REQUEST":
      return {
          ...state,
          loading: true,
          historyProductArr: [],
      };
  case "GET_HISTORYPRODUCT_SUCCESS":
      return {
          ...state,
          historyProductArr: action.payload,
          loading: false,

      };
  case "GET_HISTORYPRODUCT_FAIL":
      return {
          ...state,
          loading: true,
          historyProductArr: [],
      };
    default: {
      return state;
    }
  }


}
