import React from 'react';
import Modal from 'react-modal';
import * as uuid from 'uuid';

Modal.setAppElement('body');

const customStyles = {
  content: {
    height: '80vh',
    margin: '0 auto',
    width: '80%',
    overflow: 'auto',
    backgroundColor: 'rgb(240,240,240)',
    backgroundImage:
      'linear-gradient(to bottom right, rgba(20,20,20,0.8), rgb(240,0,0))',
    borderRadius: '10px',
  },
};

const MyMessage = (props: any) => {
  const { modalIsOpen, closeModal, message, logs } = props;
  const battleLogs = logs.map((currentLog: any) => (
    <p
      key={uuid.v4()}
      style={{ fontSize: '24px', margin: '24px', color: 'rgb(20,20,20,0.8)' }}
    >
      {currentLog}
    </p>
  ));

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Winner Message"
    >
      <button
        onClick={closeModal}
        type="button"
        style={{ fontSize: '24px', padding: '10px' }}
      >
        🅧
      </button>
      <h1
        style={{
          textAlign: 'center',
          fontSize: '40px',
          color: 'rgb(20,20,20,0.8)',
        }}
      >
        {message}
      </h1>
      {battleLogs}
    </Modal>
  );
};

export default MyMessage;
