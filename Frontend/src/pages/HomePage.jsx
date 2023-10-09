import React from 'react';
import Home from '../components/Home/Home';
import Header from '../components/Layout/Header';
import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Route/Hero/Hero.jsx'
import Categories from '../components/Route/Categories/Categories'
import BestDeals from '../components/Route/Categories/BestDeals'
import FeaturedProduct from '../components/Route/Categories/FeaturedProducts'
import Events from '../components/Events/Events.jsx'
import Sponsored from '../components/Route/Sponsored/Sponsored'
import Footer from '../components/Layout/Footer';

const HomePage = () => {
	return (
		<div>
			<Header activeHeading={1}/>
			<Hero  />
			<Categories/>
			<BestDeals/>
			<Events/>
			<FeaturedProduct/>
			<Sponsored/>
			<Footer/>
		</div>
	);
};

export default HomePage;
