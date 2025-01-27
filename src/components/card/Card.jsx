import { useDispatch } from "react-redux"
import  "./card.css"

export default function({data}){
    const dispatch=useDispatch();
    // console.log(data)
return (
    <div className="card-body bg-white rounded-md " >
        <img className="h-7/10 w-full object-contain p-1" src={data.image}></img>
        <p className=" text-black h-6 overflow-hidden text-ellipsis break-words text- ">{data.title}</p>
        <div className=" flex justify-between pr-4 pl-4 h-8">
            <button className="bg-red-500 w-16 rounded-md" onClick={()=>{
                dispatch({type:"wishlist/add",payload:data})
            }}>wishlist</button>
            <button className="bg-blue-500 w-16 rounded-md" onClick={()=>{
                dispatch({type:"cart/add",payload:data})
            }} >cart</button>
        </div>
    </div>
)
}