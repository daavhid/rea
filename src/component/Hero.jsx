
import React from 'react'
import { profileImg } from '../assets'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'
import SocialMedia from './SocialMedia'

const Hero = () => {
    const borderStyle = 'relative z-[-10px]  md:after:border-2 md:after:z-[-10] md:after:rounded-t-[400px] md:after:absolute md:after:h-full md:after:w-full md:after:border-blue md:after:top-[-40px] md:after:left-[-50px] after:w-full after:h-full '
  return (
    <section id='home' className=' w-full py-16 mb-8 mx-auto font-play'>
         <div  className='flex  justify-center flex-col md:flex-row items-center md:mt-0   z-50 h-full  '>
            <div className={`md:order-2 flex justify-center items-center mx-auto md:mt-32 max-w-[350px] min-w-[200px]  z-30 ${borderStyle} mb-10`}>
                <img src={profileImg} alt="profile" className='hover:filter hover:saturate-200 duration-500' />
            </div>
        <div className=' md:text-start text-center mt-5  basis-2/5'>
            <motion.div 
            initial ='hidden'
            whileInView={'visible'}
            viewport={{once:true,amount:0.5}}
            transition={{duration:1}}
            variants={{
                hidden :{opacity:0,x:-50,},
                visible:{opacity:1,x:0}
            }}>
                <p className='md:text-6xl text-4xl'>Jane {''}
                <span className='relative z-20 sm:text-deep-blue sm:after:content-brush sm:after:absolute sm:after:top-[-130px] md:after:top-[-110px] sm:after:-z-10 sm:after:left-[-90px] md:after:left-[-90px] after:scale-[.6] '>Esper</span></p>
                <p className=' font-open_Sans mt-5 md:mt-10 text-sm w-4/5 md:mx-0 mx-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tenetur aliquid libero quam dolorem totam.</p>

            </motion.div>
           
            <motion.div
             initial ='hidden'
             whileInView={'visible'}
             viewport={{once:true,amount:0.5}}
             transition={{delay:0.2,duration:1}}
             variants={{
                 hidden :{opacity:0,x:-100},
                 visible:{opacity:1,x:0}
             }} 
            className='flex md:justify-start justify-center mt-5 '>
                <AnchorLink
                href='#contact'
                onClick={()=>setSelectedPage('contact')}
                 className='bg-gradient-rainblue py-3 px-3 xs:px-7 hover:bg-blue text-deep-blue hover:text-white duration-500 font-semibold rounded-sm'>Contact Me
                 </AnchorLink>
                 <AnchorLink
                href='#contact'
                onClick={()=>setSelectedPage('contact')}
                 className='bg-gradient-rainblue py-0.5 pr-0.5 hover:bg-blue flex items-center font-semibold rounded-sm'>
                    <div className=' bg-deep-blue py-3 md:px-10 px-7 hover:text-red duration-500'>
                        Let's Talk
                    </div>
                 </AnchorLink>
            </motion.div>
            <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{once:true,amount:0.8}}
            transition={{delay:0.5,duration:1}}
            variants={{
                hidden:{opacity:0, x:-100},
                visible:{opacity:1, x:0}
            }}>
                <SocialMedia/>
            </motion.div>
        </div>

    </div>
    </section>
   
  )
}

export default Hero
























// import React from 'react'
// import { profileImg } from '../assets'
// import { motion } from 'framer-motion'
// import AnchorLink from 'react-anchor-link-smooth-scroll'
// import SocialMedia from './SocialMedia'

// const Hero = ({setSelectedPage}) => {
//   return (
//     <section id='home'
//     className='md:flex md:justify-between mx-auto md:items-center w-5/6 md:h-full gap-16 py-12 '>
//         {/* image */}
//         <div className='md:order-2 flex justify-center  items-center basis-3/5 z-10 mt-16 md:mt-32' >
//             <div className='relative z-0  md:after:absolute md:after:-top-10 md:after:-left-20 md:after:border-2 md:after:border-blue sm:after:rounded-t-[400px] after:w-full sm:after:h-full sm:after:-z-10'>
//                 <img src={profileImg } alt="profile" 
//                className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[350px]'/>
//             </div>
//         </div >
//         <div  className='basis-2/5 mt-16 sm:mr-20 mx-auto w-full '>
//           <motion.div
//           initial='hidden'
//           whileInView='visible'
//           viewport={{once:true,amount:0.5}}
//           transition={{delay:0.2,duration:0.5}}
//           variants={{
//             hidden:{opacity:0,x:-50},
//             visible:{opacity:1,x:0},
//           }}

//           >
//             <p className='text-4xl xs:text-6xl z-10 text-center md:text-start'>Jane {''}
//             <span className='sm:relative  z-30 sm:after:content-brush after:absolute after:-top-[120px] after:-left-10 after:-z-10  sm:font-semibold sm:text-deep-blue'>Esper</span></p>
//             <p className='text-center mt-10 mb-6 text-sm md:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum ipsam veniam cupiditate consequuntur quae voluptatem similique impedit perferendis, accusantium temporibus.</p>
//           </motion.div>


//           <motion.div
//           className=' md:text-start flex md:justify-start justify-center'
//           initial='hidden'
//           whileInView='visible'
//           viewport={{once:true,amount:0.5}}
//           transition={{delay:0.2,duration:1}}
//           variants={{
//             hidden:{opacity:0,x:-50},
//             visible:{opacity:1,x:0},
//           }}

//           >
//             <AnchorLink
//             className='  bg-gradient-rainblue hover:bg-blue hover:text-white  text-deep-blue py-3 px-3 xs:px-7 font-semibold rounded-sm '
//             href='#contact'
//             onClick={()=>setSelectedPage('contact')}
//         >
//           Contact Me
//         </AnchorLink>
//         <AnchorLink
//             className=' bg-gradient-rainblue  py-0.5 pr-0.5 font-semibold rounded-r-sm'
//             href='#contact'
//             onClick={()=>setSelectedPage('contact')}
//         >
//           <span className='  flex justify-center items-center h-full w-full  bg-deep-blue px-7 xs:px-10 hover:text-red duration-500'>
//             Let's Talk
//           </span>
//           {/* <div className='bg-deep-blue w-full h-full flex items-center justify-center'>
//             Let's Talk
//           </div> */}
//         </AnchorLink>

//           </motion.div>
//           <motion.div
//             className=' md:text-start flex md:justify-start justify-center'
//             initial='hidden'
//             whileInView='visible'
//             viewport={{once:true,amount:0.5}}
//             transition={{delay:0.5,duration:1}}
//             variants={{
//               hidden:{opacity:0,x:-50},
//               visible:{opacity:1,x:0},
//             }}
//           >
//             <SocialMedia/>
//           </motion.div>

//         </div>
        
        
//     </section>
//   )
// }

// export default Hero