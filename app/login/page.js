"use client"

const { Code } = require("@nextui-org/react");

export default function LogIn(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            padding: "0 100px",
        }}>
            <h1>Log In</h1>
            <Code>npm install @nextui-org/react</Code>
        </div>
    )
}

// export default LogIn;