
import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import DotGroup from './component/DotGroup'
import Hero from './component/Hero'
import LineGradient from './component/LineGradient'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Testimonial from './component/Testimonial'
import Contact from './component/Contact'

const App = () => {
  const [selectedPage,setSelectedPage] = useState('home')
  const [isTopOfPage,setIsTopOfPage] = useState(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY === 0)setIsTopOfPage(true)
      if(window.scrollY !==0)setIsTopOfPage(false)
    }
      
    window.addEventListener('scroll',handleScroll)
    return ()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  return (
    <div className='bg-deep-blue'>
      <Navbar selectedPage={selectedPage}
        isTopofPage={isTopOfPage}
        setSelectedPage={setSelectedPage}/>

      <div className='w-5/6 mx-auto md:h-[100%]  flex items-center justify-center'>
        <DotGroup setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}/>
        <Hero setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-[full]'>
        <Skills/>
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-full '>
        <Projects/>
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-full'>
        <Testimonial/>
      </div>
      <LineGradient/>
      <div className='w-5/6 mx-auto md:h-[100vh] flex items-center justify-center'>
        <Contact/>
      </div>
    </div>
    
  )
}

export default App












// import React, { useEffect, useState } from 'react'
// import Navbar from './component/Navbar'
// import DotGroup from './component/DotGroup'
// import Hero from './component/Hero'

// const App = () => {
//   const [selectedPage,setSelectedPage] = useState('home')
//   const [isTopOfPage,setIsTopOfPage] = useState(true)

//   useEffect(()=>{
//     const handleScroll = ()=>{
//       if(window.scrollY ===0)setIsTopOfPage(true)
//       if(window.scrollY!==0)setIsTopOfPage(false)
//     }
//     window.addEventListener('scroll',handleScroll)
//     return ()=>{
//       window.removeEventListener('scroll',handleScroll)
//     }
//   },[])
//   return (
//     <div className=' bg-deep-blue'>
//       <Navbar 
//               isTopOfPage={isTopOfPage}
//               selectedPage={selectedPage}
//               setSelectedPage ={setSelectedPage}
//       />
//       <div className='w-5/6 mx-auto md:h-full'>
//           <DotGroup 
//               selectedPage={selectedPage}
//               setSelectedPage={setSelectedPage}/>
//       </div>
//       <Hero setSelectedPage={setSelectedPage}/>
//     </div>
//   )
// }

// export default App