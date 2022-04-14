import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ countriesLst, countCities, listCities, showAll }) => {
	const style = {
		backgroundColor: '#536dfe',
		color: 'white',
		padding: '5px, 15px',
	};

	return (
		<div id='sidebar'>
			<h2>Cities App</h2>
			<div
				onClick={(e) => {
					showAll();
				}}>
				<button>Show all Countries</button>
			</div>
			<div>
				<p>List Country by Cities</p>
				<ul
					style={{
						color: 'black',
						listStyleType: 'none',
						padding: '10px 25px',
						margin: '5px',
					}}>
					{countriesLst?.map((country, i) => (
						<li
							style={
								countCities.count != '' && countCities.country == country
									? style
									: null
							}
							key={i}
							onClick={(e) => listCities(e, country)}>
							{country}{' '}
							{countCities.count != '' && countCities.country == country
								? countCities.count
								: null}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
