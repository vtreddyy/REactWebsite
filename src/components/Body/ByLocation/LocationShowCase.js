import React, { useState } from 'react';
import LocationContainer from './LocationContainer';
import Modal from './Modal';
import LocationData from './LocationData';
import './ByLocation.css'

const Showcase = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="showcase-container">
      <h1 className="showcase-title">Community Activities in Houston</h1>
      <LocationContainer LocationData={LocationData} onItemClick={handleClick} />
      {selectedItem !== null && (
        <Modal item={LocationData[selectedItem]} onClose={handleClose} />
      )}
    </div>
  );
};

export default Showcase;