import React, {Component} from 'react';
import "./Profile.css";
import "../../assets/js/plugins/nucleo/css/nucleo.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
// import "../../assets/css/argon-dashboard.css";
// import "../../assets/js/plugins/@fortawesome/fontawesome-free/css/all.min.css";
class ProfileComponent extends Component  {
    state = {
        showNav : null,
    }

    closeSideNavabr = () => {

        this.setState({showNav:false})
    };

    render(){

    return (
        <div className="row">
            <div className="bg-success col-lg-10 col-md-9">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
         

                <div className="hidden-sm hidden-md hidden-lg">
                    <button onClick={() => {this.setState({showNav:true})}}>click</button>
                    <SideNavbarXs ShowNav = {this.state.showNav} closeNav = {this.closeSideNavabr}/>
                </div>
            </div>
            <div className="one-edge-shadow p-0 col-lg-2 col-3 hidden-xs">
                <SideNavbarComponent/>
            </div>
        </div>
    );}
};

export default ProfileComponent;