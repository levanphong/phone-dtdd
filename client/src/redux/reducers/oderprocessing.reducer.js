const initialState = {
  Currentorder :[] , 
  loading :true
};
export default function oderprocessingReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PURCHASEORDER_REQUEST":
      return {
          ...state,
          loading: true,
          Currentorder: [],
      };
  case "GET_PURCHASEORDER_SUCCESS":
      return {
          ...state,
          Currentorder: action.payload,
          loading: false,

      };
  case "GET_PURCHASEORDER_FAIL":
      return {
          ...state,
          loading: true,
          Currentorder: [],
      };
    
      
     
      default: {
          return state;
      }
  }
 
    
}