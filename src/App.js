import React, {useState, useEffect} from "react";
import axios from 'axios';
import NasaPhoto from "./components/NasaPhoto";
import PageButton from "./components/PageButton";
import "./App.css";
import styled from "styled-components";

function App() {
  const [data, setData] = useState();
  const [buttonText, setButtonText] = useState("Mystery Button")
  const [buttonLink, setButtonLink] = useState("https://www.youtube.com/watch?v=V-_O7nl0Ii0")

  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs')
    .then(res => {
      
    setData(res.data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      {data && <NasaPhoto photo = {data} />}
      <PageButton buttonText = {buttonText} buttonLink = {buttonLink}/>
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY