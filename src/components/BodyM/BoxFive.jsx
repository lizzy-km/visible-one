import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion";
import {IconArrowRight,IconChevronRight,IconChevronLeft} from '@tabler/icons-react'
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import './box.css'

const BoxFive = ({num}) => {
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

     const[mobile,setMobile] = useState(' mr-[-920px] mt-[2rem] w-[100%] h-auto flex flex-col items-center ')
     const[Desk,setDesk] = useState(' mb-[-2rem]  w-[100%] h-auto py-[2rem] flex justify-end flex-col items-end  bg-    ')


  return (
    <motion.div
    ref={ref}
       variants={boxVariant}
       initial="hidden"
       animate={control}
      className='box flex mt-[-8rem] h-auto items-end overflow-y-hidden overflow-x-hidden max-w-[100%] justify-between ' >
        <div
        onDrag={()=>{
          setMobile(' mr-[-10px] mt-[2rem]  w-[105%]h-auto flex flex-col items-center ')
          setDesk(' ml-[-920px] w-[100%] h-auto flex flex-col items-end bg-   ')
        }}
         onClick={()=>{
          setMobile(' mr-[-10px] mt-[2rem]  w-[105%] h-auto flex flex-col items-center  ')
          setDesk(' ml-[-920px] w-[100%] h-auto flex flex-col items-end bg-   ')
        }} className={Desk} >
          <div className=' flex justify-end items-center w-[100%] h-full  '>
            <img className=' h-[146.1px] mt-[14px] pr-[-60px]  ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/24855a5d903aa1f78e54b53437219ae01d031452/trippro.com.hk_cn_%402x.png" alt=""/>
          </div>
            <div className='relative justify-end flex items-end w-[100%] h-auto py-[1rem] data-box-active ' >
              <div className=' z-[99999] p-[8px] flex justify-start items-start rounded-[8px] desktop absolute left-5 top-[-40%] h-[168px] w-[239px]' >
                <img className='h-[128px] w-[239px]' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=05e7907a-4c61-48e7-a806-889a770db8eb&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
              </div>
              <div className=' w-[90%] flex flex-col justify-start items-start gap-6 p-[1rem] ' >
                <div>
                  <h1 className=' text-[15px] font-bold text-[#ffffff] ' >Their Old Website & Problems</h1>
                </div>
                <div className=' flex flex-col gap-1 justify-start items-start ' >
                  <div className=' text-[12px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className=' text-[12px]  ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                  <div className=' text-[18px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className='text-[12px]   ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                  <div className=' text-[18px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className=' text-[12px]  ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                </div>
                <div className=' cursor-pointer flex text-[#ffffff] p ' >
                <IconChevronLeft className='opacity-50' />
                  <IconChevronRight/>
                  
                </div>

                <div className=' flex rounded-full p-[.4rem] items-center data-box-active text-[#ffffff] w-[120px] justify-evenly ' >
                  <img className='w-[20px] h-[20px]' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=7d667ac0-c54a-4490-9d6a-0a1f8aab6f8f&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
                  <p>Desktop</p>
                  <div className=' w-[20px] h-[20px] bg-[#ffffff] rounded-full ' >
                    
                  </div>
                </div>
              </div>
            </div>
         </div>

        {/* mobile  */}
         <div
         onDrag={()=>{
          setMobile(' mr-[-920px] w-[100%] h-auto flex flex-col items-center  ')
          setDesk(' mr-[0px] w-[100%] h-auto flex flex-col items-center bg-   ')
        }}
         onClick={()=>{
          setMobile(' mr-[-920px] w-[100%] h-auto flex flex-col items-center  ')
          setDesk(' mr-[0px] mb-[-2rem] w-[100%] h-auto py-[2rem] flex flex-col items-center   ')
        }} 
          className={mobile} >

            <div className=' flex justify-start  gap-4 items-center w-[100%] h-[200px] bg-[#ffffff] '>
            <img className='ml-[1rem] w-[65.2px] h-[152px]  border-[#444444] border-[1px] rounded-md  ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=2e7c90db-230c-4df2-8788-be92455d7de7&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
            <img className=' w-[65.2px] h-[152px]  border-[#444444] border-[1px] rounded-md  ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=0008a866-5842-4e4b-baed-0d3d58a17036&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
            <img className=' w-[65.2px] h-[152px]  border-[#444444] border-[1px] rounded-md  ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=f01fb4f1-224f-46e7-9e19-fd59fef21792&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>

            </div>
              <div className='relative w-[100%] mr-[-10px] flex justify-center items-start h-auto data-box-active ' >
              <div className=' flex py-[5px] flex-col justify-between phone absolute left-[67%] top-[-45%] w-[100.542px] rounded-[30px] h-[210px] bg-[#ffffff] ' >
                  <div className=' flex flex-col w-[100%] justify-start items-center gap-2 py-[.2rem] ' >
                    <div className=' w-[3px] h-[3px] rounded-full bg-[#121212] ' >
                      
                    </div>
                    <div className=' flex gap-3 w-[47%] justify-start items-center ' >
                    <div className=' sensor flex justify-center items-center w-[3px] h-[3px] rounded-full bg-[#121212dd] ' >
                      <div className=' w-[1.5px] h-[1.5px] rounded-full bg-[#5f29e9] ' >
                        
                      </div>
                      </div>
                      <div className=' speaker w-[20px] h-[3px] rounded-full bg-[#121212a8] ' >
                      
                      </div>
                    </div>
                  </div>

                  <div className=' w-[100%] px-[10px]  flex justify-center items-center ' >
                    <img className='  border-[#72727294] rounded-md border-[1px]   ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=0a776c3e-b64e-4c77-a880-8e8e14b7c8a7&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
                  </div>

                  <div className=' flex w-[100%] pt-[5px] justify-center items-center ' >
                    <div className=' homek w-[15px] h-[15px] rounded-full ' >
                      
                    </div>
                  </div>
                </div>

                <div className=' w-[105%] flex flex-col justify-start items-start gap-6 p-[1rem] ' >
                <div>
                  <h1 className=' text-[15px] font-bold text-[#ffffff] ' >Their Old Website & Problems</h1>
                </div>
                <div className=' flex flex-col gap-4 justify-start items-start ' >
                  <div className=' text-[18px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className=' text-[12px]  ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                  <div className=' text-[18px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className='  text-[12px] ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                  <div className=' text-[18px] w-[100%] text-[#ffffff] flex gap-1 ' >
                    <div className=' w-[13%] ' >
                    <IconArrowRight/>
                    </div>
                   
                    <p className='  text-[12px] ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                  </div>
                </div>
                <div className=' cursor-pointer flex text-[#ffffff] p ' >
                <IconChevronLeft/>
                  <IconChevronRight className='opacity-50'/>
                  
                </div>

                <div className=' flex rounded-full p-[.4rem] items-center data-box-active text-[#ffffff] w-[120px] justify-evenly ' >
                  <img className=' h-[20px]' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=fce3978f-22b1-4514-839d-8fb52b4732b3&api_key=CometServer1&access_token=1691074605_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_d945895615534b19a96f44895df8b28a12aaf9cb" alt=""/>
                  <p>Mobile</p>
                  <div className=' w-[20px] h-[20px] bg-[#ffffff] rounded-full ' >
                    
                  </div>
                </div>
              </div>
              </div>

         </div>
         
   </motion.div>
  )
}

export default BoxFive