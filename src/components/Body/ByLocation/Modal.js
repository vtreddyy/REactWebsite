import React from 'react';
import './ByLocation.css';


const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="work-item-title">{item.title}</h3>
        <p className="work-item-description">{item.description}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
