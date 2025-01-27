import { useDispatch } from "react-redux"


export default function({data}){

    const dispatch=useDispatch()

    return (
        <div className=" list h-20 flex justify-between pr-2 pt-2 pb-2 pl-2 items-center bg-white  cursor-pointer select-none">
            <img className="w-20 h-full object-contain" src={data.image}></img>
            <span className=" w-28 m-w-28 h-full overflow-hidden text-ellipsis break-word text-xs  grid items-center " >{data.title}</span>
            <div className="w-18 flex items-center justify-center gap-1.5">
                <button onClick={()=>{
                    dispatch({type:"cart/decreaseQty",payload:{id:data.id}})
                }} className="w-6 bg-slate-300 rounded-md "><b className="w-full">-</b></button>
                <b>{data.qty}</b>
                <button onClick={()=>{
                    dispatch({type:"cart/increaseQty",payload:{id:data.id}})
                }} className="w-6 bg-slate-300 rounded-md "><b className="w-full">+</b></button>
            </div>
            <div className="w-24 h-10 flex flex-col justify-between">
                <i className="text-xs text-slate-500">${Math.floor(data.price*data.qty)} </i>
            <b className="w-24 text-xs">${data.price}</b>
            </div>
           
        </div>
    )
}