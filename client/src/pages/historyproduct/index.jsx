import { Row, Col, Tabs, Button, Radio, Result, Checkbox, Input, Modal, Form, Space, Spin, Pagination } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined } from '@ant-design/icons';
import history from "../../utils/history";
import swal from "sweetalert";
import moment from 'moment';
import {
  getUser,
  getHistoryProductAction,
  getCartAction,
  OderhistoryAction,
  orderproductsAction,
  DeleteCartAction
} from '../../redux/actions'
import './styles.css'
function HistoryProduct() {
  const [checkPurchase, setCheckPurchase] = useState(false)
  const [color, setColor] = useState(1)
  const [checkaddress, setcheckAddress] = useState(false);
  const [visible, setVisible] = useState(false);
  const [iShowmor, setIshowmore] = useState(6);
  const [checkId_Cart, setCheckId_Cart] = useState('');
  const [checkTextInput, setCheckTextinput] = useState('');
  const Register = useSelector(state => state.userReducer);
  const { userLoginLocal } = Register;
  const Cart = useSelector(state => state.cartReducer);
  const { getCart } = Cart;
  const historyProduct = useSelector(state => state.orderhistoryReducer);
  const { historyProductArr, loading } = historyProduct;

  var CartUser = getCart.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user
  })
  var cartlength = [];
  if (CartUser !== -1) {
    const filterCartuser = getCart.filter(item => userLoginLocal.id_user === item.id_user);
    cartlength = [...filterCartuser]
  }
  var checkProductArr = historyProductArr.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user;
  })
  var ProductId_userHistory = [];
  if (checkProductArr !== -1) {
    var ProductId_user = historyProductArr.filter(item => userLoginLocal.id_user === item.id_user);
    ProductId_userHistory = [...ProductId_user]
  }
  let total = 0;
  //Tổng tiền khi không có mã giảm giá

  for (let i = 0; i < cartlength.length; i++) {

    total = total + (cartlength[i]?.giakhuyenmai * cartlength[i]?.soluong);
  }
  const { TextArea } = Input;
  //Show more
  var checkCartlength = [];
  if (cartlength.length !== 0) {
    for (var i = 0; i < iShowmor && i < cartlength.length; i++) {
      checkCartlength.unshift(cartlength[i])
    }
  }

  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction());
    dispatch(getUser());
    dispatch(getHistoryProductAction());
  }, [dispatch]);
  function onFinish1(value) {
    dispatch(getHistoryProductAction())
    const oderhistory = {
      cartlength: cartlength,
      value: value,
      id_user: cartlength[0]?.id_user,
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
    console.log(oderhistory)
    dispatch(OderhistoryAction(oderhistory));
    dispatch(getCartAction());
  if(loading === false){
    dispatch(getHistoryProductAction());
    swal("Thêm địa chỉ thành công");
  }
  }

  const { TabPane } = Tabs;

  function onChange(e) {
    setColor(2)
    setcheckAddress(true);
    setCheckId_Cart(e.target.value)
  }
  function onChange1(e) {
    setCheckTextinput(e.target.value)
  }
  function AddPurchase() {
    if (checkaddress === false) {
      swal("Bạn cần chọn địa chỉ trước khi mua hàng");
    } else if (getCart.length === 0) {
      swal("Sản phẩm bạn mua trống vui lòng thêm sản phẩm vào giỏ hàng!")
    }
    else {
      var productordered = {
        id_user: userLoginLocal.id_user,
        cartlength: cartlength,
        id_donhang: checkId_Cart,
        Note: checkTextInput,
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        orderstatus: 'Đang chờ cửa hàng xác nhận'
      }
      swal("Bạn đã mua hàng thành công");
      dispatch(orderproductsAction(productordered));
      dispatch(getCartAction());
      dispatch(DeleteCartAction());
      setCheckPurchase(true)
    }
  }
  function onChange1(value) {
    if (value === 2) {
      setIshowmore(12);
    } else if (value === 1) {
      setIshowmore(6)
    } else if (value === 3) {
      setIshowmore(18);
    } else if (value === 4) {
      setIshowmore(30)
    }


  }
  return (
    <div className="container-history-all">
      {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Col span={24}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Col>
      </Row> :
        checkPurchase === false ?
          <div>
            <Row span={24}>
              <Col span={16} className='history-item'>
                <Row span={24}>
                  <Tabs defaultActiveKey="1">
                    <TabPane tab="Nhận hàng tại nhà" key="1">
                      <Row span={24}>
                        <Col span={24}>
                          <h6>Thông tin nhận hàng</h6>
                        </Col>
                        <Col span={24}>
                          <Row span={24} className='btn' >
                            {ProductId_userHistory.map((item) => {
                              return (
                                <Col span={12} className='btn-item-history' >
                                  <Checkbox value={item.id_donhang} onChange={onChange}>
                                    <a><p><b>{item.ten}</b></p></a>
                                    <p style={{ color: 'blue' }}>{item.sodienthoai}</p>
                                    <p>{item.diachicuthe} ,{item.phuongxa}, {item.quanhuyen},{item.tinhthanhpho}</p>
                                  </Checkbox>
                                </Col>
                              )
                            })}
                          </Row>
                        </Col>


                        <Col span={24} style={{ marginLeft: '11px' }}>
                          <Button
                            onClick={() => setVisible(true)}
                            icon={<PlusOutlined />}>
                            Thêm địa chỉ
                          </Button>
                        </Col>
                        <Col span={24} style={{ marginTop: '10px' }}>
                          <h6>Phương thức giao hàng</h6>
                          <Checkbox onChange={onChange}><b>Giao hàng tiêu chuẩn</b></Checkbox>
                        </Col>
                        <Col span={24} style={{ marginTop: '20px' }}  >
                          <h6>Ghi chú đơn hàng</h6>
                          <TextArea showCount maxLength={100} onChange={onChange1} style={{ width: '790px' }} />
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tab="Nhận hàng tại cửa hàng" key="2">
                      Vui Lòng đến cửa hàng ! Địa chỉ : 43 Dũng sĩ Thanh khê Tp Đã nẵng để được tư vấn trực tiếp!
                      <p>Vui lòng liên hệ Hotline <b>0347409653</b> để được hỗ trợ tốt nhất</p>
                    </TabPane>
                  </Tabs>

                </Row>
              </Col>
              <Col span={8}>
                <Row span={24}>
                  <Col span={24} className='informationline'>
                    <Row span={24}>
                      <Col span={20}>
                        <h5>Thông tin đơn hàng</h5>
                      </Col>
                      <Col span={4}>
                        <a
                          onClick={() => history.push('/cart')}
                          style={{ color: 'blue' }}>Chỉnh sửa</a>
                      </Col>
                    </Row>
                    {checkCartlength.map((item) => {
                      return (
                        <Row span={24} style={{ marginTop: '10px' }}>
                          <Col span={8} >
                            <img src={item.hinhanh} className='img-cart' />
                          </Col>
                          <Col span={16}>
                            <p>Điện thoại di động {item.tendienthoai}</p>
                            <p>Số lượng {item.soluong}</p>
                            <p><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                            <p style={{ textDecoration: ' line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                          </Col>
                        </Row>
                      )
                    })}
                    <Row span={24}>
                      <Col span={24} style={{textAlign:'center'}}>
                        <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={cartlength.length} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row span={24}>
                  <Col span={24} className='informationline'>
                    <Row span={24}>
                      <Col span={18}>
                        <h6>Hổ trợ kỹ thuật tận nơi</h6>
                      </Col>
                      <Col span={6}>
                        <h6 style={{ color: 'red' }}>Miễn phí</h6>
                      </Col>
                    </Row>
                    <Col span={24}>
                      <p>Miễn phí cho đơn hàng trên 5.000.000đ hoặc khách hàng doanh nghiệp. Mức phí trên chỉ áp dụng cho ngành hàng ICT, đối với ngành hàng điện máy và điện gia dụng, vui lòng tham khảo</p>
                    </Col>
                  </Col>
                </Row>
                <Row span={24}>
                  <Col span={24} className='informationline'>
                    <Row span={24}>
                      <Col span={14}>
                        <p>Tạm tính</p>
                        <p>Phí vận chuyển </p>
                        <p>Thành tiền</p>
                      </Col>
                      <Col span={10}>
                        <b>{total.toLocaleString("vi-VN")}đ</b>
                        <p style={{ paddingTop: '10px' }}> <b>0đ</b></p>
                        <p style={{ fontSize: '25px', color: 'red' }}><b>{total.toLocaleString("vi-VN")}đ</b></p>

                      </Col>
                    </Row>
                    <Col span={24} className='btn-history'>
                      <Button
                        onClick={() => AddPurchase()}
                        style={{
                          backgroundColor: 'blue',
                          color: 'white', height: '50px'
                        }}
                        className='btn-item5' >
                        Đặt hàng ngay
                      </Button>
                      <p style={{ color: 'red', paddingTop: '5px' }}>( Xin vui lòng kiểm tra đơn hàng trước khi đặt mua ) </p>
                    </Col>
                  </Col>
                </Row>
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ type: 'email', required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
                          rules={[{ required: true, message: 'Trường này không được để trống!' }]}
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
          </div> : <Row span={24}>
            <Col span={24} className='history-item'>
              <Result
                status="success"
                title="Đơn hàng của bạn đã được mua thành công!"
                subTitle="Vui lòng kiểm tra đơn hàng trong quản lý đơn hàng. Đơn hàng sẽ được giao trong vòng 3 đến 4 ngày kể từ ngày mua hàng!. "
                extra={[

                  <Button onClick={() => history.push('/')} type="primary" key="console">
                    Tiếp Tục mua sắm
                  </Button>,

                ]}
              />
            </Col>
          </Row>
      }

    </div>
  )

}
export default HistoryProduct;
