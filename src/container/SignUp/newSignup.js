import React, {Component} from 'react';
import Auth_Page_Api from "../../_api/auth_api";
import Modal from "react-awesome-modal";
import {TextInput} from "react-responsive-ui";
import Icon from "../../assets/Icon-Register.png";
import {Button} from "react-bootstrap";
import {MdClose} from "react-icons/all"
import Cookies from "js-cookie";
class NewSignup extends Component {

    state = {
        toggle: false,
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

    toggleModal = () => {
        this.setState({toggle: !this.state.toggle});
    };

    handleChange = (name, value) => {
        this.setState(prevState => {
            const newState = {...prevState};
            newState.data[name] = value;
            return newState;
        });
    };

    async handleSubmit(event, data) {
        event.preventDefault();
        try {
            console.log("OK")
            const response = await Auth_Page_Api.signup(data);
            console.log(response, "RESPONSE");
        } catch (e) {
            console.log(e.response, "The server is Down!")
            this.handleErrors(e.response.data)
        }
    }

    handleErrors = (response) => {
        let newError = [];
        Object.keys(response).forEach((key) => {
            response[key].forEach(element => {
                newError.push(element);
            })
        });
        this.setState({error: newError})
    };

    render() {
        return (
            <div>
                <div className="row justify-content-center link-to-signUp" onClick={() => {
                    this.toggleModal()
                }}>عضویت
                </div>
                <Modal style={{overflowY:"auto"}} visible={this.state.toggle} effect="fadeInUp" onClickAway={() => this.toggleModal()}>
                    <div className="container">
                        <div className="row mt-3 justify-content-start align-items-center">
                            <MdClose style = {{fontSize : "2rem",cursor:"pointer"}} className="mr-4" onClick={() => this.toggleModal()}/>
                        </div>
                    </div>
                    <div className="container py-5 px-5" style={{direction: "ltr"}}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-6  row align-items-center justify-content-center">
                                <img src={Icon} alt="icon" width="200"/>

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
                            <div className="col-sm-6 align-items-center justify-content-center">
                                <form onSubmit={(event) => this.handleSubmit(event, this.state.data)}>
                                    <TextInput
                                        className="mb-4"
                                        type="text"
                                        label="نام کاربری"

                                        value={this.state.data.username}
                                        onChange={(value) => {
                                            this.handleChange("username", value)
                                        }}
                                    />
                                    <TextInput
                                        className="mb-4"
                                        type="email"
                                        label="ایمیل"
                                        value={this.state.data.email}
                                        onChange={(value) => {
                                            this.handleChange("email", value)
                                        }}
                                    />

                                    <TextInput
                                        className="mb-4"
                                        type="phone"
                                        label="تلفن همراه"
                                        value={this.state.data.phone_number}
                                        onChange={(value) => {
                                            this.handleChange("phone_number", value)
                                        }}
                                    />

                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="رمز عبور"
                                        value={this.state.data.password1}
                                        onChange={(value) => {
                                            this.handleChange("password1", value)
                                        }}
                                    />

                                    <TextInput
                                        className="mb-4"
                                        type="password"
                                        label="تکرار رمز عبور"
                                        value={this.state.data.password2}
                                        onChange={(value) => {
                                            this.handleChange("password2", value)
                                        }}
                                    />
                                    <div className="row justify-content-center mt-4">
                                        <Button variant="success" size="md" type="submit">ثبت نام</Button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>

        );
    }
}

export default NewSignup;