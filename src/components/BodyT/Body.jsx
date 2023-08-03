import React from 'react'

import BoxOne from './BoxOne';
import BoxTwo from './BoxTwo';
import BoxThree from './BoxThree';
import BoxFour from './BoxFour';
import BoxFive from './BoxFive';

const BodyT = () => {
  
  return (
    <div className=' flex flex-col w-[100%] gap-[12rem] h-auto justify-center items-center ' >
      <div className='relative  h-auto justify-start items-start w-[100%] flex flex-col ' >
        <div className='hero  h-auto gap-[25px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col ' >
          <div className=' h-auto px-[1rem] gap-[10px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col '>
          <p className=' text-[32px] font-light pt-[24px] ' >TRIPPRO - AN ECOMMERCE SOLUTION</p>
          <p className=' font-light w-[100%] text-center text-[14px]  ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          <div className=' px-[4rem] pb-[9rem]  w-[100%] justify-center gap-3   flex items-center ' >
            <div className='   flex items-center gap-[15px]  ' >
            <h1 className=' font-semibold text-[18px]  ' >Built for:</h1>
            <img className=' w-[40px] h-[40px]  ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/responsive%402x.png" alt=""/>
         
            </div>
            <div className='   flex justify-center items-center  gap-[5px]  ' >
            <div className='flex flex-col   ' >
              <p className=' text-[18px] '>Technologies:</p>
              <p className=' text-[18px] font-semibold ' >Wordpress</p>
            </div>
            <img className=' w-[40px] h-[40px] object-cover ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/wordpress-development-logo-banner%402x.png" alt=""/>
         
            </div>
            <div className='   flex justify-center items-center  gap-[5px]  ' >
            <div className='flex flex-col   ' >
              <p className=' text-[18px] '>Industry:</p>
              <p className=' text-[18px] font-semibold ' >Ecommerce</p>
            </div>
            <img className=' w-[40px] h-[40px] object-cover ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/shopping-cart%402x.png" alt=""/>
         
            </div>
            </div>
          
          </div>
         
        </div>
        <div className='absolute flex item justify-center bottom-[-30%] w-[100%] ' >
      <img className='  w-[44.27083333333333%] ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/479a4cabe811fd96ce7f802147b1485a6bc2303b/Laptop%402x.png" alt=""/>

      </div>
      <div className='absolute flex item justify-center bottom-[-23%] w-[100%] ' >
      <img className='  w-[33.541666666666664%] ' src="https://i.pinimg.com/750x/63/e6/25/63e625078467c5ac61a4f0ccf0e1b416.jpg" alt=""/>

      </div>
      </div>
      <div className=  ' flex justify-between items-center w-[100%] px-[1rem] h-auto ' >
        
        <BoxOne num={1} />
       

        <BoxTwo num={2} />
      </div>

      <div className=  ' flex justify-between gap-[51px] items-center w-[100%] px-[1rem] h-auto '>
        <BoxThree/>
        <div className=' flex flex-col w-[100%] h-[100%] items-start justify-start gap-4 ' >
        <div className=' text-[26px] justify-start font-bold flex gap-2 ' >
                <h1>OUR</h1>
                <h1 className=' text-[#2DC4EA] ' >CHALLENGES</h1>
            </div>
            <BoxFour/>

            <div className=' cursor-pointer flex items-center justify-center w-[118px] h-[54px] View rounded-[50px] ' >
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

export default BodyT