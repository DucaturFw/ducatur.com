import React, { Component } from 'react'
import { Link } from "react-router-dom";

import plus from '../resources/plus.svg'
import star from '../resources/star.svg'
import menu from '../resources/menu.svg'

export default class Step1 extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		if (window.innerWidth > 992) return (
			<section>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ boxShadow: 'none', zIndex: 4, marginRight: '35px', width: this.toVW(480), minWidth: '330px', height: this.toVH(375), overflow: 'auto', position: 'relative', padding: '0' }} className="card">
						<ul className='hoverList'>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>1</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>2</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>3</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={star} alt="" style={{ margin: '0 10px' }} />
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>4</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>5</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={star} alt="" style={{ margin: '0 10px' }} />
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>6</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>7</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>8</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
						</ul>
					</div>
					<div style={{ boxShadow: 'none', zIndex: 4, marginLeft: '35px', width: this.toVW(480), minWidth: '330px', height: this.toVH(375), position: 'relative', padding: '0' }} className="card">
						<ul>
							<li style={{ fontFamily: 'Din Pro Medium', fontSize: '2.25rem', padding: '20px 0', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', textAlign: 'center' }}>Binance</li>
							<li style={{ fontFamily: 'Din Pro Medium', fontSize: '2.25rem', padding: '20px 0', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', textAlign: 'center' }}>Binance</li>
						</ul>
					</div>
				</div>
				<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: this.toVH(30) }}>
					<Link className='button' style={{ marginTop: this.toVH(50) }} to='step2'>
						Continue
					</Link>
				</div>
				<div style={{ marginTop: this.toVH(70), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select the data source</h1>
				</div>
			</section>
		)
		else return (
			<section style={{paddingBottom: '50px'}}>
				<div>
					<div style={{ boxShadow: 'none', zIndex: 4, marginRight: 'auto', marginLeft: 'auto', maxWidth: '480px', height: this.toVH(375), overflow: 'auto', position: 'relative', padding: '0' }} className="card">
						<ul className='hoverList'>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>1</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>2</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>3</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={star} alt="" style={{ margin: '0 10px' }} />
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>4</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>5</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={star} alt="" style={{ margin: '0 10px' }} />
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>6</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>7</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
							<li style={{ cursor: 'pointer', position: 'relative', fontFamily: 'Din Pro Medium', fontSize: '1.5rem', padding: '15px 0 15px 30px', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', display: 'flex', alignItems: 'center' }}>
								<span style={{ userSelect: 'none', position: 'absolute', fontSize: '0.5rem', bottom: '15px', left: '20px' }}>8</span>
								<p>Binance</p>
								<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: '25px', display: 'flex', alignItems: 'center' }}>
									<img src={plus} alt="" style={{ margin: '0 10px' }} />
									<img src={menu} alt="" style={{ margin: '0 10px' }} />
								</div>
							</li>
						</ul>
					</div>
					<div style={{ boxShadow: 'none', zIndex: 4, marginLeft: 'auto', marginRight: 'auto', maxWidth: '480px', height: this.toVH(375), position: 'relative', padding: '0' }} className="card">
						<ul>
							<li style={{ fontFamily: 'Din Pro Medium', fontSize: '2.25rem', padding: '20px 0', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', textAlign: 'center' }}>Binance</li>
							<li style={{ fontFamily: 'Din Pro Medium', fontSize: '2.25rem', padding: '20px 0', borderBottom: '1px solid rgba(253, 88, 66, 0.2)', textAlign: 'center' }}>Binance</li>
						</ul>
					</div>
				</div>
				<div style={{ width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', marginTop: this.toVH(30) }}>
					<Link className='button' style={{ marginTop: this.toVH(50) }} to='step2'>
						Continue
					</Link>
				</div>
				<div style={{ marginTop: this.toVH(70), width: 'fit-content', marginLeft: 'auto', marginRight: 'auto' }} className='action_description'>
					<h1>Select the data source</h1>
				</div>
			</section>
		)
	}
}
