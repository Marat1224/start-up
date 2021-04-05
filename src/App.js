import './App.css';
import React from "react";
import Menu from './component/Menu'
import Showcase from './component/Showcase'
import Services from './component/Services'
import Designers from './component/Designers'
import Packages from './component/Packages/Packages'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
	return (
		<>
			<Menu />
			<div class="main">
				<h1>Interior Design</h1>
				<Showcase />
				<Services />
				<Designers />
				<Packages />
				<Contact />
				<Footer />
			</div>
		</>
	)
}


export default App;