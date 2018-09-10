import React, { Component } from 'react'
import { openMobileNav } from '../animations';

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hovered: null,
            drawing: false,
        }
    }

    handleMobileNavOpen = () => {
        openMobileNav(document.querySelector('#mobileNav'))
    }
    handleMobileNavClose = () => {
        document.querySelector('#mobileNav').style.display = 'none';
        document.querySelector('html').style.overflowY = 'scroll'
        document.querySelector('#open-burger').style.display = 'block';
        document.querySelector('#close-burger').style.display = 'none';
    }

    render() {
        switch (window.innerWidth < 568) {
            case true:
                return (
                    <div id="navbar" >
                        <svg id='open-burger' style={{ position: 'fixed', right: '5vw', top: '6.25vh', zIndex: '10' }} onClick={() => this.handleMobileNavOpen()} width='25' height='25'>
                            <line y1='1' y2='1' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                            <line y1='13' x2='25' y2='13' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                            <line y1='24' y2='24' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                        </svg>
                        <div id='mobileNav' style={{
                            display: 'none',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'fixed',
                            zIndex: '99',
                            width: '100%',
                            height: '100%',
                            left: 0,
                            top: 0,
                            backgroundColor: 'rgba(255, 57, 35, 0.9)',
                        }} onClick={() => this.handleMobileNavClose()}>
                            <svg id='close-burger' style={{ position: 'fixed', right: '5vw', top: '6.25vh', zIndex: '10' }} onClick={() => this.handleMobileNavClose()} width='25' height='25'>
                                <line y1='1' y2='24' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                                <line y1='24' y2='1' x2='25' style={{ stroke: 'rgb(255,255,255)', strokeWidth: 2 }} />
                            </svg>
                            <ul>
                                {this.props.items.map((item, index) => <li onMouseEnter={() => this.setState({ hovered: index })} onMouseLeave={() => this.setState({ hovered: null })} key={index} style={{
                                    padding: '2.3vh 1.5vw',
                                    margin: '0 1vw',
                                    fontFamily: 'Arame Bold',
                                    textTransform: 'uppercase',
                                    cursor: "pointer",
                                }}>
                                    {item}
                                </li>)}
                            </ul>
                        </div>
                    </div>
                )

            case false:
                return (
                    <header id='navbar' style={{
                        position: 'fixed',
                        top: '6.2vh',
                        right: '8.3vw',
                        background: 'transparent',
                        zIndex: '10',
                        userSelect: 'none'
                    }}>
                        <ul style={{
                            display: 'flex',
                            width: '100vw',
                            justifyContent: 'flex-end',
                        }}>
                            {this.props.items.map((item, index) => <li onMouseEnter={() => this.setState({ hovered: index })} onMouseLeave={() => this.setState({ hovered: null })} key={index} style={{
                                padding: '2.3vh 1.5vw',
                                margin: '0 1vw',
                                fontFamily: 'Arame Bold',
                                textTransform: 'uppercase',
                                borderRadius: '35px',
                                backgroundColor: index === this.state.hovered ? '#FF3923' : null,
                                cursor: "pointer",
                                transition: 'background-color 0.3s'
                            }}>
                                {item}
                            </li>)}
                        </ul>
                    </header>
                )

            default:
                return null
        }
    }
}
