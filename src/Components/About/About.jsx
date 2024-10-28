import React from 'react'
import "./About.css"
import graduation from "../../assets/graduation.jpg"

const About = () => {
	return (
		<div id='about' className='about-me'>
			<h1 className='about-me-header'>About Me</h1>
			<h2 style={{ textAlign: "center", textDecoration: "underline", color: "silver" }}>Introduction Videos</h2>
			<div className="intro-content-videos">
				<div className='introduction-video-div'>
					<video controls className='intro-video' src="https://res.cloudinary.com/dkb1di3bd/video/upload/v1730125244/intro_l55cgi.mp4"></video>
					<label htmlFor="">Introduction</label>
				</div>
				<div className='introduction-video-div'>
					<video controls className='intro-video' src="https://res.cloudinary.com/dkb1di3bd/video/upload/v1730147173/frontend_rnr4mv.mp4"></video>
					<label htmlFor="">Frontend</label>
				</div>
				<div className='introduction-video-div'>
					<video controls className='intro-video' src="https://res.cloudinary.com/dkb1di3bd/video/upload/v1730147230/backend_n1nqo8.mp4"></video>
					<label htmlFor="">Backend</label>
				</div>
				<div className='introduction-video-div'>
					<video controls className='intro-video' src="https://res.cloudinary.com/dkb1di3bd/video/upload/v1730147282/api_vv6nyl.mp4"></video>
					<label htmlFor="">API's</label>
				</div>
			</div>
			<h2 style={{ textAlign: "center", textDecoration: "underline", marginBottom: "0.5em", color: "silver" }}>Language Proficiency</h2>
			<div className="divs">
				<div className="pic"><img className='grad-pic' src={graduation} alt="" /></div>
				<div className="progress-bar">
					<div className="html">
						<p>HTML</p>
						<div className="html-bar-div">
							<div className="html-bar bar">90%</div>
						</div>
					</div>
					<div className="html">
						<p>CSS</p>
						<div className="html-bar-div">
							<div className="css-bar bar">90%</div>
						</div>
					</div>
					<div className="html">
						<p>JavaScript</p>
						<div className="html-bar-div">
							<div className="javascript-bar bar">80%</div>
						</div>
					</div>
					<div className="html">
						<p>ReactJS</p>
						<div className="html-bar-div">
							<div className="reactjs-bar bar">80%</div>
						</div>
					</div>
					<div className="html">
						<p>ExpressJS</p>
						<div className="html-bar-div">
							<div className="expressjs-bar bar">70%</div>
						</div>
					</div>
					<div className="html">
						<p>NodeJS</p>
						<div className="html-bar-div">
							<div className="nodejs-bar bar">70%</div>
						</div>
					</div>
					<div className="html">
						<p>MongoDB</p>
						<div className="html-bar-div">
							<div className="mongodb-bar bar">70%</div>
						</div>
					</div>
					<div className="html">
						<p>Socket.io</p>
						<div className="html-bar-div">
							<div className="socketio-bar bar">65%</div>
						</div>
					</div>
					<div className="html">
						<p>Github</p>
						<div className="html-bar-div">
							<div className="github-bar bar">60%</div>
						</div>
					</div>
					<div className="html">
						<p>JSON</p>
						<div className="html-bar-div">
							<div className="json-bar bar">80%</div>
						</div>
					</div>
				</div>
			</div>
			<h2 style={{ textAlign: "center", textDecoration: "underline", margin: "2em 0 0.5em 0", color: "silver" }}>References</h2>
			<div className="references">
				<address className="ref">
					Professor <br />
					Dr Francis Lugayizi <br />
					North West University <br />
					Computer Science <br />
					Francis.Lugayizi@nwu.ac.za <br />
					018 389 2623
				</address>
				<address className="ref">
					Professor <br />
					Dr Raphael Mukaro <br />
					North West University <br />
					Electronics <br />
					Raphael.Mukaro@nwu.ac.za <br />
					018 389 2151
				</address>
				<address className="ref">
					Lecturer <br />
					Mrs Lucia Letlonkane <br />
					North West University <br />
					Computer Science <br />
					Lucia.Letlonkane@nwu.ac.za <br />
					018 389 2628
				</address>
				<address className="ref">
					Lecturer <br />
					Mr Olebogeng Tlhapane <br />
					North West University <br />
					Electronics <br />
					olebogeng.tlhapane@nwu.ac.za <br />
					018 389 2542
				</address>
			</div>
		</div>
	)
}

export default About
