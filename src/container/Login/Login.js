import React, {Component} from 'react';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap'
class LoginContainer extends Component {
    render() {

        const loginForm = (
            <div className="center container">
                <div className="row justify-content-center">
                    <p className="login-title mt-3"> ورود به پنل </p>
                </div>
                <hr/>
                <div className="row justify-content-end ">
                    <p className="link-to-signUp col-3">عضویت</p>
                    <p className="guide-to-signup col-6">.اگر حساب کاربری ندارید ثبت نام کنید</p>
                </div>
                <hr/>
                <div className="row justify-content-end">
                    <h2 className="email-input-field mt-3">ایمیل</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup className="mb-3 mt-2 email-input-login">
                        <FormControl className = "placeHolder-input"
                            placeholder="ایمیل خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row justify-content-end">
                    <h2 className="password-input-field mt-4">رمزعبور</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup className="mb-3 mt-2 password-input-login">
                        <FormControl className = "placeHolder-input"
                                     placeholder="رمز عبور خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row justify-content-center">
                    <Button className="mb-5 mt-4 button-submit-login" type="submit" variant="success" size="md">
                        ورود
                    </Button>
                </div>

            </div>
        );



        return (
            <div>
                {loginForm}
            </div>
        );
    }
}

export default LoginContainer;