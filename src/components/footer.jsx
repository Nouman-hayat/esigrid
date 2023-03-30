import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo 2.png";

const Footer = () => {
	return (
		<div>
			<footer className="relative z-0  bg-[#141E46] font-poppins xs:pt-[8rem]  sm:pt-[15rem] sm:-mt-[10rem] xs:-mt-[2rem]">
				<div className=" flex flex-wrap justify-between font-poppins  md:px-20 px-7">
					<div className="w-full px-4 sm:w-1/2 lg:w-2/12">
						<div className="mb-10 w-full">
							<Link to="" className="mb-6 inline-block max-w-[160px]">
								<img src={logo} alt="logo" className="max-w-full" />
							</Link>
						</div>
					</div>
					<div className="w-full px-4 sm:w-1/2 lg:w-2/12">
						<div className="mb-10 w-full">
							<h4 className="text-white mb-9 text-lg font-bold">
								Important Links
							</h4>
							<ul>
								<li>
									<Link
										to="/"
										className="text-white hover:text-primary mb-2 inline-block text-sm leading-loose"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="text-white hover:text-primary mb-2 inline-block text-sm leading-loose"
									>
										Our Services
									</Link>
								</li>
								<li>
									<Link
										to=""
										className="text-white hover:text-primary mb-2 inline-block text-sm leading-loose"
									>
										Privacy & Policies
									</Link>
								</li>
								<li>
									<Link
										href="/"
										className="text-white hover:text-primary mb-2 inline-block text-sm leading-loose"
									>
										Terms and Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="w-full px-4 sm:w-1/2 lg:w-3/12">
						<div className="mb-10 w-full">
							<h4 className="text-white mb-9 text-lg font-semibold">
								Contact Us
							</h4>
							<Link to="" className="text-white text-sm inline-block  mb-3">
								Office Address 450 Lexington Ave, New York, NY 10017 USA
								<br />
							</Link>
							<Link to="" className="text-white text-sm inline-block mb-6">
								(888)123-4587
							</Link>

							<div className="mb-6 flex items-center">
								<Link
									to=""
									className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-white sm:mr-4 lg:mr-3 xl:mr-4"
								>
									<svg
										width="8"
										height="16"
										viewBox="0 0 8 16"
										className="fill-current"
									>
										<path d="M7.43902 6.4H6.19918H5.75639V5.88387V4.28387V3.76774H6.19918H7.12906C7.3726 3.76774 7.57186 3.56129 7.57186 3.25161V0.516129C7.57186 0.232258 7.39474 0 7.12906 0H5.51285C3.76379 0 2.54609 1.44516 2.54609 3.5871V5.83226V6.34839H2.10329H0.597778C0.287819 6.34839 0 6.63226 0 7.04516V8.90323C0 9.26452 0.243539 9.6 0.597778 9.6H2.05902H2.50181V10.1161V15.3032C2.50181 15.6645 2.74535 16 3.09959 16H5.18075C5.31359 16 5.42429 15.9226 5.51285 15.8194C5.60141 15.7161 5.66783 15.5355 5.66783 15.3806V10.1419V9.62581H6.13276H7.12906C7.41688 9.62581 7.63828 9.41935 7.68256 9.10968V9.08387V9.05806L7.99252 7.27742C8.01466 7.09677 7.99252 6.89032 7.85968 6.68387C7.8154 6.55484 7.61614 6.42581 7.43902 6.4Z" />
									</svg>
								</Link>

								<Link
									href="javascript:void(0)"
									className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-white sm:mr-4 lg:mr-3 xl:mr-4"
								>
									<svg
										width="16"
										height="12"
										viewBox="0 0 16 12"
										className="fill-current"
									>
										<path d="M15.6645 1.88018C15.4839 1.13364 14.9419 0.552995 14.2452 0.359447C13.0065 6.59222e-08 8 0 8 0C8 0 2.99355 6.59222e-08 1.75484 0.359447C1.05806 0.552995 0.516129 1.13364 0.335484 1.88018C0 3.23502 0 6 0 6C0 6 0 8.79263 0.335484 10.1198C0.516129 10.8664 1.05806 11.447 1.75484 11.6406C2.99355 12 8 12 8 12C8 12 13.0065 12 14.2452 11.6406C14.9419 11.447 15.4839 10.8664 15.6645 10.1198C16 8.79263 16 6 16 6C16 6 16 3.23502 15.6645 1.88018ZM6.4 8.57143V3.42857L10.5548 6L6.4 8.57143Z" />
									</svg>
								</Link>
								<Link
									href="javascript:void(0)"
									className="text-dark hover:bg-primary hover:border-primary mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E5E5] text-white sm:mr-4 lg:mr-3 xl:mr-4"
								>
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										className="fill-current"
									>
										<path d="M13.0214 0H1.02084C0.453707 0 0 0.451613 0 1.01613V12.9839C0 13.5258 0.453707 14 1.02084 14H12.976C13.5432 14 13.9969 13.5484 13.9969 12.9839V0.993548C14.0422 0.451613 13.5885 0 13.0214 0ZM4.15142 11.9H2.08705V5.23871H4.15142V11.9ZM3.10789 4.3129C2.42733 4.3129 1.90557 3.77097 1.90557 3.11613C1.90557 2.46129 2.45002 1.91935 3.10789 1.91935C3.76577 1.91935 4.31022 2.46129 4.31022 3.11613C4.31022 3.77097 3.81114 4.3129 3.10789 4.3129ZM11.9779 11.9H9.9135V8.67097C9.9135 7.90323 9.89082 6.8871 8.82461 6.8871C7.73571 6.8871 7.57691 7.74516 7.57691 8.60323V11.9H5.51254V5.23871H7.53154V6.16452H7.55423C7.84914 5.62258 8.50701 5.08065 9.52785 5.08065C11.6376 5.08065 12.0232 6.43548 12.0232 8.2871V11.9H11.9779Z" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
