import React from 'react';

const Orangebtn = (props) => {
    return (
			<button
				className="mx-8 bg-[#ED583B] text-white font-Poppins py-2 px-6 rounded md:ml-8  
    duration-500"
			>
				{props.children}
			</button>
		);
}

export default Orangebtn;
