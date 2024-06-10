import React, { useState } from "react";
import { fadeIn } from "../variant";
import { motion } from "framer-motion"; 
import logo from '../img/imgAbout.jpg';

const About  = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className='section' id='about'>
           <div className='container mx-auto'>
            
            {/* img */}
            <motion.div 
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
                className='max-w-[450px] lg:max-w-[500px] mx-auto mb-8'>
            <img className= 'rounded-full opacity-50' src={logo} alt="i am"/>
            </motion.div>

            {/*texto */}
            <div>
                <motion.h1 
                    variants={fadeIn('up', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className='mb-4 text-[25px] font-primary text-accent'
                >
                ·Un poco sobre mi 🙋🏻‍♂️:
                </motion.h1>
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className='flex-1 text-[18px]'
                >
                Soy de San Luis, Argentina, y antes de adentrarme en el mundo de la tecnología, estaba estudiando Derecho en la universidad, donde actualmente me encuentro en la etapa final. Sin embargo, mi interés por la programación comenzó al observar a conocidos que trabajaban en ese campo, lo cual despertó mi curiosidad y me llevó a explorar esta nueva área. Quedé totalmente encantado y decidí sumergirme por completo en el estudio de la programación, comenzando de forma autodidacta hasta que descubrí la existencia de los bootcamps de programación. Una vez informado, decidí inscribirme en uno, aunque fue un desafío, logré superarlo y hoy me encuentro orgulloso de haber completado y aprobado el bootcamp.
                </motion.p>
                <br />
                {isExpanded && (
                        <motion.div
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.7}}>
                            <p className='flex-1 text-[18px]'>
                                Mi enfoque constante en el crecimiento personal y la mejora continua me impulsa a aprender y desarrollarme constantemente. Estoy dispuesto a asumir desafíos y responsabilidades adicionales para expandir mis conocimientos y habilidades. Mantengo un enfoque práctico a través de la construcción de proyectos con el objetivo de perfeccionar las tecnológicas aprendidas, para asi poder alcanzar el éxito en este camino.
                                Como desarrollador en crecimiento acepto que todavía tengo mucho por aprender, pero mi determinación y voluntad me impulsan a enfrentar desafíos con entusiasmo. Estoy listo para asumir responsabilidades adicionales y crecer profesionalmente. Estoy emocionado por las oportunidades que me esperan y estoy abierto a nuevos proyectos y desafíos que me permitan seguir creciendo en mi carrera como desarrollador.
                            </p>
                        </motion.div>
                    )}
                    <div className='flex justify-center'>
                        <button onClick={toggleExpansion} className='mt-4 text-accent'>
                            {isExpanded ? 'Ver menos' : 'Ver más'}
                        </button>
                    </div>
            </div>
           </div>
        </section> 
    )
};

export default About;