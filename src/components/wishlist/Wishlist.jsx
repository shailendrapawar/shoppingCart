import React, { useEffect, useState } from "react"
import "./wishlist.css"
import { useSelector } from "react-redux"
import WishlistBanner from "../wishlistBanner/WishlistBanner"

export default function Wishlist(){

    const wishlistData=useSelector((state)=>state.wishlist)
    console.log(wishlistData)

    const[wishlist,setWishlist]=useState([])


    useEffect(()=>{

        setWishlist(wishlistData);

    })

    return (
        <div className="h-[90vh] flex justify-center items-center">
            <section className="w-5/6 max-w-[600px] h-3/5 flex flex-col gap-2 p-1">
            {
                wishlist?.map((v,i)=>{

                    return <WishlistBanner data={v} />

                })
            }
            </section>
        </div>
    )
}