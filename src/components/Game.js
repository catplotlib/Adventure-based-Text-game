import { useState, useEffect } from "react";
import textNodes from "../textNodes";

const Game = () => {
  const [currentState, setCurrentState] = useState({});
  const [ins, setIns] = useState(0);
  const [textNodess, setTextNode] = useState(textNodes);

  const handleAnswerOptionClick = (answerOption) => {
    var current = textNodess.filter(function (textNode) {
      return textNode.id === answerOption.nextText;
    });

    if (answerOption.hasOwnProperty("setState")) {
      setCurrentState(answerOption.setState);
    }

    setIns(current[0].id -1);
  };
  return (
    <>
      <div className="Game">
        <h1>{textNodes[ins].text}</h1>
        <div id="option-buttons" className="btn-grid">
          {textNodes[ins].options.map((answerOption, index) => {
            {
              if (answerOption.hasOwnProperty("requiredState")) {
                if (answerOption.requiredState(currentState)) {
                  return (
                    <>
                      <button
                        key={index}
                        className="btn"
                        onClick={() => handleAnswerOptionClick(answerOption)}
                      >
                        {answerOption.text}
                      </button>
                    </>
                  );
                }
              }
              else{
              return (
                <>
                  <button
                    key={index}
                    className="btn"
                    onClick={() => handleAnswerOptionClick(answerOption)}
                  >
                    {answerOption.text}
                  </button>
                </>
              );
              }
            }
          })}
        </div>
      </div>
    </>
  );
};
export default Game;
