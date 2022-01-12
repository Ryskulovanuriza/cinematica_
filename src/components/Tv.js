import React, {  useEffect,useState,setNames} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
import {Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating, RatingView } from 'react-simple-star-rating'
import StarRatings from 'react-star-ratings';


function Tv(props) {
    let {i} = useParams();
    const [names, setNames] = useState([])
    // const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    
      }

useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/tv/${i}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
    .then((a) => {
        console.log(a);
        setNames(a.data)
    })
}, [i])
    return (
        <div>
         
        <>
          
            <div className="container w-75 m-4">
            <Card.Img  className="w-50" style={{position:'absolute'}}variant="top" vote_count src={'https://image.tmdb.org/t/p/w500' + names.backdrop_path} />
              <Card.Img className="shadow-lg rounded mb-3" style={{width:200,position:"relative", top:180,left:40 , borderColor:"white"}} variant="top" src={'https://image.tmdb.org/t/p/w200' + names.poster_path} />
              <Card.Body>
                <Card.Title style={{ textDecoration: 'none',}}></Card.Title>
                <Card.Text style={{position:"relative",left:300,color:"white",bottom:20, color:"white"}} ><h1>{names.name}</h1></Card.Text>
                <Card.Text style={{position:"relative",left:300,color:"white",bottom:50, color:"white"}}><h4>{names.tagline}</h4></Card.Text>
                <Card.Text style={{position:"relative",left:300, top:30, color:"white"}}><h3>{names.type}</h3></Card.Text>
                <p style={{position:"relative",left:100,top:30, color:"white"}}>{names.vote_average}</p>
                <Card.Text style={{position:"relative",top:10, color:"white"}}><p>  <div className='rating'style={{color:"white"}}>
               {/* <StarRatings
                    rating={names.vote_average}
                    starSpacing="0px"
                    starRatedColor={'yellow'}
                    starEmptyColor={'grey'}
                    starHoverColor={'red'}
                    starDimension={'20px'}
                    numberOfStars={10}
                 /> */}
               </div >{names.overview}</p></Card.Text>
              </Card.Body>
            </div>
         
        </>
       
        </div>
    );
}

export default Tv;