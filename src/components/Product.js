import React, { Component } from 'react'

import ellipse from '../resourses/Ellipse.svg'
import ellipseAlt from '../resourses/Ellipse2.svg'
import { rotate } from '../animations';

let column = (title, description) => <div style={{ flexGrow: 1, flexShrink: 1, flexBasis: window.innerWidth > 992 ? '50%' : '100%', marginTop: '5vh' }}>
    <div style={{
        textAlign: 'center',
        width: '256px',
        height: '256px',
        position: 'relative',
        padding: '50px 53px',
        margin: '0 auto'
    }} >
        <img src={ellipse} alt="ellipse" style={{ transform: `rotate(${Math.random() * 360}deg)`, position: 'absolute', width: '100%', height: '100%', left: '0', top: '0' }} />
        <p style={{ fontFamily: 'Arame Regular', fontSize: '1.125rem', textTransform: 'uppercase' }}>product</p>
        <h2 style={{
            fontFamily: 'Arame Regular',
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginTop: '40px',
            letterSpacing: '3px'
        }}>{title}</h2>
        {/* <p style={{ fontFamily: 'Arame Regular', fontSize: '1.125rem', textTransform: 'uppercase', marginTop: '45px' }}>{number}</p> */}
    </div>
    {description}
</div>

let descriptionStyle = {
    fontFamily: 'Arame Regular',
    fontSize: '1.4rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: '1.5',
    marginTop: '5.6vh'
}

let descriptionLinkStyle = { color: '#FF3923', paddingBottom: '2px', borderBottom: '2px solid #FF3923' }

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
                    alignItems: 'flex-start'
                }}>
                    {column('ORACLE WIZARD',
                        <p style={descriptionStyle}>EOS and ETH oracles <br />
                            for crypto and random data <br />
                            EOS Github: <a style={descriptionLinkStyle} href="https://github.com/DucaturFw/ducor-eos" target='blank'>visit</a> <br />
                            ETH Github: <a style={descriptionLinkStyle} href="https://github.com/DucaturFw/ducor-eth" target='blank'>visit</a> <br />
                            Medium: <a style={descriptionLinkStyle} href="https://medium.com/ducatur/weve-been-preparing-our-oracles-platform-to-work-with-eosio-feel-free-to-test-and-use-it-9cc834d3172f" target='blank'>visit</a>
                        </p>)}
                    {column('Ducatur Court',
                        <p style={descriptionStyle}>
                            Medium: <a style={descriptionLinkStyle} href="https://medium.com/ducatur/law-systems-in-every-country-could-be-compared-to-some-kind-of-software-c093dbe2c1c6" target='blank'>visit</a><br/>
                            Github: <a style={descriptionLinkStyle} href="https://github.com/DucaturFw/ducor-eth" target='blank'>visit</a>
                        </p>)}
                    {column('ColdCrypto',
                        <p style={descriptionStyle}>
                            Github: <a style={descriptionLinkStyle} href="https://github.com/DucaturFw?&q=cold" target='blank'>visit</a> <br />
                            Medium: <a style={descriptionLinkStyle} href="https://medium.com/ducatur/how-many-hacks-have-you-observed-throughout-your-experience-in-crypto-435fb2043d1c" target='blank'>visit</a>
                        </p>)}
                    {column('duXI',
                        <p style={descriptionStyle}>
                            Github: <a style={descriptionLinkStyle} href="Github: https://github.com/DucaturFw&q=duxi" target='blank'>visit</a> <br />
                        </p>)}
                    {column('NEO Product Set',
                        <p style={descriptionStyle}>
                            Medium: <a style={descriptionLinkStyle} href="https://medium.com/ducatur/we-suppose-that-some-or-maybe-most-of-you-have-asked-themselves-these-questions-b084e7696e15" target='blank'>visit</a> <br/>
                            ETH Github: <a style={descriptionLinkStyle} href="https://github.com/neo-project/proposals/pull/71" target='blank'>visit</a>
                        </p>)}

                </div>
            </section>
        )
    }
}
