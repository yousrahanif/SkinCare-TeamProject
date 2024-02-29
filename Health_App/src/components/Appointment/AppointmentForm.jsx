import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [doctor, setDoctor] = useState('');
  const [concerns, setConcerns] = useState('');
  const [bookedTimes, setBookedTimes] = useState([]); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:12345/appointments', {
        name,
        email,
        phoneNumber,
        dob,
        doctor,
        concerns
      });
      console.log('Response from server:', response.data);
      setBookedTimes([...bookedTimes, dob]);
      // Reset form fields after submission
      setName('');
      setEmail('');
      setPhoneNumber('');
      setDob(new Date());
      setDoctor('');
      setConcerns('');
      // Show success message with SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Appointment submitted successfully!',
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      // Show error message with SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to submit appointment. Please try again later.',
      });
    }
  };

  const validatePhoneNumber = (input) => {
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneRegex.test(input);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Appointment Form</h2>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
          <label className="block mb-2">Date of Birth:</label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="MMMM d, yyyy"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            maxDate={new Date()}
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

export default AppointmentForm;
