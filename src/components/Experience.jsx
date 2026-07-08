import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Casual Food Services Assistant',
    company: 'Regina Public School | SK, Regina',
    date: '03/2026 - Present',
    description: 'Prepare and organize the kitchen for the following day which includes cleaning and sanitize the kitchen area. Assist with equipment cleaning and maintenance. Working with cash register and accounting of daily sales. Follow the safe food handling and operating equipments in a safe manner.'
  },
  {
    role: 'Customer Fulfillment Associate',
    company: 'Walmart East | SK, Regina',
    date: '03/2025 - 03/2026',
    description: 'Resolved 30+ customer inquiries daily with a 95% satisfaction rate. Streamlined checkout processes using POS systems, reducing wait times. Collaborated with team members to manage and restock inventory.'
  },
  {
    role: 'Volunteer',
    company: 'Wellness Centre | SK, Regina',
    date: '09/2024 - 11/2024',
    description: 'Partnered with cross-functional department teams to escalate and resolve complex customer issues to improve customer satisfaction scores. Promote events through social media platforms to boost community engagement. Supported planning and execution of wellness programs and special events. Maintained ongoing communication with staff regarding volunteer roles.'
  }
];

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Volunteering</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-card glass" key={index}>
              {exp.image && (
                <div className="experience-image-container">
                  <img src={exp.image} alt={exp.company} className="experience-image" />
                </div>
              )}
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
