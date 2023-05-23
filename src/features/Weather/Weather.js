import React from "react";
import WeatherCard from "../weatherCard/WeatherCard";
import WeatherForm from "../weatherForm/WeatherForm";
import "./weather.scss";

function Weather() {
    return (
        <main className="weather">
            <WeatherCard />
            <WeatherForm />
        </main>
    );
}

export default Weather;
