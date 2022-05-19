import React from "react";
import myPicture from "../assets/images/myPicture.jpg";
import Box from "@mui/material/Box";

export default function Home() {
	return (
		<>
			<Box style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
				<Box>
					<img
						alt="Mark"
						src={myPicture}
						style={{ height: "300px", width: "255px", borderRadius: "10px" }}
					/>
				</Box>
				<Box style={{ width: "20px" }} />
				<Box
					style={{
						width: "300px",
						fontSize: "28px",
						fontFamily: "Dancing Script",
						fontWeight: "400",
					}}
				>
					Hi, I am Mark Jericho Manilag. Here to make useless things meaningful, make
					boring things interesting, with the help of a 'lil bit of alcohol.
				</Box>
			</Box>
			<Box
				style={{
					marginTop: "20px",
					fontSize: "64px",
					fontWeight: "400",
					textAlign: "center",
					fontFamily: "Dancing Script",
				}}
			>
				Drink with me and let's make <span style={{ fontSize: "96px" }}>HISTORY</span>{" "}
				together.
				<br />
			</Box>
		</>
	);
}
