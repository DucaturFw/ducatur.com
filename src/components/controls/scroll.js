import React from 'react'

export default () => {
    return (
        <button id='scroll' onClick={() => document.querySelector('#city').scrollIntoView()} style={{
            transform: 'rotate(90deg)',
            position: 'absolute',
            right: window.innerHeight > 992 ? '6.25vw' : '0',
            top: window.innerHeight > 992 ? '85vh' : '75vh',
            zIndex: '9',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            color: 'white',
            outline: 'none',
            userSelect: 'none'
        }}>
            <hr style={{
                border: '1px solid white',
                width: '7.5vh',
                marginRight: '1.85vh'
            }} />
            <p style={{
                fontFamily: 'Din Pro Medium'
            }}>SCROLL</p>
        </button>
    )
}
