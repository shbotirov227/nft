import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";

import "./App.scss";
import "./index.css"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="users/*" element={<Users />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
