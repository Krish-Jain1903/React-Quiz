import { useQuiz } from "./QuizContext";

function FinishScreen() {
  const { points, highscore, dispatch, totalPoints } = useQuiz();
  const percentage = Math.floor((points / totalPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage < 60 && percentage >= 35) emoji = "⭐";
  if (percentage < 35) emoji = "❌";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({percentage} %)
      </p>
      <p className="highscore">(Highscore : {highscore} Points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
