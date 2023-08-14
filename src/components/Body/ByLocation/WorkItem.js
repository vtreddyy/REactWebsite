import React from 'react';
import './ByLocation.css';

const WorkItem = ({ item, onClick }) => {
  return (
    <div className="work-item" onClick={onClick}>
      <h3 className="work-item-title">{item.Loc}</h3>
    </div>
  );
};

export default WorkItem;