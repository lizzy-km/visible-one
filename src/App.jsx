
import { useMediaQuery } from 'react-responsive'
import './App.css'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import NavBarM from './components/Header/NavBar_m'
import NavBarT from './components/Header/NavBar_t'
import FooterM from './components/Footer/Footer_m'
import FooterT from './components/Footer/Footer_t'
import BodyM from './components/BodyM/Body'
import BodyT from './components/BodyT/Body'

function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  return (
    <div className='  tracking-wide w-[100%] h-screen flex flex-col  justify-between items-start ' >
      {
        isMobile && <NavBarM/>
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
      
    </div>
  )
}

export default App
