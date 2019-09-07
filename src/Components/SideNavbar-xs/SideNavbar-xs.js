import React from 'react';
import SideNav from "react-simple-sidenav";

const SideNavbarXs = (props) => {
    return (
        <SideNav
            showNav={props.ShowNav}
            onHideNav={props.closeNav}
            title={<div>داشبورد</div>}
            titleStyle={{backgroundColor: '#2196F3',
                textAlign:"right",
                direction:"rtl",
                fontFamily:"Shabnam",
                padding:"8px",
                marginBottom:"1rem"}}

            itemStyle = {{textAlign:"right",
                direction:"rtl",
                fontFamily:"Shabnam",
                padding:"8px"}}

            openFromRight={true}

            items={[
                <a>
                    <i
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
    );
};

export default SideNavbarXs;