import React, { useState } from 'react';
import BookingForm from './BookingForm';
import BookingConfirmation from './BookingConfirmation';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (data) => {
    // Here you can make API call to your backend to save booking details
    // For now, let's just set the booking details in state
    setBookingDetails(data);
  };

  return (
    <div>
      <h1>Hotel Booking App</h1>
      {!bookingDetails ? (
        <BookingForm onBookingSubmit={handleBookingSubmit} />
      ) : (
        <BookingConfirmation bookingDetails={bookingDetails} />
      )}
    </div>
  );
}

export default App;
