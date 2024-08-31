import React from 'react';
import Project from '../components/project';

const Portfolio = () => {
  return (
    <div>
      <h2>My Projects</h2>
      
      <Project title="Project 1" description="Task Manager is a project utilizing HTML, CSS, and JavaScript to create an application for the user to easily post and organize upcoming tasks." image="./src/assets/taskorganizer.png" />

      <Project title="Project 2" description="This is project 2." image="/path/to/image2.jpg" />

      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;
