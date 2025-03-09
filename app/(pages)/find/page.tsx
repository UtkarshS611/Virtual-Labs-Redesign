"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const OPENWEATHER_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const ELEVATION_API_URL = "https://api.open-elevation.com/api/v1/lookup";

const useGeolocation = () => {
  const [location, setLocation] = useState<{
    lat: number | null;
    lng: number | null;
  }>({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by your browser.");
      return;
    }

    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lng: longitude });
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return location;
};

const useWeatherAndAltitude = (lat: number | null, lng: number | null) => {
  const [data, setData] = useState<{
    temp: number | null;
    humidity: number | null;
    altitude: number | null;
  }>({
    temp: null,
    humidity: null,
    altitude: null,
  });

  useEffect(() => {
    if (lat === null || lng === null) return;

    const fetchWeather = async () => {
      try {
        const weatherRes = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${OPENWEATHER_KEY}`
        );
        const { temp, humidity } = weatherRes.data.main;

        const elevationRes = await axios.get(ELEVATION_API_URL, {
          params: { locations: `${lat},${lng}` },
        });
        const altitude = elevationRes.data.results[0]?.elevation || null;

        setData({ temp, humidity, altitude });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchWeather();
  }, [lat, lng]);

  return data;
};

const Find = () => {
  const { lat, lng } = useGeolocation();
  const { temp, humidity, altitude } = useWeatherAndAltitude(lat, lng);

  return (
    <section className="min-h-screen">
      <h2 className="text-xl font-semibold">Your Current Location</h2>
      {lat && lng ? (
        <p>
          Latitude: {lat}, Longitude: {lng}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
      {temp !== null && humidity !== null ? (
        <p>
          Temperature: {temp}°C, Humidity: {humidity}%
        </p>
      ) : (
        <p>Fetching weather data...</p>
      )}
      {altitude !== null ? (
        <p>Altitude: {altitude} meters</p>
      ) : (
        <p>Fetching altitude...</p>
      )}
    </section>
  );
};

export default Find;
