const initialState = {
  SearchArr : [] ,
  loadingSearch : true,
  PriceIncrease : [],
  DiscountPrice :[],
  loadingIncrease : true,
  TypeofphoneArr : []
};
export default function allproductReducer(state = initialState, action) {
  switch (action.type) {
         case 'SEARCH_ACTION':
          return {
            ...state,
            SearchArr: action.payload,
            loadingSearch: false,
          };
          case "GET_PRICEINCREASE_REQUEST":
            return {
              ...state,
              PriceIncrease: [],
              loadingIncrease: true,
      
            };
          case "GET_PRICEINCREASE_SUCCESS":
            return {
              ...state,
              PriceIncrease: action.payload,
              loadingIncrease :false
            };
          case "GET_PRICEINCREASE_FAIL":
            return {
              ...state,
              loadingIncrease: true,
              PriceIncrease: [],
            };
            case "GET_DISCOUNTBYPRIICE_REQUEST":
            return {
              ...state,
              DiscountPrice: [],
              loading: false,
      
            };
          case "GET_DISCOUNTBYPRIICE_SUCCESS":
            return {
              ...state,
              DiscountPrice: action.payload,
              loading :false
            };
          case "GET_DISCOUNTBYPRIICE_FAIL":
            return {
              ...state,
              loading: true,
              DiscountPrice: [],
            };
            case "GET_TYPEOFPHONE_REQUEST":
              return {
                ...state,
                PriceIncrease: [],
                loadingIncrease: true,
        
              };
            case "GET_GET_TYPEOFPHONE_SUCCESS":
              return {
                ...state,
                TypeofphoneArr: action.payload,
                loadingIncrease :false
              };
            case "GET_GET_TYPEOFPHONE_FAIL":
              return {
                ...state,
                loadingIncrease: true,
                TypeofphoneArr: [],
              };
            case "REMOVE_PRICEINCREASE_ACTION":
              return {
                ...state,
                loading: true,
                PriceIncrease: [],
              };
              case "REMOVE_DISCOUNTBYPRICE_ACTION":
                return {
                  ...state,
                  loading: true,
                  DiscountPrice: [],
                };
                case "REMOVE_TYPEOFPHONE_ACTION":
                  return {
                    ...state,
                    TypeofphoneArr: [],
                  };
      default: {
          return state;
      }
  }
 
    
}