import React from 'react';
import Home from '../components/Home/Home';
import Header from '../components/Layout/Header';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Route/Hero/Hero.jsx'
import Categories from '../components/Route/Categories/Categories'


const HomePage = () => {
	return (
		<div>
			<Header activeHeading={1}/>
			<Hero  />
			<Categories/>
		</div>
	);
};

export default HomePage;
