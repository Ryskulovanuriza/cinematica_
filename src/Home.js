import{useEffect ,useState} from 'react'
import axios from 'axios'
import HomeNavbar from './HomeNavbar'
import Cardy from './Cardy'
import {ButtonGroup,Button} from 'react-bootstrap'


     
export default function Home (props) {
const [film,setFilm]=useState([])

  useEffect(()=>{
    const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`)
    a.then(({data})=>{
      console.log(data);
      setFilm(data.results)
    })
  },[])
    return (
      <>
      <div>
      <div >
      <span style={{fontSize:50}}>Что популярно</span>
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">По ТВ</Button>
  <Button variant="secondary">В кинотеатрах</Button>
  </ButtonGroup>
</div>
       <Cardy name={film}/>
   </div>
 

</>
    )
  }
 
