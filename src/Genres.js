import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cardy from './Cardy';

export default function Genres() {
    const [film7,setFilm7]=useState([])
    useEffect(()=>{
        const a = axios.get(`https://api.themoviedb.org/3/tv/genre?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
        a.then(({data})=>{
          console.log(data);
          setFilm7(data.results)
        })
    },[])
      
    return (
      <>
      {film7.map(v=>
        <div>
          {v.name}
        </div>
        
          )} 
      </>
     
    );
}
