import React, { Component } from 'react'
import { Link } from "react-router-dom";

import multiCard from '../resources/multiCard.png'

export default class Step2 extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		return (
			<section style={{paddingBottom: window.innerWidth < 992 ? '50px' : null}}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{
						boxShadow: 'none', zIndex: 4, width: this.toVW(500), minWidth: '400px', height: this.toVH(375), position: 'relative', padding: `5px 65px`, backgroundImage: `url(${multiCard})`, backgroundColor: 'transparent', backgroundSize: 'contain', backgroundPosition
							: 'center', backgroundRepeat: ' no-repeat', 
					}} className="card">
						<ul style={{height: this.toVH(345), overflow: 'auto', marginTop: this.toVH(10), marginRight: '2px'}} className='hoverList'>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>1</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>2</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>3</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>4</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>5</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>6</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>7</span>Binance/Binance</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<p style={{ position: 'relative' }}><span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: 0, left: '-10px' }}>8</span>Binance/Binance</p>
							</li>
						</ul>
					</div>
				</div>
				<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: this.toVH(30) }}>
					<Link className='button' style={{ marginTop: this.toVH(50) }} to='step3'>
						Continue
					</Link>
				</div>
				<div style={{ marginTop: this.toVH(70), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select the request</h1>
				</div>
			</section>
		)
	}
}
