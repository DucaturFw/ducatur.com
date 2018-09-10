import React, { Component } from 'react'

import brand from '../resourses/Logo_Brand.svg';
import signButton from './controls/signButton';

export default class Doctrine extends Component {
    render() {
        return (
            <section id='doctrine' style={{ marginTop: '35vh', display: 'flex', flexWrap: 'wrap', paddingBottom: window.innerWidth > 576 ? '20vh' : null, zIndex: 5, position: 'relative' }}>
                <div style={{ flexBasis: window.innerWidth < 992 ? '100%' : '40%', display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column' }}>
                    <img src={brand} alt="brand" style={{ height: '10vh', padding: '0 5px' }} />
                    <h1 style={{ fontFamily: 'Arame Regular', fontSize: '3rem', textAlign: 'center', textTransform: 'uppercase', width: '100%' }}>doctrine</h1>
                    <div style={{ marginTop: '6.5vh', textAlign: 'center' }}>{signButton()}</div>
                </div>
                <div style={{marginTop: window.innerWidth < 992 ? '20vh' : null, marginLeft: window.innerWidth > 576 ? '10vw' : null, padding: window.innerWidth < 568 ? '5vw' : null, flexBasis: window.innerWidth < 992 ? '100%' : '40%'}}>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>01 -</span>
                        THE CONCEPT OF “TRUSTLESS” INTERACTION S THE BASIS. <br/> WE WANT BRING IT TO THE WORLD. 
                    </p>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>02 -</span>
                        DISTERBUTED SYSTEMS ARE MUCH MORE FAIR THAN THE CENTRALIZED 
                    </p>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>03 -</span>
                        PRACTICE IS THE CONSEQUENCE OG THE THEORY. <br/>
THERE IS ENOUGH THEORY IN THE BLOCKCHAIN SPHERE TO MOVE FORVARD 
                    </p>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>04 -</span>
                        IF BUSINESS WIDELY ACCEPTS THE IDEA, THE WORLD ACCEPTS THE IDEA. 
                    </p>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>05 -</span>
                        BLOCKCHAIN THE SOCIAL TECHNOLOGY. <br/>
THE CODE YOU CAN RELY ON.
                    </p>
                    <p style={{lineHeight: '1.5', fontFamily: 'Din Pro Medium', fontSize: '1.125rem', marginBottom: '2.7vh'}}>
                        <span style={{display: 'block', fontFamily: 'Arame Regular', fontSize: '1.5rem', marginBottom: '1vh'}}>06 -</span>
                        CONNECTIVITY. FLEXIBILITY. CONVENIENCE
                    </p>
                </div>
            </section>
        )
    }
}
