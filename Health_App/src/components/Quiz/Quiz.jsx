import React, { useState } from 'react';
import './Quiz.css';
import Swal from 'sweetalert2';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      text: 'How does your skin feel a few hours after washing?',
      options: ['Tight and dry', 'Shiny or greasy', 'Comfortable', 'All of the above'],
    },
    {
      id: 2,
      text: 'How often do you experience breakouts or acne?',
      options: ['Rarely', 'Frequently', 'Occasionally', 'Sensitive'],
    },
    {
      id: 3,
      text: 'How does your skin usually look a few hours after washing your face?',
      options: [
        'Flakey or rough',
        'Generally normal',
        'Shiny or oily, especially in the T-zone',
        'All of the above',
      ],
    },
    {
      id: 4,
      text: 'How would you describe your pores?',
      options: [
        'Small and hardly visible',
        'Normal-sized',
        'Enlarged, especially in the T-zone',
        'All of the above',
      ],
    },
    {
      id: 5,
      text: 'How does your skin react to new skincare products?',
      options: [
        'Often irritated or red',
        'Typically fine, but occasionally sensitive',
        'Rarely reacts negatively',
        'Sensitive',
      ],
    },
    {
      id: 6,
      text: 'How does your skin feel during the day?',
      options: ['Dry and tight', 'Comfortable', 'Oily or greasy', 'All of the above'],
    },
    {
      id: 7,
      text: 'How would you describe your skin\'s tendency to tan or burn in the sun?',
      options: [
        'Burns easily, rarely tans',
        'Tans gradually',
        'Tans easily, rarely burns',
        'Sensitive',
      ],
    },
    {
      id: 8,
      text: 'How does your skin feel in humid weather?',
      options: ['Tight and uncomfortable', 'Generally normal', 'Oily or greasy', 'All of the above'],
    },
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
    const skinTypeCounts = {
      Normal: 0,
      Dry: 0,
      Oily: 0,
      Combination: 0,
      Sensitive: 0,
    };

    questions.forEach((question, index) => {
      const answer = answers[index];
      let skinType = 'Normal';

      if (answer === 'Tight and dry') {
        skinType = 'Dry';
      } else if (answer === 'Shiny or greasy') {
        skinType = 'Oily';
      } else if (answer === 'Comfortable') {
        skinType = 'Normal';
      } else if (answer === 'All of the above') {
        skinType = 'Combination';
      } else if (answer === 'Sensitive') {
        skinType = 'Sensitive';
      }

      skinTypeCounts[skinType]++;
    });

    let overallResult = 'Normal';
    if (skinTypeCounts['Dry'] > skinTypeCounts['Oily']) {
      overallResult = 'Dry';
    } else if (skinTypeCounts['Oily'] > skinTypeCounts['Dry']) {
      overallResult = 'Oily';
    } else if (skinTypeCounts['Combination'] > skinTypeCounts['Oily'] && skinTypeCounts['Combination'] > skinTypeCounts['Dry']) {
      overallResult = 'Combination';
    } else if (skinTypeCounts['Sensitive'] > 0) {
      overallResult = 'Sensitive';
    }

    // Display the overall result
    Swal.fire({
      title: 'Skin Type Quiz Result',
      text: `Your overall skin type is ${overallResult}!`,
      icon: 'info',
    });
  };

  return (
    <div className="quiz-container">
      <h1 id="h1">Skin Type Quiz</h1>
      {currentQuestion < questions.length && (
        <div className="question-container">
          <p className='question'>{questions[currentQuestion].text}</p>
          <ul>
            {questions[currentQuestion].options.map((option) => (
              <li className="option" key={option}>
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
