import './styles.css'
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Space, Spin, Select, Button, Rate } from 'antd';
import history from '../../utils/history';
import Slider from "react-slick";
import {
  getPhoneAccessoriesAction,
  getSearchAction,
  GetAccessoriesTypeAction

} from '../../redux/actions'
function Allaccessories() {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  const dispatch = useDispatch();
  const Phoneaccessories = useSelector(state => state.homeReducer);
  const { loading, PhoneAccessories } = Phoneaccessories;
  const Allproduct = useSelector(state => state.allproductReducer);
  const { SearchArr
  } = Allproduct;
  const Accessory = useSelector(state => state.prductAccessoryReducer);
  const {AccessoriesType} = Accessory;
  console.log(AccessoriesType)
  useEffect(() => {
    dispatch(getPhoneAccessoriesAction());
    dispatch(getSearchAction(SearchArr))
  }, [dispatch]);

  return (
    <div className='container-all-accessories'>
      {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Col span={24}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Col>
      </Row> : <div>
        <Row span={24}>
          <Col span={24}>
            <Row span={24}>
              <Col span={16}>
              <Slider {...settings}>
          <div>
            <h3><img className='img-item1'
             src="https://cdn.tgdd.vn/2021/07/banner/800-200-800x200-119.png" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item1'
             src="https://cdn.tgdd.vn/2021/06/banner/SN-Oplung-800-200-800x200.png" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item1'
             src="https://cdn.tgdd.vn/2021/06/banner/buds-800-200-800x200.png" 
             /></h3>
          </div>
          <div>
            <h3><img className='img-item1'
             src="https://cdn.tgdd.vn/2021/06/banner/800-200-800x200-100.png" 
             /></h3>
          </div>
        </Slider>
              </Col>
              <Col span={8}>
                <Row span={24}>
                  <Col span={24}>
                    <img src="https://cdn.tgdd.vn/2021/05/banner/sticky-pk-390-97-390x97-1.png" alt="" />
                  </Col>
                  <Col span={24} style={{marginTop:'5px'}}>
                    <img src="https://cdn.tgdd.vn/2021/05/banner/sticky-pk-390-97-copy2-390x97.png" alt="" />
                  </Col>
                </Row>
              </Col>

            </Row>
          </Col>
          <Col span={24} className='all-product-item'>
            <h5>Tất cả sản phẩm</h5>
            <p><b>Thương hiệu</b></p>
         
            <Row span={24} className='card-full'>
              {SearchArr.length===0 && AccessoriesType.length ===0 ? PhoneAccessories.map((item) => {
                return (
                  <Col span={4} className='card-item-product'>
                    <a onClick={() => history.push(`/productdetailaccessory/${item.id_phukien}/${item.id_loaiphukien}`)}><img className='img-1' src={item.hinhanh} /></a>
                    <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tenphukien}</p>
                    <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.gia.toLocaleString("vi-VN")}đ</b></p>
                    <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={3} />  {item.soluongdanhgia} đánh giá </p>
                  </Col>
                )
              }) : AccessoriesType.length!==0 ?
              AccessoriesType.map((item) => {
                return (
                  <Col span={4} className='card-item-product'>
                    <a onClick={() => history.push(`/productdetailaccessory/${item.id_phukien}/${item.id_loaiphukien}`)}><img className='img-1' src={item.hinhanh} /></a>
                    <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tenphukien}</p>
                    <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.gia.toLocaleString("vi-VN")}đ</b></p>
                    <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={3} />  {item.soluongdanhgia} đánh giá </p>
                  </Col>
                )
              }):
               SearchArr.map((item) => {
                return (
                  <Col span={4} className='card-item-product'>
                    <a onClick={() => history.push(`/productdetailaccessory/${item.id_phukien}/${item.id_loaiphukien}`)}><img className='img-1' src={item.hinhanh} /></a>
                    <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tenphukien}</p>
                    <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.gia.toLocaleString("vi-VN")}đ</b></p>
                    <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={3} />  {item.soluongdanhgia} đánh giá </p>
                  </Col>
                )
              })}

            </Row>
          </Col>
        

        </Row>
      </div>}

    </div>
  )
}
export default Allaccessories;