import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import brand from './resources/Logo_Brand.svg';
import Network from './components/Network';
import Results from './components/Results';
import DataType from './components/DataType';
import Cryptocurrency from './components/Cryptocurrency';

const reqJpg = require.context('./resources/figures', true, /\.svg$/)
const paths = reqJpg.keys()
const figures = paths.map(path => reqJpg(path))

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			load: false
		}
	}

	componentDidMount() {
		setTimeout(() => this.setState({ load: true }), 1000)
	}

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		return (
			<Router>
				<div style={{ position: "relative", zIndex: 0, padding: '0 5px' }}>
					<img style={{ position: 'absolute', top: window.innerWidth < 1200 ? 'calc(-10vh + 20px)' :'20px', left: window.innerWidth < 1440 ? '2vw' : '10vw', zIndex: 10, width: '60vw', maxWidth: '348px' }} src={brand} alt="" />

					<div style={{ position: 'relative', marginTop: window.innerWidth < 1200 ? '10vh' : 0, zIndex: 9 }}>
						<h2 style={{ position: 'absolute', top: '50%', left: 0, width: '100%', color: 'white', textTransform: 'uppercase', textAlign: 'center', userSelect: 'none', fontSize: '1.875rem', transform: 'translateY(-50%)' }}>Oracles Marketplace</h2>
						<h2 style={{ opacity: window.innerWidth < 568 ? 0 : null, color: 'rgba(255, 255, 255, 0.05)', fontSize: '6.875rem', textAlign: 'center', textTransform: 'uppercase', userSelect: 'none', lineHeight: 1.3 }}>ORACLES</h2>
					</div>

					<main>
						<Switch>
							<Route exact path='/' render={() => (<Redirect to='/network' />)} />
	
							<Route exact path='/network' component={Network} />

							<Route exact path='/:network' component={DataType} />
							<Route path='/:network/cryptocurrency/step:stepIndex' component={Cryptocurrency} />
							
							<Route path='/:network/random' component={Cryptocurrency} />
							<Route path='/:network/cryptocurrency' component={Cryptocurrency} />
	
						</Switch>
					</main>

					<div id="figures">
						<img src={figures[0]} alt="" style={{ width: window.innerWidth < 568 ? '65vw' : null, position: 'fixed', zIndex: 2, bottom: 0, left: 0 }} />
						<img src={figures[1]} alt="" style={{ width: window.innerWidth < 568 ? '65vw' : null, position: 'fixed', zIndex: 3, bottom: 0, left: 0 }} />
						<div style={{ display: window.innerWidth < 1024 ? 'none' : 'block', position: 'fixed', zIndex: 2, left: '50vw', bottom: 0, width: this.toVW(840), height: '150px', transform: 'translateX(-50%)' }}>
							<div style={{ position: 'relative', height: '100%' }}>
								<img src={figures[2]} alt="" style={{ position: 'absolute', zIndex: 2, bottom: 0, left: 0 }} />
								<img src={figures[3]} alt="" style={{ display: window.innerHeight < 860 ? 'none' : null, position: 'absolute', zIndex: 3, bottom: '3vw', left: '16vw', width: '7vw' }} />
							</div>
						</div>
						<div style={{ position: 'fixed', zIndex: 2, right: 0, top: 0, width: '900px', height: '150px' }}>
							<div style={{ position: 'relative', height: '100%' }}>
								<img src={figures[4]} alt="" style={{ position: 'absolute', zIndex: 2, bottom: '-245px', right: 0 }} />
								<img src={figures[5]} alt="" style={{ position: 'absolute', zIndex: 3, top: '30px', right: '10px', display: window.innerWidth < 568 ? 'none' : 'block', transform: 'scale(0.9)' }} />
							</div>
						</div>
						<img src={figures[6]} alt="" style={{ position: 'fixed', zIndex: 2, bottom: 0, right: 0, width: window.innerWidth < 568 ? '35vw' : null }} />

					</div>
				</div>
			</Router>
		);
	}
}

export default App;
