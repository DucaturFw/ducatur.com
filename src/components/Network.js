import React, { Component } from 'react'
import { Link } from "react-router-dom";

import logo from "../resources/Logo.svg";

export default class Network extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		if (window.innerWidth > 992) return (
			<section>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
					<div style={{ zIndex: 4, marginRight: '-15px', width: '390px', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
						<h1>ETHEREUM</h1>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
						<Link className='button' style={{ bottom: 0, display: 'none', position: 'absolute', transform: 'translateY(50%)' }} to='/ethereum'>
							Continue
						</Link>
						<img style={{ position: 'absolute', bottom: 0, right: '45px' }} src={logo} alt="" />
					</div>
					<div style={{ zIndex: 5, width: '390px', height: this.toVH(550), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
						<h1>EOS</h1>
						<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
						<Link className='button' style={{ bottom: 0, display: 'none', position: 'absolute', transform: 'translateY(50%)' }} to='/eos'>
							Continue
						</Link>
						<img style={{ position: 'absolute', bottom: 0, right: '95px' }} src={logo} alt="" />
					</div>
					<div style={{ zIndex: 4, marginLeft: '-15px', width: '390px', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
						<h1>NEO</h1>
						<p>To be announced</p>
						<button style={{ bottom: 0, display: 'none', position: 'absolute', transform: 'translateY(50%)', backgroundColor: '#FFAFA6' }}>Continue</button>
						<img style={{ position: 'absolute', bottom: 0, right: '45px' }} src={logo} alt="" />
					</div>
				</div>
				<div style={{ marginTop: '10vh', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select network for the Oracle contract</h1>
				</div>
			</section>
		)
		else return (
			<section style={{ padding: '50px 0' }}>
				<div style={{ zIndex: 4, marginRight: '-15px', maxWidth: '390px', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
					<h1>ETHEREUM</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
					<Link className='button' style={{ bottom: 0, position: 'absolute', transform: 'translateY(50%)' }} to='/ethereum'>
						Continue
							</Link>
					<img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src={logo} alt="" />
				</div>
				<div style={{ zIndex: 5, maxWidth: '390px', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: this.toVH(550), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
					<h1>EOS</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
					<Link className='button' style={{ bottom: 0, position: 'absolute', transform: 'translateY(50%)' }} to='/eos'>
						Continue
							</Link>
					<img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src={logo} alt="" />
				</div>
				<div style={{ zIndex: 4, marginLeft: '-15px', maxWidth: '390px', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
					<h1>NEO</h1>
					<p>To be announced</p>
					<button style={{ bottom: 0, position: 'absolute', transform: 'translateY(50%)', backgroundColor: '#FFAFA6' }}>Continue</button>
					<img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src={logo} alt="" />
				</div>
				<div style={{ marginTop: '10vh', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select network for the Oracle contract</h1>
				</div>
			</section>
		)
	}
}
