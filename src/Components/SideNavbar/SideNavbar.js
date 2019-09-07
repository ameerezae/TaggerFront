import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./SideNavbar.scss";
const SideNavbarComponent = () => {
    return (
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
    );
};

export default SideNavbarComponent;