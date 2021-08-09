import swal from 'sweetalert';
import history from '../../utils/history'
var userLogin = JSON.parse(localStorage.getItem('userLogin')) || [];
const initialState = {
    user : [],
    userLoginLocal : userLogin,
    PhoneHomeArr: [],
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_USER_REQUEST":
            return {
                ...state,
                loading: true,
                user: [],
            };
        case "GET_USER_SUCCESS":
            return {
                ...state,
                user: action.payload,
                loading: false,

            };
        case "GET_USER_FAIL":
            return {
                ...state,
                loading: true,
                user: [],
            };
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
            case "LOGIN_ACTION":{
                var checkLogin=action.payload;
                localStorage.setItem('userLogin', JSON.stringify(checkLogin));
                return {
                  ...state,
                  userLogin: checkLogin,
                }
            };
            case "DELETE_ACTION":{
                var checkuser ={
                    false : 'false'
                }
                localStorage.setItem('userLogin', JSON.stringify(checkuser));
                return {
                    ...state ,
                    userLogin :checkuser
                }
            }
            case " REMOVEUSER_LOCAL_ACTION":{
                var checkuser ={
                    false : 'false'
                }
                localStorage.setItem('userLogin', JSON.stringify(checkuser));
                return {
                  ...state,
                  userLoginLocal: checkuser,
                }
            };
            
        default: {
            return state;
        }
    }
   
      
}
