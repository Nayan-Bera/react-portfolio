import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contect = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}

         className=" my-20 text-center text-4xl">Get in Touch</motion.h1>
        <div className=" text-center tracking-tighter">
            <motion.p 
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:-100}}
             transition={{duration:0.7}}

            className=" my-4">{CONTACT.address}</motion.p>
            <motion.p
             whileInView={{opacity:1, x:0}}
             initial={{opacity:0, x:100}}
             transition={{duration:1}}

            className=" my-4">{CONTACT.phoneNo}</motion.p>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.3}}
             
            className="my-4"
            >
            <a href="#">{CONTACT.email}</a>
            </motion.div>
           
            <h6 className=" mt-28 font- bg-gradient-to-r from-lime-800  via-25%
            to-purple-900 bg-clip-text  tracking-tight text-transparent">@Copyright-2024--Nayan Kr Bera</h6>
        </div>
      
    </div>
  )
}

export default Contect
