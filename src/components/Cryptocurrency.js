import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import arrow from '../resources/arrow.svg';
import SideNavigation from './SideNavigation';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Random from './Random';

export default class Cryptocurrency extends Component {

	toVH = value => value / 1080 * 100 + 'vh'
	toVW = value => value / 1920 * 100 + 'vw'

	render() {
		return (
			<div>
				<Link to='/network' style={{ display: 'flex', alignItems: 'center', marginBottom: this.toVH(100), marginTop: this.toVH(65), marginLeft: window.innerWidth < 568 ? 0 : this.toVW(270) }}>
					<img style={{ marginRight: '15px' }} src={arrow} alt="" />
					<p style={{ color: 'white' }}>
						Choose Category
				</p></Link>
				<Route path='/:network/cryptocurrency' render={() => <SideNavigation currentStep={this.props.match.params.stepIndex} />} />


				<Switch>
					<Route path='/:network/random' component={Random} />
					<Route path='/:network/cryptocurrency/step1' component={Step1} />
					<Route path='/:network/cryptocurrency/step2' component={Step2} />
					<Route path='/:network/cryptocurrency/step3' component={Step3} />
				</Switch>
			</div>
		)
	}
}
