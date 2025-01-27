

export function wishlistReducer(state=[],action){
    switch(action.type){

        case "wishlist/add":{
            const index=state.findIndex((items,i)=>items.id===action.payload.id)
            if(index<0){
                return  [...state,action.payload]
            }else{
                return state
            }
        }

        case  "wishlist/remove":{
            return state.filter((item)=>item.id!=action.payload.id)
        }

        default:return state
    }
}