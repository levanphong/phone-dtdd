import './styles.css';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getCartAction,
  DeleteCartItemACtion,
  RemovegetCartAction,
  AddAmountMaxActionm,
  AddAmountMinAction,
  OderhistoryAction,
  getHistoryProductAction
} from '../../redux/actions';
import { Row, Col, Button, Space, Spin, Result, Form, Input, Modal } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import swal from 'sweetalert';
import history from '../../utils/history';
import moment from 'moment';
function Cart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction());
    dispatch(getHistoryProductAction());
    return () => {
      dispatch(RemovegetCartAction());
    }
  }, [dispatch])
  const [discountcode, setDiscountcode] = useState(0);
  const [visible, setVisible] = useState(false);
  const Login = useSelector(state => state.userReducer);
  const { userLoginLocal } = Login;
  const Cart = useSelector(state => state.cartReducer);
  const { getCart, loading } = Cart;
  const historyProduct = useSelector(state => state.orderhistoryReducer);
  const { historyProductArr } = historyProduct;
  var checkProductArr = historyProductArr.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user;
  })
  var ProductId_userHistory = [];
  if (checkProductArr !== -1) {
    var ProductId_user = historyProductArr.filter(item => userLoginLocal.id_user === item.id_user);
    ProductId_userHistory = [...ProductId_user]
  }
  var CartUser = getCart.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user
  })
  var cartlength = [];
  if (CartUser !== -1) {
    const filterCartuser = getCart.filter(item => userLoginLocal.id_user === item.id_user);
    cartlength = [...filterCartuser]
  }
  let total = 0;
  let totalAll = 0 - discountcode;
  //Tổng tiền khi không có mã giảm giá
  
  for (let i = 0; i < cartlength.length; i++) {
    
    total = total + (cartlength[i]?.giakhuyenmai * cartlength[i]?.soluong);
  }
  //
  //Tông tiền khi có mã giảm giá
  for (let i = 0; i < cartlength.length; i++) {
    
    totalAll = totalAll + (cartlength[i]?.giakhuyenmai * cartlength[i]?.soluong);
  }
  //
  function Delete(value) {
    dispatch(DeleteCartItemACtion(value));
    dispatch(getCartAction())
  }
  function onFinish(value) {
    setDiscountcode(500000);
    swal('Bạn nhập mã giảm giá thành công');
  }
  function maxAmount(index) {
    var changeamount = {
      addamount: cartlength[index]?.soluong + 1,
      maxAmount: cartlength[index]?.id_giohang
    }
    dispatch(AddAmountMaxActionm(changeamount));
    dispatch(getCartAction())

  }
  function minAmount(index) {
    var changeamount1 = {
      addamount: cartlength[index]?.soluong - 1,
      minAmount: cartlength[index]?.id_giohang
    }
    if (changeamount1.addamount === 0) {
      swal('Tối thiểu 1 sản phẩm');
    } else {
      dispatch(AddAmountMinAction(changeamount1));
      dispatch(getCartAction())
    }

  }
  function onFinish1(value) {
    dispatch(getHistoryProductAction())
    if(ProductId_userHistory.length === 0 ){
      const oderhistory = {
        cartlength: cartlength,
        value: value,
        id_user : cartlength[0]?.id_user,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      }
      dispatch(OderhistoryAction(oderhistory));
     if(loading === false){
      swal("Thêm vào đơn hàng thành công")
      history.push('/historyproduct')
     }
    }
  }
  return (
    <div className='container-card-full'>
      {cartlength.length === 0 ? <Result
        status="403"
        title="403"
        subTitle="Giỏ hàng của bạn trống !"
        extra={<Button
          style={{ backgroundColor: 'white', color: 'black', width: '400px' }}
          onClick={() => history.push('/')} type="primary">Trờ về Trang Chủ</Button>}
      /> : loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Col span={24}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Col>
      </Row> :
        <div><Row span={24} className='detail-item'>
          <Col span={1} className='detail-item1'>
            <Button onClick={() => history.push('/')}
              className='btn1' icon={<HomeOutlined />}>
            </Button>
          </Col>
          <Col span={23} >
            <p className='cart-item3'> Giỏ hàng </p>
          </Col>
        </Row>
          <Row span={24} className='cart-full'>
            <Col span={16} className='cart-item1'>
              {cartlength.map((item, index) => {
                return (
                  <Row span={24} className='item-inside '>
                    <Col span={4}>
                      <img className='img-cart' src={item.hinhanh} />
                    </Col>
                    <Col span={8}>
                      <p>{item.tendienthoai}</p>
                      <p>Thương hiệu: {item.tenloaidienthoai}</p>
                    </Col>
                    <Col span={4}>
                      <Row span={24} className='cart-btn-full'>
                        <Col span={8}>
                          <Button style={{ border: 'none', color: 'blue' }}
                            onClick={() => minAmount(index)}
                          >
                            -
                          </Button>
                        </Col>
                        <Col span={8}>
                          <p style={{ textAlign: 'center', height: '20px', paddingTop: '5px' }}>
                            {item.soluong}
                          </p>
                        </Col>
                        <Col span={8}>
                          <Button style={{ border: 'none', color: 'blue' }}
                            onClick={() => maxAmount(index)}
                          >
                            +
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={4}>
                      <h6 className='price-item'>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</h6>
                      <p style={{ textAlign: 'center', fontSize: '11px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")} đ</p>
                    </Col>
                    <Col span={4}>
                      <a style={{ textAlign: 'center', color: 'rgb(31, 31, 207)' }}
                        onClick={() => Delete(item.id_giohang)}

                      >Xóa
                      </a>
                    </Col>
                  </Row>
                )
              })}
            </Col>
            <Col span={8}>
              <Row span={24} className='shopping-cart '>
                <Col span={24}>
                  <h5>Mã giảm giá/Phiếu mua hàng</h5>
                </Col>
                <Col span={24}>
                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Row span={24}>
                      <Col span={18}>
                        <Form.Item
                          name="discountcode"
                          rules={[{ required: true, message: 'Vui lòng nhập mã giảm giá!' }]}
                        >
                          <Input style={{ width: '250px' }} />
                        </Form.Item>

                      </Col>

                      <Col span={6}>
                        <Form.Item>
                          <Button style={{ backgroundColor: 'rgb(20, 53, 195)' }}
                            type="primary" htmlType="submit">
                            Áp dụng
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>

                <Col span={24}>

                </Col>
              </Row>
              <Row span={24} className='pay-item'>
                <Col span={24}>
                  <h5>Thanh toán</h5>

                </Col>
                <Col span={24}>
                  <Row span={24}>
                    <Col span={16}>
                      <p>Tạm tính</p>
                      <p>Mã giảm giá giảm</p>
                      <p>Thành tiền </p>
                    </Col>
                    <Col span={8}>
                      <h6>{total.toLocaleString("vi-VN")}đ</h6>
                      <p>- {discountcode.toLocaleString("vi-VN")}đ</p>
                      <h5 style={{ color: 'red' }}>{totalAll.toLocaleString("vi-VN")}đ</h5>
                    </Col>
                  </Row>
                </Col>
                <Col span={24} className='btn-pay'>
                  <Button
                    onClick={() => setVisible(ProductId_userHistory.length === 0 ? true : history.push('/historyproduct')) }
                    style={{
                      backgroundColor: 'blue',
                      width: '300px',
                      color: 'white',
                      height: '50px'
                    }}>TIẾP TỤC THANH TOÁN</Button>
                </Col>
              </Row>
              <Modal
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={700}

              >
                <Row span={24}>
                  <Col span={24}>
                    <h5>Thông tin người nhận hàng</h5>
                    <Form
                      name="basic"
                      initialValues={{ remember: true }}
                      onFinish={onFinish1}
                    >
                      <Row span={24}>
                        <p>Họ tên</p>
                        <Col span={24}>
                          <Form.Item
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                      </Row>
                      <Row span={24}>
                        <Col span={11}>
                          <p>Số điện thoại</p>
                          <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={11}>
                          <p>Email</p>
                          <Form.Item
                            name="email"
                            rules={[{ type: 'email', required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <h5>Địa chỉ nhận hàng</h5>
                      <Row span={24}>
                        <Col span={11}>
                          <p>Tỉnh/thành phố</p>
                          <Form.Item
                            name="cityprovince"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={11}>
                          <p>Quận/Huyện</p>
                          <Form.Item
                            name="district"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row span={24}>
                        <Col span={11}>
                          <p>Phường/Xã</p>
                          <Form.Item
                            name="wards"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                        </Col>
                        <Col span={11}>
                          <p>Địa chỉ cụ thể</p>
                          <Form.Item
                            name="specificaddress"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row span={24}>
                        <Col span={24} style={{ textAlign: 'center' }}>
                          <Form.Item >
                            <Button
                              style={{ width: '300px', backgroundColor: 'blue' }}
                              type="primary" htmlType="submit">
                              THÊM VÀO ĐƠN HÀNG
                            </Button>
                          </Form.Item>
                        </Col>

                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Modal>
            </Col>
          </Row></div>

      }


    </div>
  )

}
export default Cart;