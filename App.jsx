//function App(){
//  return <h1>Hello Guys</h1>
//}
//export default App

// import Cbc from "./Props/Cbc";
// import array from "./Props/array.jsx";

/*const App = () =>{
return <h1>Hello guys</h1>
}
export default App */

/*let App =() =>{
 return (
   <div>
     <h1>iam heading 1</h1>
     <h1> iam para 2</h1> <hr/>
   </div>
 )
}
export default App */

/*let App=()=>{
let arr=['blue','black','red','green']
return(
   <h1>name:{arr[2]}</h1>
)
}
export default App*/

//array format
/*let App=()=>{
  let arr=['blue','black','red','green']
  return(
    <>
    {
      arr.map((items)=><h1>{items}</h1>)
    }
    </>
  )
}
export default App*/

/*//list format
let App = () => {
  let arr=['blue','black','red','green']
  return(
    <ul>
      { arr.map((items) => <li>{items}</li>) }
    </ul>
  )
}
export default App*/

//array object
/*let App = (props) => {
  let arr = [{
    name: "sam",
    age: 23,
    per: 90,
    ph_no: 345678912
  },
  {
    name: "samyu",
    age: 24,
    per: 70,
    ph_no: 34357688912
  },
  {
    name: "lilly",
    age: 22,
  per: 80,
    ph_no: 14578432
  }

  ]
  return (
   
    //arr.map((items) => <h1>{items.name}</h1>) 
    <>
     <h1>welcome {props.name} for {props.days} days</h1>
      <table border="3" cellPadding="10">
        <caption>User Details</caption>
        <tr>
          <th>user_name</th>
          <th>user_age</th>
          <th>%</th>
          <th>ph_no</th>
        </tr> 
        {
          arr.map((items) => (
            <tr>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.per}</td>
              <td>{items.ph_no}</td>
            </tr>
          ))
        }
      </table>
    </> 
  )
}
export default App */

//arrow function=rafc and rfc=react normal function and rfce= default export function
// import React from 'react'
// import Calendar from './Props/Calendar'

// function App() {
//   let colors=['red','blue','black','green']
//   return (
//     <>
//     <div>App</div>
//     <div style={{display:'flex',gap:'40px',flexWrap:'wrap',alignItems:'center',justifyItems:'center'}}>
//       <Calendar array={colors} />
//     </div>

//     </>
//   )
// }

// export default App


//function
/*import FunctionComp from './Props/FunctionComp.jsx'

function greet() {
  return <h1>Welcome from react batch</h1>
}

const App = () => {
  return (
    <FunctionComp greeting={greet} />
  )
}

export default App*/

/*import FunctionComp from "./Props/FunctionComp"
let arr=['red','black','blue']
const App =() => {
  return (
    <>
    {
      arr.map((items,i) => (
        <h1 key={i}>{items}</h1>
      ))
    }
    </>
  )
}
export default App */

//props children
/* import React from 'react'
import DemoComp from "./Props/DemoComp.jsx";
const App = () => {
  return (
  <>
  <DemoComp>
    <h1>hii</h1>
    <h1>hello</h1>
  </DemoComp>
  </>
  )
}
export default App*/


// import Cbc from './Props/Cbc';
// <Cbc></Cbc>
// export default Cbc

// import functionBasedComp from './Props/functionBasedComp'

// <functionBasedComp></functionBasedComp>
// export default functionBasedComp

// import example from './Props/example.jsx'
// <example></example>
// export default example

// import array from './Props/array.jsx'
// <array></array>
// export default array





// import React from 'react'
// import Examplearray from './Props/examplearray/Examplearray'

// const App = () => {
//   return (
//     <div>
//       <Examplearray>

//       </Examplearray>
//     </div>
//   )
// }

// export default App

//  import React from 'react'
//  import example from './Props/examplearray/example'


//  const App = () => {
//    return (
//      <div>
//       <example></example>
//      </div>
//    )
//  }

//  export default example

// import React from 'react'
// import example1 from './Props/examplearray/example1'

