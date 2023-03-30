import React from "react";

const Button = (props) => {
	return (
		<button
			className="border border-solid border-[#ED583B] text-[#ED583B] font-poppins py-2 px-6 rounded md:ml-8  
    duration-500"
		>
			{props.children}
		</button>
	);
};

export default Button;
