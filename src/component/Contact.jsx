import React from 'react'
import LineGradient from './LineGradient'
import { contactImg } from '../assets'


const Contact = () => {
  return (
    <section id='contact' className='py-12'>
            <h4 className='md:text-3xl sm:text-xl text-sm mb-3  md:w-[50%] w-5/6 text-center md:text-right mx-auto md:mx-0 md:ml-auto font-semibold'>
                <span className='text-yellow'>CONTACT ME</span>  TO GET STARTED
                <LineGradient width='w-[25%] md:w-' margin='md:ml-auto md:mx-0 mx-auto mt-6'/>
            </h4>
            <div className='flex flex-col md:flex-row gap-16 items-center justify-center mt-8 '>
                <div>
                    <img src={contactImg} alt="contact" />
                </div>
                <form className='self-start font-open_Sans'>
                    <input type="text" placeholder='Name' className='w-full bg-blue mb-3 px-4 py-3 text-sm outline-4 outline-blue placeholder:text-deep-blue'/>
                    <input type="email" placeholder='Email' className='w-full  bg-blue mb-3 px-4 py-3 text-sm outline-4 outline-blue placeholder:text-deep-blue' />
                    <textarea name="" id="" placeholder='Message' className='w-full bg-blue p-4 mb-4 border-2 border-blue outline-4 outline-blue text-sm' ></textarea>
                    <button className='bg-yellow text-sm text-deep-blue font-open_Sans font-semibold py-4 px-2'>SEND ME A MESSAGE</button>
                </form>
            </div>
    </section>
  )
}

export default Contact