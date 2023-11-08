import { useRef } from "react";
import "./aboutMe.scss";
import {animate, motion,useInView} from 'framer-motion';

const variantsLeft = {
  initial: {
    x: -300,
    opacity: 0,
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
    x: 500,
    opacity: 0,
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
    

const AboutMe = () => {

    const reference=useRef();

    //const isInView=useInView(reference,{margin:"-300px"})

    
  return (
    <div className="container">
      <motion.div
        className="descWrapper"
        variants={variantsLeft}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="nameWrapper" variants={variantsLeft}>
          <h1>Hey, everyone!</h1>
          <h2>I'm Pramuditha</h2>
        </motion.div>
        <motion.div className="description" variants={variantsLeft}>
          <p>
            "I'm a passionate full stack developer with a love for turning
            innovative ideas into functional, beautiful, and user-friendly web
            applications.I'm not just a coder; I'm a problem solver. I thrive to
            create solutions that not only meet, but exceed expectations."
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="techWrapper"
        variants={variantsRight}
        initial="initial"
        whileInView="animate"
      >
        <motion.div
          className="languages"
          variants={variantsRight}
          whileHover={{ scale: 1.1 }}
        >
          <h1>Languages</h1>
          <ul>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
            <li>Java</li>
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
    </div>
  );
}
export default AboutMe

{
  /* <motion.div
      className="aboutMe"
      ref={reference}
      variants={variants}
      initial="initial"
      //animate={"animate"}
      //whileInView="animate"
      animate={isInView?"animate":"initial"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./assets/people.webp" alt="people" />
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your </b>Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            accusantium voluptas tempora illo vitae numquam animi possimus quas
            ipsa praesentium voluptatum, officia a atque laboriosam ipsum quia
            qui optio quisquam!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            accusantium voluptas tempora illo vitae numquam animi possimus quas
            ipsa praesentium voluptatum, officia a atque laboriosam ipsum quia
            qui optio quisquam!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            accusantium voluptas tempora illo vitae numquam animi possimus quas
            ipsa praesentium voluptatum, officia a atque laboriosam ipsum quia
            qui optio quisquam!
          </p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            accusantium voluptas tempora illo vitae numquam animi possimus quas
            ipsa praesentium voluptatum, officia a atque laboriosam ipsum quia
            qui optio quisquam!
          </p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div> */
}

