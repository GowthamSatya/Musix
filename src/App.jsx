import { useState } from "react";
import { Sidebar, Songs, Player } from "./components";
import "./App.css";

function App() {
	return (
		<div className="flex items-center justify-between w-screen h-screen m-0">
			<Sidebar />
			<Songs />
			<Player />
		</div>
	);
}

export default App;
