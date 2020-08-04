import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProductsManaged () {
    return (
        <Container fluid>
            <Row>
                <Col> 
                    <br></br>
                </Col>
            </Row>
            <Row>
                <Col> 
                    <h2 className='font-weight-bold'>Products Managed</h2>
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
                    <h4 className="text-center" >Cloud Services </h4>
                </Col>
                <Col xs={7}>PAAS Services - Oracle Identity Cloud Service (IDCS) and Oracle Key Management Cloud Service (KMCS)</Col>
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
                    <h4 className="text-center" >Enterprise Products </h4>
                </Col>
                <Col xs={7}>Oracle Identity Manager, Enterprise Vulnerability Manager, Enterprise Log Manager, IPolicy Enforcer </Col>
                <Col xs={1}></Col>
            </Row>
        </Container>
    )
}

export default ProductsManaged;