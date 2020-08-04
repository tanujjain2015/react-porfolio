import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function GitProjects () {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Git Projects</h2>
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
                    <h4 className="text-center" >Run Buddy </h4>
                </Col>
                <Col xs={7}>https://github.com/tanujjain2015/run-buddy</Col>
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
                    <h4 className="text-center" >Just Tech News </h4>
                </Col>
                <Col xs={7}>https://github.com/tanujjain2015/just-tech-news</Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default GitProjects;