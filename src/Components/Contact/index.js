import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ContactMe() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message    } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
              }
          }else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
      }
      
      console.log(formState);

      function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }

      return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Contact Me</h2>
                </Col>
            </Row>
            <Row>
                <Col> 
                        <br></br>
                </Col>
            </Row>
                 <Col lg={3}> </Col>
                 <Col lg={6}>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={2}> </Col>
                            <Col lg={4} >
                                <label htmlFor="name" className="text-right">Name:</label>
                            </Col>
                            <Col lg={4}>
                                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                            </Col>
                            <Col lg={2}> </Col>
                        </Row>
                        <Row>
                            <Col lg={2}> </Col>
                            <Col lg={4} >
                                <label htmlFor="email" className="text-right">Email address:</label>
                            </Col>
                            <Col lg={4}>
                                <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                            </Col>
                            <Col lg={2}> </Col>
                        </Row>
                        <Row>
                            <Col lg={2}> </Col>
                            <Col lg={4} >
                                <label htmlFor="message" className="text-right">Message:</label>
                            </Col>
                            <Col lg={4}>
                                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"  />
                            </Col>
                            <Col lg={2}> </Col>
                        </Row>
                    
                        {errorMessage && (
                            <Col xs={8}>
                                <p className="error-text">{errorMessage}</p>
                            </Col>
                        )}
                    </form>
                </Col>
                <Col lg={3}> </Col>
                <Row>
                    <Col> 
                        <button type="submit">Submit</button>
                    </Col>
                </Row>
            </Container>
      )
    }
                
    export default ContactMe;
