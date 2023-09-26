import React from 'react';
import Home from '../components/Home/Home';
import Header from '../components/Layout/Header';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Route/Hero/Hero.jsx'

const HomePage = () => {
	return (
		<div>
			<Header activeHeading={1}/>
			<Hero  />
		</div>
	);
};

export default HomePage;
