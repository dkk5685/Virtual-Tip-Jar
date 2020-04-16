import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { faPaypal, faVimeoSquare } from '@fortawesome/free-brands-svg-icons';
import { faBeer, faHamburger, faBacon, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const shuffle = (arra1) => {
  var ctr = arra1.length, temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

const RandomTipJars = ({ tipJars }) => {
  const [randomTipJar, setRandomTipJar] = useState(null);
  const reshuffleTipJars = () => {
    setRandomTipJar(shuffle([...tipJars])[0]);
  }
  useEffect(() => {
    setRandomTipJar(shuffle([...tipJars])[0]);
  }, [tipJars]);

  if (!randomTipJar) return null;
  switch(randomTipJar.position) {
    case 'Bartender':
      randomTipJar.position = <FontAwesomeIcon icon={faBeer} />
      break;
    case 'Server':
      randomTipJar.position = <FontAwesomeIcon icon={faHamburger} />
      break;
    case 'Cook':
      randomTipJar.position = <FontAwesomeIcon icon={faBacon} />
      break;
    case 'Manager':
      randomTipJar.position = <FontAwesomeIcon icon={faUserCog} />
      break;
    default: // Host/Hostess
      randomTipJar.position = <FontAwesomeIcon icon={faSmile} />
      break;
  }
  const tips = (
    (randomTipJar.payment === 'Paypal') ? (
      <a href={`https://www.paypal.me/${randomTipJar.paypal}`} className="badge badge-primary p-2">
        <FontAwesomeIcon icon={faPaypal} className="fa-2x" />
      </a>
    ) : (
      <React.Fragment>
        <a href={`https://www.venmo.com/${randomTipJar.venmo}`} className="badge badge-info p-2">
          <FontAwesomeIcon icon={faVimeoSquare} className="fa-2x fa-align-center" />
        </a>
        <br />
        <small className="text-muted">{randomTipJar.code}</small>
      </React.Fragment>
    )
  )

  return (
    <div>
      <Container fluid="sm">
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="pb-3">
            <Button
              block
              onClick={reshuffleTipJars}
            >
              New Random Tip Jar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 4 }} className="justify-content-center text-center">
              <Card key={`${randomTipJar.name}${randomTipJar.email}`} className="text-center" bg="light">
                <Card.Header as="h5">{randomTipJar.name}</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {randomTipJar.position}&nbsp;{randomTipJar.company}
                  </Card.Subtitle>
                  <Card.Text>
                    {randomTipJar.city}&nbsp;{randomTipJar.state}
                  </Card.Text>
                  {tips}
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default RandomTipJars;