//App.js
import Title from "./components/Title";   
import  Form from "./components/Form";  
import Results from "./components/Results";  
import Loading from "./components/Loading";
import { useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
      country: "",
      cityName: "",
      temperature: "",
      condition: "",
      icon:""
  });

  const getWeather = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.get(`https://api.weatherapi.com/v1/current.json?key=6f35053e6229470bb0522409230111&q=${city}&aqi=no`).then(res => {
          setResults({
            country: res.data.location.country,
            cityName: res.data.location.name,
            temperature: res.data.current.temp_c,
            conditionText: res.data.current.condition.text,
            icon: res.data.current.condition.icon
        })
        setCity("");
        setLoading(false);
    })
    .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
}

return (
<div className="wrapper">
    <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} city={city} />
        {loading ? <Loading /> : <Results results={results} />}    
    </div>
</div>
);
};


export default App;