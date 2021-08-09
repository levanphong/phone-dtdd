import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import homeReducer from './home.reducer';
import productReduct from './product.reducer';
import cartReducer from './cart.reducer';
import orderhistoryReducer from './orderhistory.reducer'
import oderprocessingReducer from './oderprocessing.reducer'
import allproductReducer from './allproduct.reducer'
import prductAccessoryReducer from './productaccessory.reducer'
import AdminReducer from './admin.reducer';
export default combineReducers({
  userReducer: userReducer,
  homeReducer :homeReducer,
  productReduct : productReduct,
  cartReducer : cartReducer , 
  orderhistoryReducer : orderhistoryReducer,
  oderprocessingReducer :oderprocessingReducer,
  allproductReducer : allproductReducer,
  prductAccessoryReducer : prductAccessoryReducer,
  AdminReducer : AdminReducer
  
 

 
})
