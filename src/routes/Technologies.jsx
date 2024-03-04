import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

export default function Technologies() {
    return (
        <div className="technologyContainer">
            <Header />
            <Outlet />
        </div>
    )
}