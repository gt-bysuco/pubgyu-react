import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Scroll() {
    console.log('scroll init!!!!!!!');
    // lenis scroll setting
    const lenis = new Lenis({ lerp: 0.1, })
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
}