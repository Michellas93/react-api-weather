import { useState, useEffect } from "react";

export const useCities = (lat, lon) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://countriesnow.space/api/v0.1/countries/population/cities"
				);
				const resData = await res.json();
				setData(resData);
				setLoading(false);
			} catch (e) {
				setError(e);
			}
		};
		fetchData();
	}, []);
	return { data, loading, error };
};
