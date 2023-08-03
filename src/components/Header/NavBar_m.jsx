import React, { useState } from 'react'
import { IconPhone,IconMail,IconFileDescription,IconCaretDown,IconChevronDown,IconMenu2,IconX
} from '@tabler/icons-react';

const NavBarM = ({setSide}) => {

  return (
    
    // <div  >
    <div className='  overflow-hidden overflow-y-hidden flex flex-col justify-between items-center  bg-white  w-[100%] min-h-[3rem] pb-[1rem] '
      >
          <div className=' flex-col   justify-center items-center px-[0rem]   bg-slate-200  w-[100%]  h-auto '>
              <div className=' bg-slate-100 w-[100%] h-[40px] items-center flex justify-between '>
                  <img className=' h-[40px]   bg-white ' src="https://dmwnucuzzd3uc.cloudfront.net/image/o9SXyF4kPWv_4nhtaCnNLF7UNW_ctaPmFJ_4aZ0Holmn3lvFoyV-Mp4aKSwqi838KO5obcFU-4evQnxtHyE6Sg==" alt="" />
                  <div onClick={()=>{
                    setSide(' absolute menu bg-[#ffffffa0] right-[0px] h-screen z-[1] w-[100%] ')
                  }}  className=' h-[40px] flex items-center px-[1rem] '>
                      <IconMenu2 />
                  </div>

              </div>


          </div>




      </div>

      
        //   </div>
  )
}

export default NavBarM