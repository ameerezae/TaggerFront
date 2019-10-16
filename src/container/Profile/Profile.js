import React, {Component} from 'react';
import "./Profile.scss";
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import {
    FaUserAlt,
    FaRegIdBadge,
    FaPhone,
    FaBookReader,
    FaUniversity,
    FaCommentAlt,
    FaUserGraduate,
    FaUserTag
} from "react-icons/fa";
import {IoMdMail, IoMdCalendar, IoMdFingerPrint, IoIosList} from "react-icons/io";
import {MdGroup} from "react-icons/md";
import {GoGlobe} from "react-icons/go";
import {Button} from "react-bootstrap";
import User from "../../assets/user.png";
import {SocialIcon} from "react-social-icons";

class ProfileComponent extends Component {
    state = {
        tags: [],
        showNav: null,
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        image: null,
        birthday: "",
        phone_number: "",
        gender: "",
        grade: "",
        university: "",
        entering_year: "",
        graduate_year: "",
        bio: "",
        id_code: "",
        social_account: "",
        value: "",
        genderLabel: "",
        gradeLabel: "",
    };

    componentWillMount() {
        this.getDetails()
    }

    async getDetails() {

        try {
            const url = "http://localhost:3004/profile/";

            const response = await fetch(`${url}`, {
                method: "GET",
                headers:
                    {
                        // Authorization: "JWT " + `${Cookies.get("JWTToken")}`
                        'Content-Type': 'application/json'
                    },

            });
            console.log(response.status, "STATUS", typeof response.status);
            const data = await response.json();
            this.saveData(data);
            if (!response.ok) {
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }

        } catch (e) {
            console.log(e, "The server is Down!");
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
        arr.forEach(element => (
            this.setState({[element]: json[element]})
        ))
    };

    render() {
        const originalForm = (
            <div>
                <div className="row justify-content-center my-4">
                    {this.state.image == null ?
                        <img src={User} alt="profile" className="img-fluid" style={{maxWidth: "100px"}}/> :
                        <img src={this.state.image} alt="profile" className="img-fluid" style={{maxWidth: "100px"}}/>
                    }
                </div>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><FaRegIdBadge
                                    className="ml-2 text-indigo"
                                    style={{fontSize: "1.4rem"}}/>نام
                                    کاربری
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center">{this.state.username}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><FaUserAlt
                                    className="ml-2 text-muted"/>نام
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center">{this.state.first_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"
                                     style={{fontSize: ".9rem"}}><FaUserTag
                                    className="ml-2 text-muted"
                                    style={{fontSize: "1.4rem"}}/> نام
                                    خانوادگی
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center ">{this.state.last_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><IoMdFingerPrint
                                    className="ml-2 text-blue" style={{fontSize: "1.4rem"}}/> کدملی
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center farsiNumbers">{this.state.id_code}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><IoMdMail
                                    className="ml-2 text-blue"/>ایمیل
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row justify-content-center align-items-center">{this.state.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><IoMdCalendar
                                    className="ml-2 text-orange" style={{fontSize: "1.4rem"}}/>تاریخ تولد
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center farsiNumbers">{this.state.birthday}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><FaPhone
                                    className="ml-2 text-orange"/>شماره تلفن
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center farsiNumbers">{this.state.phone_number}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><MdGroup
                                    className="ml-2 text-purple" style={{fontSize: "1.4rem"}}/>جنسیت
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row justify-content-center align-items-center">{this.state.gender}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><FaBookReader
                                    className="ml-2 text-purple"/>تحصیلات
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row justify-content-center align-items-center">{this.state.grade}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><IoMdCalendar
                                    className="ml-2 text-yellow" style={{fontSize: "1.4rem"}}/>تاریخ ورود
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center farsiNumbers align-items-center">{this.state.entering_year}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"
                                     style={{fontSize: ".85rem"}}><FaUserGraduate
                                    className="ml-2 text-yellow "/>فارغ التحصیلی
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center farsiNumbers">{this.state.graduate_year}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center text-gray"><FaUniversity
                                    className="ml-2 text-gray"/>دانشگاه
                                </div>
                            </div>
                            <div className="col-9">
                                <div
                                    className="row justify-content-center align-items-center">{this.state.university}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col">
                        <div className="row">
                            <div className="col-2">
                                <div className="row justify-content-start align-items-center text-gray"><FaCommentAlt
                                    className="ml-2 text-indigo"/>بیوگرافی
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="row justify-content-center align-items-center">{this.state.bio}</div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col">
                        <div className="row justify-content-start align-items-center text-gray"><GoGlobe
                            className="ml-2 text-blue" style={{fontSize: "1.4rem"}}/>حساب اجتماعی
                        </div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start align-items-center">
                            {this.state.tags.map(element => <SocialIcon url={"https://" + `${element}`}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );

        return (
            <div className="row">
                <div className="col-lg-10 backgroundStyle  col-md-9 directionToLeft min-vh-100">
                    <div className="container-fluid p-1 hidden-sm hidden-md hidden-lg " style={{backgroundColor : "#011B56"}}>
                        <IoIosList style = {{color:"white",fontSize : "2rem"}} className="mr-2 " onClick={() => this.setState({showNav: true})}/>
                    </div>
                    <div className="container-fluid w-75 mt-5 directionToLeft ">
                        <div className="container bg-white mb-5 border-shape border shadow p-4">
                            <div className="row justify-content-end ml-2">
                                <Button className="justify-content-end" onClick={() => {
                                    this.props.history.push(`/edit`)
                                }}>ویرایش</Button>
                            </div>
                            {originalForm}
                        </div>
                        <div className="hidden-sm hidden-md hidden-lg">
                            <SideNavbarXs ShowNav={this.state.showNav}
                                          closeNav={() => this.setState({showNav: false})}/>
                        </div>
                    </div>
                </div>
                <div className="one-edge-shadow p-0 mt-5 col-lg-2 col-3 hidden-xs">
                    <SideNavbarComponent/>
                </div>
            </div>


        );
    }
};

export default ProfileComponent;