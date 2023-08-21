import React from "react";
import { Stack, Typography } from "@mui/material";

function Temp() {
	return (
		<Stack
			justifyContent="flex-start"
			alignItems="center"
			width="max(70%,500px)"
			m="auto"
			mt={3}
		>
			<Stack gap={5} mt={10} alignItems="center">
				<Typography variant="h2">Hradec Králové</Typography>
				<Typography variant="h4" sx={{ mt: 2 }}>
					Teplota - <b>20°C</b>
				</Typography>
				<Typography variant="h4">
					{" "}
					Pocitově - <b>22°C</b>
				</Typography>
				<Typography variant="h4">
					{" "}
					Tlak - <b>1015 hPA</b>{" "}
				</Typography>
				<Typography variant="h4">
					{" "}
					Vlhkost - <b>64%</b>{" "}
				</Typography>
			</Stack>
		</Stack>
	);
}

export default Temp;
