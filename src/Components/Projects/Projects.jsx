import React from 'react'
import "./Projects.css"
import onlineShop from "../../assets/onlineshop.jpg"
import school from "../../assets/school.jpg"
import utility from "../../assets/utility.jpg"

const Projects = () => {
	return (
		<div id='projects' className='projects'>
			<h1 className='projects-header'>My Projects</h1>
			<div className="projects-container">
				<div className="project">
					<a href="https://greeftechnologies.netlify.app/" target='blank'>
						<h2>Online Shop <span style={{ color: "gray", fontSize: "1rem" }}>(still building it)</span></h2>
						<img className='project-img' src={onlineShop} alt="" />
						<div className="para">
							<p>This is an online clothing store that I am currently building for my cousin who has a clothing company, in this website I am using the logo of my newly formed and unregistered tech company called <strong>GreefTechnologies</strong>.</p>
							<p>I am using <strong>ReactJS</strong> and plain <strong>CSS</strong> for frontend, <strong>ExpressJS</strong> and <strong>NodeJS</strong> for backend and <strong>MongoDB</strong> is the database, I have used the <strong>Context API</strong> to maintain the global state throughout all components and avoid prop drilling, I have also used <strong>Json Web Token (jwt)</strong> to control authorization throughout the website.</p>
						</div>
					</a>
				</div>
				<div className="project">
					<a href="https://greef.netlify.app/" target='blank'>
						<h2>Computer Science School</h2>
						<img className='project-img' src={school} alt="" />
						<div className="para">
							<p>This is not the first website that I have built but it is the first website that I have hosted on <strong>Netlify</strong>, When I first started learning how to code I was using <strong>JAVA</strong>, I was using <strong>JAVA</strong> on <strong>Android Studio</strong> to build android apps.</p>
							<p>Then I decided to move from <strong>JAVA</strong> to <strong>JavaScript</strong> because I felt that <strong>JavaScript</strong> is more powerful and flexible with more frameworks, libraries and community.</p>
							<p>I built this website using basic <strong>HTML, CSS</strong> and <strong>JavaScript.</strong></p>
						</div>
					</a>
				</div>
				<div className="project">
					<a href="https://utility-company.netlify.app/" target='blank'>
						<h2>Utility Company</h2>
						<img className='project-img' src={utility} alt="" />
						<div className="para">
							<p>I created this website for a client who has a construction company <strong>Proteach</strong>, When I was building this website I have learned how to work with clients and try by all means to meet their expectations.</p>
							<p>I have learned that clients can be very difficult sometimes expecting you to create something that is out of the ordinary, but I belive that in programming anything is possible.</p>
							<p>I built this website using basic <strong>HTML, CSS</strong> and <strong>JavaScript.</strong></p>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
