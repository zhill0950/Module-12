import React from 'react';

const Contact = () => {
  return (
<div>
  <h2>Contact Me</h2>

  <div id='contact'>
    <input type='text' placeholder='Name' id='name'/>
    <input type='text' placeholder='Email' id='email'/>
    <textarea placeholder='Message' id='message'></textarea>
    <button id='submit'>Submit</button>
  </div>
  
  <div id='imgCont'>
    <a href='http://www.github.com'>
      <img src="./src/assets/githublogo1.png" alt="github" id='github'/>
    </a>

    <a href='http://www.gmail.com'>
      <img src="./src/assets/gmaillogo3.png" alt="gmail" id='gmail'/>
    </a>

    <a href='http://www.linkedin.com'>
      <img src="./src/assets/linkedinlogo.webp" alt="linkedin" id='linkedin'/>
    </a>
  </div>
</div>
  );
};

export default Contact;
