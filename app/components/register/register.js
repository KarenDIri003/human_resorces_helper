import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register({ open, handleClose }) {
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirm: "",
	});

	// This funtion create a user in Firebase
	function createUser() {
		if (userInfo.password === userInfo.passwordConfirm) {
			console.log("Creando el usuario con email " + userInfo.email);
			createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
					console.log("This is the new user!", user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
					console.error("error", errorCode, errorMessage);
				});
		} else {
			alert("Your password confirmation is incorrect");
		}
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Stack
				sx={{
					width: "100vw",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Stack
					sx={{
						position: "relative",
						background: "#fff",
						borderRadius: "15px",
						padding: "30px 20px",
						gap: "10px",
						width: "400px",
					}}
				>
					<CloseIcon
						sx={{
							position: "absolute",
							right: "20px",
							top: "30px",
							cursor: "pointer",
						}}
						onClick={handleClose}
					/>
					<Typography variant="h4" component="h1">
						Register
					</Typography>
					<TextField
						id="outlined-basic"
						label="Full name"
						variant="outlined"
						type="text"
						value={userInfo.name}
						onChange={(e) => {
							setUserInfo({
								...userInfo,
								name: e.target.value,
							});
						}}
					/>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						type="email"
						value={userInfo.email}
						onChange={(e) => {
							setUserInfo({
								...userInfo,
								email: e.target.value,
							});
						}}
					/>
					<Stack
						direction={"row"}
						sx={{
							gap: "20px",
						}}
					>
						<TextField
							id="outlined-basic"
							label="Password"
							variant="outlined"
							type="password"
							value={userInfo.password}
							onChange={(e) => {
								setUserInfo({
									...userInfo,
									password: e.target.value,
								});
							}}
						/>
						<TextField
							id="outlined-basic"
							label=" Confirm password"
							variant="outlined"
							type="password"
							value={userInfo.passwordConfirm}
							onChange={(e) => {
								setUserInfo({
									...userInfo,
									passwordConfirm: e.target.value,
								});
							}}
						/>
					</Stack>
					<Button
						variant="contained"
						sx={{
							textTransform: "capitalize",
							padding: "10px 30px",
							borderRadius: "10px",
							background: "#FFF94C",
							fontFamily:
								"'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
							boxShadow: "none",
							color: "#333",
							"&:hover": {
								background: "#ccc73c",
							},
						}}
						onClick={createUser}
					>
						Register
					</Button>
					<Button
						sx={{
							textTransform: "capitalize",
							padding: "10px 30px",
							borderRadius: "10px",
							boxShadow: "none",
							fontFamily:
								"'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
							background: "#4285f4",
						}}
						variant="contained"
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
							fontFamily:
								"'__Montserrat_3afd06', '__Montserrat_Fallback_3afd06'",
							textAlign: "center",
						}}
					>
						Do you have an account?{" "}
						<Button
							variant="text"
							sx={{
								textTransform: "capitalize",
							}}
						>
							Login
						</Button>
					</Typography>
				</Stack>
			</Stack>
		</Modal>
	);
}
