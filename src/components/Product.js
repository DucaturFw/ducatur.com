import React, { Component } from 'react'

import ellipse from '../resourses/Ellipse.svg'
import ellipseAlt from '../resourses/Ellipse2.svg'
import { rotate } from '../animations';

let column = (title, category, number, description) => <div style={{ flexBasis: window.innerWidth > 992 ? '33.33%' : '100%', marginTop: window.innerWidth < 992 ? '5vh' : null }}>
    <div style={{
        textAlign: 'center',
        width: '256px',
        height: '256px',
        position: 'relative',
        padding: '50px 53px',
        margin: '0 auto'
    }} >
        <img src={number === '100%' ? ellipseAlt : ellipse} alt="ellipse" style={{ transform: `rotate(${Math.random()*360}deg)`, position: 'absolute', width: '100%', height: '100%', left: '0', top: '0' }} />
        <p style={{ fontFamily: 'Arame Regular', fontSize: '1.125rem', textTransform: 'uppercase' }}>{category}</p>
        <h2 style={{
            fontFamily: 'Arame Regular',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginTop: '40px',
            letterSpacing: '3px'
        }}>{title}</h2>
        <p style={{ fontFamily: 'Arame Regular', fontSize: '1.125rem', textTransform: 'uppercase', marginTop: '45px' }}>{number}</p>
    </div>
    <p style={{
        fontFamily: 'Arame Regular',
        fontSize: '1.4rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '1.5',
        marginTop: '5.6vh'
    }}>{description}</p>
</div>

export default class Product extends Component {

    componentDidMount() {
        document.querySelectorAll('#product img').forEach(elem => rotate(elem))
    }
    render() {
        return (
            <section id='product' style={{ position: 'relative', zIndex: '5', marginTop: '35vh', display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', width: window.innerWidth < 568 ? '100%' : '70vw' }}>
                <h1 ref={this.rotateBorderRef} style={{
                    fontFamily: 'Arame Bold',
                    fontSize: '2.625rem',
                    textAlign: 'center'
                }}>DUCATUR PRODUCT FLOW</h1>
                <div style={{
                    marginTop: '6vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end'
                }}>
                    {column('EOS ORACLES', 'product', '13%', 'THE EOS ORACLES FOR THE CRYPTO PRICESWRAPPED IN WEB-UI')}
                    {column('EOS ORACLES', 'product', '13%', 'THE EOS ORACLES FOR THE CRYPTO PRICESWRAPPED IN WEB-UI')}
                    {column('EOS ORACLES', 'product', '100%', 'THE EOS ORACLES FOR THE CRYPTO PRICESWRAPPED IN WEB-UI')}
                </div>
            </section>
        )
    }
}
