import React, { Component } from 'react'

import el_big from '../../resourses/popup/Ellipse big.svg';
import el_mid from '../../resourses/popup/Ellipse mid.svg';
import el_small from '../../resourses/popup/Ellipse small.svg';
import { showPopup } from '../../animations';


export default class PopupDetails extends Component {
    componentDidMount() {
        showPopup()
    }
    componentDidUpdate() {
        showPopup()
    }
    render() {
        return (
            <div style={{
                position: "fixed",
                top: window.innerWidth < 568 ? '20vh' : this.props.yPos - 0.14 * window.innerWidth + 'px',
                left: window.innerWidth < 568 ? '5vw' : this.props.xPos - 0.07 * window.innerWidth + window.innerWidth * 0.247 > window.innerWidth ? this.props.xPos - window.innerWidth * 0.247 + 'px' : this.props.xPos - 0.07 * window.innerWidth + 'px',
                height: window.innerWidth < 568 ? '200px' : '14vw',
                width: window.innerWidth < 568 ? '300px' : '24.7vw',
                zIndex: '10'
            }}>
                <div style={{ position: 'relative', padding: '1.8vw 2.76vw 2vw 3.125vw', width: '100%', height: '100%' }}>
                    <img id='big-popup' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }} src={el_big} alt="el_big" />
                    <div style={{ position: 'relative', zIndex: 3, padding: window.innerWidth < 568 ? '50px 60px 20px 10px' : '2.8vw 2vw 2.7vw 1.7vw', width: '100%', height: '100%' }}>
                        <img id='mid-popup' style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: '-1' }} src={el_mid} alt="el_mid" />
                        <p id='text-popup' style={{ fontFamily: 'Din Pro Medium', fontSize: window.innerWidth < 568 ? '12px' : '1vw', color: 'white', textAlign: 'center', lineHeight: '1.5' }}>{this.props.description}</p>
                    </div>
                    <img id='small-popup' style={{ display: this.props.xPos - 0.07 * window.innerWidth + window.innerWidth * 0.247 > window.innerWidth ? 'none' : 'block', position: 'absolute', bottom: '-1vw', left: window.innerWidth < 568 ? '80px' : '6.5vw', zIndex: 2, transform: 'rotate(-5.68deg)', width: window.innerWidth < 568 ? '60px' : '4.6vw' }} src={el_small} alt="el_small" />
                </div>
            </div>
        )
    }
    
}