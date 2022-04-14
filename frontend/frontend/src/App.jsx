import React, { useState, useEffect } from 'react';
import './App.css';
import { Table } from './components/Table';
import { Sidebar } from './components/Sidebar';

const App = () => {
	const [cities, setCities] = useState(null);
	const [countCities, setCountCities] = useState('');
	const [countries, setCountries] = useState(null);
	const [allCities, setAllCities] = useState(null);

	const fetchAllCities = () => {
		fetch('http://localhost:3001/api/cities')
			.then((response) => response.json())
			.then((data) => {
				setCities(data);
				setAllCities(data);
				let newList = [];
				if (data) {
					for (var i = 0; i < data.length; i++) {
						if (newList.indexOf(data[i].country) == -1) {
							newList.push(data[i].country);
						}
					}
				}
				setCountries(newList);
			});
	};

	useEffect(() => {
		fetchAllCities();
	}, []);

	const listCities = (e, country) => {
		e.preventDefault();
		let lst = [];
		if (allCities)
			for (var i = 0; i < allCities?.length; i++) {
				if (allCities[i].country == country) {
					if (lst.filter((a) => a.name == allCities[i].subcountry).length == 0)
						lst.push({ name: allCities[i].subcountry });
				}
			}
		setCountCities({ country, count: ' (' + Object.keys(lst).length + ')' });
		setCities(lst);
	};

	const showAllCities = () => {
		setCities(allCities);
		setCountCities('');
	};

	return (
		<div className='App'>
			<Sidebar
				listCities={listCities}
				countCities={countCities}
				countriesLst={countries}
				showAll={showAllCities}
			/>
			<Table cities={cities} />
		</div>
	);
};

export default App;
