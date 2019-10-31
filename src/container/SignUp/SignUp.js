import React, {Component} from 'react';
import "./SignUp.css";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import Auth_Page_Api from "../../_api/auth_api";
import {TextInput} from "react-responsive-ui";
class SignUpContainer extends Component {
    state = {
        data: {
            username: "",
            email: "",
            password1: "",
            password2: "",
            phone_number: "",
        },
        doesExistUsername: null,
        idForUsername: "",
        error: [],
    };

    async requestForCheckUsername(username) {
        try {
            const response = await Auth_Page_Api.checkUsername(username);
            // console.log(response,response.ok,"ok")
            // if (!response.ok) {
            //     console.log("OHH BadRequest!");
            //     throw Error(response.statusText);
            //
            // }

            this.setState({doesExistUsername: response.data.detail}, () => {

                switch (this.state.doesExistUsername) {

                    case null:
                        this.setState({idForUsername: "username"});
                        break;
                    case true :
                        this.setState({idForUsername: "username-green"});
                        break;
                    case false :
                        this.setState({idForUsername: "username-red"});
                        break;
                    default :
                        this.setState({idForUsername: "username"});
                        break;

                }
            })
        } catch (e) {
            console.log(e, "The server is Down!");
        }

    }


    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
                const newState = {...prevState};
                newState.data[name] = value;
                return newState;
            },
            () => {
                if (name === "username" &&
                    value.length >= 4) {
                    this.requestForCheckUsername(this.state.data.username);
                } else if (value.length < 4) {

                    this.setState({idForUsername: "username"});

                }

            })

    };

    handleErrors = (response) => {
        let newError = [];
        Object.keys(response).forEach((key) => {
            response[key].forEach(element => {
                newError.push(element);
            })
        });
        this.setState({error: newError})
    };

    async handleSubmit(event, data) {
        event.preventDefault();
        try {
            console.log("OK")
            const response = await Auth_Page_Api.signup(data);
            console.log(response,"RESPONSE");
            if (response.status === 400) {
                this.handleErrors(response);
            }

            // if (!response.ok) {
            //     console.log("OHH BadRequest!");
            //     throw Error(response.statusText);
            // }
        } catch (e) {
            console.log(e, "The server is Down!")
        }
    }


    render() {
        const signUpForm = (
            <div className="container signup-body">
                <div className="row justify-content-center">
                    <p className="signup-title mt-3">ثبت نام </p>
                </div>
                <hr/>
                <form onSubmit={(event) => this.handleSubmit(event, this.state.data)}>
                    <TextInput
                        type="text"
                        label="نام کاربری"

                        value={this.state.data.username}
                        onChange={(value) => {
                            this.handleChange("username", value)
                        }}
                    />
                    <TextInput
                        type="text"
                        label="ایمیل"
                        value={this.state.data.username}
                        onChange={(value) => {
                            this.handleChange("username", value)
                        }}
                    />
                    <div className="row justify-content-end">
                        <h2 className="phoneNumber-input-field mt-3">شماره تلفن همراه</h2>
                    </div>
                    <div className="row justify-content-center">
                        <InputGroup className="mb-3 mt-2 phoneNumber-input-signup">
                            <FormControl
                                onChange={this.handleChange}
                                name="phone_number"
                                value={this.state.data.phone_number}
                                id="phone_number" type="phone"
                                className="placeHolder-input input-style"
                                placeholder="شماره تلفن همراه خودرا وارد نمایید"
                                required/>
                        </InputGroup>
                    </div>
                    <div className="row password-box">
                        <div className="col-sm-6 col-md-6">
                            <div className="row justify-content-start">
                                <h2 className="password-input-field mt-4">رمزعبور</h2>
                            </div>
                            <div className="row justify-content-center">
                                <InputGroup className="mb-3 mt-2 password-input-signup">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="password1"
                                        value={this.state.data.password1}
                                        id="password1" type="password"
                                        className="placeHolder-input input-style"
                                        placeholder="رمز عبور خودرا وارد نمایید"
                                        required/>
                                </InputGroup>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="row justify-content-start">
                                <h2 className="password-input-field mt-4"> تکرار رمزعبور</h2>
                            </div>
                            <div className="row justify-content-center">
                                <InputGroup className="mb-3 mt-2 password-input-signup">
                                    <FormControl
                                        onChange={this.handleChange}
                                        name="password2"
                                        value={this.state.data.password2}
                                        id="password2" type="password"
                                        className="placeHolder-input input-style"
                                        placeholder="رمز عبور خودرا تکرار نمایید"
                                        required/>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {this.state.error.length !== 0 ?
                            <div className="row justify-content-center">
                                <div className="alert alert-danger" role="alert" style={{direction: "rtl"}}>

                                    {this.state.error.map(element => (
                                        <div className="row justify-content-center">
                                            {element}
                                        </div>
                                    ))}


                                </div>

                            </div> : null
                        }
                    </div>
                    <div className="row justify-content-center">
                        <Button id="button" className="mb-4 button-submit-signup" type="submit" variant="success"
                                size="md">
                            ثبت نام
                        </Button>
                    </div>
                </form>


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
