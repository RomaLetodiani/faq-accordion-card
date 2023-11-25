import { useState } from 'react';
import './question.scss';
import arrow from '../../../assets/images/icon-arrow-down.svg';

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question">
      <button onClick={() => setShowAnswer(!showAnswer)}>
        <p>{question}</p>
        <img src={arrow} alt="^" />
      </button>
      {showAnswer && <p>{answer}</p>}
    </div>
  );
};

export default Question;
