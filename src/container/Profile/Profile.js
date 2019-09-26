import React, {Component} from 'react';
import "./Profile.css";
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import {FaUserAlt ,FaRegIdBadge, FaPhone, FaBookReader, FaUniversity, FaCommentAlt, FaUserGraduate, FaUserTag} from "react-icons/fa";
import {IoMdMail, IoMdCalendar,IoMdFingerPrint} from "react-icons/io";
import {MdGroup} from "react-icons/md";
import {GoGlobe} from "react-icons/go";
import {Button} from "react-bootstrap";
import Cookies from "js-cookie";
import User from "../../assets/user.png";
import {SocialIcon} from "react-social-icons";

class ProfileComponent extends Component  {
    state = {
        tags : [],
        showNav : null,
        username : "",
        first_name : "",
        last_name : "",
        email : "",
        image : null,
        birthday : "",
        phone_number : "",
        gender : "",
        grade : "",
        university : "",
        entering_year : "",
        graduate_year : "",
        bio : "",
        id_code : "",
        social_account : "",
        value: "",
        genderLabel : "",
        gradeLabel:"",
    };

    componentWillMount() {
        this.getDetails()
    }
    async getDetails () {

        try{
            const url = "http://127.0.0.1:8000/authentication/profile/";
            const response = await fetch(`${url}`, {
                method : "GET",
                headers:
                    {
                        Authorization: "JWT" + `${Cookies.get("JWTToken")}`
                    },

            });
            response.then(req => req.json).then(req => this.saveData(req));
            if (!response.ok){
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }

        }catch (e) {
            console.log(e,"The server is Down!");
        }
    }
    saveData = (json) => {
        const arr = [
            "username",
            "first_name",
            "last_name",
            "email",
            "image",
            "birthday",
            "phone_number",
            "gender",
            "grade",
            "university",
            "entering_year",
            "graduate_year",
            "bio",
            "id_code",
            "social_account",
        ];
        arr.forEach(function (element){
            this.setState({[element] : json[element]})
        })
    };
    render(){
        const originalForm = (
            <div>
                <div className="row justify-content-center my-4">
                    {this.state.image == null ?
                        <img src={User} alt="profile" className="img-fluid" style={{maxWidth : "100px"}}/> :
                        <img src={this.state.image} alt="profile" className="img-fluid" style={{maxWidth : "100px"}}/>
                    }
                </div>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start"><FaRegIdBadge className="ml-2"/>نام کاربری</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.username}</div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start"><FaUserAlt className="ml-2"/>نام</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.first_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start"><FaUserTag className="ml-2"/> نام خانوادگی </div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.last_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><IoMdFingerPrint className="ml-2"/> کدملی</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.id_code}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><IoMdMail className="ml-2"/>ایمیل</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>

                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><IoMdCalendar className="ml-2"/>تاریخ تولد</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">
                                    <div className="row justify-content-start">{this.state.birthday}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><FaPhone className="ml-2"/>شماره تلفن</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.phone_number}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><MdGroup className="ml-2"/>جنسیت</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">
                                    <div className="row justify-content-start">{this.state.genderLabel}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><FaBookReader className="ml-2" />تحصیلات</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.gradeLabel}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><IoMdCalendar className="ml-2"/>تاریخ ورود</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.entering_year}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start align-items-center"><FaUserGraduate className="ml-2"/>تاریخ فارغ التحصیلی</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.graduate_year}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start align-items-center"><FaUniversity className="ml-2" />دانشگاه</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.university}</div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start align-items-center"><FaCommentAlt className="ml-2"/>بیوگرافی</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.bio}</div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col">
                        <div className="row justify-content-start align-items-center"><GoGlobe className="ml-2"/>حساب اجتماعی</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">
                            {this.state.tags.map(element => <SocialIcon url={"https://"+`${element}`}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );

    return (
        <div className="row">
            <div className="col-lg-10 backgroundStyle col-md-9 min-vh-100">
                <div className="container-fluid w-75 mt-5 directionToLeft ">

                    <div className="container bg-white mb-5 border-shape border shadow p-4">
                        <div className="row justify-content-end ml-2">
                            <Button className="justify-content-end" onClick = {()=>{this.props.history.push(`/edit`)}} >ویرایش</Button>
                        </div>
                        {originalForm}
                    </div>
                    <div className="hidden-sm hidden-md hidden-lg">
                        <button onClick={() => {this.setState({showNav:true})}}>click</button>
                        <SideNavbarXs ShowNav = {this.state.showNav} closeNav = {this.closeSideNavabr}/>
                    </div>
                </div>
            </div>
            <div className="one-edge-shadow p-0 mt-5 col-lg-2 col-3 hidden-xs">
                <SideNavbarComponent/>
            </div>
        </div>



    );}
};

export default ProfileComponent;