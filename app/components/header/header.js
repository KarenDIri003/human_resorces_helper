import LogIn from "../login/page";
import Register from "../register.js/register";

export function Header() {
    return(
        <header style={{
            width:"100%",
            height:"15vh",
            background: "#FFFFFF",
            borderRadius:"0 0 20px 20px",
            display:"flex",
            alignItems:"center",
            justifyContent: "space-between",
        }}>
            <div className = "header-container_logo">
                <a className = "container-flex_left" href = "/">
                    <h2>HUMAN RESOURCES HELPER</h2>
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