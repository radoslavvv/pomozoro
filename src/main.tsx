import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./components/App.tsx";

import store from "./store/Store.tsx";

import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
