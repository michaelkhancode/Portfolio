import React from "react";

function About() {
  return (
    <div className="about" style={{ lineHeight: "1.7", padding: "10px" }}>
      So... <br /> I started my education in{" "}
      <span style={{ fontWeight: "bold" }}>
        Chemical Engineering at McMaster University
      </span>{" "}
      which was great because I found out how much I loved Computer Science!
      Often I would find myself slaving away at some web development project, or
      getting lost in some book on abstraction, when I should have been studying
      thermodynamics or organic chemistry. I'm now a{" "}
      <span style={{ fontWeight: "bold" }}>Computer Science graduate</span>
      <br />
      <br />
      <span style={{ fontWeight: "bold" }}>
        This page is a showcase of my web development projects.
      </span>
    </div>
  );
}

export default About;
