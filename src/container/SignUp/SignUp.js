import React, {Component} from 'react';
import "./SignUp.css";
import {Button, FormControl, InputGroup} from "react-bootstrap";
class SignUpContainer extends Component {
    render() {
        const signUpForm = (
            <div className="container signup-body">
                <div className="row justify-content-center">
                    <p className="signup-title mt-3">ثبت نام </p>
                </div>
                <hr/>
                <div className="row justify-content-end">
                    <h2 className="id-input-field mt-3">نام کاربری</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup  className="mb-3 mt-2 id-input-signup">
                        <FormControl
                            // onChange = {}
                            name ="id"
                            // value = {this.state.data.Email}
                            id="text" type="text"
                            className = "placeHolder-input input-style"
                            placeholder="نام کاربری مورد نظر خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row justify-content-end">
                    <h2 className="email-input-field mt-3">ایمیل</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup  className="mb-3 mt-2 email-input-signup">
                        <FormControl
                            // onChange = {this.hadnleChange}
                            name ="Email"
                            // value = {this.state.data.Email}
                            id="email" type="email"
                            className = "placeHolder-input input-style"
                            placeholder="ایمیل خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row justify-content-end">
                    <h2 className="phoneNumber-input-field mt-3">شماره تلفن همراه</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup  className="mb-3 mt-2 phoneNumber-input-signup">
                        <FormControl
                            // onChange = {}
                            name ="Email"
                            // value = {this.state.data.Email}
                            id="email" type="phone"
                            className = "placeHolder-input input-style"
                            placeholder="شماره تلفن همراه خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row password-box">
                    <div className="col-sm-6">
                        <div className="row justify-content-start">
                            <h2 className="password-input-field mt-4">رمزعبور</h2>
                        </div>
                        <div className="row justify-content-center">
                            <InputGroup className="mb-3 mt-2 password-input-signup">
                                <FormControl
                                    // onChange = {this.hadnleChange}
                                    name = "Password"
                                    // value = {this.state.data.Password}
                                    id="password" type="password"
                                    className = "placeHolder-input input-style"
                                    placeholder="رمز عبور خودرا وارد نمایید"
                                />
                            </InputGroup>
                        </div>
                    </div>
                    <div className="col-sm-6">
                            <div className="row justify-content-start">
                                <h2 className="password-input-field mt-4"> تکرار رمزعبور</h2>
                            </div>
                            <div className="row justify-content-center">
                                <InputGroup className="mb-3 mt-2 password-input-signup">
                                    <FormControl
                                        // onChange = {this.hadnleChange}
                                        name = "Password"
                                        // value = {this.state.data.Password}
                                        id="password" type="password"
                                        className = "placeHolder-input input-style"
                                        placeholder="رمز عبور خودرا تکرار نمایید"
                                    />
                                </InputGroup>
                            </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Button id="button" className="mt-4 mb-4 button-submit-signup" type="submit" variant="success" size="md">
                        ثبت نام
                    </Button>
                </div>



            </div>
        );
        return (
            <div>
                <div className="background"></div>
                {signUpForm}
            </div>
        );
    }
}

export default SignUpContainer;