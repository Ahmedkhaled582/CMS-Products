import { Outlet } from "react-router-dom";
import Sidebar from "../../Components/Dashboard/Sidebar";
import Topbar from "../../Components/Dashboard/Topbar";
import "./dashboard.css"


export default function Dashboard({setTheme , theme }){
    return (
      <>
      <div className="position-relative ">
      <Topbar 
// @ts-ignore
      setTheme={setTheme} theme={theme}/>
      <div className="dashboard d-flex gap-1" style={{marginTop:"70px"}}>
      <Sidebar/>
      <Outlet/>
      </div>
      </div>
    </>
    );
  }
  
  
  