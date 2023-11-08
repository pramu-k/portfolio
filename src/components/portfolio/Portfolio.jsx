import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform,useInView } from "framer-motion";

const items = [
  {
    id: 1,
    title: "My Portfolio",
    img: "./portfolio_home.PNG",
    desc: "Where else you can showcase your own talent other than your own portfolio? I developed this portfolio website using React. Sass was used for styling of this website and Framer Motion library was used for animations.",
  },
  {
    id: 2,
    title: "E-commerce Application",
    img: "./ecommerce_homepage.PNG",
    desc: "This is a front-end web project developed using Angular where the user is able to sign up/log in and make purchases. Sales CRUD operations are managed through publicly available testing APIs and user authentication is done using Firebase Authentication.",
  },
  {
    id: 3,
    title: "Supermarket POS",
    img: "./place_order.PNG",
    desc: "In this project, I developed a standalone application to manage sales and inventory of a supermarket using Java, MySQL, and JavaFX.",
  },
  {
    id: 4,
    title: "Quiz API",
    img: "api-svgrepo-com.svg",
    desc: "In this project, I developed a web API to generate quizzes of MCQs using Spring Boot and PostgreSQL. The user is able to receive quizzes based on question categories and number of questions.",
  },
  {
    id: 5,
    title: "Student Management System",
    img: "dashboard.PNG",
    desc: "This is a standalone JavaFX application where the user is able to perform CRUD operations of students, teachers and courses of an Educational Institute.",
  },
];

const Single = ({ item }) => {
  const variants = {
    initial: {
      y: -400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };


  const reference = useRef();

  const isInView = useInView(reference);

  // const y = useTransform(scrollYProgress,[0,1],[-200,200])
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt="project" />
          </div>
          <motion.div
            ref={reference}
            variants={variants}
            initial="initial"
            className="textContainer"
            animate={isInView ? "animate" : "initial"}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>View on Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const reference = useRef();

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={reference}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => {
        return <Single item={item} key={item.id} />;
      })}
    </div>
  );
};
export default Portfolio;
