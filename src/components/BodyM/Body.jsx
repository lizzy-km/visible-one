import React, { useState } from 'react'

import BoxOne from './BoxOne';
import BoxTwo from './BoxTwo';
import BoxThree from './BoxThree';
import BoxFour from './BoxFour';
import BoxFive from './BoxFive';

const BodyM = () => {

  const[dataB,setDataB] = useState('box flex flex-col items-start w-[100%] pl-[5px] scroll-w-0  overflow-hidden gap-[14px] max-h-[352px] justify-between ')
  const[LdataB,setLDataB] = useState(' opacity-60 flex flex-col items-start w-[100%] overflow-auto gap-[16px] max-h-[352px] justify-between  ')
  const[view,setView] = useState(false)
  
  return (
    <div className=' overflow-x-hidden flex flex-col w-[100%] gap-[6rem] h-auto justify-center items-center ' >
      <div className='relative h-auto justify-start items-start w-[100%] flex flex-col ' >
        <div className='heroM  h-auto pb-[0rem]  gap-[5px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col ' >
          <div className='px-[1rem]  h-auto pb-[4rem] gap-[5px] text-[#ffffff] w-[100%]  bg-[#12121278] flex items-center flex-col '>
          <p className=' text-[16px] pt-[34px] ' >TRIPPRO - AN ECOMMERCE SOLUTION</p>
          <p className=' font-light w-[100%] text-center text-[10px]   ' >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
          <div className=' px-[1rem]  w-[100%%] justify-between gap-4   flex items-center ' >
            <div className=' w-[33%] h-[33px] flex items-center gap-[5px]  ' >
            <h1 className=' font-semibold text-[10px]  ' >Built for:</h1>
            <img className=' w-[28px] h-[28px]  ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/responsive%402x.png" alt=""/>
         
            </div>
            <div className=' w-[33%] h-[33px] flex justify-center items-center  gap-[5px]  ' >
            <div className='flex flex-col   ' >
              <p className=' text-[10px] '>Technologies:</p>
              <p className=' text-[10px] font-semibold ' >Wordpress</p>
            </div>
            <img className=' w-[25px] h-[25px] object-cover ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/wordpress-development-logo-banner%402x.png" alt=""/>
         
            </div>
            <div className=' w-[33%] h-[33px] flex justify-center items-center  gap-[5px]  ' >
            <div className='flex flex-col   ' >
              <p className=' text-[10px] '>Industry:</p>
              <p className=' text-[10px] font-semibold ' >Ecommerce</p>
            </div>
            <img className=' w-[30px] h-[30px] object-cover ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/df6b4eae5981aba0d27a4846a81fdfc5b8ab1cb5/shopping-cart%402x.png" alt=""/>
         
            </div>
            </div>
          
          </div>
         
        </div>
        <div className=' flex item justify-center mt-[-40px] w-[100%] ' >
      <img className='  w-[44.27083333333333%] ' src="https://raw.githubusercontent.com/lizzy-km/cloudy-km/479a4cabe811fd96ce7f802147b1485a6bc2303b/Laptop%402x.png" alt=""/>
      <img className=' bottom-3 absolute w-[33.541666666666664%] ' src="https://i.pinimg.com/750x/63/e6/25/63e625078467c5ac61a4f0ccf0e1b416.jpg" alt=""/>

      </div>
      
      </div>
      <div className=  ' flex justify-between items-end w-[100%] px-[1rem] h-auto ' >
        
        <BoxOne num={1} />
       

        <BoxTwo num={2} />
      </div>

      <div className=  ' flex flex-col justify-between gap-[51px] items-center w-[100%] px-[1rem] pb-[1rem] h-auto '>
        <BoxThree/>
        <div className=' flex flex-col h-[100%] w-[100%] items-start justify-start gap-4 ' >
        <div className=' text-[16px] font-bold flex gap-2 ' >
                <h1>OUR</h1>
                <h1 className=' text-[#2DC4EA] ' >CHALLENGES</h1>
            </div>
            <BoxFour LdataB={LdataB} setLDataB={setLDataB} 
            dataB={dataB} setDataB={setDataB} num={1} />
              {
                view ===false &&   <div onClick={()=> {
                  setView(!view)
                  setDataB('box flex flex-col items-start w-[100%] pl-[5px] scroll-w-0  overflow-hidden gap-[15px] max-h-[700px] justify-between')
                  setLDataB(' none opacity-60 flex flex-col items-start w-[100%] overflow-auto gap-[16px] max-h-[0px] justify-between  ')
                  }} className='  cursor-pointer flex items-center justify-center w-[110px] h-[44px] View rounded-[50px] ' >
                <p className=' text-[12px] text-[#ffffff] font-bold ' >VIEW MORE</p>
            </div>
              }
               {
                view ===true &&   <div onClick={()=> {
                  setView(!view)
                  setDataB('box flex flex-col items-start w-[100%] pl-[5px] scroll-w-0  overflow-hidden gap-[14.2px] max-h-[352px] justify-between')
                  setLDataB('  opacity-60 flex flex-col items-start w-[100%] overflow-auto gap-[16px] max-h-[352px] justify-between  ')
                  }} className='  cursor-pointer flex items-center justify-center w-[110px] h-[44px] View rounded-[50px] ' >
                <p className=' text-[12px] text-[#ffffff] font-bold ' >VIEW LESS</p>
            </div>
              }
           
        </div>
      </div>

      <div className=' w-[100%] ' >
        <BoxFive/>
      </div>
      
    </div>
  )
}

export default BodyM