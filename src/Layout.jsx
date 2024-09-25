import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { ACCESS_TOKEN, ROLE, PERMISSIONS } from "./config/constants";
import menus from "./config/menus";
import { useMemo } from "react";
import "./Layout.css";

const Layout = () => {
    const navigation = useNavigate();

    const newMenus = useMemo(() => {
        //获取菜单栏和按钮权限信息
        const permissions = JSON.parse(localStorage.getItem(PERMISSIONS) || {});
        //获取菜单栏权限信息
        const keys = Object.keys(permissions);
        return menus.filter(v => keys.includes(v.key));
    }, []);

    const exit = () => {
        navigation("/login");
        //退出登陆时，清除存储信息
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(ROLE);
        localStorage.removeItem(PERMISSIONS);
    };

    return (
        <div className="layout">
            <header>
                <button style={{ float: "right" }} onClick={exit}>
                    退出
                </button>
            </header>
            <main>
                <aside>
                    {newMenus.map((o) => (
                        <NavLink to={o.key} key={o.key} style={{ display: "block" }}>
                            {o.name}
                        </NavLink>
                    ))}
                </aside>
                <article>
                    <Outlet />
                </article>
            </main>
        </div>
    );
}

export default Layout;