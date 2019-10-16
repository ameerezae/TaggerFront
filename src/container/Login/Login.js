import React, {Component} from 'react';
import "./Login.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {TextInput} from "react-responsive-ui"
import "react-responsive-ui/style.css";
import LoginPic from "../../assets/img-01.png";
import {InputGroup, FormControl, Button} from 'react-bootstrap';

class LoginContainer extends Component {

    state = {
        data: {
            username: "",
            password: "",
        },
        error: null,
    };

    async handleSubmit(event, data) {
        event.preventDefault();
        try {
            const url = 'http://127.0.0.1:8000/authentication/login/';
            const response = await fetch(`${url}`, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {

                    "Content-type": "application/json"
                }
            });
            if (response.status === 400) {
                const data = await response.json();
                this.showError(data)
            }

            if (!response.ok) {
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }
        } catch (e) {
            console.log(e, "The server is Down!");
        }
    }

    showError = (json) => {
        if (this.state.data.username.length === 0) {
            this.setState({error: json["non_field_errors"][0]})
        } else if (this.state.data.password.length === 0) {
            this.setState({error: json["password"][0]})
        } else {
            this.setState({error: json["non_field_errors"][0]})
        }
    };
    hadnleChange = (name, value) => {
        console.log(name, value, "NAVL")
        this.setState(prevState => {
            const newState = {...prevState};
            newState.data[name] = value;
            return newState;
        });
    };

    render() {


        const loginForm = (
            <div className="center container py-4">
                <div className="row justify-content-center">
                    <p className="login-title mt-3"> ورود </p>
                </div>
                <hr/>
                <div className="row direct-to-signup-box">
                    <div className="col-sm-6">
                        <div className="row justify-content-center guide-to-signup ">اگر حساب کاربری ندارید ثبت نام
                            کنید:
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row justify-content-center link-to-signUp"><a href={"/signup"}>عضویت</a></div>

                    </div>

                </div>
                <hr/>
                <div className="row align-items-center">
                    <div className="col-sm-6 col-md-6">
                        <div className="row align-items-center justify-content-center">
                            <img src={LoginPic} alt="img" className="img-fluid" width="200px" height="200px"/>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="row justify-content-center align-items-center">
                            <form onSubmit={event => this.handleSubmit(event, this.state.data)}>
                                <div className="row justify-content-center my-5">
                                    {/*<InputGroup className="mb-3 mt-2 email-input-login">*/}
                                    {/*    <FormControl*/}
                                    {/*        onChange={this.hadnleChange}*/}
                                    {/*        name="username"*/}
                                    {/*        value={this.state.data.Email}*/}
                                    {/*        id="email" type="text"*/}
                                    {/*        className="placeHolder-input input-style"*/}
                                    {/*        placeholder="نام کاربری خودرا وارد نمایید"*/}
                                    {/*    />*/}
                                    {/*</InputGroup>*/}
                                    <TextInput
                                        id="email"
                                        type="text"
                                        label="نام کاربری"
                                        value={this.state.data.username}
                                        onChange={(value) => {
                                            this.hadnleChange("username", value)
                                        }}
                                    />
                                </div>

                                <div className="row justify-content-center my-5">
                                    {/*<InputGroup className="mb-3 mt-2 password-input-login">*/}
                                    {/*    <FormControl*/}
                                    {/*        onChange={this.hadnleChange}*/}
                                    {/*        name="password"*/}
                                    {/*        value={this.state.data.Password}*/}
                                    {/*        id="password" type="password"*/}
                                    {/*        className="placeHolder-input input-style"*/}
                                    {/*        placeholder="رمز عبور خودرا وارد نمایید"*/}
                                    {/*    />*/}
                                    {/*</InputGroup>*/}
                                    <TextInput
                                        id="password"
                                        type="password"
                                        label="رمز عبور"
                                        value={this.state.data.password}
                                        onChange={(value) => {
                                            this.hadnleChange("password", value)
                                        }}
                                    />
                                </div>
                                {this.state.error ?
                                    <div className="row justify-content-center">
                                        <div className="alert alert-danger" role="alert" style={{direction: "rtl"}}>
                                            {this.state.error}
                                        </div>
                                    </div> : null
                                }
                                <div className="row justify-content-center">
                                    <Button id="button" className="mb-5 button-submit-login" type="submit"
                                            variant="success"
                                            size="md">
                                        ورود
                                    </Button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>


            </div>
        );


        return (
            <div>
                <div className="background"></div>
                <div className="d-flex min-vh-100">
                    <div className="d-flex w-100 align-items-center justify-content-center">
                        {loginForm}
                    </div>
                </div>
            </div>
        );
    }


}

export default LoginContainer;