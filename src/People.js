import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Card, Container,Col,Row,Button,ButtonGroup} from 'react-bootstrap'; 


export default function People(props) {
    const [film5,setFilm6]=useState([])
    useEffect(()=>{
        const a = axios.get(`https://api.themoviedb.org/3/person/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
        a.then((d)=>{
          console.log(d);
          setFilm6(d.data.results)
        })
      }, [])
    return (
        <div>
          <h1>Люди</h1> 
          <div className='d-flex justify-content-around flex-wrap'> 
        {film5.map(v => ( 
          <> 
            <Row> 
                
              <Card className="p-2 m-2 text:center" style={{ textDecoration: 'none', width: '15rem' }}> 
                          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + v.profile_path} /> 
                          <Card.Body> 
                            <Card.Title >{v.name}</Card.Title> 
                            <Card.Text>{v.orginal_name}</Card.Text> 
                          <Card.Text></Card.Text> 
                          </Card.Body> 
                        </Card> 
                      
              </Row> 
  
          </> 
        ))} 
      </div> 
    
        </div>
    );
}
