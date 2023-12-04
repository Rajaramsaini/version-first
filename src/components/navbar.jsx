import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
      <>
        <div style={navbarStyle}>
          <div style={titleStyle}>WazirX</div>
          <div style={menuContainerStyle}>
            < Link to ="/about" style={{textDecoration:"none" , color:"inherit"}}>
            <div style={menuItemStyle }>About</div>
            </Link>
            < Link to ="/Contact" style={{textDecoration:"none" , color:"inherit"}}>
            <div style={menuItemStyle}>Contact</div>
            </Link>
            < Link to ="/Counter" style={{textDecoration:"none" , color:"inherit"}}>
            <div style={menuItemStyle}>Counter</div>
            </Link>
            < Link to ="/Todo" style={{textDecoration:"none" , color:"inherit"}}>
            <div style={menuItemStyle}>To Do</div>
            </Link>
             
            < Link to ="/mui" style={{textDecoration:"none" , color:"inherit"}}>
            <div style={menuItemStyle}>mui </div>
            </Link>

           
            {/* <div style={menuItemStyle}>Menu 3</div> */}
          </div>
        </div>
      </>
    );
  };
   
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    backgroundColor: "#333",
    color: "white",
  };
   
  const titleStyle = {
    fontSize: "1.5em",
  };
   
  const menuContainerStyle = {
    display: "flex",
  };
   
  const menuItemStyle = {
    marginLeft: "10px",
    cursor: "pointer",

  };
export default NavbarComponent;