import React from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { withRouter } from 'react-router-dom'

function Register({ history, onCreateTipJar }) {
  const goHome = () => {
    history.push('/')
  }

  return (
    <Formik
      initialValues={{
        name: "",
        position: "",
        company: "",
        city: "",
        state: "",
        email: "",
        payment: "",
        paypal: "",
        venmo: "",
        code: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        await onCreateTipJar(values);
        resetForm();
        setSubmitting(false);
        history.push('/')
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
          <Container fluid="sm">
            <Row className="pt-5">
              <Col md={{ span: 6, offset: 3 }}>
                <Card>
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="name">
                        <Form.Label className="text-muted">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="First &amp; Last"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          required
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="text-muted">Position</Form.Label>
                        <Form.Check
                          id="Server"
                          name="position"
                          type="radio"
                          label="Server"
                          value="Server"
                          required
                          onChange={() => setFieldValue("position", "Server")}
                        />
                        <Form.Check
                          id="Bartender"
                          name="position"
                          type="radio"
                          label="Bartender"
                          value="Bartender"
                          required
                          onChange={() => setFieldValue("position", "Bartender")}
                        />
                        <Form.Check
                          id="Host&#47;Hostess"
                          name="position"
                          type="radio"
                          label="Host&#47;Hostess"
                          value="Host&#47;Hostess"
                          required
                          onChange={() => setFieldValue("position", "Host&#47;Hostess")}
                        />
                        <Form.Check
                          id="Manager"
                          name="position"
                          type="radio"
                          label="Manager"
                          value="Manager"
                          required
                          onChange={() => setFieldValue("position", "Manager")}
                        />
                        <Form.Check
                          id="Cook"
                          name="position"
                          type="radio"
                          label="Cook"
                          value="Cook"
                          required
                          onChange={() => setFieldValue("position", "Cook")}
                        />
                      </Form.Group>

                      <Form.Group controlId="company">
                        <Form.Label className="text-muted">Company</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Restaurant&#47;Bar"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="city">
                        <Form.Label className="text-muted">City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                          required
                        />
                      </Form.Group>
                      <Form.Group controlId="state">
                        <Form.Label className="text-muted">State</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                          required
                        />
                      </Form.Group>

                      <Form.Group controlId="email">
                        <Form.Label className="text-muted">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          required
                        />
                        <Form.Text className="text-muted">We will not display on the site.</Form.Text>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="text-muted">Payment - choose one</Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <Form.Check
                                name="payment"
                                type="radio"
                                label="&nbsp; PayPal.me/ &nbsp;"
                                value="paypal"
                                required
                                onChange={() => setFieldValue("payment", "Paypal")}
                              />
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            name="paypal"
                            type="text"
                            placeholder="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.paypal}
                          />
                        </InputGroup>
                        <small className="form-text text-muted pb-3 pt-0">This is <strong>not</strong> your email, it's your PayPal.me/ username.</small>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <Form.Check
                                name="payment"
                                type="radio"
                                label="&nbsp; Venmo.com/"
                                value="venmo"
                                required
                                onChange={() => setFieldValue("payment", "Venmo")}
                              />
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            name="venmo"
                            type="text"
                            placeholder="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.venmo}
                          />
                          <Form.Control
                            name="code"
                            type="text"
                            placeholder="code"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.code}
                          />
                        </InputGroup>
                        <small className="form-text text-muted pb-4">Include your 4 digit Venmo code if applicable.</small>
                      </Form.Group>

                      <Button
                        variant="secondary"
                        type="button"
                        block
                        onClick={goHome}
                      >Back </Button>
                      <Button variant="primary" type="submit" block>Submit</Button>
                    </Form>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
          </Container>
        )}
    </Formik>
  );
}

export default withRouter(Register);
