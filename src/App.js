import React, {useState, useEffect} from "react";
import axios from 'axios';
import NasaPhoto from "./components/NasaPhoto";

import "./App.css";





function App() {
  const [data, setData] = useState();

  useEffect(() => {
   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&thumbs')
    .then(res => {
      console.log(res)
    setData(res.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      {data && <NasaPhoto photo = {data} />}
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY