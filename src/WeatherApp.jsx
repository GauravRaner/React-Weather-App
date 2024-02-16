import axios from 'axios';
import React, { useState } from 'react';
import bgImg from './assets/bgImg.jpg'

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${encodeURIComponent(city)}&appid=9ae04fbc3f17a651c8776e80562e190b`);
      setData(response.data);
      setError('');
    } catch (error) {
      setError('No data found. Please enter a valid city.');
      setData(null);
    }
  };

  return (
    <>
      <div className='w-72 bg-gray-500 h-96 mx-auto rounded-lg mt-8 'style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' ,objectFit:'cover'}}>
        <h2 className='font-sans font-bold text-center pt-3 text-black-800 text-2xl'>WEATHER APP</h2>
        <div className='mt-4 flex justify-around'>
          <input
            type="text"
            className='border border-solid rounded-md px-2 bg-transparent placeholder-black' placeholder='Search any city'
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className='bg-btnColor py-1 px-2 rounded-md text-white'
            onClick={getWeather}
          >
            Check
          </button>
        </div>
        <div className='mt-8 text-center'>
          {data && data.main && (
            <>
              <h1 className='text-6xl text-black '>{`${Math.floor(data.main.temp)}°C`}</h1>
              <h3 className='mt-6 text-2xl text-black'>{data.name}</h3>
              <h3 className='mt-6 text-2xl text-black'>{`Humidity : ${data.main.humidity}`}</h3>
            </>
          )}
          {error && <p className="text-red-700 text-2xl pt-8">{error}</p>}
        </div>
      </div>
    </>
  );
};
