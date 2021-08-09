import { Row, Col, Form, Input, Button, Select, Option, InputNumber } from "antd";
import { FacebookOutlined, GooglePlusOutlined, DoubleLeftOutlined } from '@ant-design/icons';
import history from "../../../utils/history";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  RegisterAction,
  getUser,
  LoginAction,
  DeleteUserAction
} from '../../../redux/actions';
import swal from "sweetalert";
import './styles.css'
function Login() {
  const { Option } = Select;
  const dispatch = useDispatch(); 
  const Register = useSelector(state => state.userReducer);
  const { user } = Register;
  const [checkLogin, setcheckLogin] = useState(true);
  const [checkPassword, setCheckPasswork] = useState(true)
  function onFinish(values) {

    var checkIndexLoginUser = user.findIndex(function (item) {
      return (
        values.username === item.taikhoan
      )
    })
    if (checkIndexLoginUser !== -1) {
      const valuesUser = user.filter(item => values.username === item.taikhoan);
      var valuesLastName = {
         ... values , 
        lastName : valuesUser[0]?.hovaten,
        id_user :valuesUser[0]?.id_user
      }
      dispatch(LoginAction(valuesLastName) );
      swal("Bạn đã đăng nhập thành công");
      history.push('/');
      dispatch(getUser());
    } else {
      swal("Tài khoản không tồn tài ! Xin vui lòng nhập tài khoản khác nhé ! ")
    }
  }
  function onFinishRegister(values) {
    dispatch(getUser())
    var checkIndexRegisterUser = user.findIndex(function (item) {
      return (
        values.username === item.taikhoan
      )
    })
    if (checkIndexRegisterUser !== -1) {
      swal('Tên đăng nhập đã tồn tại vui lòng nhập tên khác !')
    } else {
      if (values.password === values.checkpassword) {
        dispatch(RegisterAction(values));
        swal("Chúc mừng bạn đã đăng ký thành công");
        setCheckPasswork(true);
      } else {
        setCheckPasswork(false);
      }
    }
  }
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <Row span={24} className='container-full-login'>
      <Row className='container-item' span={24} >
        <Col span={24} className='item1'>
          <h4>Chào mừng bạn đến với Phong Lê!</h4>
        </Col>
        {checkLogin === true ? <Col span={24}>
          <Col span={24} className='item2'>
            <h5>Đăng nhập</h5>
          </Col>
          <Col span={24} >
            <Form
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}

            >
              <Form.Item
                label="Tài khoản"
                name="username"
                rules={[{ required: true, message: 'Bạn cần nhập tài khoản' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Bạn cần nhập mật khẩu' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 7, span: 12 }}>
                <Button className='button-item'
                  type="primary"
                  htmlType="submit">
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={24}>
            <p>Bạn có tài khoản chưa ? Nếu chưa Nhấn vào <a onClick={() => setcheckLogin(false)}
              style={{ color: 'blue' }}>
              Đăng ký
            </a></p>
          </Col>
          <Col span={24}>
            <Button
              icon={<FacebookOutlined style={{ fontSize: '20px' }} />}
              style={{ backgroundColor: 'rgb(45, 136, 255)', color: 'white' }}
              className='button-item1'>
              Tiếp tục với Facebook
            </Button>
          </Col>
          <Col span={24}>
            <Button
              icon={<GooglePlusOutlined style={{ fontSize: '20px' }} />}
              style={{
                backgroundColor: 'rgb(220, 78, 66)'
                , color: 'white'
              }}
              className='button-item2'>
              Tiếp tục với Google
            </Button>
          </Col>
          <Col span={24}>
            <Button
            onClick={()=>history.push('/')}
              style={{ border: 'none', marginTop: '20px' }}
              icon={<DoubleLeftOutlined />}>
              Quay lại trang chủ
            </Button>
          </Col>
        </Col> : <Col span={24}>
          <Col span={24} className='item2'>
            <h5>Đăng Ký</h5>
          </Col>
          <Col span={24}>
            <Form
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinishRegister}

            >
              <Form.Item
                label="Tài khoản"
                name="username"
                rules={[{ required: true, message: 'Bạn cần nhập tài khoản!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Họ và Tên"
                name="lastname"
                rules={[{ required: true, message: 'Bạn cần nhập tài khoản' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[{ required: true, message: 'Bạn cần nhập mật khẩu!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Nhập lại mật khẩu"
                name="checkpassword"

                rules={[{ required: true, message: 'Bạn cần nhập lại mật khẩu!' }]}
              >
                <Input.Password />
              </Form.Item>
              {checkPassword === false ? <p className='item3'>Mật khẩu bạn nhập bị sai ! Xin vui lòng nhập lại</p> : null}

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Bạn cần nhập Email!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Giới Tính"
                name="sex"
                rules={[{ required: true, message: 'Bạn cần chọn giới tính!' }]}
              >
                <Select defaultValue="Nam" style={{ width: 250 }}>
                  <Option value="Nam">Nam</Option>
                  <Option value="Nữ">Nữ</Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{ required: true, message: 'Bạn cần nhập số điện thoại !' }]}
              >
                <InputNumber min={0} max={100000000000000} style={{ width: 250 }} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 7, span: 12 }}>
                <Button className='button-item'
                  type="primary"
                  htmlType="submit">
                  Đăng Ký Ngay
                </Button>
              </Form.Item>
            </Form>

          </Col>
          <Col span={24}>
            <p>Quay Lại <a onClick={() => setcheckLogin(true)}
              style={{ color: 'blue' }}>Đăng Nhập</a></p>
          </Col>

        </Col>}

      </Row>
    </Row>
  )

}
export default Login;