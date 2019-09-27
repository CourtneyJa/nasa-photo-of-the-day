import React from "react";

export default function PhotoCard(props){
    console.log(PhotoCard);
    return(
        <div className="cardDeets" key= {props.id}>
            <h2>{props.title}</h2>
            <p>By {props.author}</p>

            <button className="cardDate">
                <p>{props.date}</p>
            </button>

            <div className = "photoBox">
                <img className = "image" alt = "No Pic Avail" src= {props.picture}></img>
            </div>
            
            <h3>Photo Summary</h3>
            <p>{props.description}</p>
        </div>
    );
};