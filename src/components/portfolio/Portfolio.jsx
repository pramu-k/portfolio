import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform,useInView } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Project",
    img: "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium voluptas tempora illo vitae numquam animi possimus qua ipsa praesentium voluptatum, officia a atque laboriosam ipsum quiaqui optio quisquam!",
  },
  {
    id: 2,
    title: "Java Project",
    img: "https://cdn.pixabay.com/photo/2023/10/12/12/54/woman-8310743_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium voluptas tempora illo vitae numquam animi possimus qua ipsa praesentium voluptatum, officia a atque laboriosam ipsum quiaqui optio quisquam!",
  },
  {
    id: 3,
    title: "Angular Project",
    img: "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium voluptas tempora illo vitae numquam animi possimus qua ipsa praesentium voluptatum, officia a atque laboriosam ipsum quiaqui optio quisquam!",
  },
  {
    id: 4,
    title: "Spring Project",
    img: "https://cdn.pixabay.com/photo/2023/09/20/04/04/sea-urchin-8263832_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium voluptas tempora illo vitae numquam animi possimus qua ipsa praesentium voluptatum, officia a atque laboriosam ipsum quiaqui optio quisquam!",
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
            <button>See Demo</button>
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
