import React from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
const BoxOne = ({num}) => {
    
const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
   ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
     className='box flex flex-col h-auto items-start w-[50%] gap-[20px] justify-start ' >
        <div className=' h-[49px]  tracking-wider flex gap-2 text-[16px] font-bold '  >
        <h1 className='  ' >ABOUT </h1>
        <h1 className=' text-[#2DC4EA] ' > TRIPPRO</h1>
        
    </div>
    <div className='border-t-4 mt-[-40px] w-[70px] border-[#2DC4EA]'>
            
        </div>
    <div className=' mt-[-10px] h-auto' >
        <p className=' text-[12px] line-clamp-4' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
    </div>

    <div className=' z-[999] data-box-active mt-[-10px] flex justify-center items-center w-[120px] h-[34px] rounded-[10px] ' >
        <p className= 'text-[10px] text-[#282727] ' >TOUR TO WEBSITE</p>
    </div>
  </motion.div>
  )
}

export default BoxOne