import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const ClogCheckingComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [safeToUse, setSafeToUse] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clogIngredients, setClogIngredients] = useState([]);

  useEffect(() => {
    fetchClogIngredients();
  }, []);

  const fetchClogIngredients = async () => {
    try {
      const response = await fetch('clogIngredients.json');
      const data = await response.json();
      // Convert all ingredients to lowercase for consistency
      const lowercaseIngredients = data.map(ingredient => ingredient.toLowerCase());
      setClogIngredients(lowercaseIngredients);
    } catch (error) {
      console.error('Error fetching clog ingredients:', error);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    if (inputValue.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your form is empty.',
      });
      return;
    }
  
    const ingredientsList = inputValue.split('\n').map((ingredient) => ingredient.trim().toLowerCase());
  
    const hasClogIngredients = ingredientsList.some((ingredient) =>
      clogIngredients.includes(ingredient)
    );
  
    if (hasClogIngredients) {
      setSafeToUse(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Unfortunately, you have ingredients that may clog pores!',
      });
    } else {
      setSafeToUse(true);
      Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'It is safe to use.',
      });
    }
    setInputValue('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Checking Clog Poring Ingredients</h1>
        <textarea
          placeholder="Enter ingredients list here..."
          value={inputValue}
          onChange={handleInputChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          style={{ minHeight: '150px' }}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Check Ingredients
        </button>
        {formSubmitted && inputValue.trim() === '' && (
          <p className="text-red-500 mt-2">Your form is empty.</p>
        )}
        {safeToUse && <p className="mt-4 text-green-500">Congratulations! It is safe to use.</p>}
      </div>
    </div>
  );
};

export default ClogCheckingComponent;
