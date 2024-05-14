import React, { useState } from 'react';

const BookingForm = ({ onBookingSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='bookings-container'>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} />
      <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} />
      <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} />
      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
