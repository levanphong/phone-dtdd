const initialState = {
  AccessoryDetail :[],
  AcessoryEvaluate :[],
  loading : true,
  loadingAccessory:true,
  AccessoriesType :[]
};
export default function prductAccessoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ACCESSORYDETAIL_REQUEST":
      return {
          ...state,
          loading: true,
          AccessoryDetail: [],
      };
  case "GET_ACCESSORYDETAIL_SUCCESS":
      return {
          ...state,
          AccessoryDetail: action.payload,
          loading: false,

      };
  case "GET_ACCESSORYDETAIL_FAIL":
      return {
          ...state,
          loadingAccessory: true,
          AccessoryDetail: [],
      };
      case "GET_ACCESSORYEVALUATE_REQUEST":
      return {
          ...state,
          loadingAccessory: true,
          AcessoryEvaluate: [],
      };
  case "GET_ACCESSORYEVALUATE_SUCCESS":
      return {
          ...state,
          AcessoryEvaluate: action.payload,
          loadingAccessory: false,

      };
  case "GET_ACCESSORYEVALUATE_FAIL":
      return {
          ...state,
          loadingAccessory: true,
          AcessoryEvaluate: [],
      };
      case "GET_ACCESSORIESTYPE_REQUEST":
      return {
          ...state,
          loading: true,
          AccessoriesType: [],
      };
  case "GET_ACCESSORIESTYPE_SUCCESS":
      return {
          ...state,
          AccessoriesType: action.payload,
          loading: false,

      };
  case "GET_ACCESSORIESTYPE_FAIL":
      return {
          ...state,
          loadingAccessory: true,
          AccessoriesType: [],
      };
     
      default: {
          return state;
      }
  }
 
    
}