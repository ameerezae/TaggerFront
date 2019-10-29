import * as api_urls from "./api_urls";
import axios from "axios";
import Cookies from "js-cookie";


class Profile_Pages_Api {

    static async getProfileDetails() {
        const config = {
            headers:
                {
                    Authorization: `JWT ${Cookies.get("JWTToken")}`,
                },
        };

        const response = await axios.get(
            api_urls.PROFILE,
            config
        );
        return response;
    }

    static async editProfile(edited) {
        const config = {
            headers: {
                Authorization: "JWT " + `${Cookies.get("JWTToken")}`,
            }
        };
        const body = edited;
        const response = await axios.put(
            api_urls.EDIT_PROFILE,
            body,
            config
        );
        return response;
    }
}

export default Profile_Pages_Api;