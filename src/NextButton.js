function NextButton({ dispatch, index, numQuestions }) {
  //   if (answer !== null) {
  //     return null;
  //   }
  <button
    onClick={() => dispatch({ type: "nextQuestion" })}
    className="btn btn-ui"
  >
    {index === numQuestions - 2 ? "Finish" : "Next"}
  </button>;
}

export default NextButton;
