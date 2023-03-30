import React from 'react';
import { Link } from "react-router-dom";
import heroimg from "../assets/bg-rect.png";
const CtaEnd = () => {
    return (
			<div>
				<div className=" xs:px-1 xs:w-full lg:w-1/2 mx-auto  font-poppins relative z-10 xs:mt-[130px]  md:mt-[120px] ">
					<img src={heroimg} alt="" />
					<div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
						<h3 className="text-white xs:text-[10px] md:text-base">
							Ready to streamline your engineering design process and generate
							bankable microgrids in minutes?
						</h3>
						<div className="flex justify-center md:mt-8 xs:mt-2">
							<Link
								to="#"
								className="xs:px-4 xs:py-1 xs:text-[12px] md:px-6 md:py-2 md:text-lg  font-semibold rounded text-[#ED583B] bg-white"
							>
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
}

export default CtaEnd;
