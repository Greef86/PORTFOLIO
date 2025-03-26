import React from 'react'
import "./Hero.css"
import profile from "../../assets/profile.jpg"

const Hero = () => {
	return (
		<div id='home' className='hero'>
			<div className="profile-image-container">
				<img className='profile-img' src={profile} alt="" />
			</div>
			<h1>I am Lesley Mooketsi Greef, A South African based <span style={{ whiteSpace: "nowrap" }}>full-stack</span> web developer with ReactJS, ExpressJS, NodeJS and MongoDB</h1>
			<p>I have more than 5 years work experience building websites for my business, friends and myself, I graduated from <strong><a className='nwu' target='blank' href="https://www.nwu.ac.za/">North West University</a></strong> on the 20th of May 2024 with <strong style={{ whiteSpace: "nowrap" }}>Computer Science and Electronics.</strong></p>
		</div>
	)
}

export default Hero
