import React from 'react';
import {FaUser, IoIosList} from "react-icons/all";

const TopNavbar = (props) => {
    return (
        <div className="container-fluid p-2 directionToLeft " style={{backgroundColor: "#011B56"}}>
            <div className="row align-items-center mr-3">
                <IoIosList style={{color: "white", fontSize: "2rem"}}
                           className=" hidden-sm hidden-md hidden-lg"
                           onClick={props.onClick}/>
                <FaUser className="text-white hidden-xs"/>
                <div className="text-white mr-2 ">امیر رضایی</div>
            </div>
        </div>
    );
};

export default TopNavbar;