import React from 'react';

const Project = ({ title, description, image }) => {
  return (
    <div className="project">
      <img src={image} alt={title} id='projimg' />
      <h2>{title}</h2>
      <p id='desc'>{description}</p>
    </div>
  );
};

export default Project;
