import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaArticle from "./nasaArticle";
import "./App.css";

// const dummyData = {
//   title: 'Welcome to space',
//   hdurl: 'https://apod.nasa.gov/apod/image/2203/noirlab2209a_ngc772_1024.jpg',
//   date: 'april 1, 2022',
//   explanation: "For those who have seen the Earth from space, and for the hundreds and perhaps thousands more who will, the experience most certainly changes your perspective. The things that we share in our world are far more valuable than those which divide us.It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn’t feel like a giant. I felt very, very small."
// }

function App() {
	let [data, setData] = useState();
	let [currentUrl, SetCurrentUrl] = useState(
		"https://pokeapi.co/api/v2/pokemon"
	);
	useEffect(() => {
		axios
			.get(currentUrl)
			.then((res) => {
				console.log();
				setData(res.data.results.map((p) => p.name));
			})
			.catch((err) => console.error(err));
	}, []);
	return <div className="App">{data && <NasaArticle content={data} />}</div>;
}

export default App;
