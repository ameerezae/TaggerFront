import React, {Component} from 'react';
import {FaUser, IoIosList} from "react-icons/all";
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import {Select, TextInput} from "react-responsive-ui";
import "./CreateOrder.scss"

class CreateOrderContainer extends Component {
    state = {
        showNav: null,
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-10  pr-0  col-md-9  min-vh-100">
                    <div className="container-fluid p-2 directionToLeft " style={{backgroundColor: "#011B56"}}>
                        <div className="row align-items-center mr-3">
                            <IoIosList style={{color: "white", fontSize: "2rem"}}
                                       className=" hidden-sm hidden-md hidden-lg"
                                       onClick={() => this.setState({showNav: true})}/>
                            <FaUser className="text-white hidden-xs"/>
                            <div className="text-white mr-2 ">امیر رضایی</div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5 directionToLeft">

                        <div className="container mb-4 directionToLeft">
                            <div className="row align-items-center mr-1">
                                {/*<div style={{border: "2px solid blue", padding: "0px", display: "inline",backgroundColor:"blue",borderRadius:"19px",color:"white",fontFamily:"Yekan",fontSize:"2rem"}}>1</div>*/}
                                <div className="row align-items-center justify-content-center circle-icon">1</div>
                                <h5 className="text-muted m-4">چه نوع سفارشی دارید؟</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-8 col-xs-12">
                                    <Select
                                        selectClassName="directionToLeft"
                                        success={"OK"}
                                        nativeExpanded
                                        label="نوع"
                                        // value={...}
                                        // onChange={...}
                                        options={[{value: 'A', label: 'متنی'}]}/>

                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center mr-1">
                                <div className="row align-items-center justify-content-center circle-icon">2</div>
                                <h5 className="text-muted m-4">عنوان سفارش خودرا بنویسید</h5>
                            </div>
                            <div className="row">
                                <div className="col-sm-8 col-xs-12">
                                    <TextInput
                                        type="text"
                                        label="عنوان"
                                        // value={this.state.data.username}
                                        // onChange={(value) => {
                                        //     this.hadnleChange("username", value)
                                        // }}
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
                <div className="one-edge-shadow p-0 col-lg-2 col-3 hidden-xs">
                    <SideNavbarComponent/>
                </div>
            </div>
        );
    }
}

export default CreateOrderContainer;