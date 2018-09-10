import React from 'react'

import facebook from '../../resourses/social_facebook.svg';
import linkedin from '../../resourses/social_in.svg';
import instagram from '../../resourses/social_instagram.svg';
import twitter from '../../resourses/social_twitter.svg';
import youtube from '../../resourses/social_youtube.svg';

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
            }}>Follow us</p>
            <a style={socialIconStyle} target="blank" href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.linkedin.com"><img src={linkedin} alt="in"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.instagram.com"><img src={instagram} alt="instagram"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.youtube.com"><img src={youtube} alt="youtube"/></a>
            <a style={socialIconStyle} target="blank" href="https://www.twitter.com"><img src={twitter} alt="twitter"/></a>
        </div>
    )
}
