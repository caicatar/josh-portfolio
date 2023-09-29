import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import cd from "../pic/cd.png"
import cd2 from "../pic/cd2.png"
import cd3 from "../pic/cd3.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BoxGeometry } from 'three';
import cornerblack from '../pic/corner-2.png'; 


const Skills = ({ name }) => {
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
    <section className="container" style={{paddingTop:25}}>
        <Row className="skill_cont"  style={{marginBottom:20}}>
            <h1 className="skills_title">
                EXPERIENCE
            </h1>
            <Row style={{marginBottom:20}}>
                <Col xl={5} lg={5} md={6} s={6} xs={6} style={{paddingLeft:"0px"}}>
                    <h3 style={{fontWeight:800, fontSize:22}}>
                        UI / UX & Graphic Designer
                    </h3>
                    
                </Col>
                <Col xl={7} lg={7} md={6} s={6} xs={6} style={{textAlign:"right"}}>
                    <h4 style={{fontWeight:600}}>
                        Prinax Advertising Company  Feb 2019 – Sep 2023 
                    </h4>
                </Col>
                <h4 style={{fontWeight:600, fontSize:16, padding:0, marginTop:15,}}>
                    My duties include designing the framework of an app or website's user interface, planning how users will interact with it, and collaborating closely with developers and other team members to bring the design to life.

                    Also responsible for creating graphics to make the interface visually appealing and creating interactive models to test and iterate the design before it is fully completed.    
                </h4>
            </Row>
        </Row>

        <Row className="skill_cont">
            <img src={cornerblack} className="skillcorn_1"/>
            <img src={cornerblack} className="skillcorn_2"/>
            <img src={cornerblack} className="skillcorn_3"/>
            <img src={cornerblack} className="skillcorn_4"/>

            <h1 className="skills_title">
                SKILLS & QUALIFICATIONS
            </h1>
            <h3 className="skill_subtxt">
                As a Designer, my skillset is grounded in the seamless fusion of creativity and functionality.
            </h3>
            <Row style={{paddingTop:20,marginBottom:10}}  className=' justify-content-center'>
                <Col lg={4} md={4} s={4} xs={4} className='justify-content-center' >
                    <img src={cd} class="skill_pic"/>
                </Col>
                <Col lg={4} md={4} s={4} xs={4} className='justify-content-center'>
                    <img src={cd2} class="skill_pic"/>
                </Col>
                <Col lg={4} md={4} s={4} xs={4} className='justify-content-center'>
                    <img src={cd3} class="skill_pic"/>
                </Col>
            </Row>
        </Row>
        
        
    </section>
    
  );
};

export default Skills;
