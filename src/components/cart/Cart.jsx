import { useSelector } from "react-redux"
import "./cart.css"
import { useEffect, useState } from "react"
import CartList from "../cartList/CartList"
import { store } from "../../store/store"
export default function Cart(){

    

    const cartdata=useSelector((state)=>state.cart)
    // console.log(cartdata)
    const [cartItems,setCartItems]=useState([])
    const[price,setPrice]=useState(0)


    useEffect(()=>{
        setCartItems(cartdata)
        // calculatePrice(cartdata)
        const p=cartdata.reduce((acc,curr)=>{
            return acc+curr.price*curr.qty
        },0).toFixed(2)
        setPrice(p)

    },[cartdata])


    return (
        <div className="cart-body bg-slate-300 text-black">
            <div></div>
            <div className="cart-list-body mt-10 flex flex-col gap-1 bg-slate-300 p-1 justify-center">
                {/* {
                    cartItems!=[]?cartItems.map((v,i)=>{
                        return <CartList data={v} key={i} />
                    }): <h1>data not availbale</h1>
                } */}

                {
                    cartItems.length>0?(
                        cartItems.map((v,i)=>{
                            return <CartList key={i} data={v} />
                        })
                    ):(<h1> Cart is empty</h1>)
                }
            </div>
            <div className="bg-amber-300 w-full mt-2 h-12 flex items-center justify-end pr-20">
                <section>TOTAL: <b className=""> ${price}</b> </section>
            </div>
        </div>
    )
}