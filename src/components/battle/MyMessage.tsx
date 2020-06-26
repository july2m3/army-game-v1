import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const customStyles = {
  content: {
    height: '200px',
    margin: '0 auto',
    width: '200px',
    fontSize: '2rem',
  },
};

const MyMessage = (props: any) => {
  const { modalIsOpen, closeModal, message } = props;
  return (
    <Modal
      // className="battle__modal"
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Winner Message"
    >
      <button onClick={closeModal} type="button">
        🅧
      </button>
      <h1>{message}</h1>
    </Modal>
  );
};

export default MyMessage;
