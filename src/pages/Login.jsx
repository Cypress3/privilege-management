import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getLogin } from "../apis";
import { ACCESS_TOKEN, ROLE, PERMISSIONS } from "../config/constants";

const Login = () => {
    const [user, setUser] = useState({ name: "", password: "" });
    const navigation = useNavigate();

    const sumbit = () => {
        getLogin(user).then((res) => {
            localStorage.setItem(ACCESS_TOKEN, res.data.accessToken);
            localStorage.setItem(ROLE, res.data.role);
            localStorage.setItem(PERMISSIONS, JSON.stringify(res.data.permission));
            navigation("/home");
        }).catch(err => {
            console.log("🚀🚀🚀 ~ err---", err);
        });
    };

    return (
        <>
            <div style={{ height: 170, marginTop: 60, textAlign: "center" }}>XXXX管理系统</div>
            <div style={{ textAlign: "center" }}>
                姓名：
                <input onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))} />
                <br />
                密码：
                <input onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))} />
                <br />
                <button onClick={sumbit}>提交</button>
            </div>
        </>
    );
}

export default Login;