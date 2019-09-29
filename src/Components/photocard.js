import React from "react";
import styled from 'styled-components';


const NasaContent= styled.div`
    color: white;`

const NasaDate=styled.div`
 background-color: none;
 color: white;
 font-weight: bold;`

export default function PhotoCard(props){
    console.log(PhotoCard);
    return(
        <NasaContent className="cardDeets" key= {props.id}>
            <h2>{props.title}</h2><br></br>
            <p>By {props.author}</p><br></br>

            <NasaDate className="cardDate">
                <p>{props.date}</p><br></br>
            </NasaDate>

            <div className = "photoBox">
                <img width="65%" className = "image" alt = "No Pic Avail" src= {props.picture}></img>
            </div>
            
            <h3>Photo Summary</h3>
            <p>{props.description}</p>
        </NasaContent>
    );
};