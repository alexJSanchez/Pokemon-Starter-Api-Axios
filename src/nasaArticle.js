import React from "react";

function NasaArticle(props){
    return(
        <div>
           <h1>{props.content.title}</h1>
           <img src={props.content.hdurl}></img>
           <h4>{props.content.explanation}</h4>
           <p>{props.content.date}</p>
        </div>
    )
}

export default NasaArticle;