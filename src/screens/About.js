import React from "react";
import Box from "@mui/material/Box";
import AI from "../assets/images/AI.jpg";
import drums from "../assets/images/drums.jpg";
import guitar from "../assets/images/guitar.jpg";
import web from "../assets/images/web.jpg";
import CustomCard from "../components/CustomCard";
import { Grid } from "@mui/material";

const cardStyle = { display: "flex", justifyContent: "center" };

export default function About() {
	return (
		<Box style={{ margin: "30px", padding: "10px" }}>
			<h1 style={{ textAlign: "center" }}>About me</h1>
			<Box mb={2}>
				I am Mark Jericho G. Manilag, currently studying BS Computer Science at{" "}
				<a href="https://www.carsu.edu.ph/">Caraga State University</a>
			</Box>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={3} style={{ ...cardStyle }}>
					<CustomCard
						title={"Web Development"}
						text={
							"I always wanted to be a Full-Stack Developer and create amazing things with it."
						}
						image={web}
						altImg={"web image"}
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={3} style={{ ...cardStyle }}>
					<CustomCard
						title={"Artificial Intelligence"}
						text={
							"I am now learning about machine and deep learning because it interests me but it's really difficult."
						}
						image={AI}
						altImg={"AI image"}
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={3} style={{ ...cardStyle }}>
					<CustomCard
						title={"Drums"}
						text={
							"I play drum in a band. Not really good at it but having fun is enough I guess."
						}
						image={drums}
						altImg={"drums image"}
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={3} style={{ ...cardStyle }}>
					<CustomCard
						title={"Guitar"}
						text={
							"I play Guitar when I'm bored, and it is the only instrument I have because Drums is too expensive to have."
						}
						image={guitar}
						altImg={"guitar image"}
					/>
				</Grid>
			</Grid>
		</Box>
	);
}
