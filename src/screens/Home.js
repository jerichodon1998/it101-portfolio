import React from "react";
import myPicture from "../assets/images/myPicture.jpg";
import { Grid } from "@mui/material";

export default function Home() {
	return (
		<>
			<Grid
				container
				spacing={2}
				style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
			>
				<Grid item>
					<img
						alt="Mark"
						src={myPicture}
						style={{ height: "300px", width: "255px", borderRadius: "10px" }}
					/>
				</Grid>
				<Grid
					item
					style={{
						width: "300px",
						fontSize: "28px",
						fontFamily: "Dancing Script",
						fontWeight: "400",
						textAlign: "center",
					}}
				>
					Hi, I am Mark Jericho Manilag. Here to make useless things meaningful, make
					boring things interesting, with the help of a 'lil bit of alcohol.
				</Grid>
			</Grid>
			<Grid
				item
				xs={12}
				style={{
					marginTop: "20px",
					fontSize: "64px",
					fontWeight: "400",
					textAlign: "center",
					fontFamily: "Dancing Script",
				}}
			>
				Drink with me and let's make <span style={{ fontSize: "60px" }}>HISTORY</span>{" "}
				together.
				<br />
			</Grid>
		</>
	);
}
