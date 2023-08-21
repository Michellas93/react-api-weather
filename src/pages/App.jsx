import { useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import CityInput from "../components/CityInput";
import { useCities } from "../hooks/useCities";
import { useState } from "react";

function App() {
	const [data, setData] = useState();
	const [loading, setLoading] = useState();
	const [error, setError] = useState();

	const {
		data: cityData,
		loading: cityLoading,
		error: cityError,
	} = useCities();

	const getWeather = async (lat, lon) => {
		try {
			setLoading(true);
			const res = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5d2657a3b959664b375a0195e8082de9`
			);
			const resData = await res.json();
			setData(resData);
			setLoading(false);
		} catch (e) {
			setError(e);
		}
	};
	useEffect(() => {
		if (!loading && !error) {
			console.log(data);
		}
	}, [data, loading, error]);
	if (loading || cityLoading) return <p>Loading...</p>;
	if (error || cityError) return <p>Error...</p>;
	return (
		<Stack
			justifyContent="flex-start"
			alignItems="center"
			width="max(70%,500px)"
			m="auto"
			mt={3}
		>
			<Typography variant="h2" sx={{ fontWeight: 800, textAlign: "center" }}>
				Weather App
			</Typography>
			<CityInput cities={cityData} getWeather={getWeather} />
			{data ? (
				<Stack gap={5} mt={10} alignItems="center">
					<Typography variant="h3">{data?.name}</Typography>
					<img
						src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
						style={{ width: 100, height: 100 }}
					></img>
					<Typography variant="h3">
						{(data?.main?.temp - 272.15).toFixed(2)} C
					</Typography>
					<Typography variant="h5">{data?.weather[0]?.description}</Typography>
				</Stack>
			) : (
				<Typography sx={{ marginTop: 10 }}>
					<h4>No data</h4>
				</Typography>
			)}
		</Stack>
	);
}

export default App;
