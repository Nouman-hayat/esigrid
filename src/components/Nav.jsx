import React, { useState } from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo 2.png";
import Orangebtn from "./orangebtn";


const Nav = () => {
	let Links = [
		{ name: "Home", link: "/home" },
		{ name: "Features", link: "/" },
		{ name: "About us", link: "/" },
		{ name: "Contact us", link: "/" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full fixed z-20 top-0 left-0 ">
			<div className="md:flex items-center font-poppins  justify-between bg-[#141E46] py-4 md:px-20 px-7 ">
				<Link className=" w-[150px]">
					<img src={logo} alt="" />
				</Link>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl text-white pb-9 absolute right-8 top-3 cursor-pointer lg:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
					
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute lg:static  md:z-auto z-[-1] left-0 bg-[#141E46] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-10 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="md:ml-8 text-md md:my-0 my-7">
							<Link
								to={link.link}
								className="text-white hover:text-[#ED583B] duration-500"
							>
								{link.name}
							</Link>
						</li>
					))}
					<Button>Sign Up</Button>
					<Orangebtn>Login</Orangebtn>
				</ul>
			</div>
		</div>
	);
};

export default Nav;
