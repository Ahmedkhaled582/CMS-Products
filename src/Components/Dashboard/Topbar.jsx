// @ts-nocheck
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Menu } from "../../Context/MenuContext";
import { LOGOUT } from "../../Api/Api";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal"
import { IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { jwtDecode } from "jwt-decode";
export default function Topbar({setTheme ,theme }) {
  const menu = useContext(Menu)
  // @ts-ignore
  const setisOpen = menu.setisOpen
  const [name , setname] = useState("")
  const cookie = Cookie()
  const { t } = useTranslation();
  
  const navigate = useNavigate()

async function handlelogout(){
  try {
      cookie.remove("e-commerce")
      // window.location.pathname="/login"
      navigate('/login')
      // return <Navigate to='/login' />
  } catch (error) {
      console.log(error)
  }

}
  const token = cookie.get("e-commerce")
  const decoded = jwtDecode(token);

   const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };


  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

    return (
      <div className="top-bar">
      <div className="d-flex align-items-center justify-content-between h-100">
      <div className="d-flex align-items-center gap-5">     
      <h3>{t("Dashboard")}</h3>
      <FontAwesomeIcon onClick={()=> setisOpen(prev => !prev)} cursor={"pointer"} icon={faBars} />
      </div>
      <div className="d-flex">
                  <button className="btn" onClick={() => { i18n.language === "ar" ?changeLanguage("en") : changeLanguage("ar")} }>
        {i18n.language === "ar"? "English" : "عربى"}
      </button>

 {theme === "dark" ? (
            <IconButton
              onClick={() => {
              setTheme(theme === "light" ? "dark" : "light")
              }}
              color="inherit"
            >
              <LightModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
              setTheme(theme === "light" ? "dark" : "light")
              }}
              color="inherit"
            >
              <DarkModeOutlinedIcon />
            </IconButton>
          )}
    <DropdownButton id="dropdown-basic-button" title={name}>
    <Dropdown.Item >{decoded.email}</Dropdown.Item>
    <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
      </DropdownButton>
    
      </div>
      </div>
      </div>
    );
  }
  
  
