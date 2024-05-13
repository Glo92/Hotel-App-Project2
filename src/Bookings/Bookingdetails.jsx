import React from 'react';

function BookingConfirmation({ bookingDetails }) {
  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Name: {bookingDetails.name}</p>
      <p>Email: {bookingDetails.email}</p>
      <p>Check-in Date: {bookingDetails.checkInDate}</p>
      <p>Check-out Date: {bookingDetails.checkOutDate}</p>
    </div>
  );
}

export default BookingConfirmation;
