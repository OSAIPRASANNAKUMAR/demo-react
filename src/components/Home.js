import React, { useState } from 'react';
import './Home.css';
import companyLogo from './Screenshot 2024-01-18 131815.png';

function Home() {
  const [showUserDiv, setShowUserDiv] = useState(false);
  const [showBellDiv, setShowBellDiv] = useState(false);
  const [content, setContent] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const [quizContent, setQuizContent] = useState(false);

  const toggleUserDiv = () => {
    setShowUserDiv(!showUserDiv);
  };

  const toggleBellDiv = () => {
    setShowBellDiv(!showBellDiv);
  };

  const menuItems = [
    'Profiles',
    'Grades',
    'Calendar',
    'Private Files',
    'Reports',
    'Preferences',
    'Log out'
  ];
  
  const renderMenuItems = () => {
    return (
      <div className="userDiv">
        {menuItems.map((item, index) => (
          <label key={index} className="userLabel">{item}</label>
        ))}
      </div>
    );
  };
  const handleNri = () => {
    setContent(2);
  };

  const courseContent = () => {
    setContent(1);
  };

  const homeContent = () => {
    setContent(3);
  };

  const toggleIcon = () => {
    setIsExpanded(!isExpanded);
    setQuizContent(!quizContent);
  };
  const quizQuestions = () => {
    setContent(4);
  }

  return (
    <div className='Home-container'>
      <header>
        <img src={companyLogo} className="header-logo" alt='galaxe' />
        <button className={`Home-button ${content === 3 ? 'active' : ''}`} onClick={homeContent}>Home</button>
        <button className={`My-Courses ${content === 1 ? 'active' : ''}`} onClick={courseContent}>My Courses</button>
        
        <div className='icons'>
          <svg
            className="bell"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleBellDiv}
          >
            <path d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z" />
          </svg>
          <svg
            className="message"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z" />
          </svg>
          <div className='User' onClick={toggleUserDiv}>
            <button className='profile'>SO</button>
            <svg className='chevron-v' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <style>{`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}</style>
              </defs>
              <title></title>
              <g id="chevron-bottom">
                <line className="cls-1" x1="16" x2="7" y1="20.5" y2="11.5"></line>
                <line className="cls-1" x1="25" x2="16" y1="11.5" y2="20.5"></line>
              </g>
            </svg>
          </div>
        </div>
      </header>
      
      <div className='user-details'>
        {showUserDiv && renderMenuItems()}
        {showBellDiv && (
          <div className="bellDiv">
            <p className='Notify'>Notifications</p>
            <label style={{ marginTop: '10px', marginLeft: '10px' }}>You have no notifications</label>
            <a href="#" className='SeeAll'>See all</a>
          </div>
        )}
      </div>
      
      {content === 1 ? (
        <div className='Mycourse-container'>
          <div className='main-content'>
            <h1>My courses</h1>
            <h2>Course Overview</h2>
            <hr style={{ marginRight: '35%', opacity: '0.5' }}></hr>
            <div>
              <select className='All'>
                <option>All</option>
                <option>In Progress</option>
                <option>Future</option>
                <option>Past</option>
                <option>Starred</option>
                <option>Removed from view</option>
              </select>
              <input className='Search' type='search' placeholder='Search'></input>
              <select className='sort'>
                <option >Sort by course name</option>
                <option>Sort by last accessed</option>
              </select>
              <select className='Card'>
                <option >Card</option>
                <option>List</option>
                <option>Summary</option>
              </select>
            </div>
          </div>
          
          <div className='Nri'>
            <a href='#' onClick={handleNri}>Nri internship</a><br></br>
            <p>Launchpad 2023</p>
          </div>
        </div>)
        : content === 2 ? (
          <div className='Internship'>
            <h1>NRI Internship</h1>
            <div className='titles'>
              <button>Course</button>
              <button>Grades</button>
              <button>Competencies</button>
            </div>
            
            <div className='Course-content' onClick={toggleIcon}>
              <div className='icon'>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                  height="16px"
                  width="18px"
                  style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)' }}
                >
                  <path
                    fill="#000000"
                    d="M76.8,217.6c0-1.637,0.625-3.274,1.875-4.524L163.75,128L78.675,42.925c-2.5-2.5-2.5-6.55,0-9.05s6.55-2.5,9.05,0  l89.601,89.6c2.5,2.5,2.5,6.551,0,9.051l-89.601,89.6c-2.5,2.5-6.55,2.5-9.05,0C77.425,220.875,76.8,219.237,76.8,217.6z"
                  />
                </svg>
              </div>
              <p className='General'>General</p> 
            </div>
            
            {quizContent ? <div className='Quiz'>
              <div className='quiz-Info'>
                <svg
                  className='Quiz-svg'
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    ></path>
                    <path
                      d="M16 20L26 28L41 7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect fill="pink" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <a href='#'onClick={quizQuestions}>Quiz-SE</a> <button className='mark'>Mark as done</button>
              </div>
              <div className='timings'>
                <p><b>Opened:</b> Friday, 3 November 2023, 11:30 AM</p>
                <p><b>Closed:</b> Friday, 3 November 2023, 11:45 AM</p>
              </div>
            </div> : null}
          </div>)
          : content === 3?(<h1>this is home content</h1>):
          (
            <div className='Review'>
          
          <div className='quiz-container'>
           <a href='#' onClick={handleNri}>INT</a> <p> / Quiz-SE</p>
          </div>
         <div className='final-questions' style={{display:'flex'}}>
         <svg
                  className='Quiz-svg'
                  fill="none"
                  height="48"
                  viewBox="0 0 48 48"
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    ></path>
                    <path
                      d="M16 20L26 28L41 7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect fill="pink" height="48" width="48"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <p>Quiz-SE</p>
          </div> 
          <div className='SE-Questions'>
           { /* renderquestions */}
          </div>
          </div> )}
      
      <footer className="footer-container">
        <div>?</div>
      </footer>
    </div>
  );
}

export default Home;
