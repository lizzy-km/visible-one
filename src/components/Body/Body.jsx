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
            <img className=' w-[50px] h-[50px] ' src="/src/assets/responsive.svg" alt=""/>
         
            </div>
            <div className=' h-[66px] flex justify-center items-center  gap-[23px] border-r-2 px-[58px]' >
            <div className='flex flex-col   ' >
              <p className=' text-[23px] '>Technologies:</p>
              <p className=' text-[23px] font-semibold ' >Wordpress</p>
            </div>
            <img className=' w-[55px] h-[55px] object-cover ' src="/src/assets/wordpress-development-logo-banner.svg" alt=""/>
         
            </div>
            <div className=' h-[66px] flex justify-center items-center  gap-[23px]  px-[58px]' >
            <div className='flex flex-col   ' >
              <p className=' text-[23px] '>Industry:</p>
              <p className=' text-[23px] font-semibold ' >Ecommerce</p>
            </div>
            <img className=' w-[65px] h-[60px] object-cover ' src="/src/assets/shopping-cart.svg" alt=""/>
         
            </div>
            </div>
          
          </div>
         
        </div>
        <div className='  flex item justify-center mt-[-140px] w-[100%] ' >
        <img className='  w-[44.27083333333333%] ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/479a4cabe811fd96ce7f802147b1485a6bc2303b/Laptop%402x.png" alt=""/>
        <img className=' absolute bottom-10  w-[33.541666666666664%] ' src="https://i.pinimg.com/750x/63/e6/25/63e625078467c5ac61a4f0ccf0e1b416.jpg" alt=""/>

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
        <div className=' flex w-[50%] flex-col h-[100%] items-start justify-start gap-4 ' >
        <div className=' h-[10%] text-[36px] font-bold flex gap-2 ' >
                <h1>OUR</h1>
                <h1 className=' text-[#2DC4EA] ' >CHALLENGES</h1>
            </div>

            <BoxFour/>

            <div className='  cursor-pointer flex items-center justify-center w-[150px] h-[50px] View rounded-[50px] ' >
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