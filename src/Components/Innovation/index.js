
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Innovation () {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Innovation</h2>
                </Col>
            </Row>
            <Row>
                <Col> 
                        <br></br>
                </Col>
            </Row>
            <Row>
                <Col xs={2} > 
                    <h4 className="text-center" >Continuous Delivery Service </h4>
                </Col>
                <Col xs={1}> </Col>
                <Col xs={8}>Conceptualized and designed Cloud Delivery Dashboard (CDD) service which focused on automating workflows in managing, organizing, tracking and delivering quality cloud service releases. CDD service enabled faster deployment of builds to production, thus, resulting in 80% improvement in delivery</Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default Innovation;