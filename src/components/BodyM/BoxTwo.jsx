import React from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const BoxTwo = ({num}) => {
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
      className='box flex flex-col items-end w-[50%] gap-[17px] justify-end ' >
        <div className=' flex justify-center w-[124px] h-[124px] circle_w_d  ' >
            <img className=' w-[69px] h-[108px] ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=7d25c87a-85af-42ef-a36c-955561e8ddfa&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>
         </div>
   </motion.div>
  )
}

export default BoxTwo