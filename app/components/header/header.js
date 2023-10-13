import LogIn from "../login/page";
import Register from "../register.js/register";
import { montserrat } from "../styles";

export function Header() {
    return(
        <header style={{
            width:"100%",
            height:"15vh",
            background: "#FFFFFF",
            display:"flex",
            alignItems:"center",
            justifyContent: "space-between",
            padding: "5vh",
            borderRadius:"0 0 20px 20px",
        }}>
            <div className = "header-container_logo">
                <a className = "container-flex_left" href = "/">
                    <h2 className={montserrat.className}  style={{
                        fontSize:"35px",
                        fontWeight:"800",
                        color:"#333333",
                    }}>HUMAN RESOURCES HELPER</h2>
                </a>
            </div>
            <div className="menu-buttons" style={{
                display:"flex",
                justifyContent: "space-between"
            }}>
                <LogIn/>
                <Register/>
            </div>
        </header>
    )
}