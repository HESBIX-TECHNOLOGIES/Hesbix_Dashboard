import React from 'react';
import './App.css';
import ParticlesBackground from './ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      
      
      {/* Top Navigation */}
      {/* Simple Attractive Header */}
<header className="header glass">
  <div className="header-content">
    <div className="header-text">
      <h1>HESBIX TECHNOLOGIES</h1>
      <p>Interactive Particle Dashboard</p>
    </div>
   <button 
  className="contact-btn glass"
  onClick={() => document.getElementById('contact-page')?.scrollIntoView({ behavior: 'smooth' })}
>
  Contact Us
</button>
  </div>
</header>
      {/* Main Dashboard */}
      <div className="dashboard">
        
        {/* Sidebar */}
       {/* Sidebar */}
        



        {/* Content Area */}
        <main className="content">
          
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card glass">
              <h3>Avg. Delivery Time </h3>
              <h2>3.2 days</h2>
              <p className="positive">↑ 3.2 days </p>
            </div>
            <div className="stat-card glass">
              <h3>Active Users</h3>
              <h2>36</h2>
              <p className="positive">↑ 8.2% from last week</p>
            </div>
            <div className="stat-card glass">
              <h3>Projects</h3>
              <h2>41</h2>
              <p>4 completed this month</p>
            </div>
            <div className="stat-card glass">
              <h3>Performance</h3>
              <h2>94%</h2>
              <p>System efficiency</p>
            </div>
             <div className="stat-card glass">
              <h3>New Leads </h3>
              <h2>+18%</h2>
              <p className="positive">This month </p>
            </div> <div className="stat-card glass">
              <h3>Completion Rate</h3>
              <h2>96%</h2>
              <p className="positive">Complete </p>
            </div> <div className="stat-card glass">
              <h3>Monthly Growth </h3>
              <h2>+21%</h2>
              <p className="positive">Growth </p>
            </div> <div className="stat-card glass">
              <h3>Client Retention </h3>
              <h2>68% </h2>
              <p className="positive"> Retained</p>
            </div>
          </div>

          {/* Charts Placeholder */}
         {/* Skills Visualization */}
<div clas   sName="chart-container glass">
  <h1>      🛠️ Tech Stack & Proficiency</h1>
  <div className="skills-visualization">
    
    {/* Skill Bars */}
    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Full Stack Development</span>
        <span className="skill-percent">85%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar frontend-bar"></div>
      </div>
      <div className="skill-techs">React, JavaScript, HTML/CSS, Python, C#, Ruby, Go, Dart, TypeScript, Kotlin, Swift, Nodejs </div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">UI/UX Design</span>
        <span className="skill-percent">75%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar uiux-bar"></div>
      </div>
      <div className="skill-techs">Figma, Responsive Design, Glassmorphism</div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Problem Solving</span>
        <span className="skill-percent">90%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar problem-bar"></div>
      </div>
      <div className="skill-techs">Debugging, Optimization, Algorithmic Thinking</div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Learning & Adaptation</span>
        <span className="skill-percent">95%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar learning-bar"></div>
      </div>
      <div className="skill-techs">Quick Learner, Documentation, Tutorials</div>
    </div>
 {/* New Skills Section - Add after existing 4 skill-category */}
 <div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Graphic Design</span>
    <span className="skill-percent">70%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar graphic-bar"></div>
  </div>
  <div className="skill-techs">Photoshop, Illustrator, Canva, Branding</div>
 </div>

 <div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Video Editing</span>
    <span className="skill-percent">65%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar video-bar"></div>
  </div>
  <div className="skill-techs">Premiere Pro, After Effects, Motion Graphics</div>
 </div>

 <div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Social Media Marketing</span>
    <span className="skill-percent">80%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar social-bar"></div>
  </div>
  <div className="skill-techs">Content Strategy, Analytics, Engagement</div>
 </div>

 <div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Project Management</span>
    <span className="skill-percent">75%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar project-bar"></div>
  </div>
  <div className="skill-techs">Agile, Communication, Deadline Management</div>
  </div>
    {/* Skills Visualization */}

  <h3></h3>
  <div className="skills-visualization">
    
    {/* Skill Bars */}
    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Collaboration Ratio</span>
        <span className="skill-percent">60%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar frontend-bar"></div>
      </div>
      <div className="skill-techs">Projects done in collaboration with others or clients </div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Daily/Weekly Productivity</span>
        <span className="skill-percent">40%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar uiux-bar"></div>
      </div>
      <div className="skill-techs">tasks completed at high efficiency</div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Goal Achievement</span>
        <span className="skill-percent">50%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar problem-bar"></div>
      </div>
      <div className="skill-techs">goals fully achieved</div>
    </div>

    <div className="skill-category">
      <div className="skill-info">
        <span className="skill-name">Tools Efficiency</span>
        <span className="skill-percent">25%</span>
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar learning-bar"></div>
      </div>
      <div className="skill-techs">most efficient tool usage</div>
    </div>
{/* New Skills Section - Add after existing 4 skill-category */}
<div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Project Type</span>
    <span className="skill-percent">35%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar graphic-bar"></div>
  </div>
  <div className="skill-techs">client projects proportion</div>
