import React, { Component } from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar';
import City from './components/City';
import Integrations from './components/Integrations';
import Product from './components/Product';
import Doctrine from './components/Doctrine';
import SideNavigation from './components/SideNavigation';

import logo from './resourses/Logo.svg'

import { toggleSideBar, animateFigures, loader } from './animations';


const reqJpg = require.context('./resourses/figures', true, /\.png$/)
const paths = reqJpg.keys()
const figures = paths.map(path => reqJpg(path))

class App extends Component {
	constructor(props) {
		super(props)
		this.figuresRef = React.createRef()

		this.state = {
			viewSection: 0
		}
	}

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	componentDidMount() {
		document.querySelector('#figures').style.opacity = window.pageYOffset === 0 ? 0 : 1
		document.querySelector('#navbar').style.opacity = window.pageYOffset === 0 ? 0 : 1
		document.addEventListener('scroll', () => {
			let city = document.querySelector('#city')
			let product = document.querySelector('#product')
			let doctrine = document.querySelector('#doctrine')

			if (window.innerHeight - city.getBoundingClientRect().top - window.innerHeight * 0.3 > 0 && this.state.viewSection !== 0) this.setState({ viewSection: 0 })
			if (window.innerHeight - product.getBoundingClientRect().top - window.innerHeight * 0.3 > 0 && this.state.viewSection !== 1) this.setState({ viewSection: 1 })
			if (window.innerHeight - doctrine.getBoundingClientRect().top - window.innerHeight * 0.3 > 0 && this.state.viewSection !== 2) this.setState({ viewSection: 2 })
		})
		animateFigures(this.figuresRef.current.childNodes)

		toggleSideBar(document.querySelector('#sideNav'))
		window.pageYOffset === 0 ? window.onload = () => loader() : null
	}

	render() {
		return (
			<main style={{ position: 'relative', background: 'linear-gradient(4.4deg, #100640 -1378.52%, #12032B 1464.65%), #FFFFFF' }}>
				<div id='loader' style={{
					display: 'none',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					position: 'fixed',
					fontFamily: 'Arame Bold',
					fontSize: '12vw',
					zIndex: '10'
				}}>
					<img src={logo} alt="logo" style={{maxHeight: '20vw'}}/>
					<h1 style={{ marginLeft: '5vw' }}></h1>
				</div>
				<Navbar items={['Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator', 'Ducator']} />
				<SideNavigation index={this.state.viewSection} />
				<Main />
				<City />
				<Integrations />
				<Product />
				<Doctrine />

				<div id='figures' ref={this.figuresRef} style={{display: window.innerWidth < 992 ? 'none' : 'block'}}>
					<img src={figures[0]} alt="1" style={{ position: 'absolute', top: 0, left: 0, zIndex: '4', width: this.toVW(350), height: this.toVH(390) }} />
					<img src={figures[1]} alt="1" style={{ position: 'absolute', top: 0, left: this.toVW(100), zIndex: '3', width: this.toVW(1290), height: this.toVH(890) }} />
					<img src={figures[2]} alt="1" style={{ position: 'absolute', top: 0, left: this.toVW(700), zIndex: '6', width: this.toVW(893), height: this.toVH(295) }} />
					<img src={figures[3]} alt="1" style={{ position: 'absolute', top: this.toVH(300), left: '0', zIndex: '3', width: this.toVW(660), height: this.toVH(839) }} />
					<img src={figures[4]} alt="1" style={{ position: 'absolute', top: this.toVH(400), left: '0', zIndex: '4', width: this.toVW(544), height: this.toVH(840) }} />
					<img src={figures[5]} alt="1" style={{ position: 'absolute', top: this.toVH(50), right: '0', zIndex: '6', width: this.toVW(1190), height: this.toVH(1246) }} />
					<img src={figures[6]} alt="1" style={{ position: 'absolute', top: this.toVH(250), right: '0', zIndex: '7', width: this.toVW(798), height: this.toVH(985) }} />
					<img src={figures[7]} alt="1" style={{ position: 'absolute', top: this.toVH(600), right: '0', zIndex: '8', width: this.toVW(511), height: this.toVH(546) }} />
					<img src={figures[8]} alt="1" style={{ position: 'absolute', top: this.toVH(1300), left: this.toVW(150), zIndex: '2', width: this.toVW(150), height: this.toVH(88) }} />
					<img src={figures[9]} alt="1" style={{ position: 'absolute', top: this.toVH(1300), right: this.toVW(300), zIndex: '2', width: this.toVW(250), height: this.toVH(182) }} />
					<img src={figures[10]} alt="1" style={{ position: 'absolute', top: this.toVH(2300), left: '0px', zIndex: '2', width: this.toVW(505), height: this.toVH(839) }} />
					<img src={figures[11]} alt="1" style={{ position: 'absolute', top: this.toVH(2500), right: '0px', zIndex: '2', width: this.toVW(526), height: this.toVH(516) }} />
					<img src={figures[12]} alt="1" style={{ position: 'absolute', top: this.toVH(3500), left: this.toVW(150), zIndex: '2', width: this.toVW(139), height: this.toVH(96) }} />
					<img src={figures[13]} alt="1" style={{ position: 'absolute', top: this.toVH(3700), left: '0px', zIndex: '2', width: this.toVW(173), height: this.toVH(952) }} />
					<img src={figures[14]} alt="1" style={{ position: 'absolute', top: this.toVH(3600), right: '0px', zIndex: '2', width: this.toVW(505), height: this.toVH(401) }} />
					<img src={figures[15]} alt="1" style={{ position: 'absolute', top: this.toVH(3950), right: this.toVW(100), zIndex: '2', width: this.toVW(150), height: this.toVH(86) }} />
					<img src={figures[16]} alt="1" style={{ position: 'absolute', bottom: this.toVH(900), left: this.toVW(600), zIndex: '2', width: this.toVW(743), height: this.toVH(290) }} />
					<img src={figures[17]} alt="1" style={{ position: 'absolute', bottom: this.toVH(1130), left: this.toVW(850), zIndex: '2', width: this.toVW(123), height: this.toVH(68) }} />
					<img src={figures[18]} alt="1" style={{ position: 'absolute', bottom: this.toVH(1100), right: '0', zIndex: '2', width: this.toVW(96), height: this.toVH(100) }} />
					<img src={figures[19]} alt="1" style={{ position: 'absolute', bottom: 0, left: '0', zIndex: '2', width: this.toVW(664), height: this.toVH(921) }} />
					<img src={figures[20]} alt="1" style={{ position: 'absolute', bottom: 0, left: '0', zIndex: '4', width: this.toVW(526), height: this.toVH(533) }} />
					<img src={figures[21]} alt="1" style={{ position: 'absolute', bottom: 0, left: '0', zIndex: '3', width: this.toVW(710), height: this.toVH(329) }} />
					<img src={figures[22]} alt="1" style={{ position: 'absolute', bottom: 0, right: '0', zIndex: '3', width: this.toVW(887), height: this.toVH(624) }} />
					<img src={figures[23]} alt="1" style={{ position: 'absolute', bottom: this.toVH(150), right: this.toVW(100), zIndex: '3', width: this.toVW(260), height: this.toVH(152) }} />
				</div>
			</main>
		);
	}
}

export default App;
