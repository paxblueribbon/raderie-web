import React from "react";
import { Button, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, Col, Container, Row } from "reactstrap";
import Logo from "../../assets/logo.png";

class LandingPage extends React.Component {


  render() {
    return (
      <>
        <Container fluid>
        <Row>
          <Col>
            <img className="center-block img-fluid" src={Logo} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-content-center">
      <Col xs="10" md="8" className="p-0">
  <Card className="my-2 bg-light">
    <CardBody>
      <CardText className="text-center">
        Raderie is an app to figure out which human values such as creativity, humility, moderation, or sensitivity are more 
        or less valuable to us, then compare that to our friends and loved ones.  It can be a jumping off point for why we
        believe what we do, as well as what kind of person we are and/or want to be.
      </CardText>
      <CardText>
      </CardText>
    </CardBody>
  </Card>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col xs="10" md="8" className="p-0">
  <Card className="my-2 bg-light">
    <CardBody>
      <CardText className="text-center">
        We use a version of the advanced <a href="https://en.wikipedia.org/wiki/Elo_rating_system">ELO chess ranking algorithm</a> to generate
        a ranked list of values.  This ensures that the rankings are less arbitrary than going through the process one at a time,
        and more likely to provide original insights, even about yourself, which you hadn't yet considered.
      </CardText>
      <CardText>
      </CardText>
    </CardBody>
  </Card>
      </Col>
    </Row>
        </Container>
      </>
    )
  }
}

export default LandingPage;