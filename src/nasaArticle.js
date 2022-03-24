import React from "react";

function nasaArticle(props){
    return(
        <div className='articleContainer'>
            <h1>{props.content.date} </h1>
        </div>
    )
}
export default nasaArticle;