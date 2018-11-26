import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

function HomeContainer() {
    return(
        <Container fluid={true}>
            <Row>
                <Col xs="2">
                    Left Container
                </Col>
                <Col xs="10">
                    Main Container
                </Col>
            </Row>
        </Container>
    )
}

export default HomeContainer;