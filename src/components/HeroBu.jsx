import React, { Suspense, useLayoutEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import './landing.css';
import { Canvas, extend,  } from '@react-three/fiber'
import { 
  OrbitControls,  
  Effects, 
  Float,
  Outlines,
  BakeShadows,  
  ContactShadows, 
  Environment, 
  Lightformer, 
  useAspect, 
  useVideoTexture, 
  useTexture,
  Stars,
  ScrollControls,
  Scroll,
  SpotLight,
  SpotLightShadows,
  Sparkles,
  Sky,
  Html
} from "@react-three/drei";

import { 
  Bloom, 
  DepthOfField, 
  EffectComposer, 
  Noise, 
  Vignette,  
  BrightnessContrast,

} from '@react-three/postprocessing'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import url from "../logovid/logovid.mp4";
import gsap from 'gsap';
import { MathUtils, RepeatWrapping } from "three";
import { House2 } from "./House2.tsx";
import { Japanhouse } from "./Japanhouse.tsx";
import { Cloud } from "./Cloud.tsx"
import { Funkopop } from "./Funkopop.tsx"
import AboutMe  from './AboutMe';
import Skills  from './Skills';
import PortFolio  from './PortFolio';
import SocialIcons from './SocialIcons';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import socialsbg from "../pic/SVG/socialsbg.svg"


/**
 * Represents the hero section of the page.
 *
 * @component
 * @param {string} name - The name to be displayed in the hero section.
 */


// function PFHouse() {
//   return (
//     <>
      
      

//       <Box/>
//       <Environment preset="night" />
//     </>
//   );
// }

const Hero = () => {
  const styles = {
    landingImage: {
      // position: "absolute",
      // bottom: "0",
      height: "10%",
    },
    sticker: {
      // position: "absolute",
      // bottom: "0",
      height: "170px",
    },
    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: 1,
      color: "#fff",
      textShadow: "1px 1px 3px #000",
      marginTop:70
    },

    stickerContainer: {
      display: "flex",
      letterSpacing: "20px",
      zIndex: 5,
      position:'relative',
      textShadow: "1px 1px 3px #000",
      justifyContent:"space-around",
      width: "70%",
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:0,
      marginBottom:100
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      // marginTop: "-20px",
      zIndex: 9,
      paddingBottom: "28px",
    },
  };
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   // VERTICAL ANIM
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 2,
  //       y: -
  //     }
  //   )
  // },[]);


  return (
    <>
        <Canvas
          style={{
            width:"100%",
            // background: 'radial-gradient(30.02% 30.02% at 50% 50%, rgba(0, 163, 255, 0.31) 0%, rgba(0, 163, 255, 0.00) 100%)',
            height:"100%",
            position:"absolute",
            right:0,
            // bottom:0,
            overflowY:"hidden",
            padding:0
          }}
        >   
            {/* <color attach="background" args={['#000']} /> */}
            <EffectComposer>
              {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
              <Bloom luminanceThreshold={0} luminanceSmoothing={6} height={200} />
              <Noise opacity={0.02} />
              {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
            </EffectComposer>
            <ambientLight intensity={0.2}/>
            <ScrollControls className="scrollcontrols" pages={5.7} damping={0.25}>
              <Suspense>
                <Float
                  speed={3}
                  rotationIntensity={.2}
                  floatIntensity={0.5}
                  floatingRange={[0, 0.5]} 
                >
                  
                  <House2 scale={1} position={[2, -1.75, 0]} rotation={[ 0, -2.75, 0]}/>
                  {/* <Japanhouse scale={0.4} position={[2, -2.8, 0]} rotation={[ 0, -2.5, 0]}/> */}
                    
                </Float>
              </Suspense>
              <Scroll>
                
                {/* top */} 
                 <Float position={[0, 0, -20]} floatIntensity={50} rotationIntensity={50} speed={0.5}>
                  <mesh position={[-1, -1, 0]}>
                    <pointLight color="cyan" decay={1} intensity={20} />
                    <sphereGeometry args={[0]} />
                    <meshBasicMaterial toneMapped={false} depthTest={false} />
                  </mesh>
                </Float>
                <spotLight position={[-2, 1.5, 0]} color="#E8AB3F" decay={0.1} penumbra={-1} intensity={100} />
                {/* <spotLight position={[-2.5, -11, 0]} color="red" decay={0.1} penumbra={-1} intensity={100} /> */}
                <Suspense fallback={null}>
                  <Cloud material="meshLambertMaterial" position={[0, -3, -0.8]} />
                  <Cloud material="meshLambertMaterial" position={[-2, -11, 1]} />
                  <Float
                    speed={2}
                    rotationIntensity={0.1}
                    floatIntensity={0.5}
                    floatingRange={[0, 0.5]} 
                  >
                    
                    <Funkopop 
                    scale={0.3} 
                    position={[-0.75, -8.5, 2]} 
                    rotation={[ 0.2, 0.5, 0.1]}/>
                      
                  </Float>

                </Suspense>
                {/* <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#fff"} opacity={10} scale={[20,100,20]}></Sparkles> */}
                <Stars radius={100} depth={50} count={3000} factor={1} saturation={0} fade speed={1}/>
              </Scroll>

              <Scroll html style={{width: '100%'}}>
                  <Row className='align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '100vh', paddingRight:0, paddingLeft:0}}>
                    <Col 
                    md={12} xs={12}
                    >
                      <div className='container'>
                        <Col md={6} s={7} xs={8} style={{marginTop:"-50px"}}>
                                <motion.div
                                  initial={{ y: 200, opacity: 0,}}
                                  animate={inView ? { y: 0, opacity: 1, } : {  y: 0, opacity: 1 }}
                                  transition={{ duration:0.3, delay: 0.25, ease: "easeInOut" }}
                                >
                                <div className='landing-icon'/>
                                </motion.div>
                                <motion.div
                                  initial={{ y: 200, opacity: 0,}}
                                  animate={inView ? { y: 0, opacity: 1, } : {  y: 0, opacity: 1 }}
                                  transition={{ duration:0.3, delay: 0.5, ease: "easeInOut" }}
                                >
                                  <h1 className='landingtxt-3'>
                                    HELLO
                                  </h1>
                                  <h1 className='landingtxt-3' style={{float:"right"}}>
                                    THERE
                                  </h1>
                                </motion.div>
                              <motion.div
                                initial={{ y: 0, opacity: 0,}}
                                animate={inView ? { y: 300, opacity: 1, } : {  y: 250, opacity: 1 }}
                                transition={{ duration:0.5, delay: 0.75, ease: "easeInOut" }}
                              >
                                <Row className='landing_aboutme' data-scroll data-scroll-speed={2}>
                                  
                                    <h1 className='landingtxt-1'>
                                      I'M PAUL JOSHUA ESGUERRA<br/>
                                      A VISUAL DESIGNER SPECIALIZING IN<br/>
                                      UI / UX & GRAPHIC DESIGN
                                    </h1>
                                  
                                </Row>
                              </motion.div>
                        </Col>
                      </div>
                    </Col>
                    

                  </Row>     
                  <Row className='align-items-center' style={{position: 'absolute',width: '100%',height: '50vh', top: '100vh'}}>
                    <Col md={12} xs={12}
                      className='row-page'
                    >
                      <div className='container'>
                        <Col xl={6} lg={7} md={8} s={8} xs={10} className='aboutme_div'>
                          <AboutMe/>
                          <SocialIcons />         
                        </Col>
                      </div>
                    </Col>
                  </Row>
                  <Row className='justify-content-center' style={{position: 'absolute',width: '100%',height: '350vh', top: '200vh'}}>
                    <div className='skill_top'/>
                    <Col md={12} xs={12}
                      className='row-page'
                      style={{
                       position:"relative"
                      }}
                    >
                      <div className='skills_div'>
                        <Skills/>
                        <div className='skill_bottom'/>
                      </div>
                      <div className='pf_div'>
                        <PortFolio/>
                      </div>
                    </Col>
                  </Row>  
                  <Row className='align-items-center justify-content-center' style={{position: 'absolute',width: '100%',height: '50vh', top: '520vh'}}>
                      <div className='contact_div'>
                        <div className='contact_top'/>
                        <Row className="contact_cont">
                          <h1 className="contact_title">
                              CONTACT INFO
                          </h1>
                          <h3 className="contact_subtxt">
                            Let's connect and build someting awesome together!
                          </h3>
                          <Row  className='contact_inner'>
                              <Col lg={6} md={6} s={12} xs={12} style={{marginBottom:10}}>
                                <div className='contact_details'>
                                  <span style={{fontSize:16}}>Contact Number</span> 
                                    <br/>
                                  +63 927 910 4900
                                </div>
                              </Col>
                              <Col lg={6} md={6} s={12} xs={12} style={{marginBottom:10}}>                         
                                <div className='contact_details'>
                                  <span style={{fontSize:16}}>Email</span> 
                                <br/>
                                esgjosh08@gmail.com
                                </div>
                              </Col>
                          </Row>
                          <Row className='align-items-center justify-content-center' >
                            <div
                              className='socialfooter'
                            >
                              <SocialIcons
                                style={{
                                  // position:"absolute",
                                  // bottom:"0px",
                                }}
                              />
                            </div>
                          </Row>

                        </Row>
                      </div>
                  </Row>       
              </Scroll>
            </ScrollControls>
        </Canvas>
        {/* <div className='skills_div'>
                        <Skills  style={{marginTop:"200vh"}}/>
        </div>
        <Skills style={{marginTop:"400vh"}}/> */}


      
    </>
    
  );
};

export default Hero;
