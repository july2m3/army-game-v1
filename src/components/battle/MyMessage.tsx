import React from 'react';
import Modal from 'react-modal';
import * as uuid from 'uuid';

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
  const { modalIsOpen, closeModal, message, logs } = props;
  console.log(logs);
  const battleLogs = logs.map((currentLog: any) => (
    <p key={uuid.v4()}>{currentLog}</p>
  ));

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
      {battleLogs}
    </Modal>
  );
};

export default MyMessage;
