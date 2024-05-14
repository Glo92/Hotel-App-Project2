import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './reservationForm.css';


export const ReservationForm = ({ onMakeReservation, customers }) => {
  // Initialize state for reservation data
  const [userId, setUserId] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [partySize, setPartySize] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the onMakeReservation function passed from the parent component
      await onMakeReservation({ userId, time, date, partySize });
      // Reset form fields after successful submission
      setUserId('');
      setTime('');
      setDate('');
      setPartySize('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className= 'label'>
        User ID:
        <select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select User</option>
          {customers.map(customer => (
            <option key={customer.id} value={customer.id}>{customer.username}</option>
          ))}
        </select>
      </label>
      <label className='label'>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label className='label'>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label className='label>
        Party Size:
        <input type="number" value={partySize} onChange={(e) => setPartySize(e.target.value)} />
      </label>
      <button type="submit" >Make Reservation</button>
    </form>
  );
};

// PropTypes validation
ReservationForm.propTypes = {
  onMakeReservation: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
};


