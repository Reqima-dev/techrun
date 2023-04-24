import React from "react";
import "../styles/counterArea.css";
import { counter } from "../data/countData";

const CounterArea = () => {
  return (
    <>
      <div className="counter-area">
        <div className="counterContainer">
          {counter.map((index, id) => {
            return (
              <div className="countBox" key={id}>
                <div className="icon">
                  <img src={index.icon} alt={index.paragraph} />
                </div>
                <span className="counter">{index.number}</span>
                <h6>{index.paragraph}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CounterArea;
