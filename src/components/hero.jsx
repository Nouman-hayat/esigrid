import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../assets/heroimg.png"
const Hero = () => {
	return (
		<section className="dark:bg-gray-800 font-poppins dark:text-gray-100">
			<div className=" flex flex-col-reverse justify-center sm:-mt-32  mx-auto sm:pt-16 lg:pt-28 lg:flex-row lg:justify-between md:px-20 xs:px-6 xs:-mt-0">
				<div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:pt-16">
					<h1 className="text-4xl text-[#ED583B]    font-bold leading-16 sm:text-5xl">
						Design<span className="text-black m-1"> Reliable</span>
						<span className="text-[#ED583B] m-1"> Microgrids</span>
						<span className="text-black m-1">with EASIGRID</span>
					</h1>
					<p className="mt-6 mb-8 text-base capitalize  sm:mb-12">
						focus on high-value project tasks while leaving time-consuming
						manual tasks to us.
					</p>
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<Link
							to="#"
							className="px-6 py-2 text-lg font-semibold rounded bg-[#ED583B] text-white"
						>
							Get Started
						</Link>
						<Link
							to="#"
							className="px-6 py-2 text-lg font-semibold border border-solid border-[#ED583B] text-[#ED583B]  rounded "
						>
							Learn More
							<div className="inline ps-2 relative -z-10">
								<ion-icon name="arrow-forward-outline"></ion-icon>
							</div>
						</Link>
					</div>
				</div>
				<div className="flex items-center justify-center ">
					<img src={heroimg} alt="" className="object-contain " />
				</div>
			</div>
		</section>
	);
};

export default Hero;
