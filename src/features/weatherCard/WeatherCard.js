import React from "react";
import { useSelector } from "react-redux";

function WeatherCard() {
    const data = useSelector((state) => state.weather.data);

    return data.location ? (
        <div className="weather-card">
            <div className="weather-card__city">{data.location.name}</div>
            <div className="weather-card__temp">{data.current.temp_c}°</div>
            <div className="weather-card__description">
                {data.current.condition.text}
            </div>
            <div className="weather-card__icon">
                <img
                    className="weather-card__icon__img"
                    src={data.current.condition.icon}
                    alt={data.current.condition.text}
                />
            </div>
            <div className="weather-card__footer">
                <div className="weather-card__footer__item">
                    <span>{(data.current.wind_kph / 3.6).toFixed(1)} m/s</span>
                </div>
                <div className="weather-card__footer__item">
                    <span>{data.current.humidity}%</span>
                </div>
            </div>
        </div>
    ) : null;
}

export default WeatherCard;
