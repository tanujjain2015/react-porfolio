import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TechnicalSkill () {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Technical Skills</h2>
                </Col>
            </Row>
            <Row>
                <Col> 
                        <br></br>
                </Col>
            </Row>
            <Row>
                <Col xs={1}> </Col>
                <Col xs={3} > 
                    <h4 className="text-center" >Front End  </h4>
                </Col>
                <Col xs={7}> Javascript | React | </Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col> 
                        <br></br>
                </Col>
            </Row>
            <Row>
                <Col xs={1}> </Col>
                <Col xs={3} > 
                    <h4 className="text-center" >Skills </h4>
                </Col>
                <Col xs={7}>REACT | MONGODB | MONGOOSE | MYSQL | SEQUEALIZE | HTML | CSS | Javascript | Node | Scrum | Agile | POD | Jira | Rest based Microservice Architecture | Oracle (OCI) | Jenkins | Ansible Docker Kubernetes | Git |TeamCity | Grafana | Terraform | Elastic Search | Chaos and Performance Engineering Python | Java | Full Stack Development | Linux | STAF | TestNG | Selenium | CodeceptJs</Col>
                <Col xs={1}></Col>
            </Row>
            <Row>
                <Col> 
                        <br></br>
                </Col>
            </Row>
        </Container>
    )
}

export default TechnicalSkill;