import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CustomCard({ title, text, image, altImg }) {
	return (
		<Card
			sx={{ maxWidth: 345, minWidth: 345, minHeight: 300 }}
			md={{ maxWidth: 345, minWidth: 345, minHeight: 300 }}
			lg={{ maxWidth: 345, minWidth: 345, minHeight: 300 }}
		>
			<CardMedia component="img" height="140" image={image} alt={altImg} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{text}
				</Typography>
			</CardContent>
		</Card>
	);
}
