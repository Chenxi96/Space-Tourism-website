import { useEffect } from "react"
import Header from "../components/header/Header"
import { Outlet } from "react-router-dom"


export default function Destination() {
    
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}