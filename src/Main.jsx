import React from "react"
import videoBg from "./assets/videoBg.mp4"
import Weather from "./Weather"
import "./WeatherForecast.css"

const Main = () => {
    return (
      <div className="main">
        <div className="overlay">
        <video src={videoBg} autoPlay loop muted playsInline />
        <div className="content">
        <Weather defaultCity="Nashville" />
        </div>
        </div>
      </div>
    );
}

export default Main