import { Link } from 'react-scroll';
import Logo from '../img/banner5.jpg';
//curriculum
import Cv from '../Pdf/GustavoFernandez-Frontend-FullStack.pdf';
//iconos
import { FaGithub, FaLinkedin } from 'react-icons/fa';
//Animacion
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';
//Links a redes
const urlLink = "https://www.linkedin.com/in/luis-gustavo-fernandez-a3a0b8255/";
const urlGit = "https://github.com/GusFernandez98";


const Banner = () => {
    return(
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' 
        id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    <div>
                        {/*Texto */}
                        <motion.h1 
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                            className='mb-6 text-[30px] font-bold leading-[0.8]'>
                            Hi!👋🏼<span> i am Gustavo Fernández </span>
                        </motion.h1>

                        <motion.div 
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}
                        className='mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'>
                            <span>
                            <TypeAnimation
                             sequence={[
                                'Jr. Full Stack Web Developer',
                                3000,
                            ]}
                            speed={50}
                            className="text-accent"
                            wrapper='span'
                            repeat={Infinity}
                            />
                            </span>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}} 
                            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

                        <Link to='contact' activeClass='active'
                        smooth={true}
                        spy={true}>
                        <button className='btn btn-lg'>Contact me</button>
                        </Link>
                            
                        <a href={Cv} target='_blank' className='text-gradient btn-link'>Download cv</a>
                        </motion.div>

                        {/* Redes */}
                        <motion.div 
                        variants={fadeIn('up', 0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}           
                        className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                            <a href={urlLink} target='_blank'>
                                <FaLinkedin />
                            </a>
                            <a href={urlGit} target='_blank'>
                                <FaGithub/>
                            </a>

                        </motion.div>
                    </div>

                        {/*imagen */}
                    <motion.div
                        variants={fadeIn('right', 0.9)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}                   
                        className='hidden lg:flex flex-1 max-w-[450px] lg:max-w-[500px] mx-auto '>
                        <img className= 'rounded-full opacity-60' src={Logo} alt='programador'/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Banner; 