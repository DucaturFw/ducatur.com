import React from 'react'

import facebook from '../../resourses/social_facebook.svg';
import twitter from '../../resourses/social_twitter.svg';
import github from '../../resourses/social_github.svg';
import medium from '../../resourses/social_medium.svg';
import telegram from '../../resourses/social_telegram.svg';

let socialIconStyle = {
    margin: '0 0.5em',
    userSelect: 'none'
}

export default () => {
    return (
        <div id='social' style={{
            display: 'flex',
            alignItems: 'flex-end'
        }}>
            <p style={{
                fontFamily: 'Din Pro Medium',
                fontSize: '1.25rem',
                marginRight: '1vw'
            }}>Something to read</p>
            <a style={socialIconStyle} target="blank" href="https://www.github.com"><img src={github} alt="github"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.twitter.com"><img src={twitter} alt="twitter"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.medium.com"><img src={medium} alt="medium"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.telegram.com"><img src={telegram} alt="telegram"/></a>
        </div>
    )
}
