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
            <span style={{color:"yellow", fontSize:30}}>
              <bold>PAUL JOSHUA ESGUERRA</bold>
            </span><br/>
            May 08, 1998 - Feb 14, 2026<br/>
            <br/>
            <span style={{color:"yellow", fontSize:15}}>
A dedicated brother, the unwavering breadwinner of his family, and a guiding light for everyone who crossed his path.
Through his creativity, kindness, and generosity, he left a world brighter than he found it.
            </span><br/>
          </Col>
          
        </Row>
        <br/>
        <div className="aboutme">
           Paul was a dedicated UI/UX and graphic designer with a deep passion for creating experiences that felt both beautiful and meaningful. With a strong eye for detail and a love for thoughtful design, he believed technology should serve people — not the other way around.
          <br/>
          <br/>
His journey began with a fascination for the intersection of art and technology, and from there he never stopped learning, exploring, and building. For Paul, design was never just about aesthetics — it was about solving real problems and shaping the way people connect with the digital world.
Though his time was short, the work he created and the lives he touched continue to speak for him.
        <br/><br/>
Paul was not only a talented designer but also a beloved brother, son, and friend. He will be remembered for his kindness, creativity, and the joy he brought to those around him. His legacy lives on through the work he created and the memories he shared with loved ones.
        </div>

    </section>
    
  );
};

export default AboutMe;
