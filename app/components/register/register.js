import { Button, Modal, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { montserrat } from "../styles";

export default function Register({ open, handleClose }) {
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
            gap: "20px",
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
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
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
            />
            <TextField
              id="outlined-basic"
              label=" Confirm password"
              variant="outlined"
              type="password"
            />
          </Stack>
          <Button variant="contained">Register</Button>
          <Typography>
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
