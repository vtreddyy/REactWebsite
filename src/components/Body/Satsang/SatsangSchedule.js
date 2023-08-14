import React, { useState, useEffect } from 'react';
import './Satsang.css';

const SatsangSchedule = () => {
  const [events, setEvents] = useState([]);
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch('https://react-inte-default-rtdb.firebaseio.com/Satsungs.json')
      .then(response => response.json())
      .then(data => {
        const allEvents = Object.values(data);
        const monthEvents = allEvents.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
        });
        setEvents(monthEvents);
      })
      .catch(error => {
        console.error('There was an error fetching the events data:', error);
      });
  }, [currentMonth, currentYear]);

  return (
    <div className="timetable">
      <h1>This Month Satsangs</h1>
      <ul>
        {events.map(event => (
          <li key={event.date} className="listItem">
            {new Date(event.date).toLocaleDateString()} {event.time} - by: {event.by} at {event.location} 
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="link">Register Here</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SatsangSchedule;