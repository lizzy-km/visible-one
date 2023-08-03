import React from 'react'
import { IconPhone,IconMail,IconFileDescription,IconCaretDown,IconChevronDown,IconSearch } from '@tabler/icons-react';

const NavBar = () => {
  return (
    <div className=' flex flex-col justify-between  bg-white  w-[100%] h-auto '
    >
        <div className=' flex justify-between items-center px-[10rem]   bg-slate-200  w-[100%]  h-[40px] '>
        <div className=' bg-slate-100 ' >
            <img className='  h-[60px]  bg-white ' src="https://dmwnucuzzd3uc.cloudfront.net/image/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmFJ_4aZ0Holmn3lvFoyV-Mp4aKSwqi838KO5obcFU-4evQnxtHyE6Sg==" alt=""/>
        </div>

        <div  className=' flex justify-between  gap-4 items-center '>
            <div className=' flex items-center ' >
                <IconPhone />
                <p className=' font-medium text-sm ' > 6248 0838 </p>
            </div>
            <div className=' flex items-center gap-1 ' >
                <div className=' border-[1px] flex items-center justify-center rounded-full h-[24px] border-[#26a9e1] '>
                <IconPhone />

                </div>
                <p className=' font-medium text-sm ' > 8484 9984 </p>
            </div>
            <div className=' flex items-center ' >
                <div  >
                <IconMail />

                </div>
                <p className=' font-medium text-sm ' > info@visibleone.com </p>
            </div>
            <div className=' text-slate-200 rounded-md cursor-pointer flex items-center bg-green-500 px-[6px] py-[4px]  ' >
                <IconFileDescription />
                <p className=' font-medium text-sm ' >QUOTE</p>
            </div>
            <div className=' text-[#26a9e1] cursor-pointer flex items-center border-[#26a9e1] border-2 px-[6px] py-[3px]   ' >
               <p>SG EN</p> 
               <IconCaretDown/>
            </div>
        </div>
        </div>

        <div className='max-[500px]:px-[1rem] px-[10rem] flex justify-end items-center ' >
            <div className=' cursor-pointer text-[10px] flex gap-4 font-medium justify-between items-center py-[10px] ' >
                <div>Home</div>
                <div className=' cursor-pointer flex items-center text-[#26a9e1] font-medium ' >
                    <p>Services</p>
                    <IconChevronDown/>
                </div>
                <div className=' cursor-pointer flex items-center font-medium ' >
                    <p>Company</p>
                    <IconChevronDown/>
                </div>
                <div className=' cursor-pointer flex items-center font-medium ' >
                    <p>Blog</p>
                    <IconChevronDown/>
                </div>
                <div className=' cursor-pointer flex items-center font-medium ' >
                    <p>Contact Us</p>
                    <IconChevronDown/>
                </div>
                <div className=' cursor-pointer w-[15px] text-sm flex items-center ' >
                <IconSearch/>
                </div>

            </div>
        </div>
       
        
        </div>
  )
}

export default NavBar