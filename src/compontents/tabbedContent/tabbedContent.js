import React, { useState, useEffect, useRef } from 'react';
import { Age } from '../age/age';
import { ProjectCard }  from '../project/project';
import { Carousel } from '../carousel/carousel';
import './tabbedContent.css';
import EduStone from '../../assets/EduStone.png';
import ReactImg from '../../assets/react.png';
import FireBaseImg from '../../assets/firebase.png';
import SlippiImg from '../../assets/slippi.png';
import RecoilImg from '../../assets/recoilscriptcodeexample.jpg';

export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

// not gonna rebuild this but in hindsight... a useContext and a event watcher in the matrix component would have been WAY cleaner.. next time..
const startTransition = () => {
  const canvasElement = document.querySelector(".yorha-matrix");

  canvasElement.classList.add("yorha-matrix-show");

  setTimeout(() => {
    canvasElement.classList.remove("yorha-matrix-show");
    canvasElement.classList.add("yorha-matrix-hide");
  }, 400);

  setTimeout(() => {
    canvasElement.classList.remove("yorha-matrix-hide");
  }, 800);
};

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [delayedTab, setDelayedTab] = useState("about");
  let firstRender = useFirstRender();

  useEffect(()=> {
    if (firstRender === true) {
      return;
    } else {
      startTransition();
      const timer = setTimeout(() => {
        setDelayedTab(activeTab);
      }, 400);
  
      return () => clearTimeout(timer);
    }
  }, [activeTab]);


  const renderContent = () => {
    switch (delayedTab) {
      case 'about':
        return (
          <div>
              <h2>About Me</h2>
              <div className="about_me_tab">
                  <Carousel>
                    <div>
                      <h3>Stats</h3>
                          <ul className="content">
                              <li>
                                  <p><b>Age: </b><Age/> years old</p>
                              </li>
                              <li><p><b>Experience: </b>3 years</p></li>
                              <li><p><b>Pronouns: </b> He / Him</p></li>
                              <li><p><b>MBTI: </b>INFJ</p></li>
                              <li>
                                  <p><b>Location: </b> Overland Park, KS</p>
                              </li>
                          </ul>
                          <h3>Education</h3>
                          <ul className='content'>
                            <li><p><b>Degree: </b>Computer Science, BoS</p></li>
                            <li><p><b>University: </b>University of Kansas</p></li>
                          </ul>
                          <h3>Design Philosophy & Dev Priorities</h3>
                          <ul className='content'>
                            <li><p>Efficiency & Low Overhead</p></li>
                            <li><p>Performance</p></li>
                            <li><p>Modularity + Maintainability</p></li>
                          </ul>
                    </div>
                    <div>
                    <h3>Technical Skills</h3>
                          <ul className="content">
                              <li><p>Full-Stack Development</p></li>
                              <li><p>JavaScript & TypeScript</p></li>
                              <li><p>React & React-Native</p></li>
                              <li><p>Vite</p></li>
                              <li><p>NextJS</p></li>
                              <li><p>TailwindCSS</p></li>
                              <li><p>Expo</p></li>
                              <li><p>C++</p></li>
                              <li><p>Python</p></li>
                              <li><p>PHP</p></li>
                              <li><p>Shopify API & Liquid</p></li>
                              <li><p>WordPress</p></li>
                              <li><p>Học tiếng Việt nha!!</p></li>
                          </ul>
                    </div>
                    <div>
                    <h3>Soft Skills</h3>
                          <ul className="content">
                              <li><p>Adaptable & Love Learning</p></li>
                              <li><p>Teamwork & cooperation</p></li>
                              <li><p>Communication</p></li>
                              <li><p>Documentaion & Organization</p></li>
                          </ul>
                    <h3>Currently Learning</h3>
                          <ul className="content">
                              <li><p>Go</p></li>
                              <li><p>Rust</p></li>
                              <li><p>Unreal Engine</p></li>
                          </ul>
                    </div>
                    <div>
                    <h3>Hobbies</h3>
                          <ul className="content">
                              <li><p>Video Games</p></li>
                              <li><p>Anime & Manga</p></li>
                              <li><p>Model Kits</p></li>
                              <li><p>Keyboards</p></li>
                              <li><p>Cars</p></li>
                              <li><p>Running</p></li>
                          </ul>
                    </div>
                  </Carousel>
              </div>
          </div>
        );
      case 'professional':
        return (
          <div>
            <h2>Professional Info</h2>
            <div className="professional_tab">
              <div className="company_block">
                <div className="company_header">
                  <h3 className="doto-text">Propaganda3</h3>
                  <p>July 2024 - Current</p>
                </div>
                <div className="position_location">
                  <h4>Software Developer</h4>
                  <p>Overland Park, KS</p>
                </div>
                <div className="content">
                  <ul className="p-l-[40px]">
                    <li>Developed and launched high-performance web and mobile applications using React via Vite, Next.js, or Expo, delivering to hundreds of thousands of users across various industries.</li>
                    <li>Executed full-cycle development of multiple project in a small agile team, from planning to deployment.</li>
                    <li>Optimized e-commerce sites using Shopify API + Liquid, contributing to websites generating over $100k in monthly sales.</li>
                    <li>Engineered scalable backends using MongoDB, PHP, and NodeJS, supporting applications with thousands of users.</li>
                  </ul>
                </div>
              </div>
              <div className="company_block">
                <div className="company_header">
                  <h3 className="doto-text">New York Presbytarian Hospital</h3>
                  <p>July 2023 - Aug 2023</p>
                </div>
                <div className="position_location">
                  <h4>Information Technology Intern</h4>
                  <p>New York, NY</p>
                </div>
                <div className="content">
                  <ul className="p-l-[40px]">
                    <li>Assisted a team of IT Analysts in providing support to hospital staff and the installation & configuration of new hospital systems.</li>
                    <li>Demonstrated strong problem-solving abilities in resolving complex IT issues involving both software and hardware.</li>
                    <li>Attended and contributed to staff meetings related to systems planning, workload optimization, and machine learning integration.</li>
                    <li>Learned about large-scale technology deployment, network deployment & integration, and systems management.</li>
                  </ul>
                </div>
              </div>
              <div className="company_block">
                <div className="company_header">
                  <h3 className="doto-text">Propaganda3</h3>
                  <p>July 2022 - January 2024</p>
                </div>
                <div className="position_location">
                  <h4>Software Development Intern</h4>
                  <p>Overland Park, KS</p>
                </div>
                <div className="content">
                  <ul className="p-l-[40px]">
                    <li>Collaborated with a team of developers to create client apps & websites, as well as automated maintenance scripts & test cases.</li>
                    <li>Gained hands-on experience with SaaS and Agile Production methodologies in a dynamic team-based active learning environment.</li>
                    <li>Gained a greater understanding of project management by observing projects that reach tens of thousands of end users from conceptualization to first release, while considering various factors such as performance, efficiency, and ADA compliance.</li>
                    <li>Tools used include JavaScript, TypeScript, React-Native, Expo, Python, Selenium, PHP, AWS, and Propaganda3’s WPO library.</li>
                  </ul>
                </div>
              </div>
              <div className="company_block">
                <div className="company_header">
                  <h3 className="doto-text">KU SELF Fellowship</h3>
                  <p>Aug 2019 - May 2024</p>
                </div>
                <div className="position_location">
                  <h4>Fellow</h4>
                  <p>Lawrence, KS</p>
                </div>
                <div className="content">
                  <ul className="p-l-[40px]">
                    <li>Honed engineering, leadership, and business skills alongside other prestigious KU engineering students.</li>
                    <li>Took on responsibilities within the fellowship, including organizing events, managing projects, and mentoring younger cohorts.</li>
                    <li>Worked with small businesses and nonprofit organizations on long-term projects and initiatives.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2>Projects</h2>
            <div className='project-portfolio'>
              <ProjectCard title={"Client Apps @ Propaganda3"} image={ReactImg} body={"At Propaganda3, I created products for clients ranging from Shopify sites to mobile apps. For web apps, we usually used React with Next.js or Vite, and internal tools for backend that used a variety of technologies. For mobile apps, we used React-Native with React for the cross-platform compatibility. For client websites, we used a wide range of tools, and I've touched many systems such as Shopify (using their API and themes using .liquid files) or WordPress (using P3's internal tooling as well as themes, both using PHP)."} button_url={"https://www.propaganda3.com"}/>
              <ProjectCard title={"Ring Tavern"} image={FireBaseImg} body={"An app similar to the site LinkTree made for HackKU 2023. We won second place in the General Track!"} button_url={"https://devpost.com/software/ring-tavern"}/>
              <ProjectCard title={"Frog Pal"} image={SlippiImg} body={"A desktop partner application inspired by 'Porofessor' for League of Legends, Frog Pal was made in React using Electron to show a preview of your opponent in the 'Slippi' client for Super Smash Bro.s Melee. It used the Slippi API to get opponent and match history data, and I had plans to analyze replay data looking for specific patterns and give that information to the user as advice. However, the API changed and I was in school at the time, so the project ceased."} />
              <ProjectCard title={"EduStone"} image={EduStone} body={"An educational organization app built for our senior capstone project. Together with a group of students, I built an app that used Canvas API to track classes and assignments, and gameify them by giving you XP once completed and powering up your pet rock. Largely deprecated and not feature-complete, as we struggled to gain access to several parts of the API for security reasons."} button_url={"https://github.com/yiwoduf/EduStone?tab=readme-ov-file"} />
              <ProjectCard title={"Lua-Based Game Recoil Adjustment"} image={RecoilImg} body={"Recoil adjustment for Call of Duty: Warzone made using the Logitech LUA Library in 2019."} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tabbedContent_wrapper">
      <div className="buttonPanel">
        <button className={activeTab === 'about' ? 'active_tab' : ''} onClick={() => setActiveTab('about')}>About Me</button>
        <button className={activeTab === 'professional' ? 'active_tab' : ''} onClick={() => setActiveTab('professional')}>Professional Info</button>
        <button className={activeTab === 'projects' ? 'active_tab' : ''} onClick={() => setActiveTab('projects')}>Projects</button>
      </div>

      <div className="tabbedContent">
        {renderContent()}
      </div>
    </div>
  );
};

export { TabbedContent };