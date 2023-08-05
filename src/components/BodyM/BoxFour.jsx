import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";
import DataBoxM from '../DataBoxM';

const BoxFour = ({num,dataB,LdataB}) => {

    const loader = [
        {
            id:'none'
        },
{
    id:'none',
    key:'1'
},
{
    id:'none',
    key:'2'
},
{
    id:'none',
    key:'3'
},
{
    id:'none',
    key:'4'
},
    ]

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
          const[post,setPost] = useState()

          useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(data => setPost(data))
          },[])
   

    useEffect(() => {
        const box = document.getElementById('none');
      
        // 👇️ removes element from DOM
        box.classList.add = 'none';
      
        // 👇️ hides element (still takes up space on page)
        // box.style.visibility = 'hidden';
      }, 2000); // 👈️ time in milliseconds

  return (
    <motion.div
    ref={ref}
       variants={boxVariant}
       initial="hidden"
       animate={control}
      className={dataB} >
        <div id='none' className={LdataB} >
        {
            loader?.map(data =>{
                return(
                    <div key={data.key} id={data.id} className='flex text-[#ffffff] w-[680px] min-h-[76px] cursor-pointer  items-center justify-start gap-[20px] data-box-active px-[22px]' >
                        Loading . . .
                    </div>
                )
            })
        }
        </div>
       
       {
        post?.map(post =>{
            return(
                <DataBoxM key={post?.id}   post={post} />
            )
        })
       }
       
   </motion.div>
  )
}

export default BoxFour