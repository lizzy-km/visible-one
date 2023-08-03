import React, { useState } from 'react'

const DataBox = ({post}) => {
    const[dataClass,setDataClass] = useState('flex w-[96%] min-h-[76px] cursor-pointer  items-center justify-start gap-[20px] data-box pl-[22px]')
    const[textClass,setText] = useState(' text-[40px] font-bold text-[#2DC4EA] opacity-[.5]  ')
  return (
    <div id='data-box' onMouseLeave={()=>{
        setDataClass('flex w-[96%] min-h-[76px] cursor-pointer  items-center justify-start gap-[20px] data-box pl-[22px]')
        setText(' text-[40px] font-bold text-[#2DC4EA] opacity-[.5]  ')
    }} onMouseEnter={()=>{
        setText(' text-[40px] font-bold text-[#ffffff] opacity-[.5]  ')

        setDataClass('flex w-[96%] min-h-[70px] cursor-pointer  items-center justify-start gap-[20px] data-box-active pl-[22px]')
      }} 
      onClick={()=>{
        setText(' text-[40px] font-bold text-[#ffffff] opacity-[.5]  ')

        setDataClass('flex w-[96%] min-h-[70px] cursor-pointer  items-center justify-start gap-[20px] data-box-active pl-[22px]')
      }} 
      className={dataClass} >
        {
            post?.id <10 ? (<p className={textClass} > 0{post?.id} </p>):(
                <p className={textClass} > {post?.id} </p>
            )
        }
    
    <p className=' text-[18px] text-left font-medium line-clamp-2 ' > {post?.title} </p>
    {/* <span> {post?.body} </span> */}
 </div>
  )
}

export default DataBox