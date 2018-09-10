import { TimelineMax, TweenMax, CSSPlugin, AttrPlugin, Power0 } from "gsap/all";

import ScrollMagic from 'scrollmagic'
import 'animation.gsap'
import 'debug.addIndicators'

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [CSSPlugin, AttrPlugin];

let scrollController = new ScrollMagic.Controller()

let toVH = value => value / 1080 * 100 + 'vh'
let toVW = value => value / 1920 * 100 + 'vw'

export const rotate = target => {
    let rotation = TweenMax.to(target, 1, { rotation: '+=360', ease: Power0.easeNone })
    rotation.repeat(-1)
}

export const toggleSideBar = (target) => {

    new ScrollMagic.Scene({ triggerElement: '#city', duration: 300, offset: -300 })
        .setTween(target, { right: '50px', opacity: 1 })
        .addTo(scrollController)
}

export const showPopup = () => {
    new TimelineMax()
        .fromTo('#small-popup', 0.3, { opacity: 0 }, { opacity: 1 })
        .fromTo('#big-popup', 0.5, { opacity: 0 }, { opacity: 1 })
        .fromTo('#mid-popup', 0.4, { opacity: 0 }, { opacity: 1 }, '-=0.3')
        .fromTo('#text-popup', 0.2, { opacity: 0 }, { opacity: 1 })
}

export const loader = () => {
    new TimelineMax().set('#loader', { display: 'flex' })
        .set('html', { overflowY: 'hidden' })
        .to('#loader h1', 2, { text: "DUCATUR" })
        .to('#loader', 1, { backgroundColor: '#392682' })
        .set(' #figures', { opacity: 1 })
        .to('#loader', 1, { opacity: 0 })
        .to('#main', 1, { opacity: 1 }, '-=1')
        .from('#brand', 0.3, { left: '50%', opacity: 0 }, '-=0.5')
        .from('#title', 0.5, { opacity: 0 })
        .from('#signIn', 0.5, { opacity: 0 }, '-=0.4')
        .add('main')
        .from('#scroll', 0.3, { opacity: 0 })
        .from('#social p', 0.3, { opacity: 0 }, 'main')
        .staggerFrom('#social a', 1, { opacity: 0 }, 0.2)
        .fromTo('#navbar', 0.5, { top: '-200px', opacity: 0 }, { top: '6.2vh', opacity: 1 }, 'main')
        .set('html', { overflowY: 'scroll' })
        .set('#loader', { display: 'none' })

}

export const openMobileNav = target => {
    new TimelineMax().set(target, { display: 'flex', opacity: 0 })
        .set('#open-burger', { display: 'none' })
        .set('#close-burger', { display: 'block' })
        .to(target, 0.3, { opacity: 1 })
        .set('html', { overflowY: 'hidden' })
        
}

export const animateFigures = ref => {
    let headerScene = new TimelineMax()
        .add('start')
        .to(ref[0], 1, { left: '-200px' })
        .to(ref[1], 1, { top: '300px', rotation: '-=20' }, 'start')
        .to(ref[2], 1, { top: '100px' }, 'start')
        .to(ref[3], 1, { top: '0px', left: '-300px', rotation: '+=30' }, 'start')
        .to(ref[4], 1, { top: '200px', left: '-200px' }, 'start')
        .to(ref[5], 1, { top: '50px', right: '-200px' }, 'start')
        .to(ref[6], 1, { top: '0px', right: '-400px', rotation: '-=45' }, 'start')
        .to(ref[7], 1, { top: '0px', right: '-500px' }, 'start')
        .to(ref[8], 1, { left: '-1000px', top: '200vh' }, 'start')
        .to(ref[9], 1, { right: '-1000px' }, 'start')

    let cityScene = new TimelineMax()
        .add('start')
        .from(ref[10], 1, { left: '-600px', top: toVH(2000) })
        .from(ref[11], 1, { right: '-200px', rotation: '-=30' }, 'start')

    let integrationsScene = new TimelineMax().add('start')
        .from(ref[12], 1, { left: '-100px' }, 'start')
        .from(ref[13], 1, { left: '-300px' }, 'start')
        .from(ref[14], 1, { right: '-400px' }, 'start')
        .from(ref[15], 1, { top: toVH(4500) }, 'start')

    let productScene = new TimelineMax().add('start')
        .to(ref[16], 1, { bottom: toVH(1100) }, 'start')
        .to(ref[17], 1, { bottom: toVH(1200) }, 'start')
        .from(ref[18], 1, { right: '-100px' }, 'start')

    let doctrineScene = new TimelineMax().add('start')
        .from(ref[20], 1, { bottom: toVH(400), left: '-50px' }, 'start')
        .from(ref[21], 1, { bottom: toVH(350) }, 'start')
        .from(ref[22], 1, { bottom: toVH(350) }, 'start')
        .from(ref[23], 1, { bottom: 0 }, 'start')

    new ScrollMagic.Scene({ duration: window.innerHeight * 10 })
        .setTween(headerScene)
        .addTo(scrollController)
    new ScrollMagic.Scene({ triggerElement: '#city', offset: window.innerHeight * 0.5, duration: window.innerHeight * 2 })
        .setTween(cityScene)
        .addTo(scrollController)
    new ScrollMagic.Scene({ triggerElement: '#integrations', offset: -window.innerHeight * 0.5, duration: window.innerHeight * 2 })
        .setTween(integrationsScene)
        .addTo(scrollController)
    new ScrollMagic.Scene({ triggerElement: '#product', duration: window.innerHeight * 2 })
        .setTween(productScene)
        .addTo(scrollController)
    new ScrollMagic.Scene({ triggerElement: '#doctrine', offset: -window.innerHeight + document.querySelector('#doctrine').clientHeight, duration: window.innerHeight * 0.5 })
        .setTween(doctrineScene)
        .addTo(scrollController)
}