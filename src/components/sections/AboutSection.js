'use client';

import Image from 'next/image';
import React from 'react'
import RotatingText from '../ui/RotatingText';
import { useTheme } from 'next-themes';


const AboutSection = () => {
    const { theme } = useTheme();
  return (
    <div className="flex  items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-1/2 p-6">
        <Image
          src="/images/fayad-color.png"
          alt="Alfayad profile picture"
          width={1000}
          height={1000}
          className="w-full h-full object-contain rounded-lg  mb-6"
        />
    
      </div>
      <div className='h-screen flex flex-col w-1/2 justify-start py-24 items-center'>
        <h1 className='text-8xl font-bold text-[#683CD8] text-center mb-4'>About Me</h1>
        <div className={`flex items-center justify-center text-3xl gap-4  w-full mb-4  p-4 rounded-lg`}>
            Im a <RotatingText
  texts={['Backend Developer', 'Frontend Developer', 'Full Stack Developer', 'Web Developer' , 'Software Engineer', 'UX Designer', 'UI Designer' , 'Creative Coder' , 'Tech Enthusiast' , 'Open Source Contributor', 'Problem Solver', 'Tech Innovator', 'Tech Explorer', 'Ai Engineer', 'AI Developer']}
  mainClassName={`px-2 sm:px-2 md:px-3  text-${theme === 'dark' ? 'white' : 'black'}  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg`}
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
        </div>
        <p className='text-2xl text-left tracking-wider'>
            I am a passionate web developer with a focus on creating dynamic and responsive web applications. My journey in web development began with a fascination for how websites work, and it has since evolved into a full-fledged career. I enjoy tackling complex problems and finding elegant solutions through code. When I&apos;m not coding, you can find me exploring new technologies or contributing to open-source projects.
        </p>
      </div>

      
    </div>
  )
}

export default AboutSection
