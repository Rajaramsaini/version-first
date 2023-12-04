
import Counter from "./Counter";
import NavbarComponent from "./navbar";

const HomePage =(props)=>{
     const{name} = props;

    return(
        <>
     {/* <NavbarComponent/> */}

{/* <Counter/> */}
        <h1>{name}</h1>
        <div style={{padding:"20px"}}>
       <h3>My home page card</h3>

        
        
        <p>card 1</p>
        <p>card 2</p>
        <p>card 3</p>
        </div>

        </>
    )
}

export default HomePage;