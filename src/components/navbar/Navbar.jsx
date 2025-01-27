import "./navbar.css"
import React from "react"
import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";


export default function Navbar() {
    return (
        <nav className="navbar flex justify-center gap-10 items-center">
            <div className="w-2/4 max-w-52 flex justify-between">
                <NavLink className="w-16  rounded-md" to="/">Home</NavLink>
                <NavLink className="w-16 rounded-md" to="/wishlist">wishlist</NavLink>
            </div>
            <NavLink className="w-9 h-8 rounded-md flex justify-center items-center" to="/cart"><FaShoppingCart /></NavLink>
        </nav>
    )

}
