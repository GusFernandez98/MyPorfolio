// import React from "react";
// import { DiJavascript1, DiCss3, DiReact, DiPostgresql, DiNodejs } from 'react-icons/di';
// import { SiExpress, SiSequelize } from 'react-icons/si';
// import { AiOutlineHtml5 } from 'react-icons/ai';
// import { motion } from "framer-motion";
// import {fadeIn} from '../variant';

// const services = [
//   {
//     name: 'Frontend',
//     tech: [AiOutlineHtml5, DiCss3, DiJavascript1, DiReact]
//   },
//   {
//     name: 'Backend',
//     tech: [DiNodejs, SiExpress]
//   },
//   {
//     name: 'Database',
//     tech: [DiPostgresql, SiSequelize]
//   }
// ];

// const Skills = () => {
//   return (
//     <section className='section' id='skills'>
//       <div className='container mx-auto'>
//       <div className="flex justify-center items-center h-screen">
      
//         <motion.div
//             variants={fadeIn('up', 0.2)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{once: false, amount: 0.7}}
//             className='text-[75px] font-primary tracking-wider mb-16  text-accent mx-16'>
//               Skills
//         </motion.div>
        
//         <motion.div 
//             variants={fadeIn('up', 0.4)}
//             initial='hidden'
//             whileInView={'show'}
//             viewport={{once: false, amount: 0.7}}
//             className="max-w-[476px]">
//           {services.map((service, index) => {
//             const { name, tech } = service;
//             return (
//               <div key={index} className="mb-4">
//                 <div>
//                   <h4 className="text-[20px] font-primary tracking-wider font-semibold mb-4">{name}</h4>
//                 </div>
//                 <div className="flex">
//                   {tech.map((Icon, index) => (
//                     <Icon key={index} className="mr-4 text-6xl" />
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//         </motion.div> 
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
 
import { motion } from 'framer-motion'
import { fadeIn } from '../variant';
//icons
import { DiJavascript1, DiCss3, DiReact, DiPostgresql} from 'react-icons/di'
import { SiRedux, SiExpress, SiSequelize} from 'react-icons/si'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaNode } from 'react-icons/fa'



const Skills = () => {

  const servicesFront = [
    {
      name: 'Frontend',
      description: <div className="flex flex-wrap justify-start">

        <div>
          <AiOutlineHtml5 className="mr-6 text-3xl md:text-4xl" />
        </div>

        <div>
          <DiCss3 className="mr-6 text-3xl md:text-4xl" />
        </div>
  
        <div>
          <DiJavascript1 className="mr-6 text-3xl md:text-5xl" />
        </div>

        <DiReact className="mr-6 text-3xl md:text-5xl" />

        <div>
          <SiRedux className="mr-6 text-2xl md:text-3xl" />
        </div>  
      </div>,
  
    },
  ]

  const servicesBack = [
    {
      name: 'Backend',
      description: <div className="flex flex-wrap justify-start">
      <div>
      <FaNode className="mr-6 text-3xl md:text-5xl" />
    </div>

    <div>
      <SiExpress className="mr-6 text-2xl md:text-4xl" />
    </div>

    <div>
      <DiPostgresql className="mr-6 text-3xl md:text-4xl" />
    </div>

    <div>
      <SiSequelize className="mr-6 text-2xl md:text-3xl" />
    </div>

    </div>
    }
  ]



  return <section className='section' id='skills'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/*text */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-cover lg:max-h-[682px] '>
          <h2 className='h2 leading-tight text-accent mb-8'>Habilidades</h2>
          <h3 className=' max-w-[455px] mb-16 text-[19px]'>tecnologías aprendidas a lo largo de este tiempo, las cuales sigo perfeccionando día a día.</h3>
        </motion.div>

          {/*ICONOS DEL FRONTEND */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>{servicesFront.map((front, index) => {
            //destructure service
            const { description, name} = front;
            return (
              <div className='border-b border-white/20 h-[150px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-6 text-accent'>{name}</h4>
                  <p className='font-secondary leading-tight text-base'>{description}</p>
                </div>
              </div>
            )
          })}</motion.div>

          {/*ICONOS DEL FRONTEND */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}>{servicesBack.map((back, index) => {
            //destructure service
            const { description, name} = back;
            return (
              <div className='border-b border-white/20 h-[150px] mb-[38px] flex' key={index}>
                <div className='max-w-[476px]'>
                  <h4 className='text-[18px] tracking-wider font-primary font-semibold mb-6 text-accent'>{name}</h4>
                  <p className='font-secondary leading-tight text-base'>{description}</p>
                </div>
              </div>
            )
          })}</motion.div>
          
        </div>
      </div>
  </section>;
};

export default Skills;