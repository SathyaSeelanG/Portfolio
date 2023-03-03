import React from 'react';


const Skills = () => {
  const Skills = [
    { name: "Python", level: 9 },
    { name: "Android Studio", level: 8 },
    { name: "Java", level: 7 },
    { name: "JavaScript", level: 8 },
    { name: "React", level: 7 },
    { name: "HTML/CSS", level: 7 },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {Skills.map((skill, index) => (
          <div className="skill" key={index}>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="skill-level">
              <div className="skill-level-bar" style={{ width: `${skill.level * 10}%` }} />
            </div>
            <span className="skill-level-value">{skill.level}/10</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
