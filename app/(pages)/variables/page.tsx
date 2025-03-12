"use client";

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import { Loader2, MapPin, Thermometer, Droplet, Mountain } from "lucide-react";


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
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <MapPin className="text-blue-500" />
          Your Current Location
        </h2>

        <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
          {lat && lng ? (
            <p className="flex items-center gap-2">
              <MapPin className="text-green-500" />
              Latitude: {lat}, Longitude: {lng}
            </p>
          ) : (
            <p className="flex items-center gap-2 text-gray-500">
              <Loader2 className="animate-spin" />
              Fetching location...
            </p>
          )}

          {temp !== null && humidity !== null ? (
            <p className="flex items-center gap-2">
              <Thermometer className="text-red-500" />
              Temperature: {temp}°C, <Droplet className="text-blue-500" />
              Humidity: {humidity}%
            </p>
          ) : (
            <p className="flex items-center gap-2 text-gray-500">
              <Loader2 className="animate-spin" />
              Fetching weather data...
            </p>
          )}

          {altitude !== null ? (
            <p className="flex items-center gap-2">
              <Mountain className="text-purple-500" />
              Altitude: {altitude} meters
            </p>
          ) : (
            <p className="flex items-center gap-2 text-gray-500">
              <Loader2 className="animate-spin" />
              Fetching altitude...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Find;
