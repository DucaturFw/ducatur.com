import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SideNavigation extends Component {

    render() {
        return (
            <nav id="sideNav" style={{ display: window.innerWidth < 992 ? 'none' : 'block', position: 'fixed', top: '50%', right: '0px', transform: 'translateY(-50%)', zIndex: '10', userSelect: 'none', }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                    <Link to='step1' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontFamily: 'Arame Regular', color: 'white', fontSize: this.props.currentStep == 1 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>STEP 01</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                    </Link>
                    <Link to='step2' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontFamily: 'Arame Regular', color: 'white', fontSize: this.props.currentStep == 2 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>STEP 02</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                    </Link>
                    <Link to='step3' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontFamily: 'Arame Regular', color: 'white', fontSize: this.props.currentStep == 3 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>STEP 03</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                    </Link>
                </div>
            </nav>
        )
    }
}
