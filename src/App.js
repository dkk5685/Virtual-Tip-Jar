import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

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
    ReactGA.initialize('UA-163494853-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  const onCreateTipJar = async (values) => {
    await API.graphql(graphqlOperation(mutations.createTipjar, {
      createTipjarInput: values
    }));
    ReactGA.event({
      category: 'tipjar',
      action: 'create',
    });
    fetchTipjars();
  }

  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Virtual Tip Jar</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          </Navbar.Collapse> */}
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

        <footer className="page-footer text-center font-small mt-5 wow fadeIn">
          <div className="footer-copyright py-3" style={{backgroundColor:'info'}}>

            Built with <FontAwesomeIcon icon={faHeart} /> in Dallas by a <a href="https://www.linkedin.com/in/daniellekurek/">BoldPug</a> and <a href="https://www.linkedin.com/in/alexandratansing/">Andromache</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
