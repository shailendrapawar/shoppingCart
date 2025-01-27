import { Outlet } from "react-router-dom"
import Navbar from "./src/components/navbar/Navbar"

export default function(){
    return (
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}