"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { montserrat } from "../styles";
import Link from "next/link";
import { useState } from "react";
import Register from "../register/register";

export default function LogIn() {
  // LETS USE THIS TO ADD A LOGIN FORM
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Stack
      sx={{
        background: "#fff",
        borderRadius: "15px",
        padding: "30px 20px",
        gap: "20px",
        width: "400px",
      }}
    >
      {/* REGISTER MODAL */}
      <Register open={open} handleClose={handleClose} />
      <Typography variant="h4" component="h1">
        Login
      </Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained">Login</Button>
      <Typography>
        Do you have an account?{" "}
        <Button
          variant="text"
          onClick={() => {
            setOpen(true);
          }}
          sx={{
            textTransform: "capitalize",
          }}
        >
          Register
        </Button>
      </Typography>
    </Stack>
  );
}
