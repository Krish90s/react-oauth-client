import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import NoMatch from "./pages/NoMatch";
import axios from "axios";
import Cookies from "js-cookie";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const fetchCurrentUser = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/api/v1/auth/google/success"
				);
				console.log("CurrentUser", response);
				const accessToken = Cookies.get("access_token");
				console.log("accessToken", accessToken);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchCurrentUser();
	}, []);

	return (
		<div>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
