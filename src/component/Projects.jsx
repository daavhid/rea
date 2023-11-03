import React from 'react'
import { project1, project2, project3, project4, project5, project6, project7 } from '../assets'
import LineGradient from './LineGradient'
import { motion, stagger } from 'framer-motion'

const ProjectCard = ({projectName,img,text})=>{
    return(
        <motion.div
        initial= 'hidden'
        whileInView={'visible'}
        transition={{duration:0.5}}
        variants={{
            hidden:{opacity:0,scale:0.6},
            visible:{opacity:1,scale:1}

        }}
        
        className='w-5/6 mx-auto md:w-full center relative z-10 '>
            <img src={img} alt="project7" className='mx-auto w-full' />
            <a href="#"
            target='_blank'>
                <div className='absolute duration-500 text-black flex flex-col justify-center items-center  top-0 left-0 w-full h-full  hover:bg-gray/70 hover:opacity-100 opacity-0 '>
                    <h2 className='w-5/6 mb-10'>{`${projectName}`}</h2>
                    {text}

                </div>
            </a>
        </motion.div>
    )
}

const container = {
    hidden:{},
    visible:{
        
    }
}

const Projects = () => {
  return (
    <section id='projects'
    className='py-16 mb-16'>
        <div className='mx-auto  text-center pb-8 '>
            <h4 className='text-6xl mb-3 font-semibold '><span className='text-red'>PRO</span>JECTS
            </h4>
            <LineGradient width='w-3/4 md:w-2/5' margin='mx-auto'/>
            
            <p className='w-full md:w-3/4 text-center mx-auto mt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae autem corporis iusto dignissimos dolor asperiores cum, corrupti vitae aspernatur quidem.</p>
        </div>

        <motion.div
        initial = 'hidden'
        whileInView={'visible'}
        viewport={{once:true,amount:0.5}}
        transition={{duration:1}}
        variants={container}
        className='grid w-5/6 md:grid-cols-3 mx-auto text-center grid-cols-1 gap-0'>
            <div className='w-5/6 md:w-full mx-auto h-[100px] flex items-center justify-center md:h-full  bg-red'>
                 <p className='md:text-3xl text-2xl  uppercase w-5/6 font-play'>Beautiful User Interface</p>
            </div>

                <ProjectCard 
                    projectName='project1'
                    img={project1}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />

                <ProjectCard 
                    projectName='project2'
                    img={project2}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />
        
                <ProjectCard 
                    projectName='project3'
                    img={project3}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />
           
                <ProjectCard 
                    projectName='project4'
                    img={project4}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />
        
                <ProjectCard 
                    projectName='project5'
                    img={project5}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />
           
                <ProjectCard 
                        projectName='project6'
                        img={project6}
                        text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />

                <ProjectCard 
                    projectName='project7'
                    img={project7}
                    text= {<p className='text-sm w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt maxime animi officia nam impedit hic distinctio quis ullam magni accusamus?</p>}
                />

            <div className='w-5/6 md:w-full mx-auto h-[100px] md:h-full flex items-center justify-center   bg-blue'>
                <p className='md:text-3xl text-2xl w-5/6 font-semibold uppercase font-play'>Smooth User Expreience</p>
            </div>
        </motion.div>
    </section>
  )
}

export default Projects