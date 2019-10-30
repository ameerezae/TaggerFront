import React, {Component} from 'react';
import {FaUser, IoIosList} from "react-icons/all";
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import {Select, TextInput} from "react-responsive-ui";
import NumberFormat from "react-number-format";
import "./CreateOrder.scss"
import TopNavbar from "../../Components/TopNavbar/TopNavbar";
class CreateOrderContainer extends Component {
    state = {
        showNav: null,
        submitFields : {
            subject: null,
            content: null,
            type: null,
            tagger_size: null,
            price : null,
        }


    };


    handleChange = (name, value) => {
        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        }, () => {
            console.log(this.state)
        });
    };

    render() {
        return (
            <div className="row">
                <div className="col-lg-10  pr-0  col-md-9  min-vh-100">
                    <TopNavbar onClick = {()=>this.setState({showNav: true})}/>
                    <div className="container-fluid mt-5 directionToLeft">

                        <div className="container mb-4 directionToLeft">
                            <div className="row align-items-center mr-1">
                                {/*<div style={{border: "2px solid blue", padding: "0px", display: "inline",backgroundColor:"blue",borderRadius:"19px",color:"white",fontFamily:"Yekan",fontSize:"2rem"}}>1</div>*/}
                                <div className="row align-items-center justify-content-center circle-icon">1</div>
                                <h5 className="text-muted m-4">چه نوع سفارشی دارید؟</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-xs-12">
                                    <Select
                                        selectClassName="directionToLeft"
                                        success={"OK"}
                                        nativeExpanded
                                        label="نوع"
                                        value={this.state.submitFields.subject}
                                        onChange={(value) => {
                                            this.handleChange("type", value)
                                        }}
                                        options={[{value: 'متنی', label: 'متنی'}]}/>

                                </div>
                            </div>
                        </div>
                        <div className="container mb-4">
                            <div className="row align-items-center mr-1">
                                <div className="row align-items-center justify-content-center circle-icon">2</div>
                                <h5 className="text-muted m-4">عنوان سفارش خودرا بنویسید</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-xs-12">
                                    <TextInput
                                        type="text"
                                        label="عنوان"
                                        value={this.state.submitFields.subject}
                                        onChange={(value) => {
                                            this.handleChange("subject", value)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container mb-4">
                            <div className="row align-items-center mr-1">
                                <div className="row align-items-center justify-content-center circle-icon">3</div>
                                <h5 className="text-muted m-4">سفارش خود را توضیح دهید.</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-xs-12">
                                    <TextInput
                                        multiline
                                        type="text"
                                        label="توضیحات"
                                        value={this.state.submitFields.content}
                                        onChange={(value) => {
                                            this.handleChange("content", value)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container mb-4">
                            <div className="row align-items-center mr-1">
                                <div className="row align-items-center justify-content-center circle-icon">4</div>
                                <h5 className="text-muted m-4">بودجه مورد نظر شما چقدر است؟</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-8 col-xs-12">
                                    <TextInput type="number"
                                               className="customized-input"
                                               value={this.state.submitFields.price}
                                               onChange={(value) => {
                                                   this.handleChange("price", value)
                                               }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="container mb-4">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <div className="row align-items-center mr-1">
                                        <div className="row align-items-center justify-content-center circle-icon">5
                                        </div>
                                        <h5 className="text-muted m-4"> زمان مورد انتظار شما چقدر است؟</h5>
                                    </div>

                                    <TextInput type="number"
                                               className="customized-input"
                                               value={this.state.submitFields.price}
                                               onChange={(value) => {
                                                   this.handleChange("price", value)
                                               }}
                                    />

                                </div>
                                <div className="col-md-4 mb-4">
                                    <div className="row align-items-center mr-1">
                                        <div className="row align-items-center justify-content-center circle-icon">6
                                        </div>
                                        <h5 className="text-muted m-4"> چند نفر روی این پروژه فعالیت کنند؟</h5>
                                    </div>

                                    <TextInput type="number"
                                               min="1"
                                               className="customized-input"
                                               value={this.state.submitFields.tagger_size}
                                               onChange={(value) => {
                                                   this.handleChange("tagger_size", value)
                                               }}
                                    />

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="hidden-sm hidden-md hidden-lg">
                        <SideNavbarXs ShowNav={this.state.showNav}
                                      closeNav={() => this.setState({showNav: false})}/>
                    </div>
                </div>
                <div className="one-edge-shadow p-0 col-lg-2 col-md-3 hidden-xs">
                    <SideNavbarComponent/>
                </div>
            </div>
        );
    }
}

export default CreateOrderContainer;