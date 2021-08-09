var historysearch = JSON.parse(localStorage.getItem('historysearch')) || [];
const initialState = {
  PhoneHomeArr: [],
  HistorySearch : historysearch,
  loading : true,
  PhoneAccessories :[] , 
  PhoneHomeArr1: [],
  OutStanndArr :[],
  PhoneAccessories1 :[]


};
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
          case "GET_PHONEHOME_REQUEST":
              return {
                  ...state,
                  loading: true,
                  PhoneHomeArr: [],
              };
          case "GET_PHONEHOME_SUCCESS":
              return {
                  ...state,
                  PhoneHomeArr: action.payload,
                  loading: false,
  
              };
          case "GET_PHONEHOME_FAIL":
              return {
                  ...state,
                  loading: true,
                  PhoneHomeArr: [],
              };
              case "GET_PHONEHOME1_REQUEST":
                return {
                    ...state,
                    loading: true,
                    PhoneHomeArr1: [],
                };
            case "GET_PHONEHOME1_SUCCESS":
                return {
                    ...state,
                    PhoneHomeArr1: action.payload,
                    loading: false,
    
                };
            case "GET_PHONEHOME1_FAIL":
                return {
                    ...state,
                    loading: true,
                    PhoneHomeArr1: [],
                };
              case "HISTORY_SEARCH_ACTION":
                var checkhistorysearch=[...state.HistorySearch];
                checkhistorysearch.push(action.payload)
                localStorage.setItem('historysearch', JSON.stringify(checkhistorysearch));
                return {
                    ...state,
                    loading: true,
                    historysearch: checkhistorysearch
                };
                case "DELETE_SEARCH_ACTION":
                    localStorage.setItem('historysearch', JSON.stringify([]));
                    return {
                        ...state,
                        HistorySearch: [],
                        loading: false,
        
                    };
                    case "DELETE_HOME_ACTION":
                    
                    return {
                        ...state,
                        PhoneHomeArr: [],
                        loading: false,
        
                    };
                    case "GET_PHONEACCESSORIES_REQUEST":
                        return {
                            ...state,
                            loading: true,
                            PhoneAccessories: [],
                        };
                    case "GET_PHONEACCESSORIES_SUCCESS":
                        return {
                            ...state,
                            PhoneAccessories: action.payload,
                            loading: false,
            
                        };
                    case "GET_PHONEACCESSORIES_FAIL":
                        return {
                            ...state,
                            loading: true,
                            PhoneAccessories: [],
                        };
                        case "GET_OUTSTANDINGBRAND_REQUEST":
                            return {
                                ...state,
                                loading: true,
                                OutStanndArr: [],
                            };
                        case "GET_OUTSTANDINGBRAND_SUCCESS":
                            return {
                                ...state,
                                OutStanndArr: action.payload,
                                loading: false,
                
                            };
                        case "GET_OUTSTANDINGBRAND_FAIL":
                            return {
                                ...state,
                                loading: true,
                                OutStanndArr: [],
                            };
                            case "GET_PHONEACCESSORIES1_REQUEST":
                                return {
                                    ...state,
                                    loading: true,
                                    PhoneAccessories1: [],
                                };
                            case "GET_PHONEACCESSORIES1_SUCCESS":
                                return {
                                    ...state,
                                    PhoneAccessories1: action.payload,
                                    loading: false,
                    
                                };
                            case "GET_PHONEACCESSORIES1_FAIL":
                                return {
                                    ...state,
                                    loading: true,
                                    PhoneAccessories1: [],
                                };
        
            
              
         
     
      default: {
          return state;
      }
  }
 
    
}