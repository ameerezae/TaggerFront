import axios from "axios";
import * as api_urls from "./api_urls";


class Auth_Page_Api {

    static async login(credentials) {
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        const body = JSON.stringify(credentials);

        const response = await axios.post(
            api_urls.LOGIN,
            body,
            config
        );
        return response;
    }

    static async signup(credentials){
        const config = {
            headers: {
                "Content-type": "application/json"
            }
        };

        const body = JSON.stringify(credentials);

        const response = await axios.post(
            api_urls.SIGNUP,
            body,
            config
        );

        return response
    }

    static async checkUsername(username) {
        const config =
            {
                headers: {
                    "Content-Type": "application/json"
                }
            };
        const body = JSON.stringify({"username": username});

        const response = await axios.post(
            api_urls.CHECKUSERNAME,
            body,
            config
        );
        return response;
    }
}

export default Auth_Page_Api;