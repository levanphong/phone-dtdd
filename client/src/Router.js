import React from 'react';
import { Router, Switch } from 'react-router-dom';
import history from './utils/history';
import { ROUTERS } from './constants/router';
import DefaultLayout from './components/DefaultLayout';
import LoginLayout from './components/LoginLayout';
import HomePage from './pages/Home';
import LoginUser from './pages/User/LoginandRegister';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import historyProduct from './pages/historyproduct';
import Account from './pages/Account';
import Allproduct from './pages/Allproducts';
import ProductDetailAccessory from './pages/ProductDetailAccessory';
import Allaccessories from './pages/Allaccessories';
import AdminLogin from './pages/Admin/LoginAdmin';
import AdminManagement from './pages/Admin/AdminProduct';
function BrowserRouter() {
  return (
    <Router history={history}>
      <Switch>
        <DefaultLayout 
          exact 
          path={ROUTERS.PRODUCTDETAIL} 
          component={ProductDetail}
        />
        <DefaultLayout 
          exact 
          path={ROUTERS.HOME} 
          component={HomePage}
        />
         <DefaultLayout 
          exact 
          path={ROUTERS.CART} 
          component={Cart}
        />
         <DefaultLayout 
          exact 
          path={ROUTERS.HISTORYPRODUCT} 
          component={historyProduct}
        />
          <DefaultLayout 
          exact 
          path={ROUTERS.ACCOUNT} 
          component={Account}
        />
         <DefaultLayout 
          exact 
          path={ROUTERS.ALLPRODUCT} 
          component={Allproduct}
        />
        <DefaultLayout 
          exact 
          path={ROUTERS.PRODUCTDETAILACCESSORY} 
          component={ProductDetailAccessory}
        />
            <DefaultLayout 
          exact 
          path={ROUTERS.ALLACCESSORIES} 
          component={Allaccessories}
        />
        
       
       
       
        <LoginLayout exact path={ROUTERS.LOGINUSER} component={LoginUser} />
        <LoginLayout exact path={ROUTERS.LOGINADMIN} component={AdminLogin} />
        <LoginLayout exact path={ROUTERS.ADMINMANAGEMENT} component={AdminManagement} />
        
      </Switch>
    </Router>
  )
}

export default BrowserRouter
