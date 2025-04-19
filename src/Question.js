import Options from "./Options";

function Question({ question, dispatch, answer, index, numQuestions }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          {index === numQuestions - 1 ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
}

export default Question;
