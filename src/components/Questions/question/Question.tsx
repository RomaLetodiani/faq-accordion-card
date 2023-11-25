import './question.scss';
import arrow from '../../../assets/images/icon-arrow-down.svg';

type Props = {
  question: string;
  answer: string;
  index: number;
  showAnswer: number | null;
  handleToggle: (index: number) => void;
};

const Question = ({
  question,
  index,
  answer,
  showAnswer,
  handleToggle,
}: Props) => {
  return (
    <div className="question-div">
      <button
        className={`${showAnswer === index ? 'active' : ''}`}
        onClick={() => handleToggle(index)}
      >
        <p>{question}</p>
        <img src={arrow} alt="^" />
      </button>
      {showAnswer === index && <p>{answer}</p>}
    </div>
  );
};

export default Question;
