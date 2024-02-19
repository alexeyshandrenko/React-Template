import React, { createElement } from 'react';
import logo from './logo.svg';
import './App.css';

// Здесь представлен императивный подход, так как мы вызываем конкретную инструкцию методов, для возврата react-элементов

function App() {
	return React.createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement(
				'p',
				{},
				'Edit ',
				createElement('code', {}, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', {}, new Date().getFullYear()),
		),
	);
}

export default App;
