import React from "react";
import { useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";

function WeatherForm() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useFetch(input);

    const onSubmit = (e) => {
        // console.log("render", i++);
        e.preventDefault();
        setInput(inputRef.current.value);

        inputRef.current.value = "";
    };

    return (
        <form onSubmit={onSubmit}>
            {/* <label for="city-input" className="sr-only">
                Enter city name
            </label> */}
            <input
                type="text"
                id="city-input"
                name="city"
                ref={inputRef}
                placeholder="Enter city name"
                required
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default WeatherForm;
