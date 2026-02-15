import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BoxGeometry } from "three";

import A1 from "../pic/pf/1a.png";
import A2 from "../pic/pf/1b.png";
import A3 from "../pic/pf/1c.png";
import A4 from "../pic/pf/1d.png";
import B1 from "../pic/pf/2a.png";
import B2 from "../pic/pf/2b.png";
import B3 from "../pic/pf/2c.png";
import C1 from "../pic/pf/3a.png";
import C2 from "../pic/pf/3b.png";
import C3 from "../pic/pf/3d.png";
import C4 from "../pic/pf/3c.png";
import D1 from "../pic/pf/4a.png";
import D2 from "../pic/pf/4b.png";
import D3 from "../pic/pf/4d.png";
import D4 from "../pic/pf/4c.png";
import E1 from "../pic/pf/5a.png";
import E2 from "../pic/pf/5b.png";
import E3 from "../pic/pf/5c.png";
import F1 from "../pic/pf/5d.png";
import F2 from "../pic/pf/6a.png";
import F3 from "../pic/pf/6b.png";
import F4 from "../pic/pf/6c.png";
import G1 from "../pic/pf/6d.png";
import G2 from "../pic/pf/7a.png";
import G3 from "../pic/pf/7b.png";
import H1 from "../pic/pf/7c.png";
import H2 from "../pic/pf/7d.png";
import H3 from "../pic/pf/8a.png";
import IA from "../pic/pf/8b.png";
import J1 from "../pic/pf/8c.png";
import J2 from "../pic/pf/8d.png";
import J3 from "../pic/pf/9a.png";

import xspray from "../pic/yspray.png";

import yspray from "../pic/xspray.png";

const PortFolio = ({ name }) => {
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

  return (
    <section className="pf_container container" style={{ paddingTop: 25 }}>

      <h1 className="pf_title">BEYOND THE PIXELS</h1>
      <h3 className="pf_subtxt">
          His greatest masterpiece was the impact he had on the people around him.
      </h3>

      <img src={xspray} className="spray1"/>
      <img src={yspray} className="spray2"/>


      <Marquee className="marquee_1" speed={40} pauseOnHover={true}>
        <img src={J1} class="pf_pic" />
        <img src={J2} class="pf_pic" />
        <img src={J3} class="pf_pic" />
        <img src={A1} class="pf_pic" />
        <img src={A2} class="pf_pic" />
        <img src={A3} class="pf_pic" />
        <img src={A4} class="pf_pic" />
        <img src={H2} class="pf_pic" />
      </Marquee>
      <Marquee className="marquee_1" speed={40} pauseOnHover={true} direction="right">
        <img src={B1} class="pf_pic" />
        <img src={B2} class="pf_pic" />
        <img src={B3} class="pf_pic" />
        <img src={C1} class="pf_pic" />
        <img src={C2} class="pf_pic" />
        <img src={C3} class="pf_pic" />
        <img src={C4} class="pf_pic" />
        <img src={H1} class="pf_pic" />
      </Marquee>
      <Marquee className="marquee_1" speed={40} pauseOnHover={true}>
        <img src={D1} class="pf_pic" />
        <img src={D2} class="pf_pic" />
        <img src={D3} class="pf_pic" />
        <img src={D4} class="pf_pic" />
        <img src={E1} class="pf_pic" />
        <img src={E2} class="pf_pic" />
        <img src={E3} class="pf_pic" />
        <img src={H3} class="pf_pic" />
      </Marquee>
      <Marquee className="marquee_1" speed={40} pauseOnHover={true} direction="right">
          <img src={F1} class="pf_pic" />
          <img src={F2} class="pf_pic" />
          <img src={F3} class="pf_pic" />
          <img src={F4} class="pf_pic" />
          <img src={G1} class="pf_pic" />
          <img src={G2} class="pf_pic" />
          <img src={G3} class="pf_pic" />
          <img src={IA} class="pf_pic" />
      </Marquee>
      <br />
      <br />
      <br />
      <h1 className="pf_title">HIS FINAL RESTING PLACE</h1>
      <h3 className="pf_subtxt">
          TBA.
      </h3>
      <div style={{display: "flex", justifyContent: "center", marginTop: "40px", marginBottom: "40px", width: "100%"}}>
        <iframe
          width="800"
          height="400"
          style={{ border: 0, borderRadius: "8px", maxWidth: "100%" }}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3384566343706!2d120.94878!3d14.618622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c8f4f4f4f5%3A0x123456!2sBagumbong%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1644567890"
        ></iframe>
      </div>

      
    </section>
  );
};

export default PortFolio;


