import React from 'react'
import {IconMail,
  IconBrandFacebookFilled,
  IconBrandTwitterFilled,
  IconBrandInstagram,
  IconBrandLinkedin
} from '@tabler/icons-react'

const FooterM =()=>{
  return (
    <div className='  footerM flex flex-col w-[100%] h-auto ' >
        <div className=' flex flex-col text-slate-100 w-[100%] h-[100%] bg-[#12121294] footer_b px-[1rem] py-[1rem] justify-between ' >
              <div className='flex flex-wrap w-[100%] h-auto justify-between  ' >
                
                <div className=' gap-3 flex flex-col justify-start items-start ' >
                  <ul className='gap-2 flex flex-col  font-light  ' ><h1 className=' py-[1rem] ' >QUICK LINKS</h1> 
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Quotation</li>
                    <li>PartnerShip</li>
                    <li>Contact Us</li>
                  </ul>

                </div>
                <div className=' gap-3 flex flex-col justify-start items-start ' >
                  <ul className='gap-2 flex flex-col  font-light  ' ><h1 className=' py-[1rem] ' >OUR SERVICES</h1> 
                    
                    <li>Web Developement</li>
                    <li>Web Desgin</li>
                    <li>Responsive Website Desgin</li>
                    <li>CMS Website Desgin</li>
                    <li>Custom Website Desgin</li>
                    <li>UI & UX Website Desgin</li>
                    <li>360 Virtual Tour</li>


                  </ul>

                </div>

                <div className=' gap-3 flex flex-col justify-start items-start ' >
                  <ul className='gap-2 flex flex-col  font-light  ' ><h1 className=' py-[1rem] text-transparent ' >. </h1> 
                    <li>Ecommerce Developement</li>
                    <li>WooCommerce Developement</li>
                    <li>osCommerce Developement</li>
                    <li>Magento Developement</li>
                    <li>BigCommerce Developement</li>
                    <li>SSL Certificate</li>
                    <li>Promotion Video</li>




                   
                  </ul>

                </div>

                <div className=' gap-3 w-[100%] flex flex-col justify-start items-start ' >
                  <ul className='gap-2   flex flex-col  font-light  ' ><h1 className=' py-[1rem] ' >VISIBLE ONE SINGPORE</h1> 
                    <p className='fot' >+65 6248 0838</p>
                    <div className=' flex items-center saturate-0  ' >
                      <IconMail/>
                      <p className='fot' >info@visibleone.com</p>
                    </div>
                    <div className='fot flex flex-col ' >
                      <p className='fot' >24 Sin Ming Lane Midview City #07-93,</p>
                      <p className='fot' >Singpore 573970</p>
                    </div>
                    <p className='fot' >Offic Hour: Mon-Fri (9am-6pm)</p>
                  </ul>

                  <div className=' flex justify-start gap-5 w-[100%] items-center ' >
                    <p className=' bg-[#26a9e1] p-[.7rem]  ' >Contact us</p>
                    <p className=' text-[#26a9e1] ' >Contact HK Office</p>
                  </div>

                </div>
              </div>
              <div className='flex flex-col w-[100%] border-t-[1px] border-b-[1px] border-slate-400 py-[1rem]  h-auto justify-between  ' >
                <div className=' flex items-end justify-between py-[1rem]  w-[100%%] ' >
                  <img className=' h-[30px] '  src="/src/assets/shopify-2.svg" alt=""/>
                  <img className=' h-[30px] '  src="/src/assets/paypal-3.svg" alt=""/>
                  <img className=' h-[30px] '  src="/src/assets/google-adwords.svg" alt=""/>
                  <img className=' h-[30px] '  src="/src/assets/google-analytics.svg" alt=""/>



                </div>
                <div className= ' flex flex-col justify-start items-start  ' >
                  <div className=' flex flex-col items-center ' >
                  <label for="email">Subscribe to our news, tips and guideliness</label>
                  </div>
                  <div className=' flex items-center  gap-3  ' >
                                      <input placeholder='example@gmail.com' className=' w-[250px] bg-transparent border-[1px] h-[40px] px-[10px] tracking-wider ' type="email" name="" id="" />

                    <p className='bg-[#26a9e1] flex items-center px-[1.4rem] h-[40px]' >
                      <p>Submit</p>
                    </p>
                  </div>
                 
                </div>
              </div>
              <div className='flex flex-col w-[100%] h-[20%] justify-center gap-3 items-center  ' >
                <div className=' flex gap-5 ' >
                <div className=' flex items-center '>
                    <IconBrandFacebookFilled/>
                </div>
                <div className=' flex items-center '>
                    <IconBrandTwitterFilled/>
                </div>
                <div className=' flex items-center '>
                    <IconBrandInstagram/>
                </div>
                <div className=' flex items-center '>
                    <IconBrandLinkedin/>
                </div>
                </div>
                <div className=' text-xs flex gap-3 items-center justify-center ' >
                  <p className=' fot ' >Shopping T&C</p>
                  <p className=' fot '>Term & Condition</p>
                  <p className=' fot '>Privicy Policy</p>
                  <p className=' fot '>©2018 . visible One</p>
                </div>
               
              </div>
        </div>
    </div>
  )
}

export default FooterM