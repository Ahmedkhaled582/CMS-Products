import Cookie from "cookie-universal"
import { Outlet } from "react-router-dom"
import Login from "./Login"

export default function RequireBack(){

    const cookie = Cookie()
    const token = cookie.get("e-commerce")

    return token ?  <Outlet/> : <Login/>;
}