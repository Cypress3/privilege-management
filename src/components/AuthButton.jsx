import { useLocation } from "react-router-dom";
import { ROLE, PERMISSIONS } from "../config/constants";

const AuthButton = ({ children }) => {
    const { pathname } = useLocation();
    const permissions = JSON.parse(localStorage.getItem(PERMISSIONS) || {});
    const role = localStorage.getItem(ROLE);
    if (permissions[pathname]?.includes(role)) {
        return <>{children}</>
    }

    return null;
};

export default AuthButton;