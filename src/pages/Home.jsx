import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="heading">Welcome :D</h1>
      <p className="intro">
        Hi, my name is Calvin Rodrigue, and I'm a first-year computer science
        student at MIT. I have been coding for 5 years and have experience in
        Java, Python, C++, C#, and JavaScript. I am familiar with Unity, React,
        and Node.js.
      </p>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/uV8KndYwTd8"
      ></iframe>
    </div>
  );
}

export default Home;
