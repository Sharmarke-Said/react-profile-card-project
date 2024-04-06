import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

function SkillList() {}

function Skill() {}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
