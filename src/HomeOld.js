import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario"); // Mario to begin with
  const [age, setAge] = useState(25);
  const handleClick = (e) => {
    setName("Luigi"); // new value
    setAge(30);
  };
  const handleClickAgain = (name, e) => {
    console.log("Hello " + name, e);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={(e) => handleClickAgain("Ninjaboi", e)}>
        Click me Again
      </button>
    </div>
  );
};

export default Home;
