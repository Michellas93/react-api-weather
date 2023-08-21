import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temp from "./pages/Temp.jsx";
import Blank from "./pages/Blank.jsx";
import { ThemeProvider } from "@emotion/react";
import { darkTheme } from "./themes/darkTheme.js";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/temp" element={<Temp />} />
					<Route path="*" element={<Blank />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
