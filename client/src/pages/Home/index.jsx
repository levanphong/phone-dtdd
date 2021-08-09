import './styles.css';
import { Carousel, Row, Image, Col, Spin, Space, Menu, Rate, Button, Affix, Modal,Collapse  } from 'antd';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AndroidOutlined, CustomerServiceOutlined, WalletOutlined } from '@ant-design/icons';
import {
  getPhoneHome1Action,
  getPhoneAccessoriesAction,
  getTypeOfPhoneAction,
  GetAccessoriesTypeAction,
  getOutsTandingbrandAction,
  getPhoneAccessories1Action

} from '../../redux/actions';
import Slider from "react-slick";
import history from '../../utils/history';
function HomePage(props) {
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { SubMenu } = Menu;
  const { match } = props;
  const dispatch = useDispatch();
  const Phonehome = useSelector(state => state.homeReducer);
  const { PhoneHomeArr1, loading, PhoneAccessories1, OutStanndArr } = Phonehome;
  useEffect(() => {
    dispatch( getPhoneAccessories1Action(6))
    dispatch(getOutsTandingbrandAction())
    dispatch(getPhoneAccessoriesAction());
    dispatch(getPhoneHome1Action(7));
  }, [dispatch]);
  function handleClick(e) {
    console.log('click', e);
  }
  function TypeOfPhone(item) {
    dispatch(getTypeOfPhoneAction(item))
    history.push('/allproduct')
  }
  function TypeAccc(item) {
    dispatch(GetAccessoriesTypeAction(item));
    history.push('/allaccessories');

  }
  var checkShowmoreArr = [];
  if (OutStanndArr.length !== 0) {
    for (var i = 0; i < 4; i++) {
      checkShowmoreArr.unshift(OutStanndArr[i])
    }
  }
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  const { Panel } = Collapse;
  return (
    <div className="home-all">
      <Row span={24}>
        <Col span={24} >
        <Slider {...settings}>
          <div>
            <h3><img className='img-item'
             src="https://lh3.googleusercontent.com/ds8MdOaCys3ku1fMarvwcEOE2NZmeV9qoOFJrrDeQfocKXtSpPXBRgyIt-b7KrzPaFnottbhC_01F0nXm_yFrfz32gevbN5B=w1920-rw" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item'
             src="https://lh3.googleusercontent.com/Jj-xgwH9NZCn-WFxpJlkBnfAhTJ5smgyxBUjX9QyUR2b-gSHqHjG3XOIUO7yVAcOmV4dQsNA1KvLDaqZEP9hI7Cq-n6ty_4BHg=w1920-rw" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item'
             src="https://lh3.googleusercontent.com/AG5SedH2WWkKWt_Kx85Q-6y5CUbojAWAr1Ksn13XzTuVM0R7IJ7fR8H3FRi-YoFlG2Qe17UrsYolBhGhr4Qye5us1U4OM3vspg=w1920-rw" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item'
             src="https://cdn.tgdd.vn/2021/07/banner/renocb-830-300-830x300.png" 
             /></h3>
          </div>
        </Slider>
        </Col>
      </Row>
      <Row span={24} className='item1'>
        <Col span={24}>
          <Menu onClick={handleClick} style={{ width: 256  , borderRadius:'15px'}} mode="vertical">
            <SubMenu key="sub1" icon={<AndroidOutlined />} title="Điện thoại & loại điện thoại">
              <Menu.ItemGroup title="Thương hiệu điện thoại">
                <Menu.Item key="1" style={{ height: '70px', width: '600px' }}>
                  <Row span={24}>
                    <Col span={8} >
                      <Button
                        onClick={() => TypeOfPhone(1)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => TypeOfPhone(2)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" />
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => TypeOfPhone(3)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" />
                      </Button>
                    </Col>


                  </Row>
                </Menu.Item>
                <Menu.Item key="2" style={{ height: '70px', width: '600px' }} >
                  <Row span={24}>
                    <Col span={8}>
                      <Button
                        onClick={() => TypeOfPhone(4)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" />
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => TypeOfPhone(5)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" />
                      </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        onClick={() => TypeOfPhone(6)}
                        className='typeofphone' >
                        <img className='img-typeofphone'
                          src="https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png" />
                      </Button>
                    </Col>

                  </Row>
                </Menu.Item>
              </Menu.ItemGroup>

            </SubMenu>
            <SubMenu key="sub2" icon={<CustomerServiceOutlined />} title="Phụ kiện">
              <Menu.Item key="5" style={{ height: '70px', width: '700px' }} >
                <Row span={24} >
                  <Col span={6}>
                    <Button
                      onClick={() => TypeAccc(4)}
                      className='typeofphone' >
                      Gậy tự sướng
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      onClick={() => TypeAccc(3)}
                      className='typeofphone' >
                      Cáp Sạc
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      onClick={() => TypeAccc(2)}
                      className='typeofphone' >
                      Tai Nghe
                    </Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      onClick={() => TypeAccc(1)}
                      className='typeofphone' >
                      Sạc Dự Phòng
                    </Button>
                  </Col>
                </Row>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<WalletOutlined />} title="Tất cả sản phẩm">
              <Menu.Item key="5" onClick={() => history.push('/allproduct')}>Tất cả sản phẩm điện thoại</Menu.Item>
              <Menu.Item key="6" onClick={() => history.push('/allaccessories')}>Tất cả phụ kiện</Menu.Item>
            </SubMenu>
          </Menu>,

        </Col>
      </Row>
      <Affix offsetTop={450} onChange={affixed => console.log(affixed)}>
        <Row span={24} className='item-phone'>

          <a onClick={showModal}>
            <img className='img-home' src="https://cdn.icon-icons.com/icons2/1099/PNG/128/1485482192-phone_78665.png" />

          </a>
          <a href='https://www.facebook.com/messages/t/100004486754438'>
            <img className='img-home' src="https://cdn.icon-icons.com/icons2/836/PNG/128/Facebook_Messenger_icon-icons.com_66796.png" />
          </a>

          <Modal title="Liên hệ với chúng tôi theo hotline..." visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Tư vấn mua hàng từ (8h - 21h)</p>
            <h6 style={{ color: 'red' }}>0347409653</h6>
            <p>CSKH - Khiếu nại từ (8h - 21h)</p>
            <h6 style={{ color: 'red' }}>087337000</h6>
          </Modal>

        </Row>
      </Affix>

      {loading === true ?
        <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
          <Col span={24}>
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </Col>
        </Row> :
        <div>
          <Row span={24} className="row-item3" >
            <Col span={24}>
              <Row span={24}>
                <Col span={12} className='item-lm'>
                  <Row span={24} className='item'>
                    <Col span={24}>
                      <Row span={24}>
                        <Col span={20}>
                          <h5>ĐIỆN THOẠI</h5>
                        </Col>
                        <Col span={4}>
                          <a onClick={() => history.push('/allproduct')}>Xem tất cả</a>
                        </Col>
                      </Row>
                      <Row span={24} className='card-full'>
                        {PhoneHomeArr1.map((item) => {
                          return (
                            <Col span={8} className='card-item'>
                              <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                              <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                              <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                              <p style={{ fontSize: '17px', color: 'blue' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                              <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                            </Col>
                          )
                        })}
                      </Row>
                    </Col>
                  </Row>

                </Col>
                <Col span={12} className='item-pml'>
                  <Row span={24} className='item'>
                    <Col span={24}>
                      <Row span={24}>
                        <Col span={20}>
                          <h5>PHỤ KIỆN ĐIỆN THOẠI</h5>
                        </Col>
                        <Col span={4}>
                          <a onClick={() => history.push('/allaccessories')}>Xem tất cả</a>
                        </Col>
                      </Row>
                      <Row span={24} className='card-full'>
                        {PhoneAccessories1.map((item) => {
                          return (
                            <Col span={8} className='card-item'>
                              <a onClick={() => history.push(`/productdetailaccessory/${item.id_phukien}/${item.id_loaiphukien}`)}><img className='img-1' src={item.hinhanh} /></a>
                              <p style={{ fontSize: '17px' }}>{item.tenphukien}</p>
                              <p style={{ fontSize: '17px', color: 'blue' }}><b>{item.gia.toLocaleString("vi-VN")}đ</b></p>
                              <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={3} />  {item.soluongdanhgia} đánh giá </p>
                            </Col>
                          )
                        })}
                      </Row>
                    </Col>
                  </Row>


                </Col>
              </Row>
            </Col>
          </Row>
          <Row span={24} >
            <Col span={24}>
              <Row span={24} className='row-item4'>
                <Col span={24}>
                  <h5 className='item-out'>Thương hiệu nỗi bật : APPLE</h5>
                </Col>
                <Col span={24}>
                  <Row span={24}>
                    {checkShowmoreArr.map((item) => {
                      return (
                        <Col span={6} className='card-item11'>
                          <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                          <p style={{ fontSize: '17px' }}>{item.tendienthoai}</p>
                          <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                          <p style={{ fontSize: '17px', color: 'blue' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                          <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                        </Col>
                      )
                    })}
                  </Row>
                </Col>

              </Row>

            </Col>

          </Row>
        </div>



      }


    </div>

  );
}
export default HomePage;
