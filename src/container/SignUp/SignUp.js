import React, {Component} from 'react';
import "./SignUp.css";
import {Button, FormControl, InputGroup} from "react-bootstrap";
class SignUpContainer extends Component {
    state = {
        data : {
            username : "",
            email : "",
            password1: "",
            password2 : "",
            phone_number: "",
        },
        doesExistUsername: null,
        idForUsername : "",
    };

    async requestForCheckUsername(username) {
        try {
            const url = "http://127.0.0.1:8000/authentication/check_username/";
            const response = await fetch(`${url}`,{
                method:"POST",
                body:JSON.stringify({"username":username}),
                headers : {
                    "Content-Type" : "application/json"
                }
            });

            if (!response.ok){
                console.log("OHH BadRequest!");
                throw Error(response.statusText);

            }

            const json = await response.json();

            this.setState({doesExistUsername : json.detail},() => {

                switch (this.state.doesExistUsername) {

                    case null: this.setState({idForUsername : "username"}); break;
                    case true : this.setState({idForUsername : "username-red"}); break;
                    case false : this.setState({idForUsername : "username-green"}); break;

                }
        })
        }
        catch (e) {
            console.log(e,"The server is Down!");
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
                name.length >= 4) {
                    this.requestForCheckUsername(this.state.data.username);
                    console.log(name.length);
                }

            })

    };

    static async handleSubmit(event, data) {
        event.preventDefault();
        try{
            const url = "http://127.0.0.1:8000/authentication/registration/";
            const response = await fetch(`${url}`,{
                    method : "POST",
                    body : JSON.stringify(data),
                    headers : {
                        "Content-type" : "application/json"
                    }
                });
            if(!response.ok){
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }
        }catch (e) {
            console.log(e,"The server is Down!")
        }
    }



    render() {
        const signUpForm = (
            <div className="container signup-body">
                <div className="row justify-content-center">
                    <p className="signup-title mt-3">ثبت نام </p>
                </div>
                <hr/>
                <form onSubmit={(event) => SignUpContainer.handleSubmit(event, this.state.data)}>
                    <div className="row justify-content-end">
                        <h2 className="id-input-field mt-3">نام کاربری</h2>
                    </div>
                    <div className="row justify-content-center">
                        <InputGroup variant="light" className="mb-3 mt-2 id-input-signup">
                            <FormControl
                                variant="light"
                                onChange={this.handleChange}
                                name="username"
                                value={this.state.data.username}
                                id={this.state.idForUsername} type="text"
                                className="placeHolder-input input-style"
                                placeholder="نام کاربری مورد نظر خودرا وارد نمایید"
                                required/>
                        </InputGroup>
                    </div>
                    <div className="row justify-content-end">
                        <h2 className="email-input-field mt-3">ایمیل</h2>
                    </div>
                    <div className="row justify-content-center">
                        <InputGroup className="mb-3 mt-2 email-input-signup">
                            <FormControl
                                onChange={this.handleChange}
                                name="email"
                                value={this.state.data.email}
                                id="email" type="email"
                                className="placeHolder-input input-style"
                                placeholder="ایمیل خودرا وارد نمایید"
                                required/>
                        </InputGroup>
                    </div>
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
                        <Button id="button" className="mt-4 mb-4 button-submit-signup" type="submit" variant="success"
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