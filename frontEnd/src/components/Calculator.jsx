import { useState } from "react";
import { evaluate } from "mathjs";
import "../css/Calculator.css";

export const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const addInput = (val) => {
    setInput((input) => input + val);
  };
  const solve = () => {
    try {
      setResult("= " + evaluate(input));
    } catch (err) {
      setResult("Err");
    }
  };
  const clearAll = () => {
    setResult("");
    setInput("");
  };

  return (
    <div className="container border text-center shadow p-3 mb-5 bg-body-tertiary rounded">
      <div className="row" style={{ height: "30px" }}>
        <div className="col text-end">{input}</div>
      </div>
      <div className="row " style={{ height: "30px" }}>
        <div className="col text-end">{result}</div>
      </div>

      <div className="buttons border-top mt-4">
        {/* first row */}
        <div className="row">
          <div className="col">
            <button onClick={clearAll} className="btn btn-light">
              AC
            </button>
          </div>
          <div className="col">
            <button
              onClick={() => setInput((input) => input.slice(0, -1))}
              className="btn btn-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-backspace-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8z" />
              </svg>
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput(".")} className="btn btn-light">
              .
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("/")} className="btn btn-light">
              /
            </button>
          </div>
        </div>

        {/* second row */}
        <div className="row">
          <div className="col">
            <button onClick={() => addInput("7")} className="btn btn-light">
              7
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("8")} className="btn btn-light">
              8
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("9")} className="btn btn-light">
              9
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("*")} className="btn btn-light">
              *
            </button>
          </div>
        </div>

        {/* third row */}
        <div className="row">
          <div className="col">
            <button onClick={() => addInput("4")} className="btn btn-light">
              4
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("5")} className="btn btn-light">
              5
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("6")} className="btn btn-light">
              6
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("-")} className="btn btn-light">
              -
            </button>
          </div>
        </div>

        {/* forth row */}
        <div className="row">
          <div className="col">
            <button onClick={() => addInput("1")} className="btn btn-light">
              1
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("2")} className="btn btn-light">
              2
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("3")} className="btn btn-light">
              3
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("+")} className="btn btn-light">
              +
            </button>
          </div>
        </div>

        {/* fifth row */}
        <div className="row">
          <div className="col">
            <button onClick={() => addInput("(")} className="btn btn-light">
              (
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput("0")} className="btn btn-light">
              0
            </button>
          </div>
          <div className="col">
            <button onClick={() => addInput(")")} className="btn btn-light">
              )
            </button>
          </div>
          <div className="col">
            <button onClick={solve} className="btn btn-warning">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
