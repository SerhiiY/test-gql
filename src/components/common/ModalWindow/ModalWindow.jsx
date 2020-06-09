import React from "react";
import { Modal } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import styles from "./styles.module.scss";
import { X } from "react-bootstrap-icons";

const ModalWindow = ({
  isOpen = false,
  onClose = () => {},
  headerTitle, children, isLoading, error,
}) => (
  <Modal
    show={isOpen}
    onHide={onClose}
    className={`modal-dialog modal-dialog-centered ${styles.modal}`}
  >
    <div className={styles.wrapper}>
      <X className={styles.cross} size={20} onClick={onClose}/>
      {headerTitle && 
        <Modal.Header className={`font-weight-bold ${styles.modalHeader}`}>
          {headerTitle}
        </Modal.Header>
      }
      <Modal.Body className={styles.modalBody}>
        {isLoading
          ? <Spinner animation="border" variant="primary"/>
          : !!error
        ? <p className="p-2">Error: can't load data ({error})</p>
            : children
        }
      </Modal.Body>
    </div>
  </Modal>
);

export default ModalWindow;
export { X, Spinner, Modal };
