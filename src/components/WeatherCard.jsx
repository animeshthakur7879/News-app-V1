import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import WeatherContext from "../providers/weather/WeatherContext";
import { toast } from "react-toastify";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weather, dispatch } = useContext(WeatherContext);

  const getWeather = async (city) => {
    try {
      // Fetching API
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5c673e73066e478e8ba72150242509&q=${city}&aqi=yes`
      );
      const data = await response.json();

      // Checking if response is error
      if (data.error) {
        toast.error("Enter Valid City Name!");
      } else {
        // Setting Data into state
        dispatch({
          type: "GET_WEATHER",
          payload: data,
        });
      }
    } catch (error) {
      toast.error("something went wrong!!");
    }
  };

  const [city, setCity] = useState("");

  const searchWeather = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

  return (
    <div className="col-sm-12 col-md-4">
      <div
        className={
          dark ? "card p-3 rounded-0 bg-dark text-light" : "card p-3 rounded-0"
        }
      >
        <h4>Today's Weather</h4>
        <form className="my-3" onSubmit={searchWeather}>
          <input
            type="text"
            required
            className="form-control rounded-0 my-2"
            placeholder="Enter City Name.."
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button className="btn btn-success my-2 rounded-0 w-100">
            Search Weather
          </button>
        </form>
        {!weather ? (
          <h1 className="text-center text-secondary">Loading...</h1>
        ) : (
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1>{weather.current.temp_c}</h1>
              <h2 className="text-secondary">{weather.location.name}</h2>
            </div>
            <div className="text-center">
              <img
                style={{ height: "75px", width: "75px" }}
                src={weather.current.condition.icon}
                alt=""
              />
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
