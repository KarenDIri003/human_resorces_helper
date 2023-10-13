import { montserrat } from "../styles"

export default function Register(){
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "8vh",
            width: "4vw",
            padding: "0 100px",
            background: "#FFF94C",
            borderRadius:"15px",
        }}>
            <a href="/">
                <h4 className={montserrat.className} style={{
                    fontSize:"20px",
                    fontWeight:"300",
                    color:"#333333",
                }}>Register</h4>
            </a>   
        </div>
    )
}