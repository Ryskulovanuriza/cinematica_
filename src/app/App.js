import React, { useState } from 'react';
import HomeNavbar from '../components/HomeNavbar'
import { Row,Col } from 'react-bootstrap'
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from '../components/Home'
import Filmy from '../components/Filmy'
// import Janr from '../components/Janr/'
import People from '../components/People'
import Serials from '../components/Serials';
import Jan from '../components/Jan'
// import Tv from '../components/Tv'
import Janry from '../components/Janry';
const App = () => {
  const [value, setValue] = useState('')
  
    return (
        <div>
            <HomeNavbar />
            <div className="slider">
              <div className="opacity">
                <div className="slider-text">
                  <h1 className="text">NUR-CINEMA</h1>
                </div>
              </div>
            </div>
            {/* <div className="container con-card" style={{
              border: "1px solid #ff6a50"
            }}>
              
             
            </div> */}
            <Row>
                <Col  sm={9} > 
                    <Switch>
                        <Route path="/serials" component={Serials} />
                        <Route path="/Filmy" component={Filmy} />
                        <Route path="/People" component={People} />
                        <Route path="/Janry/:id" component={Jan} />
                        {/* <Route path="/Tv/:i" component={Tv} /> */}
                        <Route path='/' component={Home} /> 
                    </Switch>
                {/* </div> */}
                </Col>
                <Col xs={3}> 
                    <Janry />
                </Col>
            </Row>
        </div>
    );
}

export default App;