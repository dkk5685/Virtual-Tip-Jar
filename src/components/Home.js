import React from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import { faBeer, faHamburger, faBacon, faUserCog } from '@fortawesome/free-solid-svg-icons';
import DataTable from './DataTable';
import RandomTipJars from './RandomTipJars';


function Home({ tipJars }) {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col>
              <h1>Virtual Tip Jar</h1>
              <p>
                This virtual tip jar was created to help restaurant and bar industry workers during the COVID-19 pandemic.
                Select at random or search for your favorite industry worker and tip them online!
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Card>
                <Card.Body>
                  <Card.Title>Workers!</Card.Title>
                  <Card.Text>
                    Add your name to the list! Click below, then share this site with your friends,
                    family, and favorite regulars!
                  </Card.Text>
                </Card.Body>
                <LinkContainer to="/register">
                  <Button block>Sign Up</Button>
                </LinkContainer>
              </Card>
            </Col>
          </Row>
          <hr className="mt-5 my-4" />
          <div className="d-flex flex-row justify-content-center">
            <div className="p-2">
              <a href="mailto:tipjar@boldpug.com"
              className="badge badge-primary p-2"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className="p-2">
              <p className="card-text text-muted"><small>This site is run by fellow unemployed SI volunteers.</small></p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <div className="p-2">
              <a
                href="https://www.venmo.com/Danielle-K6"
                className="badge badge-info p-2"
              >
                <FontAwesomeIcon icon={faVimeoSquare} />
              </a>
            </div>
            <div className="p-2">
              <p className="card-text text-muted">
                <small>

                  <a href="https://www.venmo.com/Danielle-K6">Tips for web development costs are much appreciated too!</a>

                </small>
              </p>
            </div>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid="sm">

        <Row>
          <Col>
            <h5 className="card-subtitle mt-5 mb-4 text-muted" align="center">Help Your Service Industry Workers</h5>
            <div className="form-text text-muted mb-5 pb-3" align="center">
              <div className="d-flex flex-row justify-content-center form-text text-muted">
                <div className="p-2"><FontAwesomeIcon icon={faBeer} />&nbsp; Bartender</div>
                <div className="p-2"><FontAwesomeIcon icon={faHamburger} />&nbsp; Server</div>
                <div className="p-2"><FontAwesomeIcon icon={faSmile} />&nbsp; Host</div>
                <div className="p-2"><FontAwesomeIcon icon={faBacon} />&nbsp; Cook</div>
                <div className="p-2"><FontAwesomeIcon icon={faUserCog} />&nbsp; Manager</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="pb-5">
          <Col>
            <RandomTipJars
              tipJars={tipJars}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              tipJars={tipJars}
            />
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Home;
