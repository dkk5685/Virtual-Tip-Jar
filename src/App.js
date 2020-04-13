import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  const fetchTipjars = async () => {
    const allTipjars = await API.graphql(graphqlOperation(queries.listTipjars));
    setTipJars(allTipjars.data.listTipjars);
  }
  const [tipJars, setTipJars] = useState([])
  useEffect(() => {
    fetchTipjars();
  }, []);


  const onCreateTipJar = async (values) => {
    await API.graphql(graphqlOperation(mutations.createTipjar, {
      createTipjarInput: values
    }));
    fetchTipjars();
  }

  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">COS Tip Jar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="https://www.youtube.com/c/confessionsofaserver">
                <FontAwesomeIcon icon={faYoutube} className="fa-lg" />
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/confessionsof_aserver/">
                <FontAwesomeIcon icon={faInstagram} className="fa-lg" />
              </Nav.Link>
              <Nav.Link href="https://www.facebook.com/confessionofaserver/">
                <FontAwesomeIcon icon={faFacebook} className="fa-lg" />
              </Nav.Link>
              <Nav.Link href="mailto:confessionsofaserver@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/register">
            <Register
              onCreateTipJar={onCreateTipJar}
            />
          </Route>
          <Route path="/">
            <Home
              tipJars={tipJars}
            />
          </Route>
        </Switch>

        <footer className="page-footer text-center font-small mt-5 pt-5 wow fadeIn">
          <hr className="my-4" />
          <div className="pb-4">
            <a href="https://www.facebook.com/confessionofaserver/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="mr-3" />
            </a>
            <a href="https://www.instagram.com/confessionsof_aserver/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="mr-3" />
            </a>
            <a href="https://www.youtube.com/c/confessionsofaserver" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="mr-3" />
            </a>
          </div>
          <div className="footer-copyright py-3" style={{backgroundColor:'info'}}>
            © 2020 <a href="https://www.facebook.com/confessionofaserver/"> Confessions of a Server </a> <br />
            Built with <FontAwesomeIcon icon={faHeart} /> in Dallas by a <a href="https://www.boldpug.com">BoldPug</a> and <a href="https://www.alexandratansing.com">Andromache</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
