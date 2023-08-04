
import { useMediaQuery } from 'react-responsive'
import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import NavBarM from './components/Header/NavBar_m'
import NavBarT from './components/Header/NavBar_t'
import FooterM from './components/Footer/Footer_m'
import FooterT from './components/Footer/Footer_t'
import { IconPhone,IconMail,IconFileDescription,IconCaretDown,IconChevronDown,IconMenu2,IconX
} from '@tabler/icons-react';
import BodyM from './components/BodyM/Body'
import BodyT from './components/BodyT/Body'
import { useState } from 'react'
import { inject } from '@vercel/analytics';

import { Analytics } from '@vercel/analytics/react';
 
<Analytics mode={'production'} />;
 
inject();

function App() {

  const [side,setSide]=useState(' none absolute overflow-hidden menu bg-[#ffffffa0] h-screen z-[1] right-[-700px] w-[100%] ')

  const[cont,setCont] = useState(' flex flex-col items-start overflow-hidden max-h-[30px] font-medium ')

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  return (
    <div className=' overflow-x-hidden  tracking-wide max-w-[100%] w-[100%] h-screen flex flex-col  justify-between items-start ' >
      {
        isMobile && <NavBarM setSide={setSide} />
      }
       {
        isTablet && <NavBarT/>
      }
      {
        isDesktop &&  <NavBar/>
      }
     
      <div className=' body flex w-[100%]  ' >

      {
        isMobile && <BodyM/>
      }
       {
        isTablet && <BodyT/>
      }
      {
        isDesktop &&  <Body/>
      }
     

      </div>
      {
        isMobile && <FooterM/>
      }
       {
        isTablet && <FooterM/>
      }
      {
        isDesktop &&  <Footer/>
      }

<div className= {side} >
             <div className=' flex justify-between px-[1rem] w-[100%] items-center ' >
             <div onClick={()=>
                  setSide(' absolute none menu bg-[#ffffffa0] h-screen z-[1] right-[-700px] w-[100%] ')
                } className=' flex p-[1rem] ' >
                    <IconX/>

                  </div>

                  <div className=' w-[80%] flex justify-between items-center ' >
                    <input className=' rounded-md w-[80%] border-[#26a9e1] p-[.5rem] ' placeholder='Search' type="search" name="" id="" />
                    <div className=' flex items-center p-[.5rem] justify-center rounded-md w-[15%] bg-[#26a9e1] ' >
                        <p className=' text-xs text-[#ffffff] ' >Search</p>
                    </div>
                  </div>
             </div>
                 
              <div className=' px-[1rem] flex justify-evenly items-center '>
                  <div className=' flex flex-col gap-2  w-[100%] font-medium justify-between items-start pt-[10px] '>
                      <div>Home</div>
                      <div className=' flex items-center text-[#26a9e1] font-medium '>
                          <p>Services</p>
                          <IconChevronDown />
                      </div>
                      <div className=' flex items-center font-medium '>
                          <p>Company</p>
                          <IconChevronDown />
                      </div>
                      <div className=' flex items-center font-medium '>
                          <p>Blog</p>
                          <IconChevronDown />
                      </div>
                      <div className={cont} >
                          <div 
                          onMouseLeave={()=> 
                            setCont(' flex flex-col items-start overflow-hidden max-h-[30px] font-medium ')
                           } 
                          onClick={()=> 
                          setCont(' flex flex-col items-start overflow-hidden h-auto font-medium ')
                         } className=' flex items-start ' >
                          <p>Contact Us</p>
                          <IconChevronDown />
                          </div>
                          
                          <div className=' flex flex-col justify-between  gap-4 items-start '>
                  <div className=' flex flex-col w-[100%] justify-evenly pt-[10px] gap-[10px]  items-start '>

                      <div className=' flex items-center '>
                          <IconPhone />
                          <p className=' font-medium text-sm '> 6248 0838 </p>
                      </div>
                      <div className=' flex  items-center gap-1 '>
                          <div className=' border-[1px] flex items-center justify-center rounded-full h-[24px] border-[#26a9e1] '>
                              <IconPhone />

                          </div>
                          <p className=' font-medium text-sm '> 8484 9984 </p>
                      </div>
                      <div className=' flex items-center '>
                          <div>
                              <IconMail />

                          </div>
                          <p className=' font-medium text-sm '> info@visibleone.com </p>
                      </div>
                  </div>


              </div>
                      </div>

                  </div>
              </div>
             
              <div className=' h-[40px] gap-3 pb-[0px] px-[1rem] flex  justify-start items-center '>
                  <div className=' text-slate-200  cursor-pointer flex items-center bg-green-500 px-[6px] py-[4px]  '>
                      <IconFileDescription />
                      <p className=' font-medium text-sm '>QUOTE</p>
                  </div>
                  <div className=' text-[#26a9e1] flex items-center border-[#26a9e1] border-2 px-[6px] py-[1px]   '>
                      <p>SG EN</p>
                      <IconCaretDown />
                  </div>
              </div>
          </div>
      
    </div>
  )
}

export default App
