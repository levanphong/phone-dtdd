import { Row ,Input,Form,Button ,Col} from 'antd';
import './styles.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getLoginAdminAction,
  LocalLoginAdminAction

}from '../../../redux/actions'
import history from '../../../utils/history';
import swal from 'sweetalert';
function LoginAdmin(){
  //Get du lieu ve
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLoginAdminAction())
  }, [dispatch])
  const LoginAdmin = useSelector(state => state.AdminReducer);
  const { LoginAdminArr, loading } = LoginAdmin;
  //
  //Viết Function
  function onFinishLoginAdmin(value){
    let checkAdmin = LoginAdminArr.findIndex((item)=>{
      return value.username === item.username && value.password === item.password;
    })
    if(checkAdmin !==-1){
      var checkLoginAdmin= LoginAdminArr.filter(item=>value.username === item.username && value.password === item.password);
      dispatch(LocalLoginAdminAction(checkLoginAdmin));
      swal("Bạn đã đăng nhập thành công")
      history.push('/adminmanagement');
    }else{
      swal("Sai mật khẩu rồi vui lòng kiểm tra lại ");
    }

  }

  //
  return (
    <div className='container-full-login'>
      <Row span={24}>
      <Row className='container-item' span={24} >
      <Col span={24} className='item2'>
            <h4>Admin</h4>
          </Col>
          <Col span={24} >
            <Form
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinishLoginAdmin}
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
      </Row>
      </Row>
    </div>
  )
}
export default LoginAdmin;