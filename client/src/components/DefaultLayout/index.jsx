import { Route } from 'react-router-dom';
import BrowserHeader from '../Header'
import { Col, Layout, Row,Affix } from 'antd';
import './style.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const { Header, Content, Footer } = Layout;
function DefaultLayout(props) {
  const [top, setTop] = useState(0);
  const { exact, path, component: Component, ...other } = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          <>
          <div className="mainLayout">
          <Layout >
         
            <Header style={{backgroundColor:'white'}}><BrowserHeader/></Header>
          
            <Content className="heroBlock">
              <Component {...other} {...routeProps} />
            </Content>
            <Footer> 
              <Row span={24}  className='all-footer'>
                <Col span={6}>
                  <b>Hỗ trợ khách hàng</b>
                  <a><p>Thẻ ưu đãi </p></a>
                  <a><p>Trung tâm bảo hành</p></a>
                  <a><p>Thanh toán và giao hàng</p></a>
                  <a><p>Dịch vụ sửa chữa và bảo trì</p></a>
                  <a><p>Doanh nghiệp thân thiết</p></a>
                </Col>
                <Col span={6}>
                <b>Thông tin PhongLê</b>
                  <a><p>Giới thiệu PhongLê </p></a>
                  <a><p>thông tin Liên Hệ</p></a>
                  <a><p>hệ thống Showoom</p></a>
                  <a><p>hỏi đáp</p></a>
                  <a><p>Tin công nghệ</p></a>
                </Col>
                <Col span={6}>
                <b>Cộng đông Phong Lê</b>
                  <a><p>Phong Lê Việt Nam</p></a>
                  <a><p>phong Lê Media</p></a>
                  <a><p>hệ thống Showoom</p></a>
                  <a><p>Gọi mua hàng : <b style={{color:'red'}}>0347409653</b></p></a>
                  <a><p>Gọi chăm sóc : <b style={{color:'red'}}>0987337000</b></p></a>
                </Col>
                <Col span={6}>
                <b>Email liên hệ</b>
                  <a><p>Hổ trợ khách hàng</p></a>
                  <a><p style={{color:'blue'}}>facebook/PhongLê</p></a>
                  <a><p>Liên hệ báo giá</p></a>
                  <a><p style={{color:'blue'}}>lvphong124@gmail.com</p></a>
                  <a><p>Gọi chăm sóc : <b style={{color:'red'}}>0987337000</b></p></a>
                </Col>

              </Row>
            </Footer>
          </Layout>
          </div>
          </>
        )
      }}
    />
  );
}

export default DefaultLayout;
