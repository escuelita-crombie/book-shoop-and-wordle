import { useRef, useState } from "react";
import { useUserContext } from "../../Context/UserContext";
import "./styles.css";

const keyboardKeys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
];

type BoardArray = string[][];

const boardArray = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

type PositionType = {
  x: number;
  y: number;
};

const Reg = new RegExp(/^[a-z]$/);

function Wordle() {
  const { email } = useUserContext();
  const [board, setBoard] = useState(boardArray);
  const posRef = useRef<PositionType>({ x: 0, y: 0 });

  const handleKeyPress = (letter: string) => {
    if (!Reg.test(letter.toLowerCase())) return;
    if (posRef.current.x > 4) return;
    board[posRef.current.y][posRef.current.x++] = letter;
    setBoard([...board]);
  };

  console.log(email);

  return (
    <div className="App">
      <div className="words-grid">
        {board.map((wordRow, index) => (
          <div key={"word" + index} className="grid-word">
            {wordRow.map((letter, index) => (
              <div key={"letter" + index} className="grid-letter">
                <p>{letter}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard">
        {keyboardKeys.map((line, index) => (
          <div key={"line" + index} className="kb-line">
            {line.map((key) => (
              <button
                key={key}
                className="kb-key"
                onClick={() => handleKeyPress(key)}
              >
                <p>{key}</p>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wordle;
