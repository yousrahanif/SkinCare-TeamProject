import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
          id: 1,
          text: 'How does your skin feel a few hours after washing?',
          options: ['Tight and dry', 'Shiny or greasy', 'Comfortable'],
        },
        {
          id: 2,
          text: 'How often do you experience breakouts?',
          options:['Rarely', 'Frequently', 'Occasionally']
        },
        // Add more questions as needed
      ];
    
      const [answers, setAnswers] = useState([]);
      const [currentQuestion, setCurrentQuestion] = useState(0);
    
      const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // Calculate and display the result based on answers
          calculateResult();
        }
      };
    
      const calculateResult = () => {
        // Add your logic to determine the skin type based on the user's answers
        // For simplicity, let's just count the occurrences of each answer
        const answerCount = answers.reduce((count, answer) => {
          count[answer] = (count[answer] || 0) + 1;
          return count;
        }, {});
    
        // Determine the skin type based on the majority of answers
        let result = "Normal";
        if (answerCount['Tight and dry'] > answerCount['Shiny or greasy']) {
          result = 'Dry';
           alert(`Your skin type is ${result}!`);
        } else if (answerCount['Shiny or greasy'] > answerCount['Tight and dry']) {
          result = 'Oily';
        }
    
        // Display the result
        alert(`Your skin type is ${result}!`);
      };
    
      return (
        <div>
          <h1>Skin Type Quiz</h1>
          {currentQuestion < questions.length && (
            <div>
              <p>{questions[currentQuestion].text}</p>
              <ul>
                {questions[currentQuestion].options.map((option) => (
                  <li key={option}>
                    <button onClick={() => handleAnswer(option)}>{option}</button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    };

export default Quiz;