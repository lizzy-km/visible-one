import React from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
const BoxOne = ({num}) => {
    
const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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
     className='box flex flex-col items-start w-[50%] gap-[37px] justify-start ' >
        <div className=' h-[49px]  tracking-wider flex gap-2 text-[36px] font-bold '  >
        <h1 className='  ' >ABOUT </h1>
        <h1 className=' text-[#2DC4EA] ' > TRIPPRO</h1>
        
    </div>
    <div className='border-t-4 mt-[-20px] w-[140px] border-[#2DC4EA]'>
            
        </div>
    <div className=' mt-[-10px] ' >
        <p className=' text-[18px] ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        </p>
    </div>

    <div className=' data-box-active cursor-pointer flex justify-center items-center w-[280px] h-[74px] rounded-[50px] ' >
        <p className= 'text-[20px] text-[#fff] ' >TOUR TO WEBSITE</p>
    </div>
  </motion.div>
  )
}

export default BoxOne