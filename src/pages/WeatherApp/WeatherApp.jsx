import React from 'react'
import './WeatherApp.css'
// const images = require.context('../../assets', true);
import search_icon from '../../assets/search.png'
import cloud_icon from '../../assets/cloud.png'
import humidity_icon from '../../assets/humidity.png'
import wind_icon from '../../assets/wind.png'
// const imageList = images.keys().map(image => images(image));

export const WeatherApp = () => {

    const API_URL = "762ce5e9d45dffed0945e913176a5050";

    // const [searchInput, setSearchInput] = useState(" ");
    // const search = () => {

    // }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search' />
            <div className='search-icon' >
                <img src = {search_icon} alt="searchImage"/>

            </div>
           
        </div>
        <div className='weather-image'>
            <img src = {cloud_icon} alt="cloudImage"/>
            </div>
            <div className="weather-temperature">24°c</div>
            <div className="weather-location">London</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percentage">18km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
    </div>
  )
}
