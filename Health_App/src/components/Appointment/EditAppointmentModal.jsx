import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditAppointmentModal = ({ appointment, onClose, onUpdate }) => {
  const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdatedAppointment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleDateChange = date => {
    setUpdatedAppointment(prevState => ({
      ...prevState,
      appointmentDate: date
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const selectedDate = new Date(updatedAppointment.appointmentDate);
    
    // Check if the selected date is in the past
    if (selectedDate < currentDate) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'You cannot make an appointment for a past date',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
      return; // Stop further execution
    }
    
    try {
      const response = await axios.put(`https://health-app-server.vercel.app/appointments/${appointment._id}`, updatedAppointment);
      onClose();
  
      // Check if the update was successful before showing the success message
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Appointment Updated',
          showConfirmButton: false,
          timer: 1500,
          position: 'center'
        });
        
        // Pass the updated appointment back to the parent component
        onUpdate(updatedAppointment);
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };
  
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input type="text" name="name" value={updatedAppointment.name} disabled className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number:</label>
              <input type="text" name="phoneNumber" value={updatedAppointment.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Appointment Date:</label>
              <DatePicker
                selected={new Date(updatedAppointment.appointmentDate)}
                onChange={handleDateChange}
                minDate={new Date()} 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Concerns:</label>
              <textarea name="concerns" value={updatedAppointment.concerns} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAppointmentModal;




// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const EditAppointmentModal = ({ appointment, onClose, onUpdate }) => {
//   const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUpdatedAppointment(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
  
//   const handleDateChange = date => {
//     setUpdatedAppointment(prevState => ({
//       ...prevState,
//       appointmentDate: date
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentDate = new Date();
//     const selectedDate = new Date(updatedAppointment.appointmentDate);
    
//     // Check if the selected date is in the past
//     if (selectedDate < currentDate) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'You cannot make an appointment for a past date',
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       });
//       return; // Stop further execution
//     }
    
//     try {
//       const response = await axios.put(`https://health-app-server.vercel.app/appointments/${appointment._id}`, updatedAppointment);
//       onClose();
  
//       // Check if the update was successful before showing the success message
//       if (response.status === 200) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Appointment Updated',
//           showConfirmButton: false,
//           timer: 1500,
//           position: 'center'
//         });
        
//         // Pass the updated appointment back to the parent component
//         onUpdate(updatedAppointment);
//       }
//     } catch (error) {
//       console.error('Error updating appointment:', error);
//     }
//   };
  
//   return (
//     <div className="fixed z-50 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-end">
//             <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Name:</label>
//               <input type="text" name="name" value={updatedAppointment.name} disabled className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Phone Number:</label>
//               <input type="text" name="phoneNumber" value={updatedAppointment.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Appointment Date:</label>
//               <DatePicker
//                 selected={new Date(updatedAppointment.appointmentDate)}
//                 onChange={handleDateChange}
//                 minDate={new Date()}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Concerns:</label>
//               <textarea name="concerns" value={updatedAppointment.concerns} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditAppointmentModal;


// // EditAppointmentModal.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const EditAppointmentModal = ({ appointment, onClose, onUpdate }) => {
//   const [updatedAppointment, setUpdatedAppointment] = useState(appointment);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setUpdatedAppointment(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };
  
//   const handleDateChange = date => {
//     setUpdatedAppointment(prevState => ({
//       ...prevState,
//       appointmentDate: date
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const currentDate = new Date();
//     const selectedDate = new Date(updatedAppointment.appointmentDate);
    
//     // Check if the selected date is in the past
//     if (selectedDate < currentDate) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'You cannot make an appointment for a past date',
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'OK'
//       });
//       return; // Stop further execution
//     }
    
//     try {
//       const response = await axios.put(`https://health-app-server.vercel.app/appointments/${appointment._id}`, updatedAppointment);
//       onClose();
  
//       // Check if the update was successful before showing the success message
//       if (response.status === 200) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Appointment Updated',
//           showConfirmButton: false,
//           timer: 1500,
//           position: 'center'
//         });
        
//         // Pass the updated appointment back to the parent component
//         onUpdate(updatedAppointment);
//       }
//     } catch (error) {
//       console.error('Error updating appointment:', error);
//     }
//   };
  
//   return (
//     <div className="fixed z-50 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
//           <div className="flex justify-end">
//             <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-gray-700">Name:</label>
//               <input type="text" name="name" value={updatedAppointment.name} disabled className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Phone Number:</label>
//               <input type="text" name="phoneNumber" value={updatedAppointment.phoneNumber} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Appointment Date:</label>
//               <DatePicker
//                 selected={new Date(updatedAppointment.appointmentDate)}
//                 onChange={handleDateChange}
//                 minDate={new Date()}
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700">Concerns:</label>
//               <textarea name="concerns" value={updatedAppointment.concerns} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
//             </div>
//             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
//               Save Changes
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditAppointmentModal;







