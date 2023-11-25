import { questions } from '../../shared/consts';
import { useState } from 'react';
import Question from './question/Question';
import './questions.scss';

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(1);

  const handleToggle = (index: number) => {
    setShowAnswer((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="questions">
      <h3>FAQ</h3>
      <div className="questions-container">
        {questions.map((item, index) => (
          <Question
            index={index}
            showAnswer={showAnswer}
            handleToggle={handleToggle}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;
