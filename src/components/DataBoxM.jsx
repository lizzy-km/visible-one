import React, { useState } from 'react'

const DataBoxM = ({post}) => {
    const[dataClass,setDataClass] = useState('flex w-[95%] min-h-[56px] cursor-pointer  items-center justify-start gap-[20px] data-box px-[22px]')
    const[textClass,setText] = useState(' text-[30px] font-bold text-[#2DC4EA] opacity-[.5]  ')
  return (
    <div id='data-box' onMouseLeave={()=>{
        setDataClass('flex w-[95%] min-h-[56px] cursor-pointer  items-center justify-start gap-[20px] data-box px-[22px]')
        setText(' text-[30px] font-bold text-[#2DC4EA] opacity-[.5]  ')
    }} onMouseEnter={()=>{
        setText(' text-[30px] font-bold text-[#ffffff] opacity-[.5]  ')

        setDataClass('flex w-[95%] min-h-[56px] cursor-pointer  items-center justify-start gap-[20px] data-box-active px-[22px]')
      }} 
      onClick={()=>{
        setText(' text-[30px] font-bold text-[#ffffff] opacity-[.5]  ')

        setDataClass('flex w-[95%] min-h-[56px] cursor-pointer  items-center justify-start gap-[20px] data-box-active px-[22px]')
      }} 
      className={dataClass} >
        {
            post?.id <10 ? (<p className={textClass} > 0{post?.id} </p>):(
                <p className={textClass} > {post?.id} </p>
            )
        }
    
    <p className=' text-[14px] text-left font-medium line-clamp-1 ' > {post?.title} </p>
    {/* <span> {post?.body} </span> */}
 </div>
  )
}

export default DataBoxM