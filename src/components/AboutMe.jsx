import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Canvas, extend,  } from '@react-three/fiber'
import { 
  OrbitControls,  
  Effects, 
  Float,
  Outlines,
  BakeShadows,  
  ContactShadows, 
  Cloud, 
  Environment, 
  Lightformer, 
  useAspect, 
  useVideoTexture, 
  useTexture,
  Stars,
  ScrollControls,
  Scroll
} from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette,  BrightnessContrast } from '@react-three/postprocessing'
import { BoxGeometry } from 'three';
import { Funkopop } from "./Funkopop.tsx";

import mypic from '../pic/mypic.png'; 




/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

function Funko() {
  return (
    <>
      <ambientLight intensity={1}/>
      <pointLight intensity={100} color="#34198c" position={[5, -2, 0]}/>
      <pointLight intensity={100} color="pink" position={[-5, -2, 0]}/>
      {/* <hemisphereLight intensity={0.5} color="#194fff" groundColor="#0028ad" /> */}
      <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.5]} 
      >

        <Funkopop scale={1.5} position={[0, -2.7, 0]} rotation={[ 0, 0, 0]}/>
      </Float>
    </>
  );
}


const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
      
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
        {/* <Row className="aboutme_title">
          ABOUT ME
        </Row>
        <br/> */}
        <Row style={{height:220}}>
          <Col xl={4} lg={4} md={5} xs={5}>
            <img src={mypic} className="mypic"/>
          </Col>
          <Col xl={8} lg={8} md={7} xs={7} className="aboutme_txt" >
          <br/>
            <span style={{color:"yellow", fontSize:12}}>
              Name
            </span><br/>
            PAUL JOSHUA ESGUERRA
            <br/><br/>

            <span style={{color:"yellow", fontSize:12}}>
              Date of Birth
            </span><br/>
            May 08, 1998
            <br/><br/>

            <span style={{color:"yellow", fontSize:12}}>
              Location
            </span><br/>
            Bagumbong, Caloocan City

          </Col>
          
        </Row>
        <br/>
        <div className="aboutme">
          Hi! I'm a dedicated UI/UX and Graphic designer with a passion for creating visually appealing and user-friendly digital experiences. With a background in design and a keen eye for detail.
          <br/>
          <br/>
          My journey as a designer began several years ago when I discovered my fascination with the intersection of art and technology. Since then, I've been on a relentless quest to learn and grow in this ever-evolving field. I believe that good design is not just about aesthetics; it's about solving real-world problems and enhancing the way people interact with technology.
        </div>

    </section>
    
  );
};

export default AboutMe;
