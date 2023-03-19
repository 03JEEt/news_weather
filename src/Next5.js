import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
let forecast=()=>{};
function Next5() {
    const[first,setfirst]=useState({})
    const[second,setsec]=useState({})
    const[third,setthird]=useState({})
    const[fourth,setfour]=useState({})
    const[load,setload]=useState(true)
    const fore= async()=>{
       const url= 'https://api.openweathermap.org/data/2.5/forecast?&q=kolkata&units=metric&appid=306deae046c8f5b8302428488fbcac7b'
       let b=await fetch(url)
       let inf= await b.json()
       setfirst(inf.list[6])
       setsec(inf.list[14])
       setthird(inf.list[22])
       setfour(inf.list[30])
       setload(false)
          
    }
    useEffect(()=>{
        fore()
    },[])

    forecast= async(city)=>{
      setload(true)
        const url= `https://api.openweathermap.org/data/2.5/forecast?&q=${city}&units=metric&appid=306deae046c8f5b8302428488fbcac7b`
        let b=await fetch(url)
        let inf= await b.json()
        setfirst(inf.list[6])
        setsec(inf.list[14])
        setthird(inf.list[22])
        setfour(inf.list[28])
        setload(false)
           
     }
    
    const func=(firs)=>{
        const days=['Monday','Tuesday','Wednesday','Thruday','Friday','Saturday','Sunday']
        const one=new Date((firs.dt)*1000)
        const oneday=`${days[one.getDay()]}`
        return `${oneday} ${one.getDate()}-${one.getMonth()}-${one.getFullYear()}`
    }
  return (
    <div>
      
      {load && <Spinner/>}
      {!load && (<div className="row">      
      
      
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{func(first)}</h5>
        <img src={`http://openweathermap.org/img/wn/${first.weather[0].icon}@2x.png`} alt="..."id="img"/>
        <p className="card-text">Temperature: {first.main.temp}&deg;C</p>
        <p className="card-text">Pressure: {first.main.pressure}mb</p>
        <p className="card-text">Humidity: {first.main.humidity}%</p>
        <p className="card-text">Wind Speed: {first.wind.speed}km/h</p>
        <p className="card-text">Mood: {first.weather[0].description}</p>
        </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{func(second)}</h5>
        <img src={`http://openweathermap.org/img/wn/${second.weather[0].icon}@2x.png`} alt="..."id="img"/>
        <p className="card-text">Temperature: {second.main.temp}&deg;C</p>
        <p className="card-text">Pressure: {second.main.pressure}mb</p>
        <p className="card-text">Humidity: {second.main.humidity}%</p>
        <p className="card-text">Wind Speed: {second.wind.speed}km/h</p>
        <p className="card-text">Mood: {second.weather[0].description}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{func(third)}</h5>
        <img  src={`http://openweathermap.org/img/wn/${third.weather[0].icon}@2x.png`} alt="..."id="img"/>
        <p className="card-text ">Temperature: {third.main.temp}&deg;C</p>
        <p className="card-text">Pressure: {third.main.pressure}mb</p>
        <p className="card-text">Humidity: {third.main.humidity}%</p>
        <p className="card-text">Wind Speed: {third.wind.speed}km/h</p>
        <p className="card-text">Mood: {third.weather[0].description}</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{func(fourth)}</h5>
        <img  src={`http://openweathermap.org/img/wn/${fourth.weather[0].icon}@2x.png`} alt="..."id="img"/>
        <p className="card-text">Temperature: {fourth.main.temp}&deg;C</p>
        <p className="card-text">Pressure: {fourth.main.pressure}mb</p>
        <p className="card-text">Humidity: {fourth.main.humidity}%</p>
        <p className="card-text">Wind Speed: {fourth.wind.speed}km/h</p>
        <p className="card-text">Mood: {fourth.weather[0].description}</p>
      </div>
    </div>
  </div>
  
</div>
      )}
    </div>

  )
}
export {Next5, forecast};

