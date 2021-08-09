import { Row, Col, Form, Input, Button, Select, Tabs, Table, Spin, Space, Pagination } from 'antd'
import './styles.css';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUser,
  RemovegetCartAction,
  UpdateaccountAction,
  getPurchaseOderAction,
  CancelOrderAction

} from '../../redux/actions';
import swal from 'sweetalert';
function Account() {
  // Đặt State
  const [iShowmor, setIshowmore] = useState(6);
  //
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(getPurchaseOderAction());
    return () => {
      dispatch(RemovegetCartAction());
    }
  }, [dispatch])
  const Login = useSelector(state => state.userReducer);
  const { userLoginLocal, user } = Login;
  const currentorder = useSelector(state => state.oderprocessingReducer);
  const { Currentorder, loading } = currentorder;
  //Check id_user có cùng đơn hàng
  var checkCurrentorder = Currentorder.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user
  })
  var CurrentorderArr = [];

  if (checkCurrentorder !== -1) {
    CurrentorderArr = Currentorder.filter(item => userLoginLocal.id_user === item.id_user);
  }
  //check id_user
  var checkAccount = user.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user
  })
  var AccountId_user = [];
  if (checkAccount !== -1) {
    AccountId_user = user.filter(item => userLoginLocal.id_user === item.id_user)
  }
  //
  //Check quản lý đơn hàng

  var checkManagerArr = CurrentorderArr.findIndex((item) => {
    return item.trangthai === 'Đơn hàng đang được giao' || item.trangthai === "Chờ cửa hàng xác nhận đơn hàng" || item.trangthai === "Đơn hàng được giao thành công" || item.trangthai === 'Đơn hàng đã hủy'
      ;
  })
  var waitingforpayment = [];
  var waitingfordelivery = [];
  var complete = [];
  if (checkManagerArr !== -1) {
    waitingforpayment = CurrentorderArr.filter(item => item.trangthai === 'Đơn hàng đang được giao');
    waitingfordelivery = CurrentorderArr.filter(item => item.trangthai === 'Đơn hàng được giao thành công');
    complete = CurrentorderArr.filter(item => item.trangthai === 'Chờ cửa hàng xác nhận đơn hàng' || 'Đơn hàng đã hủy');
  }
  console.log(waitingforpayment)

  //Show more
  //
  var checkShowmoreArr = [];
  if (CurrentorderArr.length !== 0) {
    for (var i = 0; i < iShowmor && i < CurrentorderArr.length; i++) {
      checkShowmoreArr.unshift(CurrentorderArr[i])
    }
  }
  const [check, setCheck] = useState(1);
  const { SubMenu } = Menu;
  const { Option } = Select;
  const { TabPane } = Tabs;
  const { Column, ColumnGroup } = Table;
  function handleClick() {
    console.log()
  }
  function onFinish(value) {
    let AccountId_user = {
      ...value,
      id_user: userLoginLocal.id_user
    }
    swal("Bạn đã cập nhập thông tin tài khoản thành công");
    dispatch(UpdateaccountAction(AccountId_user));
    console.log(AccountId_user)
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
  function CancelOrder(item) {

    dispatch(CancelOrderAction(item));
    dispatch(getPurchaseOderAction())
  }
  return (
    <div className='account-full'>
      <Row span={24} className='account-item'>
        <Col span={6}>
          <Menu
            onClick={() => handleClick()}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="Tài khoản của">
              <Menu.ItemGroup key="g1">
                <Menu.Item onClick={() => setCheck(1)} key="1">Thông tin tài khoản</Menu.Item>
                <Menu.Item onClick={() => setCheck(2)} key="2">Quản lý đơn hàng</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>

        </Col>
        <Col span={18} className='account-item1'>
          <Row span={24}>
            {check === 1 ?
              <Col span={16}>
                <h5>Thông tin tài khoản</h5>
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <p>Họ tên</p>
                  <Form.Item
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input defaultValue={AccountId_user[0]?.hovaten} />
                  </Form.Item>
                  <p>Password</p>
                  <Form.Item

                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password defaultValue={AccountId_user[0]?.matkhau} />
                  </Form.Item>
                  <p>Email</p>
                  <Form.Item

                    name="email"
                    rules={[{ type: 'email', message: 'Please input your username!' }]}
                  >
                    <Input defaultValue={AccountId_user[0]?.email} />
                  </Form.Item>
                  <p>Số điện thoại</p>
                  <Form.Item

                    name="phone"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input defaultValue={AccountId_user[0]?.sodienthoai} />
                  </Form.Item>
                  <p>Giới tính</p>
                  <Form.Item

                    name="sex"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Select defaultValue="Nam" style={{ width: 120 }}>
                      <Option value="Nam">Nam</Option>
                      <Option value="Nữ">Nữ</Option>
                    </Select>

                  </Form.Item>
                  <Form.Item >
                    <Button type="primary" htmlType="submit">
                      Cập nhập
                    </Button>
                  </Form.Item>
                </Form>


              </Col>
              : <Col span={24}>
                <h5>Thông tin đơn hàng</h5>
                <Tabs defaultActiveKey="1" >
                  <TabPane tab="Chờ thanh toán " key="1">
                    <Row span={24}>
                      <Col span={4}>
                        <b>Mã đơn hàng</b>
                      </Col>
                      <Col span={5}>
                        <b>Ngày mua</b>
                      </Col>
                      <Col span={7}>
                        <b>Sản phẩm</b>
                      </Col>
                      <Col span={4}>
                        <b>Tổng tiền</b>
                      </Col>
                      <Col span={4}>
                        <b>Trạng thái</b>
                      </Col>
                    </Row>
                    {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <Col span={24}>
                        <Space size="middle">
                          <Spin size="large" />
                        </Space>
                      </Col>
                    </Row> : complete.map((item) => {
                      return (
                        <Row span={24} className='currentord-item'>
                          <Col span={4}>
                            <p style={{ color: 'blue' }}>{item.id_donhangdadatmua}</p>
                          </Col>
                          <Col span={5}>
                            <p>{item.date}</p>

                          </Col>
                          <Col span={7}>
                            <p>{item.tendienthoai}</p>

                          </Col>
                          <Col span={4}>
                            <p >{item.giakhuyenmai.toLocaleString("vi-VN")}đ</p>

                          </Col>
                          <Col span={4}>

                            {item.trangthai === 'Đơn hàng đã hủy' ?
                              <p style={{ color: 'black' }}>{item.trangthai}</p> :
                              <p style={{ color: 'red' }}>{item.trangthai}</p>}
                            <Button
                              onClick={() => CancelOrder(item.id_chitietdonhang)}
                              style={{
                                marginBottom: '5px',
                              }}>
                              Hủy đơn hàng
                            </Button>

                          </Col>

                        </Row>
                      )
                    })

                    }
                    <Row span={24}>
                      <Col span={24} style={{ textAlign: 'center', paddingBottom: '10px' }}>
                        <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={CurrentorderArr.length} />
                      </Col>

                    </Row>
                  </TabPane>
                  <TabPane tab="Chờ giao hàng" key="2">
                    <Row span={24}>
                      <Col span={4}>
                        <b>Mã đơn hàng</b>
                      </Col>
                      <Col span={5}>
                        <b>Ngày mua</b>
                      </Col>
                      <Col span={7}>
                        <b>Sản phẩm</b>
                      </Col>
                      <Col span={4}>
                        <b>Tổng tiền</b>
                      </Col>
                      <Col span={4}>
                        <b>Trạng thái</b>
                      </Col>
                    </Row>
                    {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <Col span={24}>
                        <Space size="middle">
                          <Spin size="large" />
                        </Space>
                      </Col>
                    </Row> : waitingforpayment.map((item) => {
                      return (
                        <Row span={24} className='currentord-item'>
                          <Col span={4}>
                            <p style={{ color: 'blue' }}>{item.id_donhangdadatmua}</p>
                          </Col>
                          <Col span={5}>
                            <p>{item.date}</p>

                          </Col>
                          <Col span={7}>
                            <p>{item.tendienthoai}</p>

                          </Col>
                          <Col span={4}>
                            <p >{item.giakhuyenmai.toLocaleString("vi-VN")}đ</p>

                          </Col>
                          <Col span={4}>

                            {item.trangthai === 'Đơn hàng đã hủy' ?
                              <p style={{ color: 'black' }}>{item.trangthai}</p> :
                              <p style={{ color: 'red' }}>{item.trangthai}</p>}

                          </Col>

                        </Row>

                      )
                    })


                    }
                    <Row span={24}>
                      <Col span={24} style={{ textAlign: 'center', paddingBottom: '10px' }}>
                        <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={CurrentorderArr.length} />
                      </Col>

                    </Row>
                  </TabPane>
                  <TabPane tab="Đã hoàn thành" key="3">
                    <Row span={24}>
                      <Col span={4}>
                        <b>Mã đơn hàng</b>
                      </Col>
                      <Col span={5}>
                        <b>Ngày mua</b>
                      </Col>
                      <Col span={7}>
                        <b>Sản phẩm</b>
                      </Col>
                      <Col span={4}>
                        <b>Tổng tiền</b>
                      </Col>
                      <Col span={4}>
                        <b>Trạng thái</b>
                      </Col>
                    </Row>
                    {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <Col span={24}>
                        <Space size="middle">
                          <Spin size="large" />
                        </Space>
                      </Col>
                    </Row> : waitingfordelivery.map((item) => {
                      return (
                        <Row span={24} className='currentord-item'>
                          <Col span={4}>
                            <p style={{ color: 'blue' }}>{item.id_donhangdadatmua}</p>
                          </Col>
                          <Col span={5}>
                            <p>{item.date}</p>

                          </Col>
                          <Col span={7}>
                            <p>{item.tendienthoai}</p>

                          </Col>
                          <Col span={4}>
                            <p >{item.giakhuyenmai.toLocaleString("vi-VN")}đ</p>

                          </Col>
                          <Col span={4}>

                            {item.trangthai === 'Đơn hàng đã hủy' ?
                              <p style={{ color: 'black' }}>{item.trangthai}</p> :
                              <p style={{ color: 'red' }}>{item.trangthai}</p>}

                          </Col>


                        </Row>
                      )
                    })

                    }
                    <Row span={24}>
                      <Col span={24} style={{ textAlign: 'center', paddingBottom: '10px' }}>
                        <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={CurrentorderArr.length} />
                      </Col>

                    </Row>
                  </TabPane>
                </Tabs>


              </Col>}



          </Row>

        </Col>


      </Row>

    </div>
  )
}
export default Account;