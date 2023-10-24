"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Register from "../register/register";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import GoogleIcon from "@mui/icons-material/Google";

export default function LogIn() {
	// LETS USE THIS TO ADD A LOGIN FORM
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	const provider = new GoogleAuthProvider();


	// THIS HOLE FUNCTION GOES IN ZUSTAND
	function loginWithGoogle() {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				// IdP data available using getAdditionalUserInfo(result)
				// ...

				// HERE WE SAVE ALL THE INFORMATION IN OUR DATA BASE AND SABE THE STATE IN ZUZTAND
				console.log("🚀 ~ file: index.js:20 ~ .then ~ token:", token, user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...

				console.error(errorCode);
				console.error(errorMessage);
				console.error(email);
				console.error(credential);
			});
	}

	return (
		<Stack
			sx={{
				background: "#fff",
				borderRadius: "15px",
				padding: "30px 20px",
				gap: "10px",
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
			<Button
				variant="contained"
				sx={{
					textTransform: "capitalize",
					padding: "10px 30px",
					borderRadius: "10px",
					background: "#FFF94C",
					fontFamily: "'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
					boxShadow: "none",
					color: "#333",
					"&:hover": {
						background: "#ccc73c",
					},
				}}
			>
				Login
			</Button>
			<Button
				sx={{
					textTransform: "capitalize",
					padding: "10px 30px",
					borderRadius: "10px",
					boxShadow: "none",
					fontFamily: "'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
					background: "#4285f4",
				}}
				variant="contained"
				onClick={() => {
					loginWithGoogle();
				}}
			>
				Login with Google{" "}
				<GoogleIcon
					sx={{
						marginLeft: "10px",
					}}
				/>
			</Button>
			<Typography
				sx={{
					width: "100%",
					fontFamily: "'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
					textAlign: "center",
				}}
			>
				Do you have an account?{" "}
				<Button
					variant="text"
					onClick={() => {
						setOpen(true);
					}}
					sx={{
						fontFamily: "'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
						textTransform: "capitalize",
					}}
				>
					Register
				</Button>
			</Typography>
		</Stack>
	);
}
