import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOGGED_IN } from "../services/authService";
import { getAvailbleActions } from "../services/counterService";

const Spinner = () => <div className="loader"></div>;
const Text = ({ title }) => {
  return <p>{title}</p>;
};

const Counter = (props) => {
  const [availbleActions, setAvailbleActions] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getActions() {
      setIsLoading(true);
      setAvailbleActions(await getAvailbleActions());
      setIsLoading(false);
    }
    getActions();
  }, []);

  const [counter, setCoutner] = useState(props.initValue || 0);

  function handler(sign) {
    switch (sign) {
      case "+":
        setCoutner((counter) => counter + 1);
        break;
      case "-":
        setCoutner((counter) => counter - 1);
        break;
      case "^":
        setCoutner((counter) => counter * counter);
        break;
      default:
        setCoutner(0);
    }
  }

  return LOGGED_IN ? (
    <>
      <Link to="/">{"Back"}</Link>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Text title={`Counter value: ${counter}`} />
          {Object.keys(availbleActions).map((objectKey) => {
            return (
              <button onClick={() => handler(objectKey)}>{objectKey}</button>
            );
          })}
        </div>
      )}
    </>
  ) : (
    [
      <h1>{"LOG IN TO SEE THIS"}</h1>,
      <Link to="/">{"Back"}</Link>,
      <br />,
      <Link to="/login">{"login"}</Link>
    ]
  );
};

export default Counter;
