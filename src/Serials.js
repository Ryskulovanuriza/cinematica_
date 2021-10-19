import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Cardy from './Cardy';

export default function Serials() {
    const [film3,setFilm4]=useState([])
    useEffect(()=>{
        const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
        a.then(({data})=>{
          console.log(data);
          setFilm4(data.results)
        })
      })
    return (
        <div>
          <h1>Сериал</h1> 
          <Cardy name={film3}/>
        </div>
    );
}
