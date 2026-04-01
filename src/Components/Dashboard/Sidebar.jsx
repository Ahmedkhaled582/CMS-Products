import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./bars.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Menu } from "../../Context/MenuContext";
import { WindowSize } from "../../Context/WindowContext";
import { links } from "./NavLink";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function Sidebar() {
  const menu = useContext(Menu);
  const Windowcontext = useContext(WindowSize);
  const windowsize = Windowcontext.windowsize;
  // @ts-ignore
  const isOpen = menu.isOpen;
  const { t } = useTranslation();


  return (
    <>
    <div style={{position:"fixed" , top:"70px" , left:"0" ,width:"100%" , height:"100vh" , backgroundColor:"rgba(0 ,0 ,0,0.2)" , display : windowsize < "768" && isOpen ? "block" : "none"}}></div>
    <div
      className="side-bar pt-3"
      style={{
        left: windowsize < "768" ? (isOpen ? 0 : "-100%") : 0,
        width: isOpen ? "240px" : "fit-content",
        position: windowsize < "768" ? "fixed" : "sticky"
      }}
    >
    {links.map((link , key) => (
        <NavLink
      key={key}
      to={link.path}
      className="d-flex align-items-center gap-2 side-bar-link"
    >
      <FontAwesomeIcon
        icon={link.icon}
        style={{ padding: isOpen ? "10px 8px 10px 15px" : "10px 13px" }}
      />
      <p className="m-0" style={{ display: isOpen ? "block" : "none" }}>
        {t(link.name)}
      </p>
    </NavLink>
      
    ))}
    </div>
    </>
  );
}
