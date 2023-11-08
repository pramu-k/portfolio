import {motion} from 'framer-motion';
import { useState } from 'react';

const Test = () => {
    const [open,setOpen]=useState(false)
    const variants={
        visible:{opacity:1,x:600, transition:{type:"spring", stiffness:200}},
        hidden:{opacity:0}
    }

  return (
    <div className="course">
        <motion.div className="box"
        variants={variants}
        initial='hidden'
        animate={open?"visible":"hidden"}
        transition={{duration:2}}
        ></motion.div>
        <button onClick={()=>setOpen(!open)}>Click Me</button>
    </div>
  )
}
export default Test