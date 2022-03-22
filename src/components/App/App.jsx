import React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from '../Home/Home'
import Nav from '../Nav/Nav'
import Login from '../Login/Login'
// import Register from '../register.component';

const App = () => {
	return (
		<div className='App'>
			<Nav />
			<div className='auth-wrapper'>
				<div className='auth-inner'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={Login} />
						{/* <Route exact path="/register" component={Register} /> */}
					</Switch>
				</div>
			</div>
		</div>
	)
}

export default App
