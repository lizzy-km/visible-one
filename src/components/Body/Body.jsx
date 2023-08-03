import React from 'react'

import BoxOne from './BoxOne';
import BoxTwo from './BoxTwo';
import BoxThree from './BoxThree';
import BoxFour from './BoxFour';
import BoxFive from './BoxFive';

const Body = () => {
  
  return (
    <div className=' flex flex-col w-[100%] gap-[2rem] h-auto justify-center items-center ' >
      <div className='relative  h-auto justify-start items-start w-[100%] flex flex-col ' >
        <div className='hero  h-auto gap-[25px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col ' >
          <div className=' h-auto pb-[12rem] gap-[25px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col '>
          <p className=' text-[50px] pt-[64px] font-light ' >TRIPPRO - AN ECOMMERCE SOLUTION</p>
          <p className=' font-light w-[90%] text-center text-[18px]  ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          <div className='   min-w-[30.53%] justify-center  flex items-center ' >
            <div className=' flex gap-[23px] border-r-2 px-[58px]' >
            <h1 className=' font-semibold text-[23px] ' >Built for:</h1>
            <img className=' w-[50px] h-[50px] ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=d2d1e94f-748d-435e-90e5-35698b84b025&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>
         
            </div>
            <div className=' h-[66px] flex justify-center items-center  gap-[23px] border-r-2 px-[58px]' >
            <div className='flex flex-col   ' >
              <p className=' text-[23px] '>Technologies:</p>
              <p className=' text-[23px] font-semibold ' >Wordpress</p>
            </div>
            <img className=' w-[55px] h-[55px] object-cover ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=fd2bffb4-1b6e-42b3-bd4e-537f83a26356&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>
         
            </div>
            <div className=' h-[66px] flex justify-center items-center  gap-[23px]  px-[58px]' >
            <div className='flex flex-col   ' >
              <p className=' text-[23px] '>Industry:</p>
              <p className=' text-[23px] font-semibold ' >Ecommerce</p>
            </div>
            <img className=' w-[65px] h-[60px] object-cover ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=f2785c1c-c116-4fd9-be57-9cdf0d69906d&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>
         
            </div>
            </div>
          
          </div>
         
        </div>
        <div className='  flex item justify-center mt-[-140px] w-[100%] ' >
        <img className='  w-[44.27083333333333%] ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=0116e5ab-5f26-4d42-98bb-4cc14e7d0d36&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>
        <img className=' absolute bottom-10  w-[33.541666666666664%] ' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f;revision=0?component_id=c6065532-ea1a-4b74-a0ce-f4f27866358f&api_key=CometServer1&access_token=1691010839_urn%3Aaaid%3Asc%3AUS%3A44b7b4d2-e03d-4e25-8fa0-35fcbb2b490f%3Bpublic_81f7f47537afd72384730a355968357c632828c6" alt=""/>

        </div>
        <div className=' flex item justify-center w-[100%] ' >

      </div>
      <div className='absolute flex item justify-center bottom-[-30%] w-[100%] ' >

      </div>
      </div>
      <div className=  ' flex justify-between pt-[18rem] items-center w-[100%] px-[10rem] pb-[4rem] h-auto ' >
        
        <BoxOne num={1} />
       

        <BoxTwo num={2} />
      </div>

      <div className=  ' flex justify-between gap-[51px] items-center w-[100%] px-[10rem] h-auto '>
        <BoxThree/>
        <div className=' flex flex-col h-[100%] items-start justify-start gap-4 ' >
        <div className=' text-[36px] font-bold flex gap-2 ' >
                <h1>OUR</h1>
                <h1 className=' text-[#2DC4EA] ' >CHALLENGES</h1>
            </div>
            <BoxFour/>

            <div className=' cursor-pointer flex items-center justify-center w-[120px] h-[50px] View rounded-[50px] ' >
            <p className=' text-[14px] text-[#ffffff] font-bold ' >VIEW MORE</p>
        </div>
        </div>
      </div>

      <div className=' w-[100%] ' >
        <BoxFive/>
      </div>
      
    </div>
  )
}

export default Body