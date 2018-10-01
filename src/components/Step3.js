import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Step3 extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		return (
			<section style={{ paddingBottom: window.innerWidth < 992 ? '50px' : null }}>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{
						boxShadow: 'none', zIndex: 4, width: this.toVW(500), minWidth: '400px', height: this.toVH(375), position: 'relative', overflow:'auto', padding: '0'
					}} className="card">
						<ul style={{ height: this.toVH(345), overflow: 'auto', marginTop: this.toVH(10), marginRight: '2px', textAlign:' center' }} className='hoverList'>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', margin: `${this.toVH(30)} 0` }}>
								<p style={{ position: 'relative', fontSize: ' 2.25rem' }}>Maximum Value</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', margin: `${this.toVH(30)} 0` }}>
								<p style={{ position: 'relative', fontSize: ' 2.25rem' }}>Average value</p>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', justifyContent: 'center', margin: `${this.toVH(30)} 0` }}>
								<p style={{ position: 'relative', fontSize: ' 2.25rem' }}>Raw value</p>
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
					<h1>Select the data aggregation model</h1>
				</div>
			</section>
		)
	}
}
