import React from 'react'
import LineGradient from './LineGradient'
import { person1, person2, person3 } from '../assets'
import { motion } from 'framer-motion'

const Card = ({text,img,bgColor,value})=>{
  return(
    <motion.div
    initial = 'hidden'
    whileInView={'visible'}
    viewport={{once:false,amount:0.5}}
    transition={{delay:value,duration:0.5}}
    variants={{
      hidden:{opacity:0, scale:0.6},
      visible:{opacity:1, scale:1}
    }}
    className={`${bgColor} h-[300px] relative md:basis-full my-auto md:px-0 px-8 flex items-center`}>
      <div className='flex  md:flex-col flex-row gap-0  justify-center items-center md:absolute  md:top-[-35%]  '>

        <img src={img} alt="img" className='mx-auto w-[50%] ' />
        <p className='text-6xl font-play self-start pl-8 md:pl-16'>“</p>
        {text}
      </div>
    </motion.div>
  )
}

const Testimonial = () => {
  return (
   <section id='testimonials' className='  pt-[4rem] pb-6 w-full'>
        <div className=' mb-24'>
            <h4 className='md:text-6xl inline-block text-4xl mb-3 font-semibold text-red'>TESTIMONIALS
            <LineGradient width='w-[49%] md:w-' margin='ml-auto mt-6'/></h4>
            
            <p className='w-full md:w-2/6  mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae autem corporis iusto dignissimos dolor asperiores cum, corrupti vitae aspernatur quidem.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center md:gap-4 gap-16 py-16'>
            <Card text={<p className='pl-4 md:text-center text-left w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni?</p>}
                  img = {person1}
                  bgColor='bg-blue'
                  value={0}
            />
            <Card text={<p className='pl-4 md:text-center text-left w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni?</p>}
                  img = {person2}
                  bgColor='bg-red'
                  value={0.2}
            />
            <Card text={<blockquote className='pl-4 md:text-center text-left w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, magni?</blockquote>}
                  img = {person3}
                  bgColor='bg-yellow'
                  value={0.4}
            />

        </div>

        
   </section>
  )
}

export default Testimonial