import React from "react";
import { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./weatherForm.scss";

function WeatherForm() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useFetch(input);

    const onSubmit = (e) => {
        e.preventDefault();
        setInput(inputRef.current.value);

        inputRef.current.value = "";
    };

    return (
        <section className="weather-section">
            <form onSubmit={onSubmit} className="weather-section__form">
                {/* <label for="city-input" className="sr-only">
                Enter city name
            </label> */}
                <input
                    className="weather-section__input"
                    type="text"
                    id="city-input"
                    name="city"
                    ref={inputRef}
                    placeholder="Enter city name"
                    required
                />
                <button type="submit" className="weather-section__button">
                    Search
                </button>
            </form>
        </section>
    );
}

export default WeatherForm;
