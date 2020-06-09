import React from "react";
import { ModalWindow } from "components/common";
import useFakeQuery from "hooks/useFakeQuery";
import { GET_GUEST_REVIEWS } from "./api/queries";
import { Container, Row, Col } from "react-bootstrap";
import { QuestionsList } from "./components";
import { getRating } from "./helpers";
import styles from "./styles.module.scss";
import moment from "moment";

const GuestReviewsPopup = ({ isOpen, onClose }) => {
  const { data: dataReviews, error, loading } = useFakeQuery(GET_GUEST_REVIEWS);
  const { guestReviewsList } = dataReviews?.[0]?.result || {};

  return (
    <ModalWindow
      isOpen={isOpen}
      onClose={onClose}
      isLoading={loading}
      headerTitle={"GUEST REVIEWS"}
      error={error}
    >
      <Container
        className={`justify-content-center ${styles.container}`}
      >
        {guestReviewsList?.map((review, index) => {
          const { name, date, rate, travelingType, questions } = review;
          return (
              <div key={index} className={styles.reviewContainer}>
                <Row className="my-3 justify-content-start">
                  <Col xs="auto" className="m-0 px-0">
                    <div className={styles.rateBlock}>{rate}</div>
                  </Col>
                  <Col xs="auto" className="ml-0">
                    <Row className="font-weight-bold">{getRating(rate)}</Row>
                    <Row className={styles.date}>
                      {moment(date).format("MMM DD, YYYY")}
                    </Row>
                  </Col>
                </Row>
                <QuestionsList questions={questions} />
                <Row>
                  <Col xs="auto" className={`m-0 p-0 pt-2 pb-3 ${styles.guestSection}`}>
                    <Row className="font-weight-bold">{name}</Row>
                    <Row className={styles.type}>{travelingType}</Row>
                  </Col>
                </Row>
              </div>
          )
        })}
      </Container>
    </ModalWindow>
  );
};

export default GuestReviewsPopup;
export { ModalWindow, QuestionsList, useFakeQuery };
