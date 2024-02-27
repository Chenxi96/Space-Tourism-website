import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Home from "../components/home/Home"


export default function Base() {
    return (
        <div className="baseContainer">
            <Header />
            <Outlet />
        </div>
    )
}