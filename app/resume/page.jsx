"use client";
import{
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact, 
  FaFigma,
  FaNodeJs,
FaPython } 
  from 'react-icons/fa';
  import {SiTailwindcss, SiMysql, SiMongodb, SiNextdotjs,  } from 'react-icons/si';


//about me
const about ={
  title: 'About Me',
  Description:"Senior full stack developer and product owner with 5+ years across the full software development lifecycle — leading development teams and owning platforms end to end. I architect and ship scalable fintech and biotech products, and increasingly automate the work itself, building AI-driven systems that assign developer tasks, streamline onboarding, and generate invoices. Equal parts hands-on engineer, technical architect, and product owner, with a bias for clean code, sound architecture, and shipping.",
  Info:[
    {
      fieldName:"Name",
      fieldValue:"Kurt Von Schaeffer"
    },
    {
      fieldName:"Phone",
      fieldValue:"+27 73 086 7911"
    },
    {
      fieldName:"Experience",
      fieldValue:"5+ years"
    },
    {
      fieldName:"Nationality",
      fieldValue:"South African"
    },
    {
      fieldName:"Email",
      fieldValue:"kurt@kvsdev.co.za"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Afrikaans"
    },
  ]
};
//exp
const experience = {
  icon:'/assets/resume/badge.svg',
  title: ' My Experience',
  Description:"5+ years across the full software development lifecycle — from hands-on engineering to leading teams, owning products, and architecting enterprise-grade fintech and biotech platforms.",
  items:[
    {
      company:"Mint",
      position:"Senior Full Stack Developer & Product Owner",
      duration:"2025 — Present"
    },
    {
      company:"Navertica cc SA",
      position:"Software Developer",
      duration:"2024 — 2025"
    },
    {
      company:"Capital Legacy",
      position:"Systems Engineer / Software Developer",
      duration:"2022 — 2023"
    },
    {
      company:"Amrod",
      position:"HP READY Graphic Layout Artist",
      duration:"2021 — 2022"
    },
    {
      company:"Amrod",
      position:"Layout Artist",
      duration:"2019 — 2021"
    },
  ]
};
//EDUCATION
const education = {
  icon:'/assets/resume/cap.svg',
  title: ' My Education',
  Description:"A strong academic foundation in software development and graphic design, backed by continuous self-learning through online courses and certifications.",
  items:[
    {
      institution:"Udemy",
      degree:"SQL bootcamp",
      duration:"2023",
    },
    {
      institution:"Udemy",
      degree:"full stack web development  bootcamp",
      duration:"2022",
    },
    {
      institution:"Rosebank College",
      degree:"Information Technology in Software Development",
      duration:"2015-2020",
    },
    {
      institution:"CTU Training Solutions",
      degree:"Graphic and Web Design ",
      duration:"2012",
    },
    
    
    
    
  ]
};
//Skills
const skills = {
  title:"my skills",
  Description:"Specialized in building scalable, end-to-end products — from credit engines and AI-driven automation to fintech platforms and biotech systems, using a modern full-stack toolkit.",
  skillList:[
    {
      icon:<FaReact />,
      name:'React',
    },
    {
      icon:<SiNextdotjs />,
      name:'Next.js',
    },
    {
      icon:<FaNodeJs />,
      name:'Node.js',
    },
    {
      icon:<SiTailwindcss />,
      name:'Tailwind CSS',
    },
    {
      icon:<FaJs />,
      name:'TypeScript / JS',
    },
    {
      icon:<FaPython />,
      name:'Python',
    },
    {
      icon:<SiMongodb />,
      name:'MongoDB',
    },
    {
      icon:<SiMysql />,
      name:'MySQL / PostgreSQL',
    },
    {
      icon:<FaFigma />,
      name:'Figma',
    },
    {
      icon:<FaHtml5 />,
      name:'HTML 5',
    },
    {
      icon:<FaCss3 />,
      name:'CSS 3',
    },
  ]

};
import{Tabs, TabsContent, TabsList, TabsTrigger} from"@/components/ui/tabs"
import{
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
  } from "@/components/ui/tooltip"
  import{ScrollArea} from "@/components/ui/scroll-area";
  import{easeIn, motion} from "framer-motion";


const Resume = () => {
  return <motion.div 
  initial={{opacity:0}}
   animate={{
    opacity:1,
    transition:{delay:0.1, duration: 0.4,ease: "easeIn"},
   }}

   className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"

   >
    <div className=" mx-auto">
    <Tabs defaultValue="experience" 
    className="flex flex-col xl:flex-row gap-[60px]">
      <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
        gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about me">About me</TabsTrigger>
        </TabsList>
        {/* content*/}
        <div className="min-h-[70vh] w-full">
          {/* experience*/}
          <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{experience.Description}</p>
            <ScrollArea className="h-[440px] pr-2">
              <ul className="relative flex flex-col gap-0 border-l-2 border-accent/20 ml-3">
                {experience.items.map((item, index) => (
                  <li key={index} className="relative pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-primary" />
                    <span className="text-xs text-accent tracking-widest uppercase">{item.duration}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{item.position}</h3>
                    <p className="text-white/50 text-sm mt-0.5">{item.company}</p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>

           {/* education*/}
           <TabsContent value="education" className="w-full">
           <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{education.Description}</p>
            <ScrollArea className="h-[440px] pr-2">
              <ul className="relative flex flex-col gap-0 border-l-2 border-accent/20 ml-3">
                {education.items.map((item, index) => (
                  <li key={index} className="relative pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-primary" />
                    <span className="text-xs text-accent tracking-widest uppercase">{item.duration}</span>
                    <h3 className="text-lg font-semibold text-white mt-1">{item.degree}</h3>
                    <p className="text-white/50 text-sm mt-0.5">{item.institution}</p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </div>
          </TabsContent>
           {/* skills*/}
           <TabsContent value="skills" className="w-full h-full">
          <div className="flex flex-col gap-[30px]">
            <div className="flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.Description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-6">
              {skills.skillList.map((skills, index)=> {
                return <li key={index}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" flex-auto w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent
                        transition-all duration-300">
                          {skills.icon}
                          </div>
                      </TooltipTrigger>
                      <TooltipContent>
                    <p> {skills.name}</p>
                  </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
              </li>;
              })}
            </ul>
          </div>
          </TabsContent>
           {/* about me*/}
           <TabsContent value="about me" className="w-full text-center xl:text-left">
          <div className=" flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className=" max-w-[900px] text-white/60 mx-auto xl:mx-0">
            {about.Description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-9 max-w-[620px]
            mx-auto xl:mx-0">
              {about.Info.map((item, index) => {
                return  <li key={index} className="flex-items justify-center
                xl:justify-start gap-6">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl ml-4">{item.fieldValue}</span>
                </li>
                })}
            </ul>
          </div>
          </TabsContent>

        </div>
      </Tabs>
    </div>
    </motion.div>
}

export default Resume
