import React from "react";
import { DiJavascript1, DiCss3, DiReact, DiPostgresql, DiNodejs } from 'react-icons/di';
import { SiExpress, SiSequelize } from 'react-icons/si';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { motion } from "framer-motion";
import {fadeIn} from '../variant';

const services = [
  {
    name: 'Frontend',
    tech: [AiOutlineHtml5, DiCss3, DiJavascript1, DiReact]
  },
  {
    name: 'Backend',
    tech: [DiNodejs, SiExpress]
  },
  {
    name: 'Database',
    tech: [DiPostgresql, SiSequelize]
  }
];

const Skills = () => {
  return (
    <section className='section flex justify-center items-center h-screen' id='skills'>
      <div>
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='text-[75px] font-primary tracking-wider mb-16  text-accent'>
            Skills
        </motion.div>
        
        <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="max-w-[476px]">
          {services.map((service, index) => {
            const { name, tech } = service;
            return (
              <div key={index} className="mb-4">
                <div>
                  <h4 className="text-[20px] font-primary tracking-wider font-semibold mb-4">{name}</h4>
                </div>
                <div className="flex">
                  {tech.map((Icon, index) => (
                    <Icon key={index} className="mr-4 text-6xl" />
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div> 

      </div>
    </section>
  );
};

export default Skills;