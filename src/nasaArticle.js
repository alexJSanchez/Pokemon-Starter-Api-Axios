import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button } from "reactstrap";
import styled from "styled-components";
import "./nasaArticle.css";
import pokeball from "./Images/pokeball2.png";
import pokeBanner from "./Images/pokeBanner.png";

const WrapperDiv = styled.div`
	color: #5955aa;
	background-size: 100%;
	background-image: url("https://freerangestock.com/sample/37396/space-background.jpg");
`;

const ImgDiv = styled.div`
	display: flex;
	justify-content: center;
`;
const Img = styled.img`
	width: 700px;
	height: 700px;
`;

const SummaryDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 600px;
	height: 600px;
`;

function NasaArticle(props) {
	const [mainSix, setMainSix] = useState([]);
	let count = 0;
	let pokemonSix = [];

	// const promise1 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );
	// const promise2 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );
	// const promise3 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );
	// const promise4 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );
	// const promise5 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );
	// const promise6 = axios.get(
	// 	`https://pokeapi.co/api/v2/pokemon/${
	// 		props.content[Math.floor(Math.random() * 100)].name
	// 	}`
	// );

	// const getAll = async () => {
	// 	let result = await Promise.all([
	// 		promise1,
	// 		promise2,
	// 		promise3,
	// 		promise4,
	// 		promise5,
	// 		promise6,
	// 	]);
	// 	console.log(result);
	// 	setMainSix(result);
	// };

	return <></>;
}

export default NasaArticle;
