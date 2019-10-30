import * as api_urls from "./api_urls";
import axios from "axios";
import Cookies from "js-cookie";

class order_page_api {
    static async submit_order(order) {
        const config = {
            headers: {
                Authorization : `JWT ${Cookies.get("access_token")}`
            }
        };

        const body = JSON.stringify(order);
        const response = await axios.post(
            api_urls.POST_ORDERS,
            body,
            config
        );

        return response;
    }
}

export default order_page_api;