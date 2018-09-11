import React, { Component } from 'react'

import mail from '../resourses/icon-mail.svg'
import refresh from '../resourses/icon-refresh.svg'
import time from '../resourses/icon-time.svg'
import signButton from './controls/signButton';

let column = (thumbnail, title, description) => <div style={{ flexBasis: window.innerWidth > 992 ? '33.33%' : '100%', marginTop: window.innerWidth < 992 ? '5vh' : null, padding: '0 2vw' }}>
    <div style={{ textAlign: 'center' }} >
        <img src={thumbnail} alt="time" style={{width: '50px', height: '50px', objectFit: 'contain'}} />
    </div>
    <h2 style={{
        fontFamily: 'Arame Regular',
        fontSize: '0.875rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginTop: '1.8vh',
        letterSpacing: '3px'
    }}>{title}</h2>
    <p style={{
        fontFamily: 'Arame Regular',
        fontSize: '1.125rem',
        textTransform: 'uppercase',
        textAlign: 'center',
        lineHeight: '1.5',
        marginTop: '1vh'
    }}>{description}</p>
</div>

export default class Integrations extends Component {
    render() {
        return (
            <section id="integrations" style={{ marginTop: '25vh', display: 'flex', flexDirection: 'column', marginLeft: 'auto', marginRight: 'auto', width: window.innerWidth < 568 ? '100%' : '70vw'}}>
                <h1 style={{
                    fontFamily: 'Arame Bold',
                    fontSize: '2.625rem',
                    textAlign: 'center'
                }}>Integrations to Boost Your {window.innerWidth > 1200 ? <br /> : null} Workflow</h1>
                <div style={{
                    marginTop: '6vh',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    {column(time, 'Secure', 'Decentralized distributed system is your guarantee in the digital era. We want to provide you with all the needed tools to make yourself or your company more resilient to the impact of the modern world.')}
                    {column(mail, 'Flexible', 'List of the opportunities offered by the blockchain is very limited due to the puberty of the technology. We are opening a new ways for every community member to create and implement decentralization into their lives and businesses.')}
                    {column(refresh, 'Trustless', 'From people to people is a basis of what we are doing. With Ducatur products you can bring a new type of services where users perfectly understand that the data provided belongs to them and they are safe from fraud. Code is the guarantee.')}
                </div>
                <div style={{marginTop: '6.5vh', textAlign: 'center'}}>
                    {signButton()}
                </div>
            </section>
        )
    }
}
