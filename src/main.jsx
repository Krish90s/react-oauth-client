import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter future={{ v7_startTransition: true }}>
			<Theme>
				<App />
			</Theme>
		</BrowserRouter>
	</React.StrictMode>
);
