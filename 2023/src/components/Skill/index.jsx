/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import "./index.css";

const Skill = ({ Title, Status, Value }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i <= Value; i++) {
        setCurrentValue(i);
      }
    }, 70);
  }, [Value]);

  return (
    <>
      <p className="skill-title">{Title}</p>
      <ProgressBar
        variant="success"
        now={currentValue}
        style={{ height: "4px" }}
      />
      <p className="skill-status">{Status}</p>
    </>
  );
};

export default Skill;
