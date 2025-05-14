import { useQuiz } from "./QuizContext";

function Progress() {
  const { index, numQuestions, points, answer, totalPoints } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={answer !== null ? index + 1 : index}
      />
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>
          {points} / {totalPoints}
        </strong>{" "}
        Points
      </p>
    </header>
  );
}

export default Progress;
