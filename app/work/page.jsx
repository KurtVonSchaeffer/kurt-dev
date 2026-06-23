"use client";
import { motion } from 'framer-motion';
import React, { useState, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import 'swiper/swiper-bundle.css';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSlidesBtns';

const projects = [
  {
    num: '01',
    category: 'Full Stack Fintech Platform',
    title: 'Zwane Financial Services',
    description: 'A registered credit provider platform with secure client authentication, loan management, and a modern split-screen UI built for financial services.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb5.png',
    live: 'https://zwane-official-three.vercel.app/',
    github: '',
    tags: ['Fintech'],
  },
  {
    num: '02',
    category: 'Full Stack Fintech App',
    title: 'MINT — Money App',
    description: 'A wealth-as-a-service platform for South Africa — invest, borrow, and transact. Features onboarding, account management, and a polished money-first UI.',
    stack: [{ name: 'React' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb6.png',
    live: 'https://mint-henna.vercel.app/',
    github: '',
    tags: ['Fintech'],
  },
  {
    num: '03',
    category: 'Frontend Marketing Site',
    title: 'MINT — Marketing Site',
    description: 'The public-facing marketing website for MINT (Money in Transit), featuring animated brand identity, product highlights, and conversion-focused design.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Framer Motion' }],
    Image: '/assets/work/Thumb12.png',
    live: 'https://mint-backupsite.vercel.app',
    github: '',
    tags: ['Web'],
  },
  {
    num: '04',
    category: 'Full Stack Business Website',
    title: 'Keiller Power Solutions',
    description: 'A professional website for an electrical and power solutions company, showcasing services, projects, and contact information with a clean corporate design.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Javascript' }],
    Image: '/assets/work/Thumb7.png',
    live: 'https://keiller-power-solutions-gamma.vercel.app',
    github: '',
    tags: ['Web'],
  },
  {
    num: '05',
    category: 'Full Stack Web App',
    title: 'Kanu',
    description: 'A modern full-stack web application with a sleek interface, built to deliver a seamless user experience across devices.',
    stack: [{ name: 'React' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb8.png',
    live: 'https://kanu-main.vercel.app',
    github: '',
    tags: ['Web'],
  },
  {
    num: '06',
    category: 'Full Stack Lending Platform',
    title: 'AlgoLend',
    description: 'A fintech lending platform with secure authentication, loan application flows, and a modern dashboard — built for speed and compliance.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb9.png',
    live: 'https://algolend-opal.vercel.app/auth/login.html',
    github: '',
    tags: ['Fintech'],
  },
  {
    num: '07',
    category: 'Full Stack Web App',
    title: 'Web Project',
    description: 'A responsive full-stack web application with modern UI patterns, smooth interactions, and a focus on clean user experience.',
    stack: [{ name: 'React' }, { name: 'Tailwind' }, { name: 'Next.js' }],
    Image: '/assets/work/Thumb10.png',
    live: 'https://web-ashy-alpha-58.vercel.app',
    github: '',
    tags: ['Web'],
  },
  {
    num: '08',
    category: 'Full Stack Admin Panel',
    title: 'AlgoLend Admin',
    description: 'A secure back-office admin panel for the AlgoLend platform, enabling staff to manage loan applications, users, and compliance workflows.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb11.png',
    live: 'https://admin.algolend.co.za/login',
    github: '',
    tags: ['Fintech'],
  },
  {
    num: '09',
    category: 'Full Stack Dev Hub',
    title: 'MINT Dev Hub',
    description: 'Internal developer hub for the MINT platform — a centralised portal for team onboarding, documentation, and tooling used across the MINT engineering stack.',
    stack: [{ name: 'Next.js' }, { name: 'Tailwind' }, { name: 'Node.js' }],
    Image: '/assets/work/Thumb13.png',
    live: 'https://mintdevhub.netlify.app/login',
    github: '',
    tags: ['Fintech'],
  },
  {
    num: '10',
    category: 'Full Stack E-commerce',
    title: 'Suevanna Beauty',
    description: 'A professional e-commerce website for a lash artist business, featuring product catalog, booking system, and modern design.',
    stack: [{ name: 'Html 5' }, { name: 'Css 3' }, { name: 'Javascript' }],
    Image: '/assets/work/Thumb1.png',
    live: 'https://www.suevanna-beauty.com/',
    github: 'https://github.com/KatoGraphix/suevanna-beauty-1.git',
    tags: ['Web'],
  },
  {
    num: '11',
    category: 'Frontend Drawing App',
    title: 'Retro Sketch',
    description: 'Create your own pixel art in a retro-inspired, feature-rich drawing app with multiple tools and color palettes.',
    stack: [{ name: 'Html 5' }, { name: 'CSS' }, { name: 'Javascript' }],
    Image: '/assets/work/Thumb3.png',
    live: 'https://retro-sketch.vercel.app/',
    github: 'https://github.com/KatoGraphix/RETRO-SKETCH.git',
    tags: ['Tools'],
  },
  {
    num: '12',
    category: 'FullStack Todo App',
    title: 'TaskMaster Pro',
    description: 'A modern, responsive todo application built with React that helps you organize tasks, projects, and notes with a beautiful, intuitive interface.',
    stack: [{ name: 'React' }, { name: 'Tailwind' }, { name: 'Next.js' }],
    Image: '/assets/work/Thumb2.png',
    live: '',
    github: 'https://github.com/KatoGraphix/Todo_App.git',
    tags: ['Tools'],
  },
  {
    num: '13',
    category: 'Frontend Weather App',
    title: 'Weather Forecast',
    description: 'A responsive weather application that provides real-time weather updates and forecasts based on user location or search queries.',
    stack: [{ name: 'Node.js' }, { name: 'Tailwind' }, { name: 'Next.js' }],
    Image: '/assets/work/Thumb4.png',
    live: 'https://cyan-ardenia-13.tiiny.site/',
    github: 'https://github.com/KatoGraphix/weather-app-assesment.git',
    tags: ['Tools'],
  },
];

const filters = ['All', 'Fintech', 'Web', 'Tools'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [swiperKey, setSwiperKey] = useState(0);

  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter(p => p.tags.includes(activeFilter)),
    [activeFilter]
  );

  const [project, setProject] = useState(filteredProjects[0]);

  useEffect(() => {
    setProject(filteredProjects[0]);
    setSwiperKey(k => k + 1);
  }, [activeFilter]);

  const handleSlideChange = (swiper) => {
    setProject(filteredProjects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto px-4">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center xl:justify-start">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
                ${activeFilter === f
                  ? 'bg-accent text-primary border-accent'
                  : 'border-white/20 text-white/60 hover:border-accent hover:text-accent'
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
          {/* Project info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-4xl sm:text-6xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-sm sm:text-base text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg xl:text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-colors duration-200" />
                        </TooltipTrigger>
                        <TooltipContent><p>Live Project</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-colors duration-200" />
                        </TooltipTrigger>
                        <TooltipContent><p>Github repository</p></TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              key={swiperKey}
              spaceBetween={0}
              slidesPerView={1}
              className="w-full h-auto min-h-[300px] xl:min-h-[400px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {filteredProjects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={p.Image}
                        fill
                        className="object-cover object-top"
                        alt={`${p.title} project screenshot`}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all cursor-pointer"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
