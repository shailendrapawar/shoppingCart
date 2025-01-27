import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import Layout from '../Layout.jsx'
import Cart from './components/cart/Cart.jsx'
import Wishlist from './components/wishlist/Wishlist.jsx'

const myRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<App />}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/wishlist' element={<Wishlist/>}></Route>
  </Route>
))
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={myRouter}>

      </RouterProvider>
    </Provider>


  </StrictMode>,
)
