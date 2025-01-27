import React from "react"
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function WishlistBanner({data}) {

    const dispatch=useDispatch()

    return (
        <>
            <div className="w-full h-24 bg-white flex justify-between items-center pl-2 pr-4 rounded-md">
                <img className="h-20 w-24  object-contain " src={data.image}></img>
                <span className="text-black h-20 min-w-20 w-1/2 text-xs grid items-center">{data.title}
                <i>${data.price}</i>
                </span>
                <FaShoppingCart onClick={()=>{
                    dispatch({
                        type:"cart/add",payload:data
                    })
                    dispatch({
                        type:"wishlist/remove",
                        payload:data
                    })

                }} className=" text-3xl text-black" />
            </div>
        </>
    )
}