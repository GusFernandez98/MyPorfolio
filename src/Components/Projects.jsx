import React from "react";
//imgs
import proyecto1 from '../img/app rym.png'
import proyecto2 from '../img/app perritos.png';
//animation
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
const urlGit = "https://github.com/GusFernandez98";

const Projects = () => {
    return (
        <div className='section' id='projects'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        {/* text */}
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}>
                            <h2 className='h2 leading-tight text-accent mb-8'>My projects</h2>
                            <p className='max-w-sm mb-16 text-[19px]'>Projects carried out with the aim of putting into practice everything learned</p>
                            <a href={urlGit}>
                            <button className='btn btn-lg'>Github</button>
                            </a>
                        </motion.div>
                        {/* Aca puedo agregar un proyecto mas*/}
                        {/*<div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'></div>*/}
                    </div>

                    <div className='flex-1 flex flex-col gap-y-10'>
                        {/*proyecto 2*/}
                        <motion.div 
                            variants={fadeIn('left', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                        {/*overlay */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={proyecto2} alt="DogApp"/> 
                        {/*Subtitulo */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Individual project</span>
                            </div>
                        {/*Titulo */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-4x1 text-gradient'>Dog App</span>
                            </div>
                        </motion.div>

                        {/*proyecto 3 */}
                        <motion.div
                         variants={fadeIn('left', 0.3)}
                         initial='hidden'
                         whileInView={'show'}
                         viewport={{once: false, amount: 0.7}}
                         className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                        {/*overlay */}
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={proyecto1} alt="DogApp"/> 
                        {/*Subtitulo */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Integrator project</span>
                            </div>
                        {/*Titulo */}
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-4x1 text-gradient'>Rick & Morty</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;