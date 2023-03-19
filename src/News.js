import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
export default function News(props) {
  function capital(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
 const[load,setload]=useState(false)
  const[article, set]=useState([])
  const values= async(props)=>{
    setload(true)
    const url=`https://gnews.io/api/v4/top-headlines?category=${props.name}&country=in&apikey=791ce55ca15e4899511b93b4455a8937`
    let b= await fetch(url)
    let data= await b.json()
    
    set(data.articles)
    setload(false)
  }
  useEffect(()=>{
    values(props);
},[props]);
  return (
    <div className='weath'>
      
      <h1>Top Stories</h1>
      <h3>{capital(props.name)}</h3>
      <div className="row" >
      {load && <Spinner/>}

      {!load && (article===undefined? <h1>No news right now</h1>
       : article.map((e)=>{
        return (<div className=" col-md-4 my-3" key={e.url} >
        <div className='card'>
        <span className="position-absolute top-0   translate-middle badge rounded-pill bg-danger" style={{right:"0%",zIndex:"1"}}>{e.source.name}</span>
        <img className="card-img-top" src={!e.image?'https://img.etimg.com/thumb/msid-98750474,width-1070,height-580,imgsize-32562,overlay-economictimes/photo.jpg':e.image} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{e.title?e.title.slice(0,40):""}...</h5>
          <p className="card-text">{e.description?e.description.slice(0,80):""}...</p>
          <a href={e.url} className="btn btn-dark" target='_blank'  rel="noreferrer">Read more</a>
        </div>
        </div>
      </div>)
      }))}
      </div>
    </div>
  )
}
