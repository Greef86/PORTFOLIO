import React from 'react'
import "./Contact.css"
import { FaFacebook, FaLinkedin, FaCopyright } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoLogoWhatsapp, IoLogoGithub } from "react-icons/io"
import { BsFillTelephoneFill } from "react-icons/bs"

const Contact = () => {

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "241dbf8e-2545-44ec-bc77-fdbef7576184");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: json
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
		}
	};

	return (
		<div id='contacts' className="form">
			<h1 className='form-header'>Contact Me</h1>
			<form onSubmit={onSubmit} className="inputs">
				<input type="text" name="name" id="" placeholder='Name' required />
				<input type="email" name="email" id="" placeholder='Email' required />
				<input type="text" name="subject" id="" placeholder='Subject' required />
				<textarea name="body" id="" placeholder="What's on your mind?" required />
				<button type="submit">Submit</button>
			</form>
			<div className="footer">
				<div className="contact-icons">
					<span><MdEmail />greeflesley7@gmail.com</span>
					<span><IoLogoWhatsapp />071 929 6756</span>
					<span><BsFillTelephoneFill />071 929 6756</span>
				</div>
				<div className="social-icons">
					<a target='blank' href="https://www.facebook.com/lesley.greef.7?mibextid=rS40aB7S9Ucbxw6v"><FaFacebook />Facebook</a>
					<a target='blank' href="https://www.linkedin.com/in/lesley-greef-127602273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin />LinkedIn</a>
					<a target='blank' href="https://github.com/Greef86"><IoLogoGithub />Github</a>
				</div>
				<p className="copyright"><FaCopyright />2024 Lesley Mooketsi Greef</p>
			</div>
		</div>
	)
}

export default Contact
