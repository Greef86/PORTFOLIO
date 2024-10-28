import React, { useRef, useState } from 'react'
import "./Navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import resume from "../../assets/resume.pdf"
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'

const Navbar = () => {

	const [menu, setMenu] = useState("home")
	const [drop, setDrop] = useState(true)

	const menuRef = useRef()

	const dropdown_toggle = (event) => {
		menuRef.current.classList.toggle("nav-manu-visible")
		setDrop(false)
	}

	const dropup = () => {
		menuRef.current.classList.toggle("nav-manu-visible")
		setDrop(true)
	}

	return (
		<div className='navbar'>
			<h1 className='navbar-header'>Greef ML</h1>
			{drop ? <IoIosArrowDropupCircle className='nav-dropdown' onClick={dropdown_toggle} /> : <IoIosArrowDropdownCircle onClick={dropup} className='nav-dropdown' />}
			<ul ref={menuRef} className="nav-menu">
				<AnchorLink onClick={dropup} className="anchor-link" offset={50} href="#home"><li onClick={() => setMenu("home")}>{menu === "home" ? <span style={{ borderBottom: "5px solid white" }}>Home</span> : <span>Home</span>}</li></AnchorLink>
				<AnchorLink onClick={dropup} className="anchor-link" offset={50} href="#about"><li onClick={() => setMenu("about")}>{menu === "about" ? <span style={{ borderBottom: "5px solid white" }}>About</span> : <span>About</span>}</li></AnchorLink>
				<AnchorLink onClick={dropup} className="anchor-link" offset={50} href="#projects"><li onClick={() => setMenu("projects")}>{menu === "projects" ? <span style={{ borderBottom: "5px solid white" }}>Projects</span> : <span>Projects</span>}</li></AnchorLink>
				<AnchorLink onClick={dropup} className="anchor-link" offset={50} href="#contacts"><li onClick={() => setMenu("contacts")}>{menu === "contacts" ? <span style={{ borderBottom: "5px solid white" }}>Contact</span> : <span>Contact</span>}</li></AnchorLink>
			</ul>
			<div className="nav-connect"><a href={resume} target='blank'>Resume</a></div>
		</div>
	)
}

export default Navbar
