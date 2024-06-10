import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {fadeIn} from '../variant';

// require('dotenv').config();
// const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY } = process.env;


const Contacts = () => {

    const [userValues, setUserValues] = useState("");
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserValues((prevInputValues) => ({
          ...prevInputValues,
          [name]: value
        }));
      };
    

    const handleButtonClick = () => {
        setTimeout(() => {
            setUserValues({
            user_name: "",
            user_email: "",
            message: ""
          });
        }, 5000); // Agrega un retraso de 5 segundo
      };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zhxbms9', 'template_vf111lm', form.current, 'dZReS3uPWyjvs1_F3')
        .then((result) => {
            alert('Submitted successfully');
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section className='py-16 lg:section' id='contact'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/*Texto */}
                    <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className='flex-1'>
                        <div>
                            <h2 className='text-[40px] lg:text-[80px] leading-none mb-12 text-accent'>CONTÁCTAME!</h2>
                        </div>
                    </motion.div>

                    {/*Formulario*/}
                    <motion.form ref={form} onSubmit={sendEmail}
                    variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.7}}
                    className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
                        <input 
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-2'
                        type='text'
                        name="user_name"
                        placeholder='Nombre'
                        value={userValues.user_name}
                        onChange={handleInputChange}
                        />

                        <input 
                        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                        type='text'
                        name="user_email"
                        placeholder='Email'
                        value={userValues.user_email}
                        onChange={handleInputChange}
                        />

                        <textarea
                        className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                        name="message"
                        placeholder='tu mensaje'
                        value={userValues.message}
                        onChange={handleInputChange}
                        ></textarea>
                        <button onClick={handleButtonClick} className='btn btn-lg'>Enviar mensaje</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
};

export default Contacts;