import swal from 'sweetalert';
import { Row, Col, Button, Popover, Badge, Space, Input, TreeSelect ,Affix} from 'antd';
import { AppleOutlined, UserOutlined, ShoppingCartOutlined, HistoryOutlined } from '@ant-design/icons';
import './style.css';
import history from '../../utils/history';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartAction,
  DeleteUserAction,
  getPhoneHomeAction,
  getSearchAction,
  RemoveTypeofPhoneAction,
  historySearchAction,
  DeleteHistorySearchAction,
  getPhoneAccessoriesAction,
  RemoveGetPhoneHome
  

} from '../../redux/actions'
function BrowserHeader() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartAction());
    dispatch(getPhoneHomeAction());
    dispatch(getPhoneAccessoriesAction());
  }, [dispatch]);

  //Đặt State
  //
  const { Search } = Input;
  const [top, setTop] = useState(40);

  //Gọi dữ liệu từ Store
  const Login = useSelector(state => state.userReducer);
  const { userLoginLocal } = Login;
  console.log(userLoginLocal)
  const Cart = useSelector(state => state.cartReducer);
  const { getCart } = Cart;
  const Phonehome = useSelector(state => state.homeReducer);
  const { PhoneHomeArr, loading, HistorySearch,PhoneAccessories } = Phonehome;
  //check Search
  function onSearch(value) {
    dispatch(getPhoneHomeAction());

    let historysearch = {
      namehistorysearch: value
    }

    const filterSearch = PhoneHomeArr.filter((item) => {
      return item.tendienthoai.trim().toLowerCase().indexOf(value.trim().toLowerCase())!== -1

    });
    console.log(filterSearch)
    const fiterSearchAccessories = PhoneAccessories.filter((item)=>{
      return item.tenphukien.trim().toLowerCase().indexOf(value.trim().toLowerCase())!== -1
    })
    if (value === '') {
      swal("Từ khóa bạn nhập trống!");
    } else if (filterSearch.length === 0 && fiterSearchAccessories.length ===0) {
      swal('Từ khóa bạn nhập không tồn tại');
    }else if(fiterSearchAccessories.length!==0){
      history.push('/allaccessories');
      dispatch(historySearchAction(historysearch))
      // dispatch(RemoveTypeofPhoneAction())
      dispatch(getSearchAction(fiterSearchAccessories))

    } else {
      history.push('/allproduct');
      dispatch(historySearchAction(historysearch))
      dispatch(RemoveTypeofPhoneAction())
      dispatch(getSearchAction(filterSearch));
      dispatch(RemoveGetPhoneHome())

    }
  }
  // Lich su tim kiem
  function SearchAddhistory(value) {
    let filterSearchHitory = PhoneHomeArr.filter((item) => {
      return item.tendienthoai.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;

    });
    let fiterSearchHistoryAcc=PhoneAccessories.filter((item)=>{
      return item.tenphukien.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
    })
    if(filterSearchHitory.length !==0){
    history.push('/allproduct');
    dispatch(RemoveTypeofPhoneAction())
    dispatch(getSearchAction(filterSearchHitory));
    }else{
      history.push('/allaccessories');
      dispatch(getSearchAction(fiterSearchHistoryAcc));
    }
  }
  //
  //Đặt biến
  var cartlength = [];
  var CartUser = getCart.findIndex((item) => {
    return userLoginLocal.id_user === item.id_user
  })
  if (CartUser !== -1) {
    const filterCartuser = getCart.filter(item => userLoginLocal.id_user === item.id_user);
    cartlength = [...filterCartuser]
  }
  let total = 0;

  //Tổng tiền khi không có mã giảm giá

  for (let i = 0; i < cartlength.length; i++) {

    total = total + (cartlength[i]?.giakhuyenmai * cartlength[i]?.soluong);
  }
  //

  const content = (
    <div>
      <p><a onClick={() => history.push('/account')}>Thông tin tài khoản</a></p>
      <p><a onClick={() => history.push('/account')}>Quản lý đơn hàng</a></p>
      <p><Button
        onClick={() => dispatch(DeleteUserAction(swal('Bạn đã đăng xuất thành công')))}
        style={{ backgroundColor: 'blue', color: 'white' }}>
        Đăng Xuất
      </Button></p>
 
    </div>
   
  );
  const contentSearch = (
   
    <div>
      <Row span={24} className='contensearch'>
        <Col span={20}>
          <h6>Lịch sử tìm kiếm</h6>
          <Row span={24}>
            {HistorySearch.map((item) => {
              return (
                <Col span={24}>
                  <a className='item-contensearch' onClick={() => SearchAddhistory(item.namehistorysearch)}><p>{item.namehistorysearch}</p></a>
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col span={4}>
         <a onClick={()=>dispatch(DeleteHistorySearchAction())}><p>Xóa lịch sử</p></a>
        </Col>
      </Row>
    </div>
  )
  const contentcart = (
    <div>
      <Row span={24} >
        <Col span={24} className='contentcart'>
          {cartlength.map((item) => {
            return (
              <Row span={24} className='img-contentcart'>
                <Col span={8}>
                  <img style={{ width: '80px' }} src={item.hinhanh} />
                </Col>
                <Col span={16}>
                  <a><p>{item.tendienthoai}</p></a>
                  <p>Số lượng :x{item.soluong}</p>
                  <b>{item.giakhuyenmai.toLocaleString("vi-VN")}đ</b>
                </Col>

              </Row>
            )
          })}

        </Col>
        <Col span={24} className='price-contentcart'>
          <Row span={24}>
            <Col span={18}>
              Tổng Tiền : ({cartlength.length} sản phẩm)
            </Col>
            <Col span={6}>
              <p style={{ fontSize: '20px' }}><b>{total.toLocaleString("vi-VN")}đ</b></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={12} className='contentcart-btn'>
          <Button
            onClick={() => history.push('/cart')}
            style={{
              backgroundColor: 'rgb(20, 53, 195)',
              color: 'white',
              width: '400px'
            }}
          >Xem giỏ hàng</Button>
        </Col>
      </Row>

    </div>
  );
  //
  return (
    <Row span={24} className='container-full'>
      <Col span={6} className='col-item1'>
        <a style={{color:'blue'}} onClick={() => dispatch(getCartAction(history.push('/')))}>
          <img style={{width:'60px'}} src="https://cdn.icon-icons.com/icons2/643/PNG/128/mac-apple-osx-desktop-software-hardware_icon-icons.com_59289.png" />
        PHONGLE.VN
          </a>

      </Col>
      <Col span={12} className='search'>
        <Popover content={contentSearch} >
          <Badge style={{ border: 'none' }}>
            <Space direction="vertical">
              <Search style={{ width: '400px' }} placeholder="Nhập từ khóa cần tìm" onSearch={onSearch} enterButton />
            </Space>
          </Badge>
        </Popover>
      </Col>
      <Col span={2}>
        <Popover content={contentcart}>
          <Badge count={cartlength.length} style={{ border: 'none' }}>
            <Button style={{ border: 'none', }}
              icon={<ShoppingCartOutlined style={{ fontSize: '25px' }}
                onClick={() => dispatch(getCartAction(history.push('/cart')))}
              />}>
            </Button>
          </Badge>
        </Popover>
      </Col>
      <Col span={2}>
        {userLoginLocal.false === 'false' ?
          <Button
            onClick={() => history.push('/dangnhap')}
            style={{ border: 'none', color: 'black' }}
            icon={<UserOutlined style={{ fontSize: '20px' }}
            />}>
            Đăng nhập
          </Button>
          : <Popover content={content}
            title={userLoginLocal.lastName}>
            <Button
              style={{ border: 'none', color: 'black' }}
              icon={<UserOutlined style={{ fontSize: '20px' }}
              />}>
              {userLoginLocal.lastName}
            </Button>
          </Popover>}

      </Col>
      <Col span={2}>
      </Col>
    </Row>
  )
}

export default BrowserHeader;
