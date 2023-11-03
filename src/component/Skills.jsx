import React from 'react'
import LineGradient from './LineGradient'
import { skillsimg } from '../assets'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <section id='skills'className='py-16 w-full'>
        <div className='flex justify-between  md:flex-row flex-col py-16 md:gap-32 gap-16'>
            <motion.div
            className=''
            initial = 'hidden' 
            whileInView={'visible'}
            viewport={{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden:{opacity:0,y:100},
                visible:{opacity:1,y:0}
            }}>
                <h4 className='text-6xl mb-6 font-semibold'>MY <span className='text-red'>SKILLS</span></h4>
                <LineGradient width='w-[55%]'/>   
                <p className='mt-5 md:mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis.</p>
            </motion.div>
            <div className='relative w-full z-10 md:after:absolute md:after:w-full md:after:h-full md:after:border-2 md:after:border-blue md:after:top-[-40px] after:z-[-10] after:left-[-40px]'>
                <img src={skillsimg} alt="skills" className='w-full' />
            </div>
            
        </div>
        <div className='flex md:flex-row flex-col md:gap-32 gap-10 pb-16  '>
            <motion.div 
                initial = 'hidden' 
                whileInView={'visible'}
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.5,duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-100},
                    visible:{opacity:1,x:0}
                }}
            >
                <div
                    
                 className='mb-5 relative md:py-10 md:pt-2 py-4 pt-0 z-10 after:absolute md:after:w-[71%]  after:w-[50%] after:h-full after:bg-blue after:top-0 after:right-0 after:z-[-10] after:ml-32 text-4xl'>
                    01 <br />
                    Experience
                </div>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium quia magnam iure doloribus animi.</p>
            </motion.div>
            <motion.div
             initial = 'hidden' 
             whileInView={'visible'}
             viewport={{once:true,amount:0.5}}
             transition={{delay:1,duration:0.5}}
             variants={{
                 hidden:{opacity:0,y:100},
                 visible:{opacity:1,y:0}
             }} >
                <div className='mb-5 relative md:py-10 md:pt-2 pt-0 py-4 z-10 after:absolute md:after:w-[71%] after:w-[50%] after:h-full after:bg-red after:top-0 after:right-0 after:z-[-10] text-4xl'>
                    02 <br />
                    Innovative
                </div>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusantium dolor eaque molestiae architecto porro?</p>
            </motion.div>
            <motion.div 
            initial = 'hidden' 
            whileInView={'visible'}
            viewport={{once:true,amount:0.5}}
            transition={{delay:1.5,duration:0.5}}
            variants={{
                hidden:{opacity:0,x:100},
                visible:{opacity:1,x:0}
            }} >
                <div className='mb-5 relative md:py-10 md:pt-2 pt-0 py-4  z-10 after:absolute md:after:w-[71%] after:w-1/2 after:h-full after:bg-yellow after:top-0 after:right-0 after:z-[-10] after:ml-32 text-4xl top-'>
                    03 <br />
                    Imaginative
                </div>
                <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto laudantium quia magnam iure doloribus animi.</p>
            </motion.div>
        </div>
    </section>
  )
}

export default Skills