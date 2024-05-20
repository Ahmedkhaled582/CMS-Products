import Cookie from "cookie-universal"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard";
import Login from "./Login"
import Register from "./Register";

export default function RequireBack(){

    const cookie = Cookie()
    const token = cookie.get("e-commerce")

    const navigate = useNavigate()

    return token ?  <Outlet/> : <Login/>;
}