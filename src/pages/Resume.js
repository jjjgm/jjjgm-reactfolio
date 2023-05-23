import React from 'react'

import '../styles/Resume.css';

// const downloadPDF = () => {
//   window.open('./public/Jennifer-Mejia-Resume copy.pdf', '_blank');
// };

const Resume = () => {
  return (
    <div className='resume'>
      <div className="container">
        <h3 className='resblurb'>If you would like to know more about my work experience, please download my resume - Thanks!</h3>
        <a href= "https://docs.google.com/document/d/e/2PACX-1vT_aLkfCxREhkGJx2kpC3Sopyw9674szpP9zzZzxRikSzZgvLXQK4zXVjEtZiQxy7wrUTIvHnssdK7Z/pub"><button className="download">Download My Resume</button></a>
      </div>
    </div>
  );
};

export default Resume;