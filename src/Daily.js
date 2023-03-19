import React from 'react'
import { useEffect, useRef, useState } from 'react'
import {Next5, forecast} from './Next5';

import Spinner from './Spinner';
export default function Daily() {
    const[town,setTown]=useState('')
    const[load,setload]=useState(false)
    const[temp,setTemp]=useState()
    const[pressure,setPressure]=useState()
    const[humidity,setHumidity]=useState()
    const[country,setCountry]=useState()
    const[speed,setSpeed]=useState()
    const[feels_like,setFeel]=useState()
    const[description,setDes]=useState()
    const[icon,setIcon]=useState()
    const inputref=useRef(null)

    const data= async()=>{
      try{
      const city =inputref.current.value;
      
      setload(true)
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=306deae046c8f5b8302428488fbcac7b`
        let p=await fetch(url)
        forecast(city);
        if(p.status>=400){
          throw new Error("HEllo2");
        }
        let inf= await p.json()
        setload(false)
        setTemp(inf.main.temp)
        
         setTown(inf.name)
         setCountry(inf.sys.country)
         setDes(inf.weather[0].description)
         setHumidity(inf.main.humidity)
         setFeel(inf.main.feels_like)
         setPressure(inf.main.pressure)
         setSpeed(inf.wind.speed)
         setIcon(inf.weather[0].icon)
        
      } catch (error){
        kol()
        forecast('Kolkata')
      }
    }
    const kol=async()=>{
      setTown('Kolkata')
      setload(true)
      const url=`https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=306deae046c8f5b8302428488fbcac7b`
      let p=await fetch(url)
      let inf= await p.json()
      setload(false)
      setTemp(inf.main.temp)
      setTown(inf.name)
      setCountry(inf.sys.country)
      setDes(inf.weather[0].description)
      setHumidity(inf.main.humidity)
      setFeel(inf.main.feels_like)
      setPressure(inf.main.pressure)
      setSpeed(inf.wind.speed)
      setIcon(inf.weather[0].icon)
      
      
    }
  useEffect(()=>{
    kol()
  },[])
  return (
    <div className='weath'>
      <div className="card text-center my-4">
  <div className="card-header">
    <h3>Weather</h3>
  </div>
 
    <div className="card-body">
    <span><input id="input" placeholder="Enter City name"ref={inputref}/>
    <button id="btn" onClick={data}>Search</button>
    </span>
    {load && (<Spinner/>)}
    {!load && (
    <div id="main">
      <h3 className="card-title">{town},{country}</h3>
      <div id="cont">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="..."id="img"/>
        <p id="temp"> {temp}&deg;c </p>
        </div>
        
      <div className="data">Pressure:- {pressure}mb</div>
      <div className="data">Wind Speed:- {speed}Km/h</div>
      <div className="data">Humidity:- {humidity}%</div>
      <div className="data">Real Feel:- {feels_like}&deg;c</div>
      <div className="data">Description:- {description}</div>
    </div>
    )}
  </div>
  <h5 className="card-footer text-muted">
    Next 4 days
  </h5>
      <Next5/>
</div>
    </div>
  )
}
