import { useState, useEffect } from "react";
import textNodes from "../textNodes";

const Game = () => {
  const [state, setState] = useState({});
  const [ins, setIns] = useState(0);
  const [textNodeIndex, setTextNodeIndex] = useState(1);
  const [textNodess, setTextNode] = useState(textNodes);
  const [options, setOptions] = useState(0);

  // useEffect(() => {
  //   textNodess.map((textNode) => {
  //     if (textNodeIndex === textNode.id) {
  //       setText(textNode.text);
  //       setOptions(textNode.options);
  //     }
  //   });
  //   console.log(textNodeIndex);
  // }, [textNodeIndex]);

  // const optionHandler = (e) => {
  //   setTextNodeIndex(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleAnswerOptionClick = (nextState) => {
    // if (isCorrect) {
    // 	setScore(score + 1);
    // }
    console.log(nextState);
    setIns(nextState);
    // const nextQuestion = currentQuestion + 1;
    // if (nextQuestion < questions.length) {
    // 	setCurrentQuestion(nextQuestion);
    // } else {
    // 	setShowScore(true);
    // }
  };

  return (
    <>
      <div className="Game">
        <h1>{textNodess[ins]["text"]}</h1>
        <div id="option-buttons" className="btn-grid">
          {textNodess[ins].options.map((answerOption) => (
            <button
              class="btn"
              onClick={() => handleAnswerOptionClick(answerOption.nextText)}
            >
              {answerOption.text}
            </button>
          ))}

          {/* <div id="option-buttons" className="btn-grid">
          {options.map((option) => {
            return (
              <button
                value={option.nextText}
                class="btn"
                onClick={optionHandler}
              >
                {option.text}
              </button>
            );
          })}
        </div> */}
        </div>
      </div>
    </>
  );
};
export default Game;
