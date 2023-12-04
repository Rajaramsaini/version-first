

import Headers from "./components/Header";
import  "./App.css"
import BodyComponents from "./components/BodyComponent";
import Counter from "./components/Counter";
import HomePage from "./components/homePage";
import NavbarComponent from "./components/navbar";

import {BrowserRouter,Route, Routes} from "react-router-dom";
import Todocomponent from "./components/Todocomponents";
import { Button, IconButton } from "@mui/material";
import ButtonUsage from "./components/muicomponenet";
import LoginPage from "./components/LoginPage";
// import Todocomponent from "./components/Todocomponents";

function AppComponent(){

var userData = [
  {name: "Raja", age: 21},
  {name: "Shiva", age: 21},
  {name: "Payalet", age: 21},
  {name: "Raja", age: 21},
  {name: "Shiva", age: 21},
  {name: "Payalet", age: 21},
  
]

const myTask = [
  "Go to market",
  "Buy vegetable",
  "Watch tv",
  "dance",
  "sing a song"]


        return(
    <>

<BrowserRouter>
<NavbarComponent/>

<Routes>
  <Route
   path="/" element={<LoginPage/>}/>

   <Route
   path="/about"
   element={<HomePage name={"about page"}/>}/>

<Route
path="/contact"
element={<HomePage name={"contact page "}/>}/>




<Route path="/counter" 
element={<Counter/>}/>

<Route path="/todo" 
element={<Todocomponent/>}/>

<Route path="/mui" 
element={<ButtonUsage/>}/>

</Routes>


</BrowserRouter>
    
     {/* <HomePage/> */}









     {/* <Counter/> */}
     {/* {<div className="cardContainer">} */}
     {/* {userData.map((oneObj) =>(  */}
           {/* <BodyComponents name={oneObj.name} age={oneObj.age}/>  */}


           {/* <UserCard
           name={oneObj.name}
           age={oneObj.age}
           mobileNumber={"7740808521"}
           /> */}
     {/* )

    )} */}
{/* {</div>} */}
     
     
     {/* <Counter/> */}

     {/* <Todocomponent/> */}


    </>
  );
}

export default AppComponent;