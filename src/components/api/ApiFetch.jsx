import React from 'react'
import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_Key = "c411a2c484d20a9bdb087243dc08d433";

export const fetchWeather = async (query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_Key,
    }
  })
  return data;
}
