import React from "react";
import { Row } from "react-bootstrap";
import styles from "./styles.module.scss";

const QuestionsList = ({ questions }) => (
  questions?.map(({ question, answer }, index) => (
    <div key={index} className={styles.section}>
      <Row className="font-weight-bold">{question}</Row>
      <Row className="mb-2">{answer}</Row>
    </div>
  ))
);

export default QuestionsList;
