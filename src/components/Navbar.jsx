import logo from "../assets/logo.png";
import {FaGithub} from"react-icons/fa";
import {FaLinkedin} from"react-icons/fa";
import {FaInstagram} from"react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";
const Navbar = () => {
  return (<nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <motion.img 
whileInView={{opacity:1, x:0}}
initial={{opacity:0, x:0}}
transition={{duration:4.5}}
        
        className="mx-2 w-20" src={logo} alt="logo" />
    </div>
    <motion.div 
    whileInView={{opacity:1, x:0}}
    initial={{opacity:0, x:0}}
    transition={{duration:4.5}}
    
    className="m-8 flex items-center justify-between gap-4 text-2xl">
      <a href="https://x.com/NayanBe68620646" target="blank">  < RiTwitterXLine /></a>
    <a href="https://www.linkedin.com/in/nayan-kr-bera" target="blank"><FaLinkedin/></a>
    <a href="https://github.com/Nayan-Bera" target="blank"><FaGithub /></a>
    <a href="https://www.instagram.com/_am_nayan_/?hl=en" target="blank">  <FaInstagram /></a>
    </motion.div>
  </nav> 
  )
}

export default Navbar
