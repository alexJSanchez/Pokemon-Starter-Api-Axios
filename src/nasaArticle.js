import React from "react";
import { Alert } from 'reactstrap';
import styled from 'styled-components'

const WrapperDiv = styled.div`
color:#5955aa;
background-size:100%;
background-image:url("https://freerangestock.com/sample/37396/space-background.jpg");
`;

const ImgDiv = styled.div`
    display:flex;
    justify-content:center;
`;
const Img = styled.img`
    width:700px;
    height:700px;
`;

const SummaryDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
    width:600px;
    height:600px;
`;


function NasaArticle(props){
    return(
        <WrapperDiv>
         <ImgDiv>
           <div>
           <h1>{props.content.title}</h1>
           <Img src={props.content.hdurl}></Img>
           </div>
           <SummaryDiv>
           <h5>{props.content.explanation}</h5>
           <p>{props.content.date}</p>
           </SummaryDiv>
         </ImgDiv>
        </WrapperDiv>
    )
}

export default NasaArticle;