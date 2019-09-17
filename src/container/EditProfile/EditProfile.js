import React, {Component} from 'react';
import SideNavbarXs from "../../Components/SideNavbar-xs/SideNavbar-xs";
import SideNavbarComponent from "../../Components/SideNavbar/SideNavbar";
import "./EditProfile.scss";
import Dropdown from 'react-dropdown'
import moment from 'moment-jalaali'
import DatePicker from "react-datepicker2";
import {FormControl, InputGroup} from "react-bootstrap";
import {SocialIcon} from "react-social-icons";

class EditProfileContainer extends Component {
    state = {
        showNav : null,
        username : "",
        first_name : "",
        last_name : "",
        email : "",
        image : "",
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
        value: moment(),
        genderLabel : "",
        gradeLabel:"",
        editingMode : false ,
    };
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevState => {
            const newState = {...prevState};
            newState[name] = value;
            return newState;
        },()=>{console.log(this.state)})

    };
    genderHandleChange = (e) => {
        const value = e.value;
        const label = e.label;
        this.setState({genderLabel : label})
        this.setState({ gender: value },()=>{console.log(this.state)});

    }
    gradeHandleChange = (e) => {
        const value = e.value;
        const label = e.label;
        this.setState({gradeLabel : label})
        this.setState({ grade: value },()=>{console.log(this.state)});

    };
    SubmitEditedProfileData = () => {

    };
    render() {
        const genderOptions = [
            { value: 1, label: 'مرد' },
            { value: 2, label: 'زن'},
        ];
        const gradeOptions = [
            {value : 1, label:"دیپلم"},
            {value : 2, label:"کارشناسی"},
            {value : 3, label:"کارشاسی ارشد"},
            {value : 4, label:"دکتری"}
        ]

        let form = null;
        const orginalForm = (
            <div>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">
                            عکس
                        </div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">
                            عکس خود را اضافه کنید.
                        </div>

                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">نام کاربری</div>
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
                                <div className="row justify-content-start">نام</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.first_name}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start"> نام خانوادگی</div>
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
                                <div className="row justify-content-start">کدملی</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.id_code}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start">ایمیل</div>
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
                                <div className="row justify-content-start">تاریخ تولد</div>
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
                                <div className="row justify-content-start">شماره تلفن</div>
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
                                <div className="row justify-content-start">جنسیت</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">
                                    <div className="row justify-content-start">{this.state.gender}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start">تحصیلات</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.grade}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">دانشگاه</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.university}</div>
                    </div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start">تاریخ ورود</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">{this.state.entering_year}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <div className="row justify-content-start">تاریخ فارغ التحصیلی</div>
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
                        <div className="row justify-content-start">بیوگرافی</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.bio}</div>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col">
                        <div className="row justify-content-start">حساب اجتماعی</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start"><SocialIcon url={"https://github.com/amirRezaeii"}/></div>
                    </div>
                </div>
            </div>
        );
        const EditingFrom = (
            <form>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">
                            عکس
                        </div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">
                            عکس خود را اضافه کنید.
                        </div>

                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">نام کاربری</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.username}</div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start">نام</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="first_name"
                                            value = {this.state.first_name}
                                            type="text"
                                            className = "input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start">نام خانوادگی</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="last_name"
                                            value = {this.state.last_name}
                                            type="text"
                                            className = "input-style"
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
                                <div className="row justify-content-start">کدملی</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="id_code"
                                            value = {this.state.id_code}
                                            type="text"
                                            className = "input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start">ایمیل</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="email"
                                            value = {this.state.email}
                                            type="email"
                                            className = "input-style"
                                        />
                                    </InputGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <hr/>
                <div className="row my-4 mr-2 align-items-center" >
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col">
                                <div className="row justify-content-start">تاریخ تولد</div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-start">
                                    <DatePicker
                                        className = "setTextAlign"
                                        onChange={value => {this.setState({ birthday : value.locale('fa').format('jYYYY/jM/jD') })}}
                                        value={this.state.value}
                                        isGregorian={false}
                                        timePicker = {false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start">شماره تلفن</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="phone_number"
                                            value = {this.state.phone_number}
                                            type="phone"
                                            className = "input-style"
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
                                <div className="row justify-content-start">جنسیت</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <Dropdown onChange={this.genderHandleChange} className="w-50 border" name="gender" options={genderOptions} value={this.state.genderLabel} placeholder = "انتخاب کنید" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div className="row justify-content-start">تحصیلات</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <Dropdown onChange={this.gradeHandleChange} className="w-50 border" name="grade" options={gradeOptions} value={this.state.gradeLabel} placeholder = "انتخاب کنید" />
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
                                <div className="row justify-content-start">دانشگاه</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <InputGroup  className="m-0">
                                        <FormControl
                                            onChange = {this.handleChange}
                                            name ="university"
                                            value = {this.state.university}
                                            type="text"
                                            className = "input-style"
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
                        <div className="row">
                            <div className="col-4">
                                <div className="row justify-content-start">تاریخ ورود</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <DatePicker
                                        className = "setTextAlign"
                                        onChange={value => {this.setState({ entering_year : value.locale('fa').format('jYYYY/jM/jD') })}}
                                        value={this.state.value}
                                        isGregorian={false}
                                        timePicker = {false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-4">
                                <div className="row justify-content-start">تاریخ فارغ التحصیلی</div>
                            </div>
                            <div className="col-8">
                                <div className="row justify-content-start">
                                    <DatePicker
                                        className = "setTextAlign"
                                        onChange={value => {this.setState({ graduate_year : value.locale('fa').format('jYYYY/jM/jD') })}}
                                        value={this.state.value}
                                        isGregorian={false}
                                        timePicker = {false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr/>

                <div className="row my-4 mr-2 align-items-center">
                    <div className="col-2">
                        <div className="row justify-content-start">بیوگرافی</div>
                    </div>
                    <div className="col-9">
                        <InputGroup  className="m-0">
                            <FormControl
                                onChange = {this.handleChange}
                                name ="bio"
                                value = {this.state.bio}
                                type="text"
                                className = "input-style"
                            />
                        </InputGroup>
                    </div>
                </div>
                <hr/>

                <div className="row my-4 mr-2">
                    <div className="col">
                        <div className="row justify-content-start">حساب اجتماعی</div>
                    </div>
                    <div className="col">
                        <div className="row justify-content-start">{this.state.username}</div>
                    </div>
                    <div className="col"></div>
                </div>
            </form>
        )
        {this.state.editingMode ? form = EditingFrom : form = orginalForm }



        return (
            <div className="row">
                <div className="col-lg-10 col-md-9 min-vh-100">
                    <div className="container-fluid w-75 mt-5 directionToLeft ">
                        <div className="row justify-content-center">
                            <p className="header-Personal-info text-muted">اطلاعات شخصی</p>
                        </div>
                        <div className="container border">
                            <p>نمایه</p>
                            <button onClick={()=>{this.setState({editingMode : !this.state.editingMode},()=>{console.log(this.state.editingMode)})}} >edit</button>
                            <p>افرادی که از سرویس های SSO استفاده میکنند </p>
                            <hr/>
                            {form}

                        </div>
                        <div className="hidden-sm hidden-md hidden-lg">
                            <button onClick={() => {this.setState({showNav:true})}}>click</button>
                            <SideNavbarXs ShowNav = {this.state.showNav} closeNav = {this.closeSideNavabr}/>
                        </div>
                    </div>
                </div>
                <div className="one-edge-shadow p-0 col-lg-2 col-3 min-vh-100 hidden-xs">
                    <SideNavbarComponent/>
                </div>
            </div>
        );
    }
}

export default EditProfileContainer;