import Header from "../components/header/Header"
import { Outlet } from "react-router-dom"


export default function Destination() {
    
    return(
        <div className="destinationContainer">
            <Header />
            <Outlet />
        </div>
    )
}