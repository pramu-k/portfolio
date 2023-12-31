import "./hero.scss";
import profilePic from "../../../public/Profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
    const textVariants={
        initial:{
            x:-300
        },
        animate:{
            x:0,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        }
    }

  return (
    <div className="hero">
      <div className="image-container">
        <img src="/Profile.jpg" alt="profile picture" />
      </div>
      <div className="wrapper">
        <motion.div
          className="content-container"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>PRAMUDITHA KALUTHANTHRI</motion.h2>
          <motion.h3 variants={textVariants}>Full Stack Developer</motion.h3>
          <motion.div className="button-container" variants={textVariants}>
            <motion.button className="seeMyWorkButton" variants={textVariants}>
              <a href="#Projects">See the Latest Work</a>
            </motion.button>
            <motion.button className="contactBtn" variants={textVariants}>
              <a href="#Contact">Contact Me</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
