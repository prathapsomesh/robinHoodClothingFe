import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ErrorOrSuccessModal extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.open}
        onHide={this.props.handleClose}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div id="mdbody" className="mdbody">
              {this.props.type === 'error' ? (
                <FontAwesomeIcon
                  id="verified"
                  icon={faTimes}
                  color={'red'}
                  size={'sm'}
                />
              ) : (
                <FontAwesomeIcon
                  id="verified"
                  icon={faCheckCircle}
                  color={'green'}
                  size={'sm'}
                />
              )}
            </div>
          </div>
          <h6 className="my-4 text-center">{this.props.body}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="danger" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ErrorOrSuccessModal;
