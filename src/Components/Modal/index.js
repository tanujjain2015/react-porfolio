import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {

    return (
        <div className="modalBackdrop">
          <div className="modalContainer">
            <h3 className="modalTitle">Photo Description</h3>
            <img alt="current category" />
            <p>
              Photo Description
            </p>
            <button onClick={onClose} type="button">Close this modal</button>
          </div>
      </div>
    );
  }
  
  export default Modal;