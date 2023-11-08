import { useRef } from "react";
import "./services.scss";
import {animate, motion,useInView} from 'framer-motion';

const variants = {
  initial: {
    x: -500,
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
    

const Services = () => {

    const reference=useRef();

    const isInView=useInView(reference,{margin:"-300px"})

    
  return (
    <motion.div
      className="services"
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
    </motion.div>
  );
}
export default Services

