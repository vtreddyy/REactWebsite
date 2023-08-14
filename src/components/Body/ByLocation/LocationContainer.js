import React from 'react';
import WorkItem from './WorkItem';
import './ByLocation.css';


const LocationContainer = ({ LocationData, onItemClick }) => {
    return (
      <div className="work-items-container">
        {LocationData.map((item, index) => (
          <WorkItem key={index} item={item} onClick={() => onItemClick(index)} />
        ))}
      </div>
    );
  };
  
  export default LocationContainer;