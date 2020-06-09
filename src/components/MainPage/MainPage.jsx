import React, {useState} from 'react';
import { GuestReviewsPopup } from "components";
import {
  Button, Container, Row, Col,
} from "react-bootstrap";

const MainPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <Container fluid="md" className="justify-content-center p-3">
      <Row className="justify-content-center">
        <Col md={5} className="text-center">
          <h2>Welcome to reviews page</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={5} className="text-center">
          <p>You can read guest reviews here</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button onClick={togglePopup}>Show popup</Button>
      </Row>
      {isPopupOpen && 
        <GuestReviewsPopup isOpen={isPopupOpen} onClose={togglePopup}/>
      }
    </Container>
  );
};

export default MainPage;
export { GuestReviewsPopup, Button };
