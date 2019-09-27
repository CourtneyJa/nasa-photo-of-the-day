import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./photocard";


export default function NasaPhoto(){
    const [pic, setPic] = useState([]);
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_key')
             .then(response =>{
                 const img = response.data;
                 console.log(img)
                 setPic(img)
             })
             .catch (error =>{
                 console.log (error)
             });
    },[]);

    return (
        <div className="nasa-container">
            <PhotoCard title = {pic.title} date = {pic.date} key = {pic.id} picture= {pic.url} author = {pic.copyright} description={pic.explanation}/>
        </div>
    )
}