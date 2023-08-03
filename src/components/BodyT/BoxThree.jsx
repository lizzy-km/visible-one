import React from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const BoxThree = ({num}) => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
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
      className='box flex items-start w-[100%] justify-between ' >
        <div className='  min-w-[338px] h-[252px] bg-cube object-cover   ' >
         </div>
         
   </motion.div>
  )
}

export default BoxThree