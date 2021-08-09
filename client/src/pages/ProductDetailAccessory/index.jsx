import './style.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AccessoryDetailsAction,
  AddCardAccessoryAction,
  getCartAction,
  AddEvaluateAccessoryAction,
  getAccessoryEvaluateAction,
  totalstarAccessoryAction,
  GetAccessoriesTypeAction
} from '../../redux/actions'
import { Row, Col, Button, Image, Radio, Form, Input, Rate, Progress, Space, Spin, Pagination } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import swal from 'sweetalert';
import history from '../../utils/history';
import moment from 'moment';
import Slider from "react-slick";
function ProductDetailAccessory(props) {
  // Đặt State
  const [iShowmor, setIshowmore] = useState(6);
  //
  const { match } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(GetAccessoriesTypeAction(match.params.id_loaidienthoai))
    dispatch(getAccessoryEvaluateAction())
    dispatch(getCartAction())
    dispatch(AccessoryDetailsAction(match.params.id))
  }, [dispatch]);
  const Accessory = useSelector(state => state.prductAccessoryReducer);
  const { AccessoryDetail, loading, AcessoryEvaluate, loadingAccessory,AccessoriesType } = Accessory;
  const Login = useSelector(state => state.userReducer);
  const { userLoginLocal } = Login;
  const Cart = useSelector(state => state.cartReducer);
  const { getCart } = Cart;

  //Check đánh giá phu kien
  var checkEvaluateAccessory = AcessoryEvaluate.findIndex((item) => {
    return AccessoryDetail[0]?.id_phukien === item.id_phukien;
  })
  var EvaluateAccessoryId_phone = [];
  if (checkEvaluateAccessory !== -1) {
    EvaluateAccessoryId_phone = AcessoryEvaluate.filter(item => AccessoryDetail[0]?.id_phukien === item.id_phukien);
  }
  var star = EvaluateAccessoryId_phone.findIndex((item) => {
    return item.saodanhgia === 1 || item.saodanhgia === 2 || item.saodanhgia === 3 || item.saodanhgia === 4 || item.saodanhgia === 5
  })
  var starArr1 = [];
  var starArr2 = [];
  var starArr3 = [];
  var starArr4 = [];
  var starArr5 = [];

  if (star !== -1) {
    starArr1 = EvaluateAccessoryId_phone.filter(item => item.saodanhgia === 1);
    starArr2 = EvaluateAccessoryId_phone.filter(item => item.saodanhgia === 2);
    starArr3 = EvaluateAccessoryId_phone.filter(item => item.saodanhgia === 3);
    starArr4 = EvaluateAccessoryId_phone.filter(item => item.saodanhgia === 4);
    starArr5 = EvaluateAccessoryId_phone.filter(item => item.saodanhgia === 5);

  }
  // check lấy sao lớn nhất
  var maxStar = starArr1.length;
  var totalmax = 1;
  if (starArr2.length > maxStar) {
    maxStar = starArr2.length
    totalmax = 2;
  }
  if (starArr3.length > maxStar) {
    maxStar = starArr3.length
    totalmax = 3;
  }
  if (starArr4.length > maxStar) {
    maxStar = starArr4.length
    totalmax = 4;
  }
  if (starArr5.length > maxStar) {
    maxStar = starArr5.length
    totalmax = 5;
  }
  //
  //Tổng số đánh giá
  var totalstar = starArr1.length + starArr2.length + starArr3.length + starArr4.length + starArr5.length;
  //
  //Show more
  var checkShowmoreArr = [];
  if (EvaluateAccessoryId_phone.length !== 0) {
    for (var i = 0; i < iShowmor && i < EvaluateAccessoryId_phone.length; i++) {
      checkShowmoreArr.unshift(EvaluateAccessoryId_phone[i])
    }
  }
  //
  //
  //Đặt biến
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  var cartArr = {
    Id_user: userLoginLocal.id_user,
    Accessorusname: AccessoryDetail[0]?.tenphukien,
    Image: AccessoryDetail[0]?.hinhanh,
    Price: AccessoryDetail[0]?.gia,
    Amount: 1,
    Content: 'ok',
    Ram: 1,
    Color: 'khong',
    Promotionalprice: 0,
    Phonetypename: 'khong'




  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3
  };
  var checkCart = getCart.findIndex((item) => {
    return cartArr.Accessorusname === item.tendienthoai;
  })

  //
  //function
  function AddCardAccessory() {
    dispatch(getCartAction())
   if(userLoginLocal.false !== "false"){
    if (checkCart === -1) {
      dispatch(AddCardAccessoryAction(cartArr))
      dispatch(getCartAction());
      swal("Bạn đã thêm sản phẩm thành công")
    }else if(userLoginLocal.false !== 'false'){
      swal('Bạn cần đăng nhập trước khi mua')

    }
     else {
      swal("Sản phẩm đã tồn tại trong giỏ hàng")
    }
   }else{
     swal("Bạn cần đăng nhập trước khi mau hàng")
   }
  }
  function onFinish(value) {
    dispatch(getAccessoryEvaluateAction())
    const formEvaluate = {
      ...value,
      id_Accessory: AccessoryDetail[0]?.id_phukien,
      Id_user: userLoginLocal.id_user,
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      lastName: userLoginLocal.lastName
    }
    const totalstar1 = {
      id_Accessory: AccessoryDetail[0]?.id_phukien,
      total: totalstar + 1,
      totalmax: totalmax
    }

    if (userLoginLocal.false !== 'false') {
      dispatch(totalstarAccessoryAction(totalstar1));
      dispatch(AddEvaluateAccessoryAction(formEvaluate));
     if(loading === false){
      swal('Bạn đã đánh giá thành công')
      dispatch(getAccessoryEvaluateAction())
     }
    } else {
      swal("Bạn cần đăng nhập trước khi đánh giá !")
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
  function Relate(item){
    dispatch(getAccessoryEvaluateAction())
    dispatch(getCartAction())
    dispatch(AccessoryDetailsAction(match.params.id))

    history.push(`/productdetailaccessory/${item.id_phukien}/${item.id_loaiphukien}`)
  }
  //
  return (
    <div className='container-detail-full'>
      {loading === true ?
        <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
          <Col span={24}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </Col>
        </Row> : <div>
          <Row span={24} className='detail-item'>
            <Col span={1} className='detail-item1'>
              <Button onClick={() => history.push('/')}
                className='btn1' icon={<HomeOutlined />}>
              </Button>
            </Col>
            <Col span={23} >
              <p className='detail-item2'>Phụ kiện {AccessoryDetail[0]?.tenphukien} </p>
            </Col>
          </Row>
          <Row span={24} className='product-full'>
            <Col span={18} className='product-detail1'>
              <Row span={24}>
                <Col span={10}>
                  <Image style={{ width: '300px' }} src={AccessoryDetail[0]?.hinhanh} />
                </Col>
                <Col span={14}>
                  <Row span={24}>
                    <Col span={24}>
                      <h4>Phụ kiện {AccessoryDetail[0]?.tenphukien}</h4>
                    </Col>
                    <Row span={24}>
                      <Col span={8}>
                        <Row span={24}>
                          <Col span={24}>
                            <h5 style={{ color: 'rgb(102, 117, 245)' }}>{AccessoryDetail[0]?.gia.toLocaleString("vi-VN")}đ</h5>
                          </Col>
                          <Row span={24}>
                            <Col span={24} className='item-discount'>
                              <p><img style={{ width: '50px' }} src="https://media3.scdn.vn/img4/2019/12_28/11dAqODEcSVLwTB6ctT6_simg_de2fe0_500x500_maxb.jpg" alt="" /><b>Giảm giá</b></p>
                            </Col>
                          </Row>
                        </Row>
                      </Col>

                    </Row>
                  </Row>
                  <Row span={24} className='btn-item1' >
                    <Col span={12} >
                      <Button
                        onClick={() => AddCardAccessory(history.push('/cart'))}
                        style={{
                          borderRadius: '5px',
                          height: '50px',
                          width: '250px',
                          backgroundColor: 'rgb(20, 53, 195)',
                          color: 'white'
                        }}>MUA NGAY</Button>
                    </Col>
                    <Col span={12}>
                      <Button
                        onClick={() => AddCardAccessory()}
                        style={{
                          borderRadius: '5px',
                          height: '50px',
                          width: '240px',
                          border: '1px solid  rgb(20, 53, 195)',
                          color: 'rgb(20, 53, 195)'
                        }}>THÊM VÀO GIỎ HÀNG</Button>

                    </Col>
                  </Row>

                </Col>
              </Row>
              <Row span={24} className='content-full'>
                <Col span={10} className='content-item'>
                  <p>_ Chính hãng, Mới 100%, Nguyên seal</p>
                  <p>_{AccessoryDetail[0]?.noidung}</p>
                </Col>
                <Col span={14} className='content-item1'>
                  <p><b>Khuyến mãi liên quan</b></p>
                  <p><li>Nhập mã <b>PV300</b> giảm thêm 3% tối đa <b>300.000đ</b> khi thanh toán qua VNPAY-QR.</li></p>
                </Col>

              </Row>
            </Col>
            <Col span={6} >
              <Row span={24} className='product-detail2'>
                <Col span={24}>
                  <p className='detail2-item' >Sản phẩm được miễn phí trong tháng</p>
                  <h6>Chính sách bán hàng</h6>
                  <p>Miễn phí giao hàng cho đơn hàng từ 800K</p>
                  <p>Cam kết hàng chính hãng 100%</p>
                  <p>Đổi trả trong vòng 10 ngày</p>
                  <h6>Dịch vụ khác</h6>
                  <p>Sửa chữa đồng giá 150.000đ.</p>
                  <p>Vệ sinh máy tính, laptop.</p>
                  <p>Bảo hành tại nhà.</p>
                </Col>

              </Row>
            </Col>
          </Row>
          <Row span={24} className='describe-item'>
            <Col span={16}>
              <h5 style={{ borderBottom: '1px solid rgb(203, 206, 211)', paddingBottom: '10px' }}>Mô tả sản phẩm</h5>
              <h6>Đánh giá chi tiết : {AccessoryDetail[0]?.tenphukien}</h6>
              <p>{AccessoryDetail[0]?.noidung}</p>
              <Row span={24} className='evaluate-full'>
                <Col span={24} className='evaluate-item'>
                  <h6>Đánh giá phụ kiện :{AccessoryDetail[0]?.tenphukien}</h6>
                </Col>
                <Col span={24}>
                  <Row span={24}>
                    <Col span={12} className='Progress'>
                      <Row span={24}>
                        <Col span={1}>
                          1
                          2
                          3
                          4
                          5
                        </Col>
                        <Col span={7}>
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={1} />
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={2} />
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={3} />
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={4} />
                          <Rate style={{ fontSize: '12px' }} disabled defaultValue={5} />
                        </Col>
                        <Col span={16}>
                          <Progress percent={(starArr1.length * 100 / totalstar).toFixed(2)} />
                          <Progress percent={(starArr2.length * 100 / totalstar).toFixed(2)} />
                          <Progress percent={(starArr3.length * 100 / totalstar).toFixed(2)} />
                          <Progress percent={(starArr4.length * 100 / totalstar).toFixed(2)} />
                          <Progress percent={(starArr5.length * 100 / totalstar).toFixed(2)} />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row span={24}>
                    {loadingAccessory === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <Col span={24}>
                        <Space size="middle">
                          <Spin size="large" />
                        </Space>
                      </Col>
                    </Row> :

                      checkShowmoreArr.map((item) => {
                        return (
                          <Col span={24} className='item-content'>
                            <h6>{item.tendanhgia}</h6>
                            <Rate style={{ fontSize: '12px' }} disabled defaultValue={item.saodanhgia} />
                            <p>{item.danhgia}</p>
                            <p>{item.date}</p>
                          </Col>
                        )
                      })}
                    <Col span={24}>
                      <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={EvaluateAccessoryId_phone.length} />
                    </Col>

                  </Row>
                </Col>


              </Row>
              <Row span={24} className='evaluate-full'>
                <Col span={24} className='form-evaluate' >
                  <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label="Nhập sao đánh giá"
                      name="star"
                      rules={[{ required: true, message: 'Vui lòng chọn sao đánh giá!' }]}
                    >
                      <Rate tooltips={desc} />
                    </Form.Item>

                    <Form.Item
                      label="Nội dụng đánh giá"
                      name="contentrated"
                      rules={[{ required: true, message: 'Nhập nội dung đánh giá!' }]}
                    >
                      <Input style={{ height: '100px' }} />
                    </Form.Item>
                    <Form.Item >
                      <Button style={{
                        width: '200px',
                        backgroundColor: 'white',
                        color: 'black',
                        border: '1px solid red'
                      }}
                        type="primary"
                        htmlType="submit">
                        Viết đánh giá
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>

              </Row>
            </Col>

          </Row>
          <div className='related-products'>
            <h4 style={{
              paddingBottom: '20px',
              borderBottom: '1px solid rgb(216, 209, 209)'
            }}>Sản phẩm liên quan</h4>
            <Slider {...settings}>
              <Col span={24}>
                <Row span={24} className='related-item'>
                  {AccessoriesType.map((item) => {
                    return (
                      <Col span={4} className='card-item-productdetail' >
                        <a onClick={() => Relate(item)}><img className='img-1' src={item.hinhanh} /></a>
                        <p style={{ fontSize: '15px', paddingTop: '10px'  }}>{item.tenphukien}</p>
                        <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.gia.toLocaleString("vi-VN")}đ</b></p>
                        <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={3} />  {item.soluongdanhgia} đánh giá </p>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Slider>
          </div>
        </div>}



    </div>
  )
}
export default ProductDetailAccessory;