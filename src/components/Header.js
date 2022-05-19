import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();

	const NormalMenu = (
		<Box>
			<Button variant="text" style={{ color: "#fff" }} onClick={() => navigate("/")}>
				Home
			</Button>
			<Button variant="text" style={{ color: "#fff" }} onClick={() => navigate("/about")}>
				About
			</Button>
		</Box>
	);

	return (
		<Box
			style={{
				padding: "10px 20px",
				textAlign: "right",
			}}
		>
			{NormalMenu}
		</Box>
	);
}
