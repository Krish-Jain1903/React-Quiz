// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      break;
    default:
      break;
  }
}

export default function App() {
  // return <div>{/* <DateCounter /> */}</div>;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => console.log("Error"));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
