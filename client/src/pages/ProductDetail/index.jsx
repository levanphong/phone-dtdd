import './styles.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPhoneProductDetailAction,
  getPhoneProductDetailRamAction,
  getPhoneProductDetailColorAction,
  getRelateProductAction,
  AddCartAction,
  getCartAction,
  AddEvaluateAction,
  getEvaluateAction,
  totalstarAction
} from '../../redux/actions';
import { Row, Col, Button, Image, Radio, Form, Input, Rate, Progress, Space, Spin, Pagination,Collapse, } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import swal from 'sweetalert';
import history from '../../utils/history';
import moment from 'moment';
import Slider from "react-slick";
function ProductDetail(props) {
  //Đặt State
  const [checkColor, setCheckColor] = useState(0);
  const [value, setValueRam] = useState(0);
  const [nameColor, setNameColor] = useState(0);
  const [value1, setValuePrice] = useState(0);
  const [ShowmoreEvaluate, setShowmoreEvaluete] = useState(1);
  const [iShowmor, setIshowmore] = useState(6);
  //Gọi dữ liệu từ Store
  const { match } = props;
  const ProductDetail = useSelector(state => state.productReduct);
  const { PhoneProductDetail,
    loading,
    RamProductDetail,
    ColorProductDetail,
    Evaluate,
    loadingEvaluate,
    RelateProduct } = ProductDetail;
  const Login = useSelector(state => state.userReducer);
  const { userLoginLocal } = Login;
  const Cart = useSelector(state => state.cartReducer);
  const { getCart } = Cart;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvaluateAction())
    dispatch(getCartAction());
    dispatch(getPhoneProductDetailAction(match.params.id));
    dispatch(getPhoneProductDetailRamAction(match.params.id));
    dispatch(getPhoneProductDetailColorAction(match.params.id));
    dispatch(getRelateProductAction(match.params.id_loaidienthoai));
  }, [dispatch]);
  //Đặt biến
  const onChange = e => {
    setValueRam(e.target.value);
    setValuePrice(e.target.value1)
  };
  var cartArr = {
    Id_user: userLoginLocal.id_user,
    Phonename: PhoneProductDetail[0]?.tendienthoai,
    Phonetypename: PhoneProductDetail[0]?.tenloaidienthoai,
    Ram: value,
    Color: nameColor,
    Image: PhoneProductDetail[0]?.hinhanh,
    Price: value1,
    Promotionalprice: PhoneProductDetail[0]?.giakhuyenmai,
    Amount: 1,
    Content: 'ok'
  }
  var checkCart = getCart.findIndex((item) => {
    return cartArr.Color === item.mau && cartArr.Ram === item.ram && cartArr.Id_user === item.id_user
  })
  const { Panel } = Collapse;
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3
  };
  //Check đánh giá
  var checkEvaluate = Evaluate.findIndex((item) => {
    return PhoneProductDetail[0]?.id_dienthoai === item.id_dienthoai;
  })
  var EvaluateId_phone = [];
  if (checkEvaluate !== -1) {
    EvaluateId_phone = Evaluate.filter(item => PhoneProductDetail[0]?.id_dienthoai === item.id_dienthoai);
  }
  //
  //Show more
  var checkShowmoreArr = [];
  if (EvaluateId_phone.length !== 0) {
    for (var i = 0; i < iShowmor && i < EvaluateId_phone.length; i++) {
      checkShowmoreArr.push(EvaluateId_phone[i])
    }
  }

  //
  //Sao đánh giá
  var star = EvaluateId_phone.findIndex((item) => {
    return item.saodanhgia === 1 || item.saodanhgia === 2 || item.saodanhgia === 3 || item.saodanhgia === 4 || item.saodanhgia === 5
  })
  var starArr1 = [];
  var starArr2 = [];
  var starArr3 = [];
  var starArr4 = [];
  var starArr5 = [];

  if (star !== -1) {
    starArr1 = EvaluateId_phone.filter(item => item.saodanhgia === 1);
    starArr2 = EvaluateId_phone.filter(item => item.saodanhgia === 2);
    starArr3 = EvaluateId_phone.filter(item => item.saodanhgia === 3);
    starArr4 = EvaluateId_phone.filter(item => item.saodanhgia === 4);
    starArr5 = EvaluateId_phone.filter(item => item.saodanhgia === 5);

  }

  //Tổng số đánh giá
  var totalstar = starArr1.length + starArr2.length + starArr3.length + starArr4.length + starArr5.length;
  //
  //Số sao đánh giá nhìu nhất
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
  console.log(totalmax)
  //

  //Viết function
  function AddCard() {
    dispatch(getCartAction())
   if(userLoginLocal.false !=='false'){
    if (userLoginLocal.length === 0) {
      swal("Quý khách vui lòng đăng nhập trước khi thêm vào giỏ hàng!")
    } else {
      if (nameColor === 0) {
        swal("Quý khách vui lòng chọn màu!");
      } else if (value === 0) {
        swal("Quý khách vui lòng chọn ram!")
      } else if (checkCart === -1) {
        swal('Thêm vào giỏ hàng thành công')
        dispatch(AddCartAction(cartArr));
        dispatch(getCartAction());

      } else {
        swal("Sản phẩm đã tồn tại trong giỏ hàng");
      }
    }
   }else{
     swal("Bạn cần đăng nhập trước khi mua hàng")
   }
  }
  function AddCard1() {
    dispatch(getCartAction())
    if (userLoginLocal.length === 0) {
      swal("Quý khách vui lòng đăng nhập trước khi thêm vào giỏ hàng!")
    } else {
      if (nameColor === 0) {
        swal("Quý khách vui lòng chọn màu!");
      } else if (value === 0) {
        swal("Quý khách vui lòng chọn ram!")
      } else if (checkCart === -1) {
        swal('Thêm vào giỏ hàng thành công')
        dispatch(AddCartAction(cartArr));
        dispatch(getCartAction());


      }
       else {
        swal("Sản phẩm đã tồn tại trong giỏ hàng");
      }
    }
    history.push('/cart')
  }
  function onFinish(value) {
    dispatch(getEvaluateAction())
    const formEvaluate = {
      ...value,
      id_phone: PhoneProductDetail[0]?.id_dienthoai,
      Id_user: userLoginLocal.id_user,
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      lastName: userLoginLocal.lastName
    }
    const totalstar1 = {
      id_phone: PhoneProductDetail[0]?.id_dienthoai,
      total: totalstar + 1,
      totalmax: totalmax
    }
    if (userLoginLocal.false !== 'false') {
      dispatch(totalstarAction(totalstar1));
      dispatch(AddEvaluateAction(formEvaluate));
      swal("Bạn đã đánh giá thành công");
      dispatch(getEvaluateAction(userLoginLocal.id_user))
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
  function Relate(item) {

    dispatch(getEvaluateAction())
    dispatch(getCartAction());
    dispatch(getPhoneProductDetailAction(match.params.id));
    dispatch(getPhoneProductDetailRamAction(match.params.id));
    dispatch(getPhoneProductDetailColorAction(match.params.id));
    dispatch(getRelateProductAction(match.params.id_loaidienthoai));
    history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)
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
              <p className='detail-item2'>Điện thoại di động {PhoneProductDetail[0]?.tendienthoai} </p>
            </Col>
          </Row>
          <Row span={24} className='product-full'>
            <Col span={18} className='product-detail1'>
              <Row span={24}>
                <Col span={10}>
                  <Image style={{ width: '300px' }} src={PhoneProductDetail[0]?.hinhanh} />
                </Col>
                <Col span={14}>
                  <Row span={24}>
                    <Col span={24}>
                      <h4>Điện thoại di động {PhoneProductDetail[0]?.tendienthoai}</h4>
                    </Col>
                    <Row span={24}>
                      <Col span={8}>
                        <Row span={24}>
                          <Col span={24}>
                            <p>Thương hiệu {PhoneProductDetail[0]?.tenloaidienthoai}</p>
                            <p style={{ fontSize: '12px', color: 'rgb(243, 81, 81)' }}>Chỉ còn {PhoneProductDetail[0]?.soluong} sản phẩm</p>
                          </Col>
                          <Col span={24}>
                            <h5 style={{ color: 'rgb(102, 117, 245)' }}>{PhoneProductDetail[0]?.giakhuyenmai.toLocaleString("vi-VN")}đ</h5>
                            <p style={{ textDecoration: 'line-through', color: 'rgb(160, 152, 152)' }}>{PhoneProductDetail[0]?.giaban.toLocaleString("vi-VN")}đ</p>
                          </Col>
                          <Row span={24}>
                            <Col span={24} className='item-discount'>
                              <p><img style={{ width: '50px' }} src="https://media3.scdn.vn/img4/2019/12_28/11dAqODEcSVLwTB6ctT6_simg_de2fe0_500x500_maxb.jpg" alt="" /><b>Giảm giá</b></p>
                              <p>Giảm trực tiếp {(PhoneProductDetail[0]?.giaban - PhoneProductDetail[0]?.giakhuyenmai).toLocaleString("vi-VN")}đ</p>
                            </Col>
                          </Row>
                        </Row>
                      </Col>
                      <Col span={16}>
                        <Row span={24}>
                          {ColorProductDetail.map((item) => {
                            return (
                              <Col span={8}>
                                <Button
                                  style={{ width: '100px' }}
                                  onClick={() => setCheckColor(item.id_loairam,
                                    setNameColor(item.tenmau),
                                    dispatch(getCartAction())
                                  )} >
                                  {item.tenmau}
                                </Button>
                              </Col>
                            )
                          })}
                        </Row>
                        <Row span={24} className='radio-ram'>
                          {RamProductDetail.map((item) => {
                            if (checkColor === item.id_loairam) {
                              return (
                                <Col span={8} style={{ color: 'red', fontSize: '18px' }}>
                                  <Radio.Group onChange={onChange} value={value}>
                                    <Radio value={item.tenram} value1={item.giaban}>{item.tenram} GB</Radio>
                                  </Radio.Group>
                                  <Col span={8}>
                                    <p>{item.giaban.toLocaleString("vi-VN")}đ</p>
                                  </Col>
                                </Col>
                              )
                            }
                          })}
                        </Row>
                      </Col>
                    </Row>
                  </Row>
                  <Row span={24} className='btn-item1' >
                    <Col span={12} >
                      <Button
                        onClick={() => AddCard1(dispatch(getCartAction()))}
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
                        onClick={() => AddCard(dispatch(getCartAction()))}
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
                  <p>_{PhoneProductDetail[0]?.noidung}</p>
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
            <Col span={16} >
              <h5 style={{ borderBottom: '1px solid rgb(203, 206, 211)', paddingBottom: '10px' }}>Mô tả sản phẩm</h5>
              <h6>Đánh giá chi tiết {PhoneProductDetail[0]?.tendienthoai}</h6>
              <p className='mota'>{PhoneProductDetail[0]?.mota}</p>
              <Collapse style={{marginBottom:'10px'}} defaultActiveKey={['0']} >
                <Panel header="Xem thêm" key="1">
                  <img style={{width:'300px'}} src={PhoneProductDetail[0]?.hinhanh} alt="" />
                  <p>{PhoneProductDetail[0]?.mota1}</p>
                </Panel>

              </Collapse>
              <Row span={24} className='evaluate-full'>
                <Col span={24} className='evaluate-item'>
                  <h6>Đánh giá Điện thoại {PhoneProductDetail[0]?.tendienthoai}</h6>
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
                    {loadingEvaluate === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
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
                      <Pagination style={{ paddingTop: '10px' }} defaultCurrent={1} onChange={onChange1} total={EvaluateId_phone.length} />
                    </Col>

                  </Row>
                </Col>
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
                      <Rate tooltips={desc} value={value} />
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
            <Col span={8} className='specifications' >
              <h5>Thông số kỹ thuật</h5>
              <Row span={24}>
                <Col span={10}>
                  <p className='specifications-item'>Thương hiệu</p>
                  <p>Bảo hành</p>
                  <p className='specifications-item'>Tên</p>
                  <p>Màu sắc</p>
                  <p className='specifications-item'>Loại màn hình</p>
                  <p>Độ phân giải</p>
                  <p className='specifications-item'>RAM</p>
                </Col>
                <Col span={14}>
                  <p className='specifications-item'>{PhoneProductDetail[0]?.tenloaidienthoai}</p>
                  <p>12</p>
                  <p className='specifications-item'>{PhoneProductDetail[0]?.tendienthoai}</p>
                  <p>{PhoneProductDetail[0]?.tenmau}</p>
                  <p className='specifications-item'>6.1" OLED - Super Retina XDR</p>
                  <p>2532 x 1170 pixel (460ppi)</p>
                  <p className='specifications-item'>4GB</p>
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
                  {RelateProduct.map((item) => {
                    return (
                      <Col span={4} className='card-item-productdetail' >
                        <a onClick={() => Relate(item)}><img className='img-1' src={item.hinhanh} /></a>
                        <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                        <p style={{ fontSize: '17px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                        <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                        <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Slider>
          </div>

        </div>
      }




    </div>
  )
}
export default ProductDetail;