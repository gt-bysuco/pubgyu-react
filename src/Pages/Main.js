import { useRef, useEffect } from 'react'
import {Scroll,_lenis} from '@/Script/Scroll.js';
import Aniscroll from '@/Script/AniScroll.js';
import ThreeMotion from '@/Script/ThreeInit.js';
import ShortsVideo from '@/Components/ShortsVideo.js';
import Nav from '@/Components/Nav';
import { motion } from "framer-motion"
import ScrollBar from '@/Components/ScrollBar';

Scroll();

function Main() {
    // ref
    const threeCanvasRef = useRef();
    const threeDomRef = useRef();
    setTimeout(() => { _lenis.scrollTo(0); },100)
    useEffect(() => {
        (!ThreeMotion.setting.scene) ? ThreeMotion.init() : ThreeMotion.remove();
        ThreeMotion.draw(threeCanvasRef);

        const refSection = threeDomRef.current.children;
        for(let i=0;i<refSection.length;i++) {
            if (refSection[i].tagName === 'SECTION')
            Aniscroll(refSection[i]);
        }

        window.addEventListener('resize', ThreeMotion.resize);
        return ()=>{
            window.removeEventListener('resize', ThreeMotion.resize);
        }
    },[]);

    return (
        <>
        <motion.section 
            initial={{ opacity: 0,y : -100}}
            animate={{ opacity: 1,y : 0}}
            exit={{ opacity: 0,y : -100}}
            transition={{
                duration: 0.8,
                delay: 0.8,
            }} id="threeDom" ref={threeDomRef}>
            <h1 className="hideTxt">PORTFOLIO by pubgyu</h1>
            <Nav />

            <section id="opening" className="contents visible">
                <article className="con">
                    <h2 className="menuTitle">Hi !</h2>
                    <strong className="hideTxt">Hello!</strong>
                    <strong className="openTxt" aria-hidden="true"></strong>
                    <span className="scrollInfo">
                        Scroll Down !
                        <i className="arrow">arrow</i>
                    </span>
                </article>
            </section>

            <section id="hello" className="contents">
                <article className="con">
                    <h2 className="menuTitle">hello</h2>

                    <div className="sectionTitle title1">
                        <strong>
                            <i className="pointTxt">I'm creating{"\n"}</i>
                            <i>a fun and{"\n"}</i>
                            <i>exciting site.</i>
                        </strong>
                    </div>
                    <div className="sectionTitle title2">
                        <strong>
                            <i>Nice to{"\n"}</i>
                            <i>meet you{"\n"}</i>
                            <i className="pointTxt">It's pubgyu{"\n"}</i>
                        </strong>
                    </div>
                </article>
            </section>

            <section id="introduce" className="contents">
                <article className="con">
                    <h2 className="menuTitle">introduce</h2>
                    
                    <div className="aboutWrap">
                        <span className="imgWrap">
                            <img src="/images/pubgyu.png" alt="pubgyu" />
                        </span>
                        <div className="descWrap">
                            <strong className="name">PubGyu</strong>
                            <div className="txtWrap">
                                <p className="txt">......</p>
                                <p className="txt">
                                    논리적 사고로 구조를 세우고{"\n"}
                                    사용자의 시선을 매료할 모션을{"\n"}
                                    브라우저에 표현하는 박규태입니다.{"\n"}
                                </p>
                                <p className="txt">
                                    다양한 모션을 하는 것을 좋아하지만{"\n"}
                                    프론트 혹은 다양한 기술에 대해{"\n"}
                                    관심도 많고 공부하고 있습니다.{"\n"}
                                </p>
                                <p className="txt">
                                    아직 우물 안 개구리라고 생각을 하며{"\n"}
                                    이 생각을 깨뜨리기 위해 계속 배워나가는 중입니다.{"\n"}
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            <section id="shorts" className="contents">
                <article className="con center">
                    <h2 className="menuTitle">work</h2>

                    <ShortsVideo />
                </article>
            </section>
            
            <section id="contact" className="contents">
                <article className="con">
                    <h2 className="menuTitle">contact</h2>
                    <div className="emailTxt">
                        <strong>pubgyu@{"\n"}gmail.com</strong>
                        <p>
                            재밌는 것을 하길 원한다면 언제든지 연락 주세요!{"\n"}
                            함께 멋진 프로젝트를 만들어 가겠습니다!
                        </p>
                        <a href="mailto:pubgyu@gmail.com" className="pBtn bk" target="_blank">메일 보내기</a>
                    </div>
                </article>
            </section>

            <div className="threeWrap" ref={threeCanvasRef}></div>
        </motion.section>
        <ScrollBar />
        </>
	);
}

export default Main;