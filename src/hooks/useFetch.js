import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";

const useFetch = (text) => {
    const dispatch = useDispatch();

    const fetchData = useCallback(() => {
        try {
            fetch(
                `http://api.weatherapi.com/v1/current.json?key=b0119059ab8c4b248ab140359230303&q=${text}&aqi=no`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error! status: ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((data) => dispatch(fetchWeather(data)))
                .catch((err) => console.log(err, "Ошибка then catch"));
        } catch (e) {
            console.log(e, "Ошибка try catch");
        }
    }, [text, dispatch]);

    useEffect(() => {
        if (text) {
            fetchData();
        }
    }, [text, fetchData]);
};

export default useFetch;
