import { createContext,useState } from "react"
export const Menu = createContext("");

export default function MenuContext({children}){
    const [isOpen , setisOpen] = useState(true)
    // @ts-ignore
    return <Menu.Provider value={{isOpen , setisOpen}}>{children}</Menu.Provider>
}