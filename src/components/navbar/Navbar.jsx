import "./navbar.css"
import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function Navbar() {
    const cartitems=useSelector((state)=>state.cart)
    const [count,setCount]=useState(0)

     useEffect(()=>{

        const c=cartitems.reduce((acc,curr)=>{
            return  acc+=curr.qty
        },0)
        setCount(c)

     },[cartitems])
    return (
        <nav className="navbar flex justify-center gap-10 items-center">
            <div className="w-2/4 max-w-52 flex justify-between">
                <NavLink className="w-16  rounded-md" to="/">Home</NavLink>
                <NavLink className="w-16 rounded-md" to="/wishlist">wishlist</NavLink>
            </div>
            <NavLink className="w-12 h-8 rounded-md flex justify-evenly items-center" to="/cart"><FaShoppingCart />{count}</NavLink>
        </nav>
    )

}