// const App = () => {
//   return (
//     <div>
//       <example1></example1>
//     </div>
//   )
// }

// export default example1

// import React from 'react'
// import theme from './Props/examplearray/theme'

// const App = () => {
//   return (
//     <div>
//       <theme></theme>
//     </div>
//   )
// }

// export default theme

// import React from 'react'
// import theme1 from './Props/examplearray/theme1'


// const App = () => {
//   return (
//     <div>
//       <theme1></theme1>
//     </div>
//   )
// }

// export default theme1

// import React from 'react'
// import Tv from './Props/examplearray/Tv'

// const App = () => {
//   return (
//     <div>
//       <Tv></Tv>
//     </div>
//   )
// }

// export default Tv

// import React from 'react'

// let style={
//   color:'blue',
//   fontSize:'100px'
// }
// const App = () => {
//   return (                          //style={{color:'blue'}}
//     <div>
//       <h1 style={style}>Rocky</h1> 
//     </div>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   return (
//     <div className="text-3xl font-bold underline text-blue-500 ml-8 py-20 text-6xl bg-cyan-950 text-[150px] h-[350px] text-center">
//       <h1>Rocky</h1>
//     </div>
//   )
// } 

// export default App

// import Layout from "./Project/Layout"

// const App = () => {
//   return (
// <>
// <Layout/>
// </>
//   )
// }

// export default App

// import React from 'react'
// import StateInfo from './State/StateInfo'

// const App = () => {
//   return (
//     <>
//     <StateInfo/>
//     </>
//   )
// }

// export default StateInfo

// import React from 'react'
// import Mini_state_project from './State/Mini_state_project'

// const App = () => {
//   return (
//    <>
//    <Mini_state_project/>
//    </>
//   )
// }

// export default App

// import React from 'react'

// import FormsIntro2 from './FormsHandling/FormsIntro2'

// const App = () => {
//   return (
//    <>
//    <FormsIntro2/>
//    </>
//   )
// }

// export default App

import React, { Component } from 'react'
import Parent1 from './Project/MemoandCallback/Component/Parent1'
//import FormRadio from './FormsHandling/FormRadio'
//import FormCheckBox from './FormsHandling/FormCheckBox'
//import FormFile from './FormsHandling/FormFile'
// import UseRef from './FormsHandling/UncontrolledForms/UseRef'
// import UseRef2 from './FormsHandling/UncontrolledForms/UseRef2'
// import UseEffectIntro from './FormsHandling/UncontrolledForms/UseEffectIntro'
// import UseEffect2 from './FormsHandling/UncontrolledForms/UseEffect2'
// import PassingState from './StateManagement/PassingState'
// import GrandParent from './StateManagement/Context/PropsDrilling/GrandParent'
// import Grandson from './StateManagement/Context/PD_solution/Grandson'
// import Profile from './StateManagement/Context/PD_solution/task2/Profile'
// import icons from './icons/icons'
// import BasicFetching1 from './Datafetching/BasicFetching1'
// import NavBar from './Project/Navigation/NavBar'
// import { Route, Routes } from 'react-router-dom'
 //import Contact from './project/Navigation/Components/Contact'
// import Home from './Navigation/Components/Home'
// import Items from './Navigation/Components/Items'
// import About from './Navigation/Components/About'
// import NavBar1 from './Project1/Components/NavBarComp/Pages/NavBar1'

const App = () => {
  return (
    <div>
      {/* <FormRadio/> */}
      {/* <FormCheckBox/> */}
      {/* <FormFile/> */}
      {/* <UseRef2/> */}
      {/* <UseEffect2/> */}
      {/* <PassingState/> */}
      {/* <GrandParent/> */}
      {/* <Grandson/> */}
      {/* <Profile/> */}
      {/* <icons/> */}
      {/* <BasicFetching1/> */}
      <NavBar1 />

      {/* <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Items' element={<Items />} />

      </Routes> */}
      {/* <Parent1/> */}
    </div>
  )
}

export default App
