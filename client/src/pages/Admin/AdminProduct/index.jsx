import { Col, Row, Menu, Button, Tabs, Spin, Space, Popover, Rate, Pagination, Modal, Form, Input, Affix, InputNumber } from 'antd';
import './styles.css';
import {
  CompleteAdminAction,
  WaitingAdminAction,
  GetPhoneAdminAction,
  GetPhoneColorAction,
  GetTypeRamAction,
  GetDetailsRamAction,
  GetTypePhoneAction,
  GetDetailsPhoneAdminAction,
  GetEvaluatePhoneAdminAction,
  GetAccessoryPhoneAdminAction,
  GetTypeOfAccessoryAdminAction,
  GetAccessoryReviewAdminAction,
  UserAdminAction,
  GetOderManagementAdminAction,
  AddPhoneAdminAction,
  DeletePhoneAdminAction,
  EditPhoneAdminAction,
  ConfirmAdminAction,
} from '../../../redux/actions'
import {
  AppstoreOutlined,
  DeleteOutlined,
  FormOutlined,
  EditOutlined,
  AndroidOutlined,
  CreditCardOutlined,
  UserOutlined
} from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { number } from 'prop-types';
import swal from 'sweetalert';
import history from '../../../utils/history';
function AdminManagement() {
  //Đặt State
  const [top, setTop] = useState(10);
  const [change, setChange] = useState(0);
  const [iShowmor, setIshowmore] = useState(6);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Edit, setEidt] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  //
  const { SubMenu } = Menu;
  const { TabPane } = Tabs;
  //Get dữ liệu từ Store gửi về
  //Function
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
  const content = (
    <div>
      <p><Button
        onClick={() => history.push('/loginadmin')}
        style={{ backgroundColor: 'blue', color: 'white' }}>
        Đăng Xuất
      </Button></p>

    </div>

  );
  function onFinish(value) {
    dispatch(AddPhoneAdminAction(value));
    dispatch(GetPhoneAdminAction())
    if (loadingPhone === false) {
      dispatch(GetPhoneAdminAction())
      swal('Bạn đã thêm sản phẩm thành công')
      setIsModalVisible(true)
    }
  }
  function DeletePhoneAdmin(id) {
    dispatch(DeletePhoneAdminAction(id));
    dispatch(GetPhoneAdminAction())
    if (loadingPhone === false) {
      dispatch(GetPhoneAdminAction())
      swal('Bạn đã xóa sản phẩm thành công');
    }

  }
  function ConfirmAdmin(item) {

    dispatch(ConfirmAdminAction(item))
    dispatch(GetOderManagementAdminAction())
    if (loadingOderManagement === false) {
      dispatch(GetOderManagementAdminAction());
      swal("Bạn đã chuyển trạng thái thành công")

    }
  }
  function waitingAdmin(id) {
    dispatch(WaitingAdminAction(id));
    dispatch(GetOderManagementAdminAction())
    if (loadingOderManagement === false) {
      dispatch(GetOderManagementAdminAction());
      swal("Bạn đã chuyển trạng thái thành công")

    }
  }
  function CompleteAdmin(item) {
    dispatch(CompleteAdminAction(item));
    dispatch(GetOderManagementAdminAction())
    if (loadingOderManagement === false) {
      dispatch(GetOderManagementAdminAction());
      swal("Bạn đã chuyển trạng thái thành công")

    }
  }


  //

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetOderManagementAdminAction())
    dispatch(UserAdminAction())
    dispatch(GetTypeOfAccessoryAdminAction())
    dispatch(GetAccessoryPhoneAdminAction())
    dispatch(GetEvaluatePhoneAdminAction())
    dispatch(GetDetailsPhoneAdminAction())
    dispatch(GetTypePhoneAction())
    dispatch(GetDetailsRamAction())
    dispatch(GetTypeRamAction())
    dispatch(GetPhoneAdminAction())
    dispatch(GetPhoneColorAction())
    dispatch(GetAccessoryReviewAdminAction())
  }, [dispatch])
  const Admin = useSelector(state => state.AdminReducer);
  const {
    userLoginLocalAdmin,
    PhoneAdmin,
    loadingPhone,
    PhoneColor,
    loadingColor,
    TypeRam,
    loadingTypeRam,
    DetailsRam,
    loadingDetailsRam,
    TypePhone,
    loadingTypePhone,
    Detailsphone,
    loadingDetailsphone,
    EvaluatePhoneAdmin,
    loadingEvaluatephone,
    AccessoryPhoneAdmin,
    loadingAccessPhone,
    TypeofAccessory,
    loadingTypeofAccessory,
    loadingAccessoryReviews,
    AccessoryReviews,
    UserAdmin,
    loadingUserAdmin,
    loadingOderManagement,
    OderManagementAdmin,
  } = Admin;
  //Check Showmore
  var checkPhoneAdmin = [];
  if (PhoneAdmin.length !== 0) {
    for (var i = 0; i <= iShowmor && i < PhoneAdmin.length; i++) {
      checkPhoneAdmin.unshift(PhoneAdmin[i])
    }
  }
  function EditPhoneAdmin(index) {
    showModal(true);
    setEidt(index);
  }
  console.log(userLoginLocalAdmin)
  //Edit

  //
  return (
    <div>
      {userLoginLocalAdmin.length === 0
        ? null
        :

        <div className='container-AdminManagement-full'>
           
          {change === 0 ?

            <Row span={24} className='btn-add-admin'>
              <Col span={3}>
                <Button
                  onClick={showModal}
                  style={{
                    border: '1px solid blue',
                    backgroundColor: 'blue',
                    color: 'white'
                  }}
                  icon={<FormOutlined
                    style={{
                      fontSize: '20px',
                    }}
                  />}>
                  Thêm sản phẩm
                </Button>
              </Col>
            </Row>
            : null
          }
          <Row span={24}>

            <Col span={24} className='admin-item'>
              <Row span={24}>
                <Col span={8} className='col-item1'>
                  <a style={{ color: 'blue' }} onClick={() => (history.push('/'))}>
                    <img style={{ width: '60px' }} src="https://cdn.icon-icons.com/icons2/643/PNG/128/mac-apple-osx-desktop-software-hardware_icon-icons.com_59289.png" />
                    PHONGLE.VN
                  </a>

                </Col>
                <Col span={8} style={{ textAlign: 'center' }}>
                  <h5 style={{ color: 'red' }}>Quản lý Admin</h5>
                </Col>
                <Col span={5}>
                </Col>
                <Col span={3} style={{ marginTop: '15px' }}>
                  {userLoginLocalAdmin.length === '0' ?
                    <Button
                      onClick={() => history.push('/dangnhap')}
                      style={{ border: 'none', color: 'black' }}
                      icon={<UserOutlined style={{ fontSize: '20px' }}
                      />}>
                      Đăng nhập
                    </Button>
                    : <Popover content={content}
                      title={userLoginLocalAdmin[0]?.ten}>
                      <Button
                        style={{ border: 'none', color: 'black' }}
                        icon={<UserOutlined style={{ fontSize: '20px' }}
                        />}>
                        {userLoginLocalAdmin[0]?.ten}
                      </Button>
                    </Popover>
                  }
                


                </Col>
              
              </Row>
            
            </Col>
            
            <Col span={24}>
              <Row span={24}>
                <Col span={6}>

                  <div style={{ width: 256 }}>
                    <Affix offsetTop={50} onChange={affixed => console.log(affixed)}>
                      <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                      >
                        <SubMenu key="sub1" icon={<AndroidOutlined />} title="Quản lý điện thoại">
                          <Menu.Item onClick={() => setChange(0)}>Thêm Sửa Xóa Sản Phẩm</Menu.Item>
                          <Menu.Item onClick={() => setChange(1)}>Đánh Giá Của Khách Hàng</Menu.Item>
                        </SubMenu>

                        <SubMenu key="sub5" icon={<CreditCardOutlined />} title="Quản lý phụ kiện điện thoại">
                          <Menu.Item onClick={() => setChange(2)}>Thêm Sửa Xóa Phụ Kiện</Menu.Item>
                          <Menu.Item onClick={() => setChange(3)}>Đánh giá phụ kiện</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined />} title="Quản lý thông tin người dùng">
                          <Menu.Item onClick={() => setChange(4)}>Quản lý người dùng</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Quản lý địa chỉ và đơn hàng">
                          <Menu.Item onClick={() => setChange(5)}>Quản lý đơn hàng </Menu.Item>
                        </SubMenu>
                      </Menu>
                    </Affix>
                  </div>
                </Col>

                <Col span={18}>
                  {change === 0 ?
                    <Tabs defaultActiveKey="1" >
                      <TabPane tab="Danh sách điện thoại" key="1">
                        <Row span={24}>
                          <Col span={24} className='phone-item-admin'>
                            <Row span={24}>
                              <Col span={3}>
                                <p>id_điệnthoại</p>
                              </Col>
                              <Col span={3}>
                                <p>id_loạiđiệnthoại</p>
                              </Col>
                              <Col span={3}>
                                <p>Tên điện thoại</p>
                              </Col>
                              <Col span={3}>
                                <p>Hình ảnh</p>
                              </Col>
                              <Col span={3}>
                                <p>Giá bán</p>
                              </Col>
                              <Col span={3}>
                                <p>Giá khuyến mãi</p>
                              </Col>
                              <Col span={2}>
                                <p>Tình Trạng</p>
                              </Col>
                              <Col span={2}>
                                <p>Nội dung</p>
                              </Col>
                              <Col span={2}>
                                Số lượng đánh giá
                              </Col>

                            </Row>
                          </Col>
                          <Col span={24}>
                            {loadingPhone === true
                              ?
                              <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Col span={24}>
                                  <Space size="middle">
                                    <Spin size="large" />
                                  </Space>
                                </Col>
                              </Row>
                              :
                              checkPhoneAdmin.map((item, index) => {
                                return (

                                  <Row span={24} className='phone-item-title'>
                                    <Col span={3}>
                                      <p>{item.id_dienthoai}</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>{item.id_loaidienthoai}</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>{item.tendienthoai}</p>
                                    </Col>
                                    <Col span={3}>
                                      <img className='img-admin' src={item.hinhanh} alt="" />
                                    </Col>
                                    <Col span={3}>
                                      <p>{item.giaban.toLocaleString("vi-VN")}đ</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</p>
                                    </Col>
                                    <Col span={2}>
                                      <p>{item.tinhtrang}</p>
                                    </Col>
                                    <Col span={2}>
                                      <p>{item.noidung}</p>
                                    </Col>
                                    <Col span={2}>
                                      <p>{item.soluongdanhgia}</p>
                                    </Col>
                                    <Col span={24} className='btn-admin'>
                                      <Row span={24}>
                                        <Col span={3}>
                                          <Button style={{ border: '1px solid red' }}
                                            onClick={() => DeletePhoneAdmin(item.id_dienthoai)}
                                            icon={<DeleteOutlined
                                              style={{
                                                fontSize: '20px',
                                              }}
                                            />}>
                                            Xóa
                                          </Button>
                                        </Col>
                                        <Col span={3}>
                                          <Button
                                            onClick={() => EditPhoneAdmin(index)}
                                            icon={<EditOutlined
                                              style={{
                                                fontSize: '20px',

                                              }}
                                            />}>
                                            Sửa
                                          </Button>
                                        </Col>

                                      </Row>
                                    </Col>
                                    <Modal title="Thêm sản phẩm" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                      <Row span={24}>
                                        <Col span={24}>
                                          <Form
                                            name="basic"
                                            initialValues={{ remember: true }}
                                            onFinish={onFinish}

                                          >
                                            Loại điện thoại
                                            <Form.Item
                                              name="id_loaidienthoai"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <InputNumber style={{ width: '300px' }} />
                                            </Form.Item>
                                            Tên điện thoại
                                            <Form.Item

                                              name="tendienthoai"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <Input />
                                            </Form.Item>
                                            Hình ảnh
                                            <Form.Item

                                              name="hinhanh"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <Input />
                                            </Form.Item>
                                            Giá bán
                                            <Form.Item

                                              name="giaban"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <InputNumber style={{ width: '300px' }} />
                                            </Form.Item>
                                            Giá khuyến mãi
                                            <Form.Item

                                              name="giakhuyenmai"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <InputNumber style={{ width: '300px' }} />
                                            </Form.Item>
                                            Nội dung sản phẩm
                                            <Form.Item
                                              name="noidung"
                                              rules={[{ required: true, message: 'Trường này không được để trống!' }]}
                                            >
                                              <Input />
                                            </Form.Item>

                                            <Form.Item >
                                              <Col span={24} style={{ textAlign: 'center' }}>
                                                <Button
                                                  type="primary" htmlType="submit">
                                                  Thêm sản phẩm
                                                </Button>
                                              </Col>

                                            </Form.Item>
                                          </Form>
                                        </Col>
                                      </Row>

                                    </Modal>

                                  </Row>
                                )
                              })}
                            <Row span={24}>
                              <Col span={24} className='showmore-admin'>
                                <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={PhoneAdmin.length} />
                              </Col>

                            </Row>

                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Màu điện thoại" key="2">
                        <Row span={24}>
                          <Col span={24} className='color-item-admin'>
                            <Row span={24}>
                              <Col span={6}>
                                <p>id_Màu</p>
                              </Col>
                              <Col span={6}>
                                Tên Màu
                              </Col>

                            </Row>
                          </Col>
                          <Col span={24}>
                            {loadingColor === true
                              ?
                              <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Col span={24}>
                                  <Space size="middle">
                                    <Spin size="large" />
                                  </Space>
                                </Col>
                              </Row> : PhoneColor.map((item) => {
                                return (
                                  <Row span={24} className='phone-item-title'>
                                    <Col span={6}>
                                      <p>{item.id_mau}</p>
                                    </Col>
                                    <Col span={6}>
                                      <p>{item.tenmau}</p>
                                    </Col>
                                  </Row>
                                )
                              })}

                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Loại Ram" key="3">
                        <Row span={24}>
                          <Col span={24} className='color-item-admin'>
                            <Row span={24}>
                              <Col span={6}>
                                <p>id_LoaiRam</p>
                              </Col>
                              <Col span={6}>
                                <p>id_điệnthoại</p>
                              </Col>
                              <Col span={6}>
                                <p>id_Ram</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={24}>
                            {loadingTypeRam === true
                              ?
                              <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Col span={24}>
                                  <Space size="middle">
                                    <Spin size="large" />
                                  </Space>
                                </Col>
                              </Row>
                              :
                              TypeRam.map((item) => {
                                return (
                                  <Row span={24} className='phone-item-title'>
                                    <Col span={6}>
                                      <p>{item.id_loairam}</p>
                                    </Col>
                                    <Col span={6}>
                                      <p>{item.id_dienthoai}</p>
                                    </Col>
                                    <Col span={6}>
                                      <p>{item.id_ram}</p>
                                    </Col>

                                  </Row>
                                )
                              })

                            }

                          </Col>
                        </Row>
                      </TabPane>
                      <TabPane tab="Chi tiết Ram" key="4">
                        <Row span={24}>
                          <Col span={24} className='details-ram-admin'>
                            <Row span={24}>
                              <Col span={4}>
                                <p>id_ChiTiếtRam</p>
                              </Col>
                              <Col span={4}>
                                <p>id_Ram</p>
                              </Col>
                              <Col span={4}>
                                <p>Tên Ram</p>
                              </Col>
                              <Col span={4}>
                                <p>Giá bán</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col span={24}>
                            {loadingDetailsRam === true
                              ?
                              <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Col span={24}>
                                  <Space size="middle">
                                    <Spin size="large" />
                                  </Space>
                                </Col>
                              </Row>
                              :
                              DetailsRam.map((item) => {
                                return (
                                  <Row span={24} className='phone-item-title'>
                                    <Col span={4}>
                                      <p>{item.id_chitietram}</p>
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.id_ram}</p>

                                    </Col>
                                    <Col span={4}>
                                      <p>{item.tenram}</p>
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.giaban.toLocaleString("vi-VN")}đ</p>
                                    </Col>
                                  </Row>
                                )
                              })
                            }

                          </Col>
                        </Row>

                      </TabPane>
                      <TabPane tab="Loại Điện Thoại" key="5">
                        <Col span={24} className='typephone-item-admin'>
                          <Row span={24}>
                            <Col span={4}>
                              <p>id_loạiđiệnthoại</p>
                            </Col>
                            <Col span={4}>
                              <p>Tên loại điện thoại</p>
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          {loadingTypePhone === true
                            ?
                            <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                              <Col span={24}>
                                <Space size="middle">
                                  <Spin size="large" />
                                </Space>
                              </Col>
                            </Row> :
                            TypePhone.map((item) => {
                              return (
                                <Row span={24} className='phone-item-title'>
                                  <Col span={4}>
                                    <p>{item.id_loaidienthoai}</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>{item.tenloaidienthoai}</p>
                                  </Col>
                                </Row>
                              )
                            })
                          }
                          <Row span={24}>

                          </Row>
                        </Col>
                      </TabPane>
                      <TabPane tab="Chi Tiết Điện Thoại" key="6">
                        <Row span={24}>
                          <Col span={24} className='detailsphone-item-admin'>
                            <Row span={24}>
                              <Col span={4}>
                                <p>id_chi tiết điện thoại</p>
                              </Col>
                              <Col span={4}>
                                <p>id_điện thoại</p>
                              </Col>
                              <Col span={4}>
                                <p>id_ram</p>
                              </Col>
                              <Col span={4}>
                                <p>id_màu</p>
                              </Col>
                              <Col span={4}>
                                <p>Hình ảnh</p>
                              </Col>
                              <Col span={4}>
                                <p>Số lượng</p>
                              </Col>



                            </Row>
                          </Col>
                          <Col span={24}>
                            {loadingDetailsphone === true
                              ?
                              <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                <Col span={24}>
                                  <Space size="middle">
                                    <Spin size="large" />
                                  </Space>
                                </Col>
                              </Row>
                              :
                              Detailsphone.map((item) => {
                                return (
                                  <Row span={24} className='phone-item-title'>
                                    <Col span={4}>
                                      <p>{item.id_chitietdienthoai}</p>
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.id_dienthoai}</p>
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.id_ram}</p>
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.id_mau}</p>
                                    </Col>
                                    <Col span={4}>
                                      <img className='img-admin' src={item.hinhanh} alt="" />
                                    </Col>
                                    <Col span={4}>
                                      <p>{item.soluong}</p>
                                    </Col>

                                  </Row>
                                )
                              })
                            }
                          </Col>
                        </Row>
                      </TabPane>
                    </Tabs>
                    :
                    change === 1
                      ?
                      <Tabs defaultActiveKey="1" >
                        <TabPane tab="Đánh giá của khách hàng" key="1">
                          <Row span={24}>
                            <Col span={24} className='evaluatephone-item-admin'>
                              <Row span={24}>
                                <Col span={3}>
                                  <p>id_đánh giá</p>
                                </Col>
                                <Col span={3}>
                                  <p>id_user</p>
                                </Col>
                                <Col span={3}>
                                  <p>id_điện thoại</p>
                                </Col>
                                <Col span={3}>
                                  <p>Tên đánh giá</p>
                                </Col>
                                <Col span={6}>
                                  <p>Nội dung đánh giá</p>
                                </Col>
                                <Col span={3}>
                                  <p>Thời gian</p>
                                </Col>
                                <Col span={3}>
                                  <p>Sao đánh giá</p>
                                </Col>
                              </Row>
                            </Col>
                            <Col span={24}>
                              {loadingEvaluatephone === true
                                ?
                                <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                  <Col span={24}>
                                    <Space size="middle">
                                      <Spin size="large" />
                                    </Space>
                                  </Col>
                                </Row> :
                                EvaluatePhoneAdmin.map((item) => {
                                  return (
                                    <Row span={24} className='phone-item-title'>
                                      <Col span={3}>
                                        <p>{item.id_danhgia}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.id_user}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.id_dienthoai}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.tendanhgia}</p>
                                      </Col>
                                      <Col span={6}>
                                        <p>{item.danhgia}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.date}</p>
                                      </Col>
                                      <Col span={3}>
                                        <Rate style={{ fontSize: '12px' }} disabled defaultValue={item.saodanhgia} />
                                      </Col>

                                    </Row>
                                  )
                                })
                              }
                            </Col>

                          </Row>
                        </TabPane>

                      </Tabs>
                      : change === 2
                        ?
                        <Tabs defaultActiveKey="1" >
                          <TabPane tab="Danh Sách Phụ Kiện" key="1">
                            <Row span={24}>
                              <Col span={24} className='accessory-item-admin'>
                                <Row span={24}>
                                  <Col span={4}>
                                    <p>id_phụ kiện</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>id_loại điện thoại</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>Tên phụ kiện</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>Hình ảnh</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>Giá bán</p>
                                  </Col>
                                  <Col span={4}>
                                    <p>Số lượng đánh giá</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col span={24}>
                                {loadingAccessPhone === true
                                  ?
                                  <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <Col span={24}>
                                      <Space size="middle">
                                        <Spin size="large" />
                                      </Space>
                                    </Col>
                                  </Row>
                                  :
                                  AccessoryPhoneAdmin.map((item) => {
                                    return (
                                      <Row span={24} className='phone-item-title'>
                                        <Col span={4}>
                                          <p>{item.id_phukien}</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>{item.id_loaiphukien}</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>{item.tenphukien}</p>
                                        </Col>
                                        <Col span={4}>
                                          <img className='img-admin' src={item.hinhanh} alt="" />

                                        </Col>
                                        <Col span={4}>
                                          <p>{item.gia.toLocaleString("vi-VN")}đ</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>{item.soluongdanhgia}</p>
                                        </Col>
                                      </Row>
                                    )
                                  })

                                }
                              </Col>

                            </Row>

                          </TabPane>
                          <TabPane tab="Loại Phụ Kiện" key="2">
                            <Row span={24}>
                              <Col span={24} className='typeofAccessory-item-admin'>
                                <Row span={24}>
                                  <Col span={6}>
                                    <p>id_loại phụ kiện</p>
                                  </Col>
                                  <Col span={6}>
                                    <p>Tên loại phụ kiện</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col span={24}>
                                {loadingTypeofAccessory === true
                                  ?
                                  <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <Col span={24}>
                                      <Space size="middle">
                                        <Spin size="large" />
                                      </Space>
                                    </Col>
                                  </Row> :
                                  TypeofAccessory.map((item) => {
                                    return (
                                      <Row span={24} className='phone-item-title'>
                                        <Col span={6}>
                                          <p>{item.id_loaiphukien}</p>
                                        </Col>
                                        <Col span={6}>
                                          <p>{item.tenloaiphukien}</p>
                                        </Col>

                                      </Row>
                                    )
                                  })


                                }
                              </Col>
                            </Row>

                          </TabPane>
                          /</Tabs>
                        : change === 3 ?
                          <Tabs defaultActiveKey="1" >
                            <TabPane tab="Đánh Giá Phụ Kiện" key="1">
                              <Row span={24}>
                                <Col span={24} className='evaluateaccessory-admin'>
                                  <Row span={24}>
                                    <Col span={3}>
                                      <p>id_đánh giá</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>id_user</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>id_điện thoại</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>Tên đánh giá</p>
                                    </Col>
                                    <Col span={6}>
                                      <p>Nội dung đánh giá</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>Thời gian</p>
                                    </Col>
                                    <Col span={3}>
                                      <p>Sao đánh giá</p>
                                    </Col>

                                  </Row>
                                </Col>


                              </Row>
                              {loadingAccessoryReviews === true
                                ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                  <Col span={24}>
                                    <Space size="middle">
                                      <Spin size="large" />
                                    </Space>
                                  </Col>
                                </Row>
                                :
                                AccessoryReviews.map((item) => {
                                  return (
                                    <Row span={24} className='phone-item-title'>
                                      <Col span={3}>
                                        <p>{item.id_danhgiaphukien}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.id_user}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.id_phukien}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.tendanhgia}</p>
                                      </Col>
                                      <Col span={6}>
                                        <p>{item.danhgia}</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>{item.date}</p>
                                      </Col>
                                      <Col span={3}>
                                        <Rate style={{ fontSize: '12px' }} disabled defaultValue={item.saodanhgia} />
                                      </Col>

                                    </Row>
                                  )
                                })
                              }
                            </TabPane>

                          </Tabs>
                          :
                          change === 4
                            ?
                            <Tabs defaultActiveKey="1" >
                              <TabPane tab="Tài khoản người dùng" key="1">
                                <Row span={24}>
                                  <Col span={24} className='evaluateaccessory-admin'>
                                    <Row span={24}>
                                      <Col span={3}>
                                        <p>id_người dùng</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>Tài khoản</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>Họ và tên</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>Mật khẩu</p>
                                      </Col>
                                      <Col span={6}>
                                        <p>Email</p>
                                      </Col>
                                      <Col span={3}>
                                        <p>Giới tính </p>
                                      </Col>
                                      <Col span={3}>
                                        <p>Số điện thoại</p>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                {loadingUserAdmin === true
                                  ?
                                  <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                    <Col span={24}>
                                      <Space size="middle">
                                        <Spin size="large" />
                                      </Space>
                                    </Col>
                                  </Row>
                                  :
                                  UserAdmin.map((item) => {
                                    return (
                                      <Row span={24} className='phone-item-title'>
                                        <Col span={3}>
                                          <p>{item.id_user}</p>
                                        </Col>
                                        <Col span={3}>
                                          <p>{item.taikhoan}</p>
                                        </Col>
                                        <Col span={3}>
                                          <p>{item.hovaten}</p>
                                        </Col>
                                        <Col span={3}>
                                          <p>{item.matkhau}</p>
                                        </Col>
                                        <Col span={6}>
                                          <p>{item.email}</p>
                                        </Col>
                                        <Col span={3}>
                                          <p>{item.gioitinh} </p>
                                        </Col>
                                        <Col span={3}>
                                          <p>{item.sodienthoai}</p>
                                        </Col>
                                      </Row>
                                    )
                                  })
                                }
                              </TabPane>
                            </Tabs>
                            : change === 5
                              ?
                              <Tabs defaultActiveKey="1" >
                                <TabPane tab="Quản lý đơn hàng" key="1">
                                  <Row span={24}>
                                    <Col span={24} className='evaluateaccessory-admin'>
                                      <Row span={24}>
                                        <Col span={4}>
                                          <p>id_đơn hàng</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>id_địa chỉ đơn hàng</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>id_người dùng</p>
                                        </Col>
                                        <Col span={4}>
                                          <p>Ghi chú</p>
                                        </Col>
                                        <Col span={4}>
                                          Thời gian
                                        </Col>
                                        <Col span={4}>
                                          Trạng thái đơn hàng
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  {loadingOderManagement === true
                                    ?
                                    <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                                      <Col span={24}>
                                        <Space size="middle">
                                          <Spin size="large" />
                                        </Space>
                                      </Col>
                                    </Row>
                                    :
                                    OderManagementAdmin.map((item) => {
                                      return (
                                        <Row span={24} className='phone-item-title'>
                                          <Col span={4}>
                                            <p>{item.id_donhangdadatmua}</p>
                                          </Col>
                                          <Col span={4}>
                                            <p>{item.id_donhang}</p>
                                          </Col>
                                          <Col span={4}>
                                            <p>{item.id_user}</p>
                                          </Col>
                                          <Col span={4}>
                                            <p>{item.ghichu}</p>
                                          </Col>
                                          <Col span={4}>
                                            <p>{item.date}</p>
                                          </Col>
                                          <Col span={4}>
                                            <p style={{ color: 'red' }}>{item.trangthai}</p>
                                          </Col>
                                          <Col span={24}>
                                            <Row span={24}>
                                              <Col span={3}>
                                                <Button
                                                  onClick={() => ConfirmAdmin(item.id_donhangdadatmua)}
                                                  style={{ border: '1px solid red' }}>
                                                  Xác Nhận
                                                </Button>
                                              </Col>
                                              <Col span={5}>
                                                <Button
                                                  onClick={() => waitingAdmin(item.id_donhangdadatmua)}
                                                  style={{ border: '1px solid blue' }}>
                                                  Đang chờ giao hàng
                                                </Button>
                                              </Col>
                                              <Col span={5}>
                                                <Button
                                                  onClick={() => CompleteAdmin(item.id_donhangdadatmua)}
                                                >
                                                  Giao hàng thành công
                                                </Button>
                                              </Col>

                                            </Row>
                                          </Col>
                                        </Row>

                                      )
                                    })
                                  }
                                </TabPane>

                              </Tabs>
                              : null



                  }

                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      }
    </div>
  )
}
export default AdminManagement;