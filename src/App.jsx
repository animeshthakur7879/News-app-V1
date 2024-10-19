import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ThemeButton from "./components/ThemeButton";
import { WeatherProvider } from "./providers/weather/WeatherContext";
import { NewsProvider } from "./providers/news/NewsContext";

const App = () => {
  return (
    <NewsProvider>
      <WeatherProvider>
        <Navbar />
        <Home />
        <ThemeButton />
        <ToastContainer />
      </WeatherProvider>
    </NewsProvider>
  );
};

export default App;
