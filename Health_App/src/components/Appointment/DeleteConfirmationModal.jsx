import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const DeleteConfirmationModal = ({ appointmentId, onClose }) => {
  const handleDelete = async () => {
    try {
      // Send a request to delete the appointment from the backend
      await axios.delete(`http://localhost:12345/appointments/${appointmentId}`);
      
      // If deletion is successful, close the modal
      onClose();

      // Show a success message to the user
      Swal.fire({
        icon: 'success',
        title: 'Appointment Deleted',
        showConfirmButton: false,
        timer: 1500,
        position: 'center'
      });
    } catch (error) {
      // If an error occurs, log it to the console
      console.error('Error deleting appointment:', error);
    }
  };

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
          <p className="text-lg font-semibold mb-4">Are you sure you want to delete this appointment?</p>
          <div className="flex justify-between">
            <button onClick={handleDelete} className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mr-2">
              Yes, Delete
            </button>
            <button onClick={onClose} className="w-1/2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300 ml-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;



// import React from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const DeleteConfirmationModal = ({ appointmentId, onClose }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:12345/appointments/${appointmentId}`);
//       onClose();
//       Swal.fire({
//         icon: 'success',
//         title: 'Appointment Deleted',
//         showConfirmButton: false,
//         timer: 1500,
//         position: 'center' // Specify the position as center
//       });
//     } catch (error) {
//       console.error('Error deleting appointment:', error);
//     }
//   };

//   return (
//     <div className="fixed z-50 inset-0 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
//           <p className="text-lg font-semibold mb-4">Are you sure you want to delete this appointment?</p>
//           <div className="flex justify-between">
//             <button onClick={handleDelete} className="w-1/2 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 mr-2">
//               Yes, Delete
//             </button>
//             <button onClick={onClose} className="w-1/2 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300 ml-2">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeleteConfirmationModal;
