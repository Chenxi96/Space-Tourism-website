import Header from "../components/header/Header"
import { Outlet } from "react-router-dom"

export default function Crew() {
    return (
        <div className='crewContainer'>
            <Header />
            <Outlet />
        </div>
    )
}