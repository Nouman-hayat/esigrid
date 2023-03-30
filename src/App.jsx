import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero";
import Nav from "./components/Nav";
import Roadmapsect from "./components/roadmapsect";
import Leadtext from './components/leadtext';
import Roadmapsectleftimg from './components/roadmapsectleftimg';
import Footer from './components/footer';
import CtaEnd from "./components/Cta_end";

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<Hero></Hero>
			<Leadtext></Leadtext>
			<Roadmapsect id={1}></Roadmapsect>
			<Roadmapsectleftimg id={2}></Roadmapsectleftimg>
			<Roadmapsect id={3}></Roadmapsect>
			<Roadmapsectleftimg id={4}></Roadmapsectleftimg>
			<Roadmapsect id={5}></Roadmapsect>
			<Roadmapsectleftimg id={6}></Roadmapsectleftimg>
<CtaEnd></CtaEnd>
			<Footer></Footer>
		
			{/* <Routes>
				<Route path="/" element={<Home></Home>}></Route>
			</Routes> */}
		</BrowserRouter>
	);
}

export default App;
