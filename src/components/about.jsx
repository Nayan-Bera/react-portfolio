import aboutimg from"../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import pdf from"../assets/Resume.pdf";
import React from "react";

const about = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4"> 
    <h1 className="my-20 text-center text-4xl">
      About
      <span className=" text-neutral-500 ">Me</span>
    </h1>
     <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-150}}
        transition={{duration:1.5}}

        className=" w-full lg:w-1/2 lg:p-8" >
          <div className="flex items-center justify-center">
             <img className=" rounded-3xl shadow-sm size-8/12 shadow-gray-900" src={aboutimg} alt="aboutme" />
          </div>
      </motion.div>
      <motion.div 
       whileInView={{opacity:1,x:0}}
       initial={{opacity:0, x:150}}
       transition={{duration:1.2}}
      
      className=" w-full lg:w-1/2">
        
          <div className="flex justify-center lg:justify-start text-justify">
             <p className=" my-2 max-w-xl py-6">
              {ABOUT_TEXT}
              </p>
              
          </div>
          <a href={pdf} target="blank"> <button
          className=" mr2 rounded bg-neutral-900 px-2 py-1
               text-sm font-medium bg-gradient-to-r from-green-300
            to-orange-500 bg-clip-text  tracking-tight text-transparent shadow-sm  shadow-gray-500 ">Resume</button></a>
        </motion.div>
     </div> 
    </div>
  )
}

export default about
