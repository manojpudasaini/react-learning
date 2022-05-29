import "./App.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
function App() {
  const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "ee34b2e317f61b897abed3816bea631e",
  };
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState("");
  const fetchApi = () => {
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => setWeather(result))
      .then(setLocation(""));
  };
  console.log(weather);
  return (
    <div className="main-container">
      <div className="search-container">
        <input
          type="text"
          className="input-container"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="button-container" onClick={fetchApi}>
          <BsSearch className="search-icon" />
        </button>
      </div>
      <div className="data-container">
        <p>{weather?.main?.temp}</p>
        <p>{weather?.name}</p>
      </div>
    </div>
  );
}

export default App;
