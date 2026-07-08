import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'Python', 'Java', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Developer Tools',
    skills: ['Git Version Control', 'Linux/Unix Environments', 'VS Code', 'Microsoft Excel', 'Microsoft Visio']
  },
  {
    category: 'Core Competencies',
    skills: ['Troubleshooting & Debugging', 'Technical Documentation', 'Algorithm Design & Optimization', 'Logical Problem-Solving', 'Cross-Functional Collaboration', 'Process Optimization', 'Agile Methodologies', 'Version Control Best Practices']
  }
];

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <h2 className="section-title">My Toolbox</h2>
        <div className="skills-container">
          {skillCategories.map((group, index) => (
            <div className="skill-category glass" key={index}>
              <h3 className="category-title">{group.category}</h3>
              <ul className="category-list">
                {group.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
