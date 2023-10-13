"use client"
import { montserrat } from "../styles";

const { Code } = require("@nextui-org/react");

export default function LogIn(){
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "8vh",
            width: "4vw",
            padding: "0 100px",
            border: "none",
        }}>
            <a href="/">
                <h4 className={montserrat.className}  style={{
                        fontSize:"20px",
                        fontWeight: "300",
                        color:"#333333",
                    }}>Login</h4>
            </a>    
        </div>
    )
}

