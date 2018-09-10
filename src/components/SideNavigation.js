import React, { Component } from 'react'

export default class SideNavigation extends Component {

    render() {
        return (
            <nav id="sideNav" style={{ display: window.innerWidth < 568 ? 'none' : 'block', position: 'fixed', top: '50%', opacity: 0, right: '0px', transform: 'translateY(-50%)', zIndex: '10', userSelect: 'none', }}>
                <div style={{
                    fontFamily: 'Arame Regular',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end'
                }}>
                    <div onClick={() => document.querySelector('#city').scrollIntoView()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                        <p style={{ fontSize: this.props.index === 0 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>CITY</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 0 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>01</p>
                    </div>
                    <div onClick={() => document.querySelector('#product').scrollIntoView()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontSize: this.props.index === 1 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>PRODUCT FLOW</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 1 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>02</p>
                    </div>
                    <div onClick={() => document.querySelector('#doctrine').scrollIntoView()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', marginTop: '9vh' }}>
                        <p style={{ fontSize: this.props.index === 2 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>DOCTRINE</p>
                        <hr style={{ width: '50px', border: '1px solid white', margin: '0 20px' }} />
                        <p style={{ fontSize: this.props.index === 2 ? '1.5rem' : '0.875rem', transition: 'font-size 0.3s' }}>03</p>
                    </div>
                </div>
            </nav>
        )
    }
}
