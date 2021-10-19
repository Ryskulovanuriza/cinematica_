import React from 'react';
import {Container,Navbar,NavDropdown,Nav,Image} from 'react-bootstrap';
import Cardy from './Cardy';
import {useEffect ,useState} from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';



export default function HomeNavbar() {
  const [name,setName]=useState([]);
  useEffect(() => { 
    const a = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`); 
    a.then((v)=>{ 
      console.log(v) 
      setName(v.data['genres'])   
    }) 
  }, [])

  return (
    <>
      <div>
    <Navbar variant="dark" bg="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to={'/'} >
      <Image style={{width:`100px`,height:`40px`}} src={`https://archive.ica.art/sites/default/files/styles/banner-landscape/public/images/cinematicaIiJhwl.gif?itok=epm8CAQB`}></Image>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  as={Link} to={`/`} >Главная</Nav.Link>
        <Nav.Link as={Link} to={`/film`}>Фильмы</Nav.Link>
        <Nav.Link as={Link} to={`/serials`} >Суриалы</Nav.Link>
        <Nav.Link as={Link} to={`/poeple`} >Люди</Nav.Link>
        <NavDropdown title="Жанры ТВ" id="basic-nav-dropdown">
        {name.map(v=>(
             <NavDropdown.Item>{v.name}</NavDropdown.Item>  
             ))}
        </NavDropdown>
    
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>   
            </div>
            {/* <Cardy name={name}/> */}
    </>
  )
}
