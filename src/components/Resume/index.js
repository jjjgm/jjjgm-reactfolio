import React from 'react'

import '../../styles/Resume.css';

function Resume() {
  return (
    <div>
      <h3 className='resblurb'>If you would like to view my resume in order to know more about my work experience-- follow the "Download my Resume" link. Thanks!</h3>

      <div className='resume'>
        <a className="download" href="https://docs.google.com/document/d/1W0nggCq4z52t7Ni6nj9d56jyYu6O48e6bTmAh-bEVzE/edit?usp=sharing">Download my Resume</a>
        
      </div>

    </div>
  )
}

export default Resume;