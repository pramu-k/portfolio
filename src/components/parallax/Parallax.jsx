import { useRef } from 'react';
import './parallax.scss';
import {motion,useScroll,useTransform} from 'framer-motion';

const Parallax = ({type}) => {
    
    const reference = useRef();

    const {scrollYProgress}=useScroll({
        target:reference,
        offset:["start start","end start"]
    })

    const yText=useTransform(scrollYProgress,[0,1],["0%","400%"]);
    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"]);

  return (
    <div className="parallax" ref={reference}>
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
}
export default Parallax