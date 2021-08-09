var userLogin = JSON.parse(localStorage.getItem('userLoginAdmin')) || [];
const initialState = {
  LoginAdminArr: [],
  loadingPhone: true,
  loadingColor: true,
  loadingTypeRam: true,
  loadingDetailsRam: true,
  loadingTypePhone: true,
  loadingDetailsphone: true,
  loadingEvaluatephone: true,
  loadingAccessPhone: true,
  loadingTypeofAccessory: true,
  loadingAccessoryReviews: true,
  loadingUserAdmin: true,
  loadingOderManagement : true ,
  PhoneAdmin: [],
  PhoneColor: [],
  TypeRam: [],
  DetailsRam: [],
  TypePhone: [],
  Detailsphone: [],
  EvaluatePhoneAdmin: [],
  AccessoryPhoneAdmin: [],
  TypeofAccessory: [],
  AccessoryReviews: [],
  UserAdmin: [],
  OderManagementAdmin :[],
  userLoginLocalAdmin : userLogin,
};
export default function AdminReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LOGINADMIN_REQUEST":
      return {
        ...state,
        loading: true,
        LoginAdminArr: [],
      };
    case "GET_LOGINADMIN_SUCCESS":
      return {
        ...state,
        LoginAdminArr: action.payload,
        loading: false,

      };
    case "GET_LOGINADMIN_FAIL":
      return {
        ...state,
        loading: true,
        LoginAdminArr: [],
      };
    case "GET_PHONE_ADMIN_REQUEST":
      return {
        ...state,
        loadingPhone: true,
        PhoneAdmin: [],
      };
    case "GET_PHONE_ADMIN_SUCCESS":
      return {
        ...state,
        PhoneAdmin: action.payload,
        loadingPhone: false,

      };
    case "GET_PHONE_ADMIN_FAIL":
      return {
        ...state,
        loadingPhone: true,
        PhoneAdmin: [],
      };
    case "GET_COLORPHONE_REQUEST":
      return {
        ...state,
        loadingColor: true,
        PhoneColor: [],
      };
    case "GET_COLORPHONE_SUCCESS":
      return {
        ...state,
        PhoneColor: action.payload,
        loadingColor: false,

      };
    case "GET_COLORPHONE_FAIL":
      return {
        ...state,
        loadingColor: true,
        PhoneColor: [],
      };
    case "GET_TYPERAM_REQUEST":
      return {
        ...state,
        loadingTypeRam: true,
        TypeRam: [],
      };
    case "GET_TYPERAM_SUCCESS":
      return {
        ...state,
        TypeRam: action.payload,
        loadingTypeRam: false,

      };
    case "GET_TYPERAM_FAIL":
      return {
        ...state,
        loadingloadingTypeRamColor: true,
        TypeRam: [],
      };
    case "GET_DETAILSRAM_REQUEST":
      return {
        ...state,
        loadingDetailsRam: true,
        DetailsRam: [],
      };
    case "GET_DETAILSRAM_SUCCESS":
      return {
        ...state,
        DetailsRam: action.payload,
        loadingDetailsRam: false,

      };
    case "GET_DETAILSRAM_FAIL":
      return {
        ...state,
        loadingDetailsRam: true,
        DetailsRam: [],
      };
    case "GET_TYPEPHONE_REQUEST":
      return {
        ...state,
        loadingTypePhone: true,
        TypePhone: [],
      };
    case "GET_TYPEPHONE_SUCCESS":
      return {
        ...state,
        TypePhone: action.payload,
        loadingTypePhone: false,

      };
    case "GET_TYPEPHONE_FAIL":
      return {
        ...state,
        loadingTypePhone: true,
        TypePhone: [],
      };
    case "GET_DETAIPHONE_ADMIN_REQUEST":
      return {
        ...state,
        loadingDetailsphone: true,
        Detailsphone: [],
      };
    case "GET_DETAIPHONE_ADMIN_SUCCESS":
      return {
        ...state,
        Detailsphone: action.payload,
        loadingDetailsphone: false,

      };
    case "GET_DETAIPHONE_ADMIN_FAIL":
      return {
        ...state,
        loadingDetailsphone: true,
        Detailsphone: [],
      };
    case "GET_EVALUATEPHONE_ADMIN_REQUEST":
      return {
        ...state,
        loadingEvaluatephone: true,
        EvaluatePhoneAdmin: [],
      };
    case "GET_EVALUATEPHONE_ADMIN_SUCCESS":
      return {
        ...state,
        EvaluatePhoneAdmin: action.payload,
        loadingEvaluatephone: false,

      };
    case "GET_EVALUATEPHONE_ADMIN_FAIL":
      return {
        ...state,
        loadingEvaluatephone: true,
        EvaluatePhoneAdmin: [],
      };
    case "GET_ACCESSORYPHONE_ADMIN_REQUEST":
      return {
        ...state,
        loadingAccessPhone: true,
        AccessoryPhoneAdmin: [],
      };
    case "GET_ACCESSORYPHONE_ADMIN_SUCCESS":
      return {
        ...state,
        AccessoryPhoneAdmin: action.payload,
        loadingAccessPhone: false,

      };
    case "GET_ACCESSORYPHONE_ADMIN_FAIL":
      return {
        ...state,
        loadingAccessPhone: true,
        AccessoryPhoneAdmin: [],
      };
    case "GET_TYPEOFACCESSORY_ADMIN_REQUEST":
      return {
        ...state,
        loadingTypeofAccessory: true,
        TypeofAccessory: [],
      };
    case "GET_TYPEOFACCESSORY_ADMIN_SUCCESS":
      return {
        ...state,
        TypeofAccessory: action.payload,
        loadingTypeofAccessory: false,

      };
    case "GET_TYPEOFACCESSORY_ADMIN_FAIL":
      return {
        ...state,
        loadingTypeofAccessory: true,
        TypeofAccessory: [],
      };
    case "GET_ACCESSORYREVIEWS_ADMIN_REQUEST":
      return {
        ...state,
        loadingAccessoryReviews: true,
        AccessoryReviews: [],
      };
    case "GET_ACCESSORYREVIEWS_ADMIN_SUCCESS":
      return {
        ...state,
        AccessoryReviews: action.payload,
        loadingAccessoryReviews: false,

      };
    case "GET_ACCESSORYREVIEWS_ADMIN_FAIL":
      return {
        ...state,
        loadingAccessoryReviews: true,
        AccessoryReviews: [],
      };
    case "GET_USER_ADMIN_REQUEST":
      return {
        ...state,
        loadingUserAdmin: true,
        UserAdmin: [],
      };
    case "GET_USER_ADMIN_SUCCESS":
      return {
        ...state,
        UserAdmin: action.payload,
        loadingUserAdmin: false,

      };
    case "GET_USER_ADMIN_FAIL":
      return {
        ...state,
        loadingUserAdmin: true,
        UserAdmin: [],
      };
      case "GET_ODERMANAGEMENT_ADMIN_REQUEST":
        return {
          ...state,
          loadingOderManagement: true,
          OderManagementAdmin: [],
        };
      case "GET_ODERMANAGEMENT_ADMIN_SUCCESS":
        return {
          ...state,
          OderManagementAdmin: action.payload,
          loadingOderManagement: false,
  
        };
      case "GET_ODERMANAGEMENT_ADMIN_FAIL":
        return {
          ...state,
          loadingOderManagement: true,
          OderManagementAdmin: [],
        };
        case "LOCALLOGIN_ACTION":{
          var checkLogin=action.payload;
          localStorage.setItem('userLoginAdmin', JSON.stringify(checkLogin));
          return {
            ...state,
            userLogin: checkLogin,
          }
      };
    default: {
      return state;
    }
  }


}