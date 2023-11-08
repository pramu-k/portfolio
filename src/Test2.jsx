import { motion } from "framer-motion";
import { useState } from "react";

const Test2 = () => {
  const [open, setOpen] = useState(false);

  const items = ["item1", "item2","item3","item4",];
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren:0.2 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
        <motion.ul 
        variants={variants}
        initial="hidden"
        animate="visible"
        >
            {items.map((item)=>{
                return<motion.li variants={variants}>{item}</motion.li>
            })}
        </motion.ul>
    </div>
  );
};
export default Test2;
