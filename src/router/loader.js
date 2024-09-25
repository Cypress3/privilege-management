import { redirect } from "react-router-dom";
import { ACCESS_TOKEN, ROLE } from "../config/constants";

export const protectedLoader = () => {
	//没有登录，跳转到登录页
	if (!localStorage.getItem(ACCESS_TOKEN)) {
		return redirect("/login");
	}
	return null;
};

export const manageLoader = () => {
     //权限不够，跳转到无权限提示页
     if(localStorage.getItem(ROLE) !== "admin") {
        return redirect("/nopermission");
     }
    return null;
};