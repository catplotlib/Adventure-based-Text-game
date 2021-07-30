import { useState, useEffect } from "react";
import textNodes from "../textNodes";

const Game = () => {
  const [state, setState] = useState({});
  const [ins, setIns] = useState(0);
  const [textNodeIndex, setTextNodeIndex] = useState(1);
  const [textNodess, setTextNode] = useState(textNodes);
  const [options, setOptions] = useState(0);

  

  const handleAnswerOptionClick = (nextState) => {

    console.log(nextState);
    setIns(nextState);
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

         
        </div>
      </div>
    </>
  );
};
export default Game;
