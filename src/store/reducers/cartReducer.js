

export function cartReducer(state=[],action){

    switch(action.type){
        case "cart/add":{
            const index=state.findIndex((v)=>v.id===action.payload.id)
            if(index<0){
                return [...state,{...action.payload,qty:1}]
            }else{
                const updatedCart=[...state];
                updatedCart[index].qty+=1;
                
                return updatedCart
            }
        }

        case "cart/remove":{
            return state.filter((item)=>item.id!==action.payload.id)
        }

        case "cart/increaseQty":
            return state.map((v,i)=>{
                if(v.id===action.payload.id){
                    return {
                        ...v,qty:v.qty+1
                    }
                }

                return v
            })


            case "cart/decreaseQty":
                return state.map((item)=>{
                    if(item.id===action.payload.id){
                        return {
                            ...item,
                            qty:item.qty-1
                        }
                    }
                    return item
                }).filter((item)=>item.qty>0)

        default :return state
    }
}