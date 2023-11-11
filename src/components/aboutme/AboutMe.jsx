import { useRef } from "react";
import "./aboutMe.scss";
import { motion, useInView } from "framer-motion";

const AboutMe = () => { 

  const containerRef=useRef();

  const isInView = useInView(containerRef);

  const variantsLeft = {
    initial: {
      x:  -300,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const variantsRight = {
    initial: {
      x: -300,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  

  return (
    <motion.div className="container">
      <motion.div
        className="descWrapper"
        variants={variantsLeft}
        ref={containerRef}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="nameWrapper" variants={variantsLeft}>
          <h1>Hey, everyone!</h1>
          <h2>I'm Pramuditha</h2>
        </motion.div>
        <div className="description" variants={variantsLeft}>
          <p>
            "Welcome to my portfolio. I'm a passionate full stack developer with
            a love for turning innovative ideas into functional, beautiful, and
            user-friendly web applications.I'm not just a coder; I'm a problem
            solver. I thrive to create solutions that not only meet, but exceed
            expectations."
          </p>
        </div>
      </motion.div>
      <motion.div
        className="techWrapper"
        variants={variantsLeft}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div
          className="languages"
          variants={variantsLeft}
          whileHover={{ scale: 1.1 }}
        >
          <h1>Languages</h1>
          <ul>
            <li>Java</li>
            <li>Java Script</li>
            <li>Type Script</li>
            <li>HTML</li>
            <li>CSS/SASS</li>
          </ul>
        </motion.div>
        <motion.div
          className="frameworks"
          variants={variantsRight}
          whileHover={{ scale: 1.1 }}
        >
          <h1>Frameworks</h1>
          <ul>
            <li>React</li>
            <li>Angular</li>
            <li>Spring Boot</li>
          </ul>
        </motion.div>
        <motion.div
          className="other"
          variants={variantsRight}
          whileHover={{ scale: 1.1 }}
        >
          <h1>Other</h1>
          <ul>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Git</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default AboutMe;
