"use client"

const { Code } = require("@nextui-org/react");

export default function LogIn(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "10vh",
            width: "10vw",
            padding: "0 100px",
        }}>
            <a href="/">
                <h4>Login</h4>
            </a>    
        </div>
    )
}

