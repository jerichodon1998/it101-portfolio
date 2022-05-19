import React from "react";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import moment from "moment";

export default function Footer() {
	return (
		<Box
			style={{
				width: "100%",
				margin: "0",
			}}
		>
			<hr style={{ display: "block" }} />
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Box
					style={{
						width: "25%",
						textAlign: "center",
						paddingTop: "10px",
					}}
				>
					<a href="https://www.facebook.com/markjericho.manilag.35">
						<FacebookIcon
							style={{ color: "#fff", fontSize: "32px", padding: "0 5px" }}
						/>
					</a>
					<a href="https://twitter.com/jerichodon1998">
						<TwitterIcon
							style={{ color: "#fff", fontSize: "32px", padding: "0 5px" }}
						/>
					</a>
				</Box>
			</Box>
			<Box
				style={{
					display: "flex",
					justifyContent: "center",
					paddingLeft: "10px",
				}}
			>
				<PhoneIcon style={{ marginLeft: "2px", fontSize: "32px" }} /> +63 123 456 7890
			</Box>
			<Box style={{ textAlign: "center" }}>
				Copyright &copy; {moment().year()} by Mark Jericho Manilag. All Rights Reserved
			</Box>
		</Box>
	);
}
