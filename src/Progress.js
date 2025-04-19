function Progress({ index, numQuestions, points, totalPoints, answer }) {
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
