import React from 'react';
import "./skills.css";


const SkillBar = ({ skill, percentage }) => {
    return (
      <div className="skill-bar">
        <div className="skill-name">{skill}</div>
        <div className="bar-wrapper">
          <div className="bar" style={{ width: `${percentage}%` }}></div>
          <div className="bar-percent">{percentage}%</div>
        </div>
      </div>
    );
  };
  
const Skills = () => {
    const skills = [
        { skill: 'HTML', percentage: 80 },
        { skill: 'CSS', percentage: 80 },
        { skill: 'JavaScript', percentage: 60 },
        { skill: 'jQuery',percentage: 60},
        { skill: 'React', percentage: 60 },
        { skill:'Bootstrap',percentage: 50},
        { skill: 'java', percentage: 30 },
        { skill: 'Mysql', percentage: 50 },
        { skill:'Figma',percentage: 50},
        { skill:'GitHub',percentage: 50},
        { skill:'Spring',percentage: 30},

      ];
    return (
      <div className='skillcontainer' id='skills'>
        <div className='skilsname' >
            <h3>My Skills</h3>
      {skills.map((item, index) => (
        <SkillBar key={index} skill={item.skill} percentage={item.percentage} />
      ))}
        </div>
        </div>
    );
};

export default Skills;