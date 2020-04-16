import React from 'react';
import { Formik } from 'formik';
import { Form, Button, InputGroup, Row, Col, Card, Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import countries from './countries';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .test('test-name', 'Invalid characters for name',
      (value) => {
        return /^[a-zA-Z ]*$/.test(value);
      })
    .required('Required'),
  company: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  state: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  country: Yup.string()
    .required('Required'),
  payment: Yup.string()
    .required('Please choose a form of payment'),
  paypal: Yup.string()
    .when('payment', {
      is: (value) => value === 'Paypal',
      then: Yup.string().required('Please enter Paypal Information'),
      otherwise: Yup.string().notRequired()
    }),
  venmo: Yup.string()
    .when('payment', {
      is: (value) => value === 'Venmo',
      then: Yup.string()
        .required('Please enter Venmo Information')
        .test('test-venmo', 'Invalid Venmo name, can only contain - and _',
          (value) => {
            return /^[a-zA-Z0-9\-_]*$/.test(value);
          }
        ),
      otherwise: Yup.string().notRequired()
    }),
  code: Yup.string()
    .when('payment', {
      is: (value) => value === 'Venmo',
      then: Yup.string()
        .test('test-venmo-code', 'Venmo code must be exactly 4 numbers',
          (value) => {
            return /^[0-9]{4}$/.test(value);
          }
        ),
      otherwise: Yup.string().notRequired()
    }),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

function Register({ history, onCreateTipJar }) {
  const goHome = () => {
    history.push('/')
  }
  const getOptions = () => {
    return countries.map((country) => {
      return <option key={country.name}>{country.name}</option>
    });
  }

  return (
    <Formik
      initialValues={{
        name: "",
        position: "",
        company: "",
        city: "",
        state: "",
        country: "United States",
        email: "",
        payment: "",
        paypal: "",
        venmo: "",
        code: "",
      }}
      validationSchema={SignupSchema}
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
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => {
        return (
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
                          isInvalid={touched.name && errors.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.name}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group>
                        <Form.Label className="text-muted">Position</Form.Label>
                        <Form.Check
                          id="Server"
                          name="position"
                          type="radio"
                          label="Server"
                          value="Server"
                          isInvalid={touched.position && errors.position}
                          onChange={() => setFieldValue("position", "Server")}
                        />
                        <Form.Check
                          id="Bartender"
                          name="position"
                          type="radio"
                          label="Bartender"
                          value="Bartender"
                          isInvalid={touched.position && errors.position}
                          onChange={() => setFieldValue("position", "Bartender")}
                        />
                        <Form.Check
                          id="Host&#47;Hostess"
                          name="position"
                          type="radio"
                          label="Host&#47;Hostess"
                          value="Host&#47;Hostess"
                          isInvalid={touched.position && errors.position}
                          onChange={() => setFieldValue("position", "Host&#47;Hostess")}
                        />
                        <Form.Check
                          id="Manager"
                          name="position"
                          type="radio"
                          label="Manager"
                          value="Manager"
                          isInvalid={touched.position && errors.position}
                          onChange={() => setFieldValue("position", "Manager")}
                        />
                        <Form.Check
                          id="Cook"
                          name="position"
                          type="radio"
                          label="Cook"
                          value="Cook"
                          isInvalid={touched.position && errors.position}
                          onChange={() => setFieldValue("position", "Cook")}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.position}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="company">
                        <Form.Label className="text-muted">Company</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Restaurant&#47;Bar"
                          isInvalid={touched.company && errors.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.company}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="city">
                        <Form.Label className="text-muted">City</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="City"
                          isInvalid={touched.city && errors.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="state">
                        <Form.Label className="text-muted">State/Region</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          isInvalid={touched.state && errors.state}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group controlId="country">
                        <Form.Label className="text-muted">Country</Form.Label>
                        <Form.Control
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.country}
                          isInvalid={touched.country && errors.country}
                          as="select"
                        >
                          {getOptions()}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          {errors.country}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="email">
                        <Form.Label className="text-muted">Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          isInvalid={touched.email && errors.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
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
                                isInvalid={touched.payment && errors.payment}
                                onChange={() => setFieldValue("payment", "Paypal")}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.payment}
                              </Form.Control.Feedback>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            name="paypal"
                            type="text"
                            placeholder="username"
                            isInvalid={touched.paypal && errors.paypal}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.paypal}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.paypal}
                          </Form.Control.Feedback>
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
                                isInvalid={touched.payment && errors.payment}
                                onChange={() => setFieldValue("payment", "Venmo")}
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.payment}
                              </Form.Control.Feedback>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            name="venmo"
                            type="text"
                            placeholder="username"
                            isInvalid={touched.venmo && errors.venmo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.venmo}
                          />
                          <Form.Control
                            name="code"
                            type="number"
                            placeholder="code"
                            isInvalid={touched.code && errors.code}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.code}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.venmo}
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            {errors.code}
                          </Form.Control.Feedback>
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
        )
      }}
    </Formik>
  );
}

export default withRouter(Register);
