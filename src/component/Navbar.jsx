
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MenuIcon, closeIcon } from '../assets';
import { useScroll } from 'framer-motion';


const Link= ({selectedPage,setSelectedPage,page,setIsMenuToggled})=>{
    const lowerCasePage = page.toLowerCase();
    return (<AnchorLink 
    className={`${selectedPage===lowerCasePage?'text-yellow':''} hover:text-yellow duration-500`}
    href={`#${lowerCasePage}`}
    onClick={()=>{
        return(
            setSelectedPage(lowerCasePage),
            setIsMenuToggled(prev=>!prev)
        )
        

    }}
    >{page}</AnchorLink>)
}

const Navbar = ({selectedPage,setSelectedPage,isTopofPage}) => {
    const [isMenuToggled,setIsMenuToggled] = useState(false)
    const navBarBg = isTopofPage?'':'bg-red'
  return (
    <div className={`${navBarBg} font-play transition-all duration-200 py-4 fixed w-full z-40 top-0`}>
        <div className='flex justify-between items-center w-5/6 mx-auto'>
            <h4 className='font-bold text-3xl'>JE</h4>
            {/* Desktop View */}
            <div className='hidden md:flex md:justify-between gap-16 font-open_Sans md:font-semibold'>
                <Link page='Home' selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page='Skills' selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page='Projects' selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page='Testimonials' selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
                <Link page='Contact' selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}/>
            </div>
            {/* Mobile View */}
            <button className={`${!isMenuToggled?'md:hidden z-40 p-2 bg-red rounded-full':'z-40 p-2 md:hidden'}`}>
                <img src={!isMenuToggled?MenuIcon:closeIcon} alt="menuIcon" 
                onClick={()=>setIsMenuToggled(prev=>!prev)}
                  />
            </button>
            
        </div>
        {isMenuToggled && <div className='md:hidden fixed   py-16 right-0 bottom-0 w-[300px]  bg-blue h-full'>
                    <div className=' flex flex-col gap-10 text-3xl text-deep-blue ml-[33%] mt-[100px] font-semibold'>
                        <Link page='Home' selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                        <Link page='Skills' selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                        <Link page='Projects' selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                        <Link page='Testimonials' selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                        <Link page='Contact' selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                    </div>
                </div>}
       
        
    </div>
  )
}

export default Navbar











































// import React, { useState } from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { MenuIcon, closeIcon } from '../assets'


// const Link = ({page,selectedPage,setSelectedPage})=>{
//     const lowerCasePage = page.toLowerCase()
//     return(
//         <AnchorLink
//             className={`${selectedPage===lowerCasePage ? 'text-yellow':''}
//             hover:text-yellow transition duration-500`}
//             href={`#${lowerCasePage}`}
//             onClick={()=>setSelectedPage(lowerCasePage)}
//         >
//             {page}
//         </AnchorLink>
//     )
// }

// const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}) => { 
//     const [isMenuToggled,setIsMenuToggled] = useState(false)
//     const navbarBackground = isTopOfPage?'':'bg-red';
//   return (
//     <div className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
//         <div className='flex items-center justify-between mx-auto w-5/6'>
//             <h4 className='text-3xl font-bold cursor-pointer'>JE</h4>
//             {/* desktop NAv */}
//             <div className=' hidden sm:flex md:justify-between gap-16 text-sm font-semibold'>
//                 <Link page='Home'
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}/>
//                 <Link page='Skills'
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}/>
//                 <Link page='Projects'
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}/>
//                 <Link page='Testimonials'
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}/>
//                 <Link page='Contact'
//                 selectedPage={selectedPage}
//                 setSelectedPage={setSelectedPage}/>
//             </div>
//             {/* Mobile View */}
//             <button className={`${!isMenuToggled ? 'sm:hidden rounded-full bg-red p-2 z-40':'md:hidden z-40 p-2'} ` }>
//                 <img className='sm:hidden ' src={!isMenuToggled? MenuIcon:closeIcon } alt="menu-icon" onClick={()=>setIsMenuToggled(prev=>!prev)}/>
//             </button>
//             {isMenuToggled && (<div className='md:hidden right-0 bottom-0 fixed h-full w-[300px] bg-blue py-16 '>
//                     <div className='sm:hidden flex flex-col gap-10 ml-[33%] mt-16 text-2xl text-deep-blue'>
//                     <Link page='Home'
//                     selectedPage={selectedPage}
//                     setSelectedPage={setSelectedPage}/>
//                     <Link page='Skills'
//                     selectedPage={selectedPage}
//                     setSelectedPage={setSelectedPage}/>
//                     <Link page='Projects'
//                     selectedPage={selectedPage}
//                     setSelectedPage={setSelectedPage}/>
//                     <Link page='Testimonials'
//                     selectedPage={selectedPage}
//                     setSelectedPage={setSelectedPage}/>
//                     <Link page='Contact'
//                     selectedPage={selectedPage}
//                     setSelectedPage={setSelectedPage}/>
//                     </div>
//                 </div>)}

//         </div>
        
//     </div>
//   )
// }

// export default Navbar