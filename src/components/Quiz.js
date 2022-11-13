import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import imgg from '../assets/df.jpg'

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
           {
            quizState.correctAnswersCount >=5? 
            <h1>You're a champion, you have a great memory!</h1>
            :
            <h1>Enjoy your world cup,cheers!</h1>
           }
          </div>
          
          <div
            onClick={() => dispatch({ type: "RESTART" })}
            className="next-button"
          >
            Restart
          </div>
          <div className="logo-div">
            <img src={imgg} className="logo" />
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}
              className="next-button"
            >
              Next question
            </div>
          )}
          <div className="logo-div">
            <img src={imgg} className="logo" />


          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
