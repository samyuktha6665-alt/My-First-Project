//import React, { Fragment } from "react"
import ReactDOM from 'react-dom/client'
//import Calendar from './Props/Calendar'

import App from "./App.jsx"
import './index.css'
//import Garage from './StateManagement/Context/PD_solution/Garage.jsx'
//import Product from './StateManagement/Context/PD_solution/task2/Product.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
//import { MyMap } from './Navigation/ModernApproach/Map.jsx'
import { Mymap } from './Map/Map.jsx'
//import AuthUser from './Context/AuthuserContextApi.jsx'
import AuthuserContextApi from './Context/AuthuserContextApi.jsx'
import CartProvider from './Context/CartContext.jsx'

//import Card from './Card.jsx'

//import { createRoot } from 'react-dom/client'

//createRoot(document.getElementById('root')).render()

//*traditional way
//& React.createElement --> object --> html(DOM)
//let heading =React.createElement('h1',{},'hello guy s')
//console.log(heading)


//*this is JSX=javascript and xml(javascript and html like syntax)
//& jsx --> React.createElement --> object --> html(DOM)
//let heading = <h1>Hello guys</h1>
//let root = ReactDOM.createRoot(document.getElementById('root'))

//*bable=convert to modern js in to browser(traditional way) beast
//root.render(heading)

//* the proper way
ReactDOM.createRoot(document.getElementById('root')).render(
      //<h1>Hello Guys</h1>
      //<>
      // <h1 style={{textDecoration:"none"}}>hello guys</h1> 
      //<h1 className="hi">hello guys</h1> 
      //<h2>welcome</h2>
      //<h2>{2+5}</h2> 
      //<form action="">
      //<label htmlFor=""></label>
      //<input type="text"/>
      //</form>
      //</> 
      //App('sam','2')
      // <>
      // <App name="sam" days="2" />
      // <App name="samyu" days="3" />
      // </>
      // <>
      // <Card name="title" desc="ghsnks"></Card> 
      // <Card name="title" desc="ghsnks"></Card> 
      // <Card name="title" desc="ghsnks"></Card> 
      // <Card name="title" desc="ghsnks"></Card> 

      // </>
      //  <>
      //  <h1>Calendar</h1>
      //  <Calendar day="mon" date="30-01-2026">

      //  </Calendar>
      //  </> 

      // <App/>
      // <Garage>
      //   <App/>
      // </Garage>
      // <Product>
      //   <App/>
      // </Product>
      // <BrowserRouter>
      // <App/>
      // </BrowserRouter>
      //       <RouterProvider router={MyMap}>
      // <App/>
      //       </RouterProvider>
      //<AuthUser>
//<RouterProvider router={Mymap}>
      //<App/> 
//</RouterProvider> </AuthUser>
       
    <AuthuserContextApi>
    <CartProvider>
        <RouterProvider router={Mymap} />
    </CartProvider>
</AuthuserContextApi>

)