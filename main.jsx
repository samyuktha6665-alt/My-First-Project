
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { Mymap } from './Map/Map.jsx'
import AuthuserContextApi from './Context/AuthuserContextApi.jsx'
import CartProvider from './Context/CartContext.jsx'



//* the proper way
ReactDOM.createRoot(document.getElementById('root')).render(
       
    <AuthuserContextApi>
    <CartProvider>
        <RouterProvider router={Mymap} />
    </CartProvider>
</AuthuserContextApi>

)
