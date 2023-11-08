import { Route, Routes } from "react-router-dom";
import { routes } from ".";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.admin} element={<Dashboard />} />
        </Routes>
    )
}
export default AppRoutes;