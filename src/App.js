import React from 'react';
import {
	Switch,
	Route,
	useHistory
} from 'react-router-dom'
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
	const history = useHistory()

	function handleSubmit() {
		history.push('/checkout')
	}

	function handleBack() {
		history.goBack()
	}
	
	return (
		<Switch>
			<Route exact path="/">
				<Home handleSubmit={handleSubmit}/>
			</Route>
			<Route path="/checkout">
				<Checkout handleBack={handleBack}/>
			</Route>
		</Switch>
	);
}

export default App;
