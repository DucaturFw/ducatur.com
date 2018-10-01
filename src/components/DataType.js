import React, { Component } from 'react'
import { Link } from "react-router-dom";

import logo from "../resources/Logo.svg";

export default class DataType extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hovered: null
		}
	}


	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		if (window.innerWidth > 992) return (
			<section>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '12vh' }}>
					<div onMouseOver={() => this.setState({ hovered: 1 })} onMouseLeave={() => this.setState({ hovered: null })} style={{ zIndex: 4, marginRight: '-125px', width: '390px', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
						<h1 style={{ left: this.state.hovered === 1 ? null : '15px' }}>CRYPTOCURRENCY</h1>
						<p>Every cryptocurrency trade pair from popular exchanges</p>
						<Link className='button' style={{ bottom: 0, display: 'none', position: 'absolute', transform: 'translateY(50%)' }} to={`/${this.props.match.params.network}/cryptocurrency/step1`}>
							Continue
						</Link>
						<img style={{ position: 'absolute', bottom: 0, right: '45px' }} src={logo} alt="" />
					</div>
					<div onMouseOver={() => this.setState({ hovered: 2 })} onMouseLeave={() => this.setState({ hovered: null })} style={{ zIndex: 4, marginLeft: '-125px', width: '390px', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
						<h1 style={{ right: this.state.hovered === 2 || this.state.hovered === null ? null : '15px' }}>RANDOM</h1>
						<p>Random numeric data oracle</p>
						<Link className='button' style={{ bottom: 0, display: 'none', position: 'absolute', transform: 'translateY(50%)' }} to={`/${this.props.match.params.network}/random`}>
							Continue
						</Link>
						<img style={{ position: 'absolute', bottom: 0, right: '45px' }} src={logo} alt="" />
					</div>
				</div>
				<div style={{ marginTop: '10vh', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select the data type</h1>
				</div>
			</section>
		)
		else return (
			<section style={{ padding: '50px 0' }}>
				<div style={{ zIndex: 4, marginRight: '-15px', maxWidth: '390px', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
					<h1>CRYPTOCURRENCY</h1>
					<p>Every cryptocurrency trade pair from popular exchanges</p>
					<Link className='button' style={{ bottom: 0, position: 'absolute', transform: 'translateY(50%)' }} to={`/${this.props.match.params.network}/cryptocurrency/step1`}>
						Continue
						</Link>
					<img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src={logo} alt="" />
				</div>
				<div style={{ zIndex: 4, marginLeft: '-15px', maxWidth: '390px', marginLeft: 'auto', marginRight: 'auto', width: '100%', height: this.toVH(364), position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="card">
					<h1>RANDOM</h1>
					<p>Random numeric data oracle</p>
					<Link className='button' style={{ bottom: 0, position: 'absolute', transform: 'translateY(50%)' }} to={`/${this.props.match.params.network}/random`}>
						Continue
						</Link>
					<img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} src={logo} alt="" />
				</div>
				<div style={{ marginTop: '10vh', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select the data type</h1>
				</div>
			</section>
		)
	}
}
