import {combineReducers,compose,createStore} from "redux"
import { productReducer } from "./reducers/productReducer"
import { wishlistReducer } from "./reducers/wishlistReducer"
import { cartReducer } from "./reducers/cartReducer"

const rootReducer=combineReducers({
    products:productReducer,
    wishlist:wishlistReducer,
    cart:cartReducer
})

export const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__?.())

// store.subscribe(()=>{
//     console.warn("subscribed--called",store.getState())
// })