import React from 'react'
import {Card} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import{useEffect ,useState} from 'react'
import Cardy from './Cardy';


export default function Filmy() {
    const [film1,setFilm2]=useState([])
    useEffect(()=>{
        const a = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
        a.then(({data})=>{
          console.log(data);
          setFilm2(data.results)
        })
      })
    return (
        <div>
          <h1>Фильмы</h1> 
          <Cardy name={film1}/>
        </div>
    );
}
