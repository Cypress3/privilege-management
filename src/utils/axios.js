import axios from "axios";
import { CODE_RELOGIN } from "../config/returnCodeMap";
import { ACCESS_TOKEN, AUTH } from "../config/constants";

const service = axios.create({
	baseURL: "//127.0.0.1:4000",
	timeout: 30000,
});

service.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem(ACCESS_TOKEN);
		token &&
			Object.assign(config.headers, {
				[AUTH]: token,
			});
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

service.interceptors.response.use(
	(res) => {
		if (res.data.returncode === CODE_RELOGIN) {
			window.location.href = "/login";
		}
		return res;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default service;
