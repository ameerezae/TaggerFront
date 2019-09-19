import React, {Component} from 'react';
import "./Login.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class LoginContainer extends Component {

    state ={
        data : {
            username : "",
            password: "",
        }
    };

    static async handleSubmit  (event, data) {
        event.preventDefault();
        try {
            const url = 'http://localhost:8000/authentication/login/';
            const response = await fetch(`${url}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {

                    "Content-type": "application/json"
                }
            });
            if (!response.ok) {
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }
        }catch (e) {
            console.log(e,"The server is Down!");
        }
    }

    hadnleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState.data[name] = value;
            return newState;
        });
        console.log(this.state.data)
    };

    render() {


        const loginForm = (
            <div className="center container">
                <div className="row justify-content-center">
                    <p className="login-title mt-3"> ورود به پنل </p>
                </div>
                <hr/>
                <div className="row direct-to-signup-box">
                    <div className="col-sm-6">
                        <div className="row justify-content-center guide-to-signup ">اگر حساب کاربری ندارید ثبت نام کنید:</div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row justify-content-center link-to-signUp"><a href={"/signup"}>عضویت</a></div>

                    </div>

                </div>
                <hr/>
                <form onSubmit={event => LoginContainer.handleSubmit(event,this.state.data)}>
                <div className="row justify-content-end">
                    <h2 className="email-input-field mt-3">نام کاربری</h2>
                </div>
                <div className="row justify-content-center">
                            <InputGroup  className="mb-3 mt-2 email-input-login">
                                <FormControl
                                    onChange = {this.hadnleChange}
                                    name ="username"
                                    value = {this.state.data.Email}
                                    id="email" type="text"
                                    className = "placeHolder-input input-style"
                                    placeholder="نام کاربری خودرا وارد نمایید"
                                />
                            </InputGroup>
                </div>
                <div className="row justify-content-end">
                    <h2 className="password-input-field mt-4">رمزعبور</h2>
                </div>
                <div className="row justify-content-center">
                    <InputGroup className="mb-3 mt-2 password-input-login">
                        <FormControl
                            onChange = {this.hadnleChange}
                            name = "password"
                            value = {this.state.data.Password}
                            id="password" type="password"
                            className = "placeHolder-input input-style"
                            placeholder="رمز عبور خودرا وارد نمایید"
                        />
                    </InputGroup>
                </div>
                <div className="row justify-content-center">
                    <Button id="button" className="mb-5 mt-4 button-submit-login" type="submit" variant="success" size="md">
                        ورود
                    </Button>
                </div>
                </form>

            </div>
        );



        return (
            <div>
                <div className="background"></div>
                {loginForm}
            </div>
        );
    }
}

export default LoginContainer;