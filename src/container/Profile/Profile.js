import React, {Component} from 'react';
import "./Profile.css";
import "../../assets/js/plugins/nucleo/css/nucleo.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import SideNav from "react-simple-sidenav";

// import "../../assets/css/argon-dashboard.css";
// import "../../assets/js/plugins/@fortawesome/fontawesome-free/css/all.min.css";
class ProfileComponent extends Component  {
    state = {
        showNav : null,
    }
    render(){

    return (
        <div className="row">
            <div className="bg-success col-lg-10 col-md-9">
                <div className="hidden-sm hidden-md hidden-lg">
                    <button onClick={() => {this.setState({showNav:true})}}>click</button>
                    <SideNav
                        showNav={this.state.showNav}
                        onHideNav={()=>this.setState({showNav:false})}
                        title={<div>داشبورد</div>}
                        titleStyle={{backgroundColor: '#2196F3',textAlign:"right",direction:"rtl",fontFamily:"Shabnam",padding:"8px",marginBottom:"1rem"}}
                        itemStyle = {{textAlign:"right",direction:"rtl",fontFamily:"Shabnam",padding:"8px"}}
                        openFromRight={true}
                        items={[<a> <i
                            className="ni ni-tv-2 text-primary"></i> داشبورد
                        </a>,
                            <a> <i className="ni ni-planet text-blue"></i> آیکون ها
                            </a>,
                            <a> <i className="ni ni-pin-3 text-orange"></i> نقشه ها
                            </a>,
                            <a> <i className="ni ni-single-02 text-yellow"></i> اطلاعات شخصی
                            </a>,
                            <hr className="my-3"/>,
                            <h6 className="text-muted">اسناد</h6>,
                            <a className="text-muted">
                                <i className=" ni ni-spaceship"></i> شروع
                            </a>,
                            <a className="text-muted">
                                <i className="ni ni-palette"></i> لینک ها
                            </a>,
                            <a className="text-muted">
                                <i className="ni ni-ui-04"></i> اجزا
                            </a>




                        ]} />
                </div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
                <p>5</p>
            </div>
            <div className="one-edge-shadow col-lg-2 col-3 hidden-xs">
                <div id="vertical-right" className="container-fluid">
                    <div className="row mt-4 mr-3">
                        <a> <i
                            className="ni ni-tv-2 text-primary"></i> داشبورد
                        </a>
                    </div>
                    <div className="row mt-4 mr-3">
                        <a> <i className="ni ni-planet text-blue"></i> آیکون ها
                        </a>
                    </div>
                    <div className="row mt-4 mr-3">
                        <a> <i className="ni ni-pin-3 text-orange"></i> نقشه ها
                        </a>
                    </div>
                    <div className="row mt-4 mr-3">
                        <a> <i className="ni ni-single-02 text-yellow"></i> اطلاعات شخصی
                        </a>
                    </div>
                    <hr className="my-3"/>
                    <h6 className="text-muted">اسناد</h6>
                    <div className="row mt-4 mr-3">
                        <a className="text-muted">
                            <i className=" ni ni-spaceship"></i> شروع
                        </a>
                    </div>
                    <div className="row mt-4 mr-3">
                        <a className="text-muted">
                            <i className="ni ni-palette"></i> لینک ها
                        </a>
                    </div>
                    <div className="row mt-4 mr-3">
                        <a className="text-muted">
                            <i className="ni ni-ui-04"></i> اجزا
                        </a>
                    </div>



                </div>

            </div>
        </div>
    );}
};

export default ProfileComponent;