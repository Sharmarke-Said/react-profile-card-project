import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const skills = [
  {
    skill: "HTML&CSS",
    level: "Intermediate",
    color: "#FFA500", // orange
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#FFFF00", // yellow
  },
  {
    skill: "React",
    level: "Intermediate",
    color: "#0000FF", // blue
  },
  {
    skill: "Python",
    level: "Beginner",
    color: "#008000", // green
  },
  {
    skill: "Java",
    level: "Advanced",
    color: "#800080", // purple
  },
  {
    skill: "MySQL",
    level: "Intermediate",
    color: "#00FFFF", // cyan
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="sharma-avatar.jpeg" alt="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Sharmake Said</h1>
      <p>
        A dedicated student who is passionate about learning computer science.
        With a keen interest in technology and problem-solving, I'm deeply
        immersed in the world of programming languages, algorithms, and software
        development
      </p>
    </div>
  );
}

function SkillList() {
  // return (
  //   <div className="skill-list">
  //     <Skill skill="HTML&CSS" emoji="👍" color="orange" />
  //     <Skill skill="JavaScript" emoji="👌" color="yellow" />
  //     <Skill skill="React" emoji="👍" color="blue" />
  //     <Skill skill="Python" emoji="💪" color="green" />
  //     <Skill skill="Java" emoji="👍" color="purple" />
  //     <Skill skill="MySQL" emoji="👌" color="cyan" />
  //   </div>
  // );
  return (
    <div className="skill-list">
      {/* <ul> */}
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
      {/* </ul> */}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill} </span>
      <span>
        {skillObj.level === "Advanced"
          ? "💪"
          : skillObj.level === "Intermediate"
          ? "👌"
          : skillObj.level === "Beginner"
          ? "👍"
          : ""}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
