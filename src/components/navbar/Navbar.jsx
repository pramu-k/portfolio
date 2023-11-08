import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import {motion} from 'framer-motion';


const Navbar = () => {
    const variants = {
      initial: {
        scale: 0.5,
        opacity:0
      },
      final: {
        scale: 1,
        opacity:1,
        transition: { duration: 0.5 },
      },
    };

  return (
    <div className="navbar">
    
      <Sidebar/>
      <div className="wrapper">
        <motion.span variants={variants} initial="initial" animate="final">Pramuditha Kaluthanthri</motion.span>
        <div className="social">
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar