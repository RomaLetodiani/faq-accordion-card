import { questions } from '../../shared/consts';
import Question from './question/Question';

const Questions = () => {
  return (
    <div>
      <h3>FAQ</h3>
      <div>
        {questions.map((item, index) => (
          <Question key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
