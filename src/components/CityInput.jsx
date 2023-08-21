import { Stack, TextField, Button, Autocomplete } from "@mui/material";
import { useState, useEffect } from "react";

const CityInput = ({ getWeather, cities }) => {
	const [cityNames, setCityNames] = useState([]);
	const [currentCity, setCurrentCity] = useState("");

	console.log(cities);

	const handleSubmit = async () => {
		if (currentCity) {
			try {
				const res = await fetch(
					`http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=5&appid=5d2657a3b959664b375a0195e8082de9`
				);
				const data = await res.json();
				const { lat, lon } = data[0];
				getWeather(lat, lon);
			} catch (e) {
				alert("Error - city not found");
			}
		}
	};

	useEffect(() => {
		if (cities) {
			setCityNames([]);
			cities?.data.map((city) => {
				setCityNames((prev) => [...prev, city.city]);
			});
		}
	}, [cities]);
	return (
		<Stack direction="row" mt={3} width="30em">
			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={cityNames}
				onInput={(e) => setCurrentCity(e.target.value)}
				onChange={(e) => setCurrentCity(e.target.innerText)}
				sx={{ width: 300 }}
				renderInput={(params) => <TextField {...params} label="City" />}
			/>
			<Button variant="contained" sx={{ width: "10em" }} onClick={handleSubmit}>
				Submit
			</Button>
		</Stack>
	);
};

export default CityInput;
