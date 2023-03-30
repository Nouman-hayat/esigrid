import React, { useState } from "react";

import { Link } from "react-router-dom";
import { section } from "../data";
const Roadmapsectleftimg = (props) => {
    var sectiondata = section.find((sect) => sect.id === props.id);
		const [sectdata, setsectdata] = useState(sectiondata);
		console.log(sectdata);
	return (
		<div>
			<section className="dark:bg-gray-800 font-poppins dark:text-gray-100">
				<div className=" flex flex-col-reverse justify-center   mx-auto sm:pt-16 lg:py-10 lg:flex-row lg:justify-between md:px-20 xs:px-6 xs:-mt-0">
					<div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left xs:my-5 lg:pt-16">
						<h1 className="lg:text-2xl xs:text-xl mt-4 text-black lg:text-left  font-bold leading-none xs:text-center">
							{sectdata.heading}
						</h1>
						<p className="my-2 text-base lg:text-left capitalize xs:text-center  sm:mb-12">
							{sectdata.text}
						</p>
					</div>
					<div className="flex items-center justify-center ">
						<img
							src={sectdata.image}
							alt=""
							className="object-contain w-[550px] "
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Roadmapsectleftimg;
