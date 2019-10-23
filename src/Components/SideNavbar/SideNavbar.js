import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./SideNavbar.scss";
import "../../assets/js/plugins/nucleo/css/nucleo.css";
import BlueBrand from "../../assets/blue.png";
const SideNavbarComponent = () => {
    return (
            <div id="vertical-right" className="container-fluid">
                <div className="row justify-content-center mt-2 mr-3">
                    {/*<img src={BlueBrand} alt="brand" style={{maxWidth:"100px"}} className="img-fluid"/>*/}
                </div>
                <div className="row mt-4 mr-3">
                    <div> <i
                        className="ni ni-tv-2 text-primary"></i> داشبورد
                    </div>
                </div>
                <div className="row mt-4 mr-3">
                    <div> <i className="ni ni-planet text-blue"></i> آیکون ها
                    </div>
                </div>
                <div className="row mt-4 mr-3">
                    <div> <i className="ni ni-pin-3 text-orange"></i> نقشه ها
                    </div>
                </div>
                <div className="row mt-4 mr-3">
                    <div> <i className="ni ni-single-02 text-yellow"></i> اطلاعات شخصی
                    </div>
                </div>
                <hr className="my-3"/>
                <h6 className="text-muted">اسناد</h6>
                <div className="row mt-4 mr-3">
                    <div className="text-muted">
                        <i className=" ni ni-spaceship"></i> شروع
                    </div>
                </div>
                <div className="row mt-4 mr-3">
                    <div className="text-muted">
                        <i className="ni ni-palette"></i> لینک ها
                    </div>
                </div>
                <div className="row mt-4 mr-3">
                    <div className="text-muted">
                        <i className="ni ni-ui-04"></i> اجزا
                    </div>
                </div>

            </div>
    );
};

export default SideNavbarComponent;