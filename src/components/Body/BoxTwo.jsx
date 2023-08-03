import React from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const BoxTwo = ({num}) => {
    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
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
      className='box flex flex-col items-end w-[50%] gap-[37px] justify-start ' >
        <div className=' flex justify-center w-[424px] h-[424px] circle_w_d  ' >
            <img className=' w-[269px] h-[398px] rounded-2xl ' src="https://i.pinimg.com/originals/32/21/61/3221613143387aed3acfa477f0c33e22.png" alt=""/>
         </div>
   </motion.div>
  )
}

export default BoxTwo