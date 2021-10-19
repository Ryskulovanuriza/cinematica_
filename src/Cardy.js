import React from 'react'; 
import {Card, Container,Col,Row,Button,ButtonGroup} from 'react-bootstrap'; 
import { Link } from 'react-router-dom'; 
 
 
function Cardy(props) { 
    return ( 
        <div className='d-flex justify-content-around flex-wrap'> 
        {props.name.map(v => ( 
          <> 
   
              <Row> 
                
              <Card className="p-2 m-2 text:center" style={{ textDecoration: 'none', width: '15rem' }}> 
                          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + v.poster_path} /> 
                          <Card.Body> 
                            <Card.Title  as={Link} to={"/tv/" + v.overview+v.release_date}>{v.title}</Card.Title> 
                            <Card.Text>{v.release_date}</Card.Text> 
                            <Card.Text></Card.Text> 
                          </Card.Body> 
                        </Card> 
                      
              </Row> 
  
          </> 
        ))} 
      </div> 
      
    ); 
} 
 
export default Cardy;