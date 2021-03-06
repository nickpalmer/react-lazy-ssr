/* --------------------
 * react-lazy-ssr module
 * Example
 * Client-side entry point
 * ------------------*/

// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import lazy from 'react-lazy-ssr';

// Imports
import App from './App.jsx';

// Hydrate app
lazy.preloadAll().then(() => {
	ReactDOM.hydrate(
		<App />,
		document.getElementById('app')
	);
});
