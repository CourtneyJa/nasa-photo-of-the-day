import React, {useState, useEffect} from "react";
import PhotoCard from "./photocard";
import styled from 'styled-components';
import axios from "axios";


const NasaContainer= styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5%;
text-color: white;`


export default function NasaPhoto(){
    const [pic, setPic] = useState([]);

    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=zG2tZeynU4y8VB54ZwIcqQuRTmoVBIlZ92hXopHE')
             .then(response =>{
                 const img = response.data;
                 console.log(img)
                 setPic(img)
             })
             .catch (error =>{
                 console.log ("well, that didn't work", error);
             });
    },[]);

    return (
        <NasaContainer className="nasa-container">
            <PhotoCard title = {pic.title} date = {pic.date} key = {pic.id} picture= {pic.url} author = {pic.copyright} description={pic.explanation}/>
            
        </NasaContainer>
    );
}

