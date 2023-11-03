
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const DotGroup = ({setSelectedPage,selectedPage}) => {

  const selectedStyles = 'relative bg-yellow after:absolute after:w-8 after:h-8 after:border-yellow after:border-2 after:rounded-full after:top-[-50%] after:left-[-50%] mx-auto'
  return (
    <div className=' fixed   right-10 top-[60%]'>
      <div className='md:flex md:flex-col hidden  items-end gap-6'>
        <AnchorLink 
        className= {`${selectedPage==='home'?selectedStyles:'bg-dark-gray'}
         rounded-full h-4 w-4`}
        href={`#home`}
        onClick={()=>setSelectedPage('home')}/>
        <AnchorLink 
        className={`${selectedPage==='skills'?selectedStyles:'bg-dark-gray'}
        rounded-full h-4 w-4`}
        href={`#skills`}
        onClick={()=>setSelectedPage('skills')}/>
        <AnchorLink 
        className={`${selectedPage==='projects'?selectedStyles:'bg-dark-gray'}
        rounded-full h-4 w-4`}
        href={`#projects`}
        onClick={()=>setSelectedPage('projects')}/>
        <AnchorLink 
        className={`${selectedPage==='testimonials'?selectedStyles:'bg-dark-gray'}
        rounded-full h-4 w-4`}
        href={`#testimonials`}
        onClick={()=>setSelectedPage('testimonials')}/>
        <AnchorLink 
        className={`${selectedPage==='contact'?selectedStyles:'bg-dark-gray'}
        rounded-full h-4 w-4`}
        href={`#contact`}
        onClick={()=>setSelectedPage('contact')}/>
      </div>
    </div>
  )
}

export default DotGroup




























// import React from 'react'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// const DotGroup = ({selectedPage,setSelectedPage}) => {
//     const selectedStyles = 'relative bg-yellow  after:absolute after:w-6 after:h-6 after:rounded-full after:border-2 after:top-[-50%] after:left-[-50%] mx-auto after:border-yellow'
//   return (
//     <div className='md:flex md:flex-col hidden gap-6 fixed top-[60%] right-7'>
//          <AnchorLink
//             className={`${selectedPage==='home' ? selectedStyles:'bg-dark-gray'}
//             w-3 h-3 rounded-full`}
//             href='#home'
//             onClick={()=>setSelectedPage('home')}
//         />
//          <AnchorLink
//             className={`${selectedPage==='skills' ? selectedStyles:'bg-dark-gray'}
//             w-3 h-3 rounded-full`}
//             href='#skills'
//             onClick={()=>setSelectedPage('skills')}
//         />
//          <AnchorLink
//             className={`${selectedPage==='testimonials' ?selectedStyles:'bg-dark-gray'}
//             w-3 h-3 rounded-full`}
//             href='#testimonials'
//             onClick={()=>setSelectedPage('testimonials')}
//         />
//          <AnchorLink
//             className={`${selectedPage==='projects' ?selectedStyles:'bg-dark-gray'}
//             w-3 h-3 rounded-full`}
//             href='#projects'
//             onClick={()=>setSelectedPage('projects')}
//         />
//          <AnchorLink
//             className={`${selectedPage==='contact' ? 'bg-red':'bg-dark-gray'}
//             w-3 h-3 rounded-full`}
//             href='#contact'
//             onClick={()=>setSelectedPage('contact')}
//         />
        
//     </div>
//   )
// }

// export default DotGroup