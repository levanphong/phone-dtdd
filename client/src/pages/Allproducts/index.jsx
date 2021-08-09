import './styles.css'
import { Row, Col, Space, Spin, Select, Button, Rate } from 'antd';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPhoneHome1Action,
  getSearchAction,
  getPriceIncreaseAction,
  getDiscountByPriceAction,
  RemovegetPriceIncreaseAction,
  RemoveDiscountBypriceAction,
  getTypeOfPhoneAction,

} from '../../redux/actions';
import history from '../../utils/history';
function Allproduct() {
  const [showmore, setShowmore] = useState(20)
  const { Option } = Select;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhoneHome1Action(showmore));
    dispatch(getSearchAction(SearchArr));
    return () => {
      dispatch(RemovegetPriceIncreaseAction())
      dispatch(RemoveDiscountBypriceAction())
    }
  }, [dispatch]);
  const Phonehome = useSelector(state => state.homeReducer);
  const { PhoneHomeArr1, loading } = Phonehome;
  const Allproduct = useSelector(state => state.allproductReducer);
  const { SearchArr,
    loadingSearch,
    PriceIncrease,
    DiscountPrice,
    TypeofphoneArr
  } = Allproduct;
  console.log(SearchArr)
  function handleChange(value) {
    if (value === 'tang') {
      dispatch(RemoveDiscountBypriceAction())
      dispatch(getPriceIncreaseAction())

    } else if (value === 'giam') {
      dispatch(RemovegetPriceIncreaseAction())
      dispatch(getDiscountByPriceAction());
    }
  }
  function ShowmoreAllproduct() {
    setShowmore(showmore + 6);
    dispatch(getPhoneHome1Action(showmore));

  }
  return (
    <div className='all-product'>
      {loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
        <Col span={24}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </Col>
      </Row> : <div>
        <Row span={24}>
          <Col span={24} className='all-product-item'>
            <h5>Tất cả sản phẩm</h5>
            <p><b>Thương hiệu</b></p>
            <Row span={24}>
              <Col span={4} >
                <Button
                  onClick={() =>
                    dispatch(getTypeOfPhoneAction(1))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  onClick={() => dispatch(getTypeOfPhoneAction(2))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" />
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  onClick={() => dispatch(getTypeOfPhoneAction(3))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg" />
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  onClick={() => dispatch(getTypeOfPhoneAction(4))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/Vivo42-b_50.jpg" />
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  onClick={() => dispatch(getTypeOfPhoneAction(5))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/logo-xiaomi-220x48-5.png" />
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  onClick={() => dispatch(getTypeOfPhoneAction(6))}
                  className='typeofphone' >
                  <img className='img-typeofphone'
                    src="https://cdn.tgdd.vn/Brand/1/Realme42-b_37.png" />
                </Button>
              </Col>

            </Row>
            <Row span={24}>
              <p><b>Sắp xếp</b></p>
              <Col span={24}>
                <Select defaultValue="Sắp xếp theo giá " style={{ width: 200 }} onChange={handleChange}>
                  <Option value="tang">Sắp xếp theo giá tăng dần</Option>
                  <Option value="giam">Sắp xếp theo giá giảm dần</Option>

                </Select>
              </Col>
            </Row>
            <Row span={24} className='card-full'>
              {SearchArr.length === 0
                && PriceIncrease.length === 0
                && DiscountPrice.length === 0
                && TypeofphoneArr.length === 0
                ? PhoneHomeArr1.map((item) => {
                  return (
                    <Col span={4} className='card-item-product'>
                      <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                      <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                      <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                      <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                      <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                    </Col>
                  )
                }) : loading === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                  <Col span={24}>
                    <Space size="middle">
                      <Spin size="large" />
                    </Space>
                  </Col>
                </Row> : PriceIncrease.length !== 0
                  && SearchArr.length === 0 &&
                  DiscountPrice.length === 0 &&
                  TypeofphoneArr.length === 0
                  ? PriceIncrease.map((item) => {
                    return (
                      <Col span={4} className='card-item-product'>
                        <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                        <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                        <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                        <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                        <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                      </Col>
                    )
                  }) : DiscountPrice.length !== 0
                    && SearchArr.length === 0 &&
                    TypeofphoneArr.length === 0
                    ? DiscountPrice.map((item) => {
                      return (
                        <Col span={4} className='card-item-product'>
                          <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                          <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                          <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                          <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                          <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                        </Col>
                      )
                    }) : TypeofphoneArr.length !== 0 ? TypeofphoneArr.map((item) => {
                      return (
                        <Col span={4} className='card-item-product'>
                          <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                          <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                          <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                          <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                          <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                        </Col>
                      )
                    }) : loadingSearch === true ? <Row span={24} style={{ textAlign: 'center', paddingTop: '20px' }}>
                      <Col span={24}>
                        <Space size="middle">
                          <Spin size="large" />
                        </Space>
                      </Col>
                    </Row> : SearchArr.map((item) => {
                      return (
                        <Col span={4} className='card-item-product'>
                          <a onClick={() => history.push(`/productdetail/${item.id_dienthoai}/${item.id_loaidienthoai}`)}><img className='img-1' src={item.hinhanh} /></a>
                          <p style={{ fontSize: '15px', paddingTop: '10px' }}>{item.tendienthoai}</p>
                          <p style={{ fontSize: '15px', textDecoration: 'line-through' }}>{item.giaban.toLocaleString("vi-VN")}đ</p>
                          <p style={{ fontSize: '17px', color: '#1435C3' }}><b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b></p>
                          <p> <Rate style={{ fontSize: '12px', color: 'rgb(240, 103, 40)' }} disabled defaultValue={item.sao} />  {item.soluongdanhgia} đánh giá </p>
                        </Col>
                      )
                    })}
            </Row>
            <Row span={24}>
              <Col span={24} className='btn-allproduct'>
                <Button
                  onClick={() => ShowmoreAllproduct()}
                  className='btn-product-item'>
                  Xem thêm sản phẩm</Button>
              </Col>
            </Row>


          </Col>

        </Row>
      </div>}

    </div>
  )

}
export default Allproduct;