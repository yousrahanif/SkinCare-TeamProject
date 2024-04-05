

import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProviders';

const MakeAppointment = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [doctor, setDoctor] = useState('');
  const [concerns, setConcerns] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(new Date());



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const utcAppointmentDate = appointmentDate.toISOString();
      const response = await axios.post('https://health-app-server.vercel.app/appointments', {
        name,
        email: user.email, // Use the user's email from AuthContext
        phoneNumber,
        appointmentDate: utcAppointmentDate,
        doctor,
        concerns
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Appointment submitted successfully!',
        });
        resetFormFields();
      }
    } catch (error) {
      console.error('Error submitting appointment:', error);
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'You already have an appointment. You cannot make more than one appointment.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to submit appointment. Please try again later.',
        });
      }
      resetFormFields();
    }
  };

  const resetFormFields = () => {
    setName('');
    setPhoneNumber('');
    setAppointmentDate(new Date());
    
    setDoctor('');
    setConcerns('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Make Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={user.email} // Set the user's email from AuthContext
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled // Disable email input to prevent modification
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Please enter a valid phone number in the format XXX-XXX-XXXX"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Appointment Date:</label>
          <DatePicker
            selected={appointmentDate}
            onChange={(date) => setAppointmentDate(date)}
            dateFormat="MMMM d, yyyy"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            minDate={new Date()}
            showYearDropdown
            yearDropdownItemNumber={120}
            scrollableYearDropdown
            showMonthDropdown
            required
          />
        </div>
       
     
        <div className="mb-4">
          <label className="block mb-2">Doctor:</label>
          <select
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Doctor</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Johnson">Dr. Johnson</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Reason for Appointment:</label>
          <textarea
            value={concerns}
            onChange={(e) => setConcerns(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAppointment;



