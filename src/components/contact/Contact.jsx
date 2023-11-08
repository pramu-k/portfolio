import { useRef, useState } from "react";
import "./contact.scss";
import {animate, motion,useInView} from "framer-motion";
import emailjs from "@emailjs/browser";

const variants={
    initial:{
        y:500,
        opacity:0
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}

const Contact = () => {

    const [error,setError] = useState(false);
    const [success,setSuccess] =useState(false);

    const svgRef = useRef();

    const isInView=useInView(svgRef);

    const formRef = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_o2c98cx",
          "template_lskwo07",
          formRef.current,
          "IP3RQHwspXmn_K10z"
        )
        .then(
          (result) => {
            setSuccess(true);
            formRef.current.reset();
          },
          (error) => {
            setError(true);
          }
        );
    };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      ref={svgRef}
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Get Connected!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hivinkaluthanthri@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Rajamahavihara Road, Elpitiya, Sri Lanka</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+94767176345</span>
        </motion.div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ duration: 3 }}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#FFFFFF"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M24 56a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4c-8 0-8-8-8-12s0-12 8-12a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4C14 8 8 12 8 32s6 24 16 24z"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M47.4 52a27.33 27.33 0 0 0 0-38.63"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M39.67 44.27a16.38 16.38 0 0 0 0-23.17"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
              d="M32 36.55a5.47 5.47 0 0 0 0-7.73"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name"  name="name"/>
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success!"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};
export default Contact;
