import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import don from '../assets/don.png'
import messi from '../assets/leo.png'
import worldcup from '../assets/worldcup.png'

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">

        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            key={index}
            index={index}
            onSelectAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}

      </div>
      {
        currentQuestion.question === "How many Goals did Cr7 scores in world cup 2018?" ?
          <div className="question-div">
            <img src={don} className="q-imag" />
          </div>
          :

          currentQuestion.question === "How many Goals did Messi scors in world cup 2014?" ?
            <div className="question-div">
              <img src={messi} className="q-imag" />
            </div>
            :
            <div className="question-div">
              <img src={worldcup} className="q-imag" />
            </div>
      }

    </div>
  );
};

export default Question;
