import React, { useEffect, useState } from 'react';
import BookingForm from './Bookings/Bookings'
import BookingConfirmation from './Bookings/Bookingdetails';
import ReservationForm from './component/ReservationForm'
import Footer from './component/Footer'

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);
  const [customers, setCustomers] = useState([]);

  

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/customers');
        if (!response.ok) {
          throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);


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
      {customers.length > 0 && <ReservationForm customers={customers}/>}
      <Footer/>
    </div>
  );
}

export default App;
