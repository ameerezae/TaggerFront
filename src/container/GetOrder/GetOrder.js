import React, {Component} from 'react';
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import {
    IoIosList,
    FaUser,
    FaMoneyCheck,
    IoMdInformationCircle,
    IoMdCalendar,
    IoMdDoneAll

} from "react-icons/all";
import "./GetOrder.scss"
import BlueTick from "../../assets/Blue-tick-png.png";

class GetOrderContainer extends Component {
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
                    <div className="container-fluid mt-5  ">
                        <div className="container directionToLeft">
                            <div className="row">
                                <div className="col-md-2 hidden-xs row align-items-center justify-content-center">
                                    <img src={BlueTick} width="80px" alt="blue"/>
                                </div>
                                <div className="col-md-8 col-xs-10">
                                    <div className="row m-1">
                                        <p className="text-muted" style={{fontSize: "1.5rem", fontWeight: "bold"}}>ایجاد
                                            crm جهت مدیریت بخش های مختلف</p>
                                    </div>
                                    <div className="row m-1 text-gray">
                                        <p>
                                            سلام
                                            به یک crm تحت وب بدون محدودیت کاربر برای مدیریت واحد های مختلف (
                                            فروش-بازاریابی-فنی و انفورماتد
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="row align-items-center m-2 text-blue ">
                                            <FaMoneyCheck className="mx-2"/>
                                            <div>بودجه :</div>
                                            <div className="farsiNumbers">‌150000</div>
                                        </div>
                                        <p className="m-2 text-blue"><FaUser className="mx-2"/>شماره یک</p>
                                        <p className="m-2 text-blue"><IoMdInformationCircle style={{fontSize: "1.2rem"}}
                                                                                            className="mx-2"/>متنی</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                    <div className="row m-2 justify-content-start">
                                        <div className="text-gray-dark row align-items-center">
                                            <IoMdCalendar className="ml-2"
                                                          style={{fontSize: "1.2rem"}}/>
                                            <div className="farsiNumbers ml-2">14</div>

                                            روز
                                            پیش
                                        </div>
                                    </div>
                                    <div className="row m-2 justify-content-start align-items-center">
                                        <div className="text-gray-dark row align-items-center">
                                            <IoMdDoneAll className="ml-2"
                                                         style={{fontSize: "1.2rem"}}/>
                                            <div className="farsiNumbers ml-2">8</div>
                                            روزه
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-gray"/>
                        </div>
                        <div className="container directionToLeft">
                            <div className="row">
                                <div className="col-md-2 hidden-xs row align-items-center justify-content-center">
                                    <img src={BlueTick} width="80px" alt="blue"/>
                                </div>
                                <div className="col-md-8 col-xs-10">
                                    <div className="row m-1">
                                        <p className="text-muted" style={{fontSize: "1.5rem", fontWeight: "bold"}}>ایجاد
                                            crm جهت مدیریت بخش های مختلف</p>
                                    </div>
                                    <div className="row m-1 text-gray">
                                        <p>
                                            سلام
                                            به یک crm تحت وب بدون محدودیت کاربر برای مدیریت واحد های مختلف (
                                            فروش-بازاریابی-فنی و انفورماتد
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="row align-items-center m-2 text-blue ">
                                            <FaMoneyCheck className="mx-2"/>
                                            <div>بودجه :</div>
                                            <div className="farsiNumbers">‌150000</div>
                                        </div>
                                        <p className="m-2 text-blue"><FaUser className="mx-2"/>شماره یک</p>
                                        <p className="m-2 text-blue"><IoMdInformationCircle style={{fontSize: "1.2rem"}}
                                                                                            className="mx-2"/>متنی</p>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                    <div className="row m-2 justify-content-start">
                                        <div className="text-gray-dark row align-items-center">
                                            <IoMdCalendar className="ml-2"
                                                          style={{fontSize: "1.2rem"}}/>
                                            <div className="farsiNumbers ml-2">14</div>

                                            روز
                                            پیش
                                        </div>
                                    </div>
                                    <div className="row m-2 justify-content-start align-items-center">
                                        <div className="text-gray-dark row align-items-center">
                                            <IoMdDoneAll className="ml-2"
                                                         style={{fontSize: "1.2rem"}}/>
                                            <div className="farsiNumbers ml-2">8</div>
                                            روزه
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="text-gray"/>
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

export default GetOrderContainer;