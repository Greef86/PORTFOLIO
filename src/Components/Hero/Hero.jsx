import React from 'react'
import "./Hero.css"
import profile from "../../assets/profile.jpg"

const Hero = () => {
	return (
		<div id='home' className='hero'>
			<div className="profile-image-container">
				<img className='profile-img' src={profile} alt="" />
			</div>
			<h1>I am Lesley Mooketsi Greef, A South African based <span style={{ whiteSpace: "nowrap" }}>full-stack</span> web developer with HTML5, CSS, TailwindCSS, Bootstrap, JavaScript, TypeScript, C#, Java, Spring, Angular, JQuery, JSON, ReactJS, ExpressJS, NodeJS, Socket.io, Signal-r, <span style={{ whiteSpace: "nowrap" }}>ASP.NET Core (MVC)</span>, Microsoft EntityFramework, SQL, <span style={{ whiteSpace: "nowrap" }}>Microsoft SQL Server</span>, and MongoDB</h1>
			<h2>Over the years I have gained a solid experience in working on different environments and the technologies that come with them, Visual Studio, Visual Studio Code, Android Studio, NetBeans, IntelliJ IDEA, Eclipse, Sublime Text, Replit, PyCharm, Atom, Maven, Gradle, Junit, Git etc.</h2>
			<p>I have more than 5 years work experience building websites for my business, friends and myself, I graduated from <strong><a className='nwu' target='blank' href="https://www.nwu.ac.za/">North West University</a></strong> on the 20th of May 2024 with <strong style={{ whiteSpace: "nowrap" }}>Computer Science and Electronics.</strong></p>
		</div>
	)
}

export default Hero
