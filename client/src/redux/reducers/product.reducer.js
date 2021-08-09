const initialState = {
  PhoneProductDetail: [],
  RamProductDetail :[],
  ColorProductDetail : [],
  RelateProduct : [],
  Evaluate :[],
  loading : true,
  loadingEvaluate : true
};
export default function productReduct(state = initialState, action) {
  switch (action.type) {
          case "GET_PHONEPRODUCTDETAIL_REQUEST":
              return {
                  ...state,
                  loading: true,
                  PhoneProductDetail: [],
              };
          case "GET_PHONEPRODUCTDETAIL_SUCCESS":
              return {
                  ...state,
                  PhoneProductDetail: action.payload,
                  loading: false,
  
              };
          case "GET_PHONEPRODUCTDETAIL_FAIL":
              return {
                  ...state,
                  loading: true,
                  PhoneProductDetail: [],
              };
              case "GET_PHONEPRODUCTDETAILRAM_REQUEST":
                return {
                    ...state,
                    loading: true,
                    RamProductDetail: [],
                };
            case "GET_PHONEPRODUCTDETAILRAM_SUCCESS":
                return {
                    ...state,
                    RamProductDetail: action.payload,
                    loading: false,
    
                };
            case "GET_PHONEPRODUCTDETAILRAM_FAIL":
                return {
                    ...state,
                    loading: true,
                    RamProductDetail: [],
                };
                case "GET_PHONEPRODUCTDETAILCOLOR_REQUEST":
                    return {
                        ...state,
                        loading: true,
                        ColorProductDetail: [],
                    };
                case "GET_PHONEPRODUCTDETAILCOLOR_SUCCESS":
                    return {
                        ...state,
                        ColorProductDetail: action.payload,
                        loading: false,
        
                    };
                case "GET_PHONEPRODUCTDETAILCOLOR_FAIL":
                    return {
                        ...state,
                        loading: true,
                        ColorProductDetail: [],
                    };
                    case "GET_RELATEPRODUCTS_REQUEST":
                        return {
                            ...state,
                            loading: true,
                            RelateProduct: [],
                        };
                    case "GET_RELATEPRODUCTS_SUCCESS":
                        return {
                            ...state,
                            RelateProduct: action.payload,
                            loading: false,
            
                        };
                    case "GET_RELATEPRODUCTS_FAIL":
                        return {
                            ...state,
                            loading: true,
                            RelateProduct: [],
                        };
                        case "GET_EVALUATE_REQUEST":
                        return {
                            ...state,
                            loadingEvaluate: true,
                            Evaluate: [],
                        };
                    case "GET_EVALUATE_SUCCESS":
                        return {
                            ...state,
                            Evaluate: action.payload,
                            loadingEvaluate: false,
            
                        };
                    case "GET_EVALUATE_FAIL":
                        return {
                            ...state,
                            loadingEvaluate: true,
                            Evaluate: [],
                        };
             
     
      default: {
          return state;
      }
  }
 
    
}