import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DomainExpertise () {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Domain Expertise</h2>
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
                    <h4 className="text-center" >Domain </h4>
                </Col>
                <Col xs={7}>Agile Development (Cloud & Enterprise Products) | New Product Conceptualization | Organizational Leadership | Cross functional Collaboration | Vendor Management | SIEM Domain | Release Engineering | Tools Development | Chaos Engineering | Architect |Security Engineering | System Engineering | Framework Design & Development | CI/CD | Cloud Computing | Threat Mgmt. | Network Security | Identity & Access Mgmt.</Col>
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

export default DomainExpertise;