</div>

<div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Deadline Adherence</span>
    <span className="skill-percent">99%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar video-bar"></div>
  </div>
  <div className="skill-techs">projects delivered on time</div>
</div>

<div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">Campaign Type Distribution</span>
    <span className="skill-percent">40%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar social-bar"></div>
  </div>
  <div className="skill-techs">social media campaigns proportion</div>
</div>

<div className="skill-category">
  <div className="skill-info">
    <span className="skill-name">ROI (Return on Investment)</span>
    <span className="skill-percent">55%</span>
  </div>
  <div className="skill-bar-container">
    <div className="skill-bar project-bar"></div>
  </div>
  <div className="skill-techs">revenue vs marketing spend efficiency</div>

  </div>
  <p className="chart-note">Continuously expanding skills with hands-on projects</p>
</div>

  </div></div>

  
<br>
</br>
<br>
</br>
          {/* Recent Activity */}
<div className="activity-container glass">
  
  <div className="activity-list">
    
    {/* Activity Item 1 */}
    <div className="activity-item glass">
      <div className="activity-icon" style={{background: 'rgba(16, 185, 129, 0.15)'}}>
        <span>👤</span>
      </div>
      <div className="activity-content">
        <h4>New User Registration</h4>
        <p>Calib Halton joined the platform</p>
        <div className="activity-meta">
          <span className="time-badge">10 min ago</span>
          <span className="status-dot" style={{background: '#10b981'}}></span>
        </div>
      </div>
    </div>
    
    {/* Activity Item 2 */}
    <div className="activity-item glass">
      <div className="activity-icon" style={{background: 'rgba(59, 130, 246, 0.15)'}}>
        <span>🚀</span>
      </div>
      <div className="activity-content">
        <h4>Project Completed</h4>
        <p>"Nexus Dashboard" deployed successfully</p>
        <div className="activity-meta">
          <span className="time-badge">1 hour ago</span>
          <span className="status-dot" style={{background: '#3b82f6'}}></span>
        </div>
      </div>
    </div>
    
    {/* Activity Item 3 */}
    <div className="activity-item glass">
      <div className="activity-icon" style={{background: 'rgba(245, 158, 11, 0.15)'}}>
        <span>📊</span>
      </div>
      <div className="activity-content">
        <h4>Report Generated</h4>
        <p>Monthly analytics report is ready</p>
        <div className="activity-meta">
          <span className="time-badge">2 hours ago</span>
          <span className="status-dot" style={{background: '#f59e0b'}}></span>
        </div>
      </div>
    </div>
    
  </div>
</div>

        </main>
      </div>
      {/* Premium Contact Us - Simple Version */}
<div id="contact-page" className="contact-page-premium">
  <div className="contact-container">
    
    {/* Header */}
    <div className="contact-header">
      <h2><span className="gradient-text">Get In Touch</span></h2>
      <p className="subtitle">Let's connect and create something amazing together</p>
    </div>

    <div className="contact-content">
      
      {/* Social Media Section */}
      <div className="social-section">
        <h3>Connect With Me</h3>
        <p className="section-desc">Follow me on social media for updates and collaborations</p>
        
        <div className="social-icons-main">
          
          {/* Instagram */}
          <a href="https://www.instagram.com/hesbixtechnologies/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link instagram">
            <div className="icon-box">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="social-info">
              <span className="platform">Instagram</span>
              <span className="username">hesbixtechnologies</span>
            </div>
            <div className="follow-btn">Follow</div>
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/profile.php?id=61585625650041" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link facebook">
            <div className="icon-box">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="social-info">
              <span className="platform">Facebook</span>
              <span className="username">Hesbix Technologies  </span>
            </div>
            <div className="follow-btn">Follow</div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/hesbix-technologies-75572b39b/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link linkedin">
            <div className="icon-box">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="social-info">
              <span className="platform">LinkedIn</span>
              <span className="username">HESBIX TECHNOLOGIES</span>
            </div>
            <div className="follow-btn">Connect</div>
          </a>

        </div>
      </div>

      {/* Contact Info */}
      <div className="info-section">
        <h3>Contact Information</h3>
        
        <div className="contact-details">
          <div className="detail-item">
            <div className="detail-icon">📧</div>
            <div>
              <h4>Email</h4>
              <p>hesbixtechnologies@gmail.com</p>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">📱</div>
            <div>
              <h4>Phone & Whatsapp</h4>
              <p>+92 3452525235</p>
            </div>
          </div>
          
          <div className="detail-item">
            <div className="detail-icon">📍</div>
            <div>
              <h4>Location</h4>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="availability">
          <h4>📅 Availability</h4>
          <p>Available for freelance projects & collaborations</p>
          <div className="status">
            <span className="status-dot"></span>
            <span>Currently Available</span>
          </div>
        </div>
      </div>

    </div>

    {/* Footer Note */}
    <div className="contact-footer">
      <p>Feel free to reach out for project discussions, collaborations, or just a friendly chat about tech!</p>
    </div>

  </div>
</div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hesbix Technologies Dashboard. </p>
        <p>Insights that guide performance and growth</p>
      </footer>
    </div>
  );
}

export default App;