import React, {Component} from 'react';
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import "./EditProfile.scss";
import Dropdown from 'react-dropdown';
import "react-dropdown/style.css";
import DatePicker from "react-datepicker2";
import {FormControl, InputGroup} from "react-bootstrap";
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
import {IoMdMail, IoMdCalendar, IoMdFingerPrint} from "react-icons/io";
import {MdGroup} from "react-icons/md";
import {GoGlobe} from "react-icons/go";
import {TagInput} from "reactjs-tag-input";
import {Button} from "react-bootstrap";
import MagicDropzone from "react-magic-dropzone";
import Cookies from "js-cookie";

class EditProfileContainer extends Component {
    state = {
        formats: ".jpg, .jpeg, .png",
        previews: null,
        gradeLabel : "",
        genderLabel : "",
        dateValue : "",
        edited: {
            tags: [],
            id_code: "",
            bio : "",
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
            social_account: [],
        }
    };

    componentWillMount() {
        this.getDetails();
    }

    async getDetails() {

        try {
            const url = "http://127.0.0.1:8000/authentication/profile/";
            const response = await fetch(`${url}`, {
                method: "GET",
                headers:
                    {
                        Authorization: "JWT" + `${Cookies.get("JWTToken")}`
                    },

            });
            const data = await response.json();
            this.saveData(data)
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
        arr.forEach(function (element) {
            this.setState(prevState => {
                const newState = {...prevState};
                newState.edited[element] = json[element];
                return newState
            })
        })
    };

    static async handleSubmit(event, data) {
        event.preventDefault();
        try {
            const url = "http://127.0.0.1:8000/authentication/registration/";
            const response = await fetch(`${url}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    Authorization: "JWT " + `${Cookies.get("JWTToken")}`
                }
            });
            if (!response.ok) {
                console.log("OHH BadRequest!");
                throw Error(response.statusText);
            }
        } catch (e) {
            console.log(e, "The server is Down!")
        }
    }


    onTagsChanged = (tags) => {
        // this.setState({tags},()=>{console.log(this.state)})
        this.setState(prevState => {
            const newState = {...prevState};
            newState.edited["tags"] = tags;
            return newState;
        })
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState.edited[name] = value;
            return newState;
        }, () => {
            console.log(this.state.edited)
        })
    };

    genderHandleChange = (e) => {
        const value = e.value;
        const label = e.label;
        console.log(value,label);
        this.setState({genderLabel: label});
        // this.setState({ gender: value },()=>{console.log(this.state)});
        this.setState(prevState => {
            const newState = {...prevState};
            newState.edited["gender"] = value;
            return newState;
        })
    };

    gradeHandleChange = (e) => {
        const value = e.value;
        const label = e.label;
        this.setState({gradeLabel: label})
        // this.setState({ grade: value },()=>{console.log(this.state)});
        this.setState(prevState => {
            const newState = {...prevState};
            newState.edited["grade"] = value;
            return newState;
        })

    };

    onDrop = (accepted, rejected, links) => {
        const cont = accepted;
        accepted = accepted.map(v => v.preview);
        this.setState(prevState => {
            const newState = {...prevState};
            newState.edited["image"] = cont;
            newState.previews = accepted;
            return newState;
        })

    };

    render() {
        const genderOptions = [
            {value: 1, label: 'مرد'},
            {value: 2, label: 'زن'},
        ];
        const gradeOptions = [
            {value: 1, label: "دیپلم"},
            {value: 2, label: "کارشناسی"},
            {value: 3, label: "کارشاسی ارشد"},
            {value: 4, label: "دکتری"}
        ];


        const EditingFrom = (
            <form onSubmit={(event) => {
                EditProfileContainer.handleSubmit(event, this.state.edited)
            }} className="mb-5">
                <div className="row align-items-center justify-content-center my-4 mr-2">
                    <div className="Dropzone-page">
                        <MagicDropzone
                            className="Dropzone"
                            accept={this.state.formats}
                            onDrop={this.onDrop}
                        >
                            <div className="Dropzone-content">
                                {this.state.previews != null ? (

                                    <img alt="ویرایش عکس" className="Dropzone-img" src={this.state.previews}/>

                                ) : (
                                    "برای بارگذاری بکشید یا کلیک کنید"
                                )}
                            </div>
                        </MagicDropzone>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start align-items-center"><FaRegIdBadge
                            className="ml-2 text-indigo"
                            style={{fontSize: "1.4rem"}}/>نام
                            کاربری
                        </div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.edited.username}</div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center"><FaUserAlt
                                    className="ml-2 text-muted"/>نام
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="first_name"
                                            value={this.state.edited.first_name}
                                            type="text"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center"  style={{fontSize:".9rem",textAlign:"center"}}><FaUserTag className="ml-2 text-muted"  style={{fontSize:"1.1rem"}}/>نام
                                    خانوادگی
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="last_name"
                                            value={this.state.edited.last_name}
                                            type="text"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start"><IoMdFingerPrint className="ml-2 text-blue"
                                                                                            style={{fontSize: "1.4rem"}}/>کدملی
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="id_code"
                                            value={this.state.edited.id_code}
                                            type="text"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center"><IoMdMail
                                    className="ml-2 text-blue"/>ایمیل
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="email"
                                            value={this.state.edited.email}
                                            type="email"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
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
                                <div className="row justify-content-start"><IoMdCalendar className="ml-2 text-orange"
                                                                                         style={{fontSize: "1.4rem"}}/>تاریخ
                                    تولد
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-center">
                                    <div className="w-100">
                                        <DatePicker
                                            className="setTextAlign"
                                            onChange={value => {
                                                this.setState(prevState => {
                                                    const newState = {...prevState};
                                                    newState.edited.birthday = value.locale('fa').format('jYYYY/jM/jD')
                                                    return newState;
                                                }, () => {
                                                    console.log(this.state.edited)
                                                })
                                            }}

                                            value={this.state.dateValue}
                                            isGregorian={false}
                                            timePicker={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start align-items-center"><FaPhone
                                    className="ml-2 text-orange"/>شماره
                                    تلفن
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="phone_number"
                                            value={this.state.edited.phone_number}
                                            type="phone"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start"><MdGroup className="ml-2 text-purple"
                                                                                    style={{fontSize: "1.4rem"}}/>جنسیت
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-center">
                                    <Dropdown onChange={this.genderHandleChange} menuClassName='myMenuClassName'
                                              controlClassName='myControlClassName' name="gender"
                                              options={genderOptions} value={this.state.genderLabel}
                                              placeholder="انتخاب کنید"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start"><FaBookReader className="ml-2 text-purple"/>تحصیلات
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-center">
                                    <Dropdown onChange={this.gradeHandleChange} name="grade" options={gradeOptions}
                                              value={this.state.gradeLabel} placeholder="انتخاب کنید"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start"><FaUniversity className="ml-2 text-gray"/>دانشگاه
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup className="m-0">
                                        <FormControl
                                            onChange={this.handleChange}
                                            name="university"
                                            value={this.state.edited.university}
                                            type="text"
                                            className="input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3 w-100">
                                <div className="row justify-content-start align-items-center"><IoMdCalendar
                                    className="ml-2 text-yellow"
                                    style={{fontSize: "1.3rem"}}/>تاریخ
                                    ورود
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-center">
                                    <div className="w-100">
                                        <DatePicker
                                            className="setTextAlign"
                                            onChange={value => {
                                                this.setState(prevState => {
                                                    const newState = {...prevState};
                                                    newState.edited.entering_year = value.locale('fa').format('jYYYY/jM/jD')
                                                    return newState;
                                                })
                                            }}
                                            value={this.state.dateValue}
                                            isGregorian={false}
                                            timePicker={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start" style={{fontSize: ".85rem"}}><FaUserGraduate
                                    className="ml-2 text-yellow"
                                    style={{fontSize: "1rem"}}/>فارغ
                                    التحصیلی
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-center">
                                    <div className="w-100">
                                        <DatePicker
                                            className="setTextAlign"
                                            onChange={value => {
                                                this.setState(prevState => {
                                                    const newState = {...prevState};
                                                    newState.edited.graduate_year = value.locale('fa').format('jYYYY/jM/jD')
                                                    return newState;
                                                })
                                            }}
                                            value={this.state.dateValue}
                                            isGregorian={false}
                                            timePicker={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-3">
                        <div className="row justify-content-start align-items-center"><FaCommentAlt
                            className="ml-2 text-indigo"/>بیوگرافی
                        </div>
                    </div>
                    <div className="col-8">
                        <InputGroup className="m-0">
                            <FormControl
                                onChange={this.handleChange}
                                name="bio"
                                value={this.state.edited.bio}
                                type="text"
                                className="input-style"
                            />
                        </InputGroup>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start"><GoGlobe className="ml-2 text-blue"
                                                                            style={{fontSize: "1.4rem"}}/>حساب اجتماعی
                        </div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start"><TagInput tags={this.state.edited.tags}
                                                                             onTagsChanged={this.onTagsChanged}/></div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <Button variant="success" size="lg" style={{width: "25%"}}>ثبت</Button>
                </div>
            </form>
        );


        return (
            <div className="row">
                <div className="col-lg-10 backgroundStyle col-md-9 min-vh-100">
                    <div className="container-fluid w-75 mt-5 directionToLeft ">

                        <div className="container bg-white mb-5 border-shape border shadow p-4">
                            {EditingFrom}
                        </div>
                        <div className="hidden-sm hidden-md hidden-lg">
                            <button onClick={() => {
                                this.setState({showNav: true})
                            }}>click
                            </button>
                            <SideNavbarXs ShowNav={this.state.showNav} closeNav={this.closeSideNavabr}/>
                        </div>
                    </div>
                </div>
                <div className="one-edge-shadow p-0 mt-5 col-lg-2 col-3 hidden-xs">
                    <SideNavbarComponent/>
                </div>
            </div>
        );
    }
}

export default EditProfileContainer;