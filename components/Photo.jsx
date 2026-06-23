"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Photo component displays a profile image with animated transitions and a decorative SVG circle.
 * Uses Next.js Image for optimization and Framer Motion for animation.
 * @returns {JSX.Element}
 */
const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
     <motion.div
     initial={{opacity: 1}}
     animate={{ opacity:1,
        transition: {delay: 0.1, duration: 0.4, ease: "easeIn"},
     }}
     className="relative w-full h-full"
     >
        {/*image*/}
        <motion.div 
        initial={{opacity: 1}}
        animate={{ opacity:1,
           transition: {delay: 0.15, duration: 0.5, ease: "easeInOut"},
        }}
        className="w-full h-full max-w-[298px] max-h-[298px] xl:max-w-[498px] xl:max-h-[498px] relative">
        <Image
         src="/assets/kd.jpg"
         priority 
         quality={100}
         width={498}
         height={498}
        alt="Kurt Von Schaeffer - Software Developer"
         className="object-contain w-full h-full mix-blend-lighten"
         sizes="(max-width: 1280px) 298px, 498px"
         />
        </motion.div>

        {/*circle*/}
        <motion.svg className="absolute inset-0 w-full h-full max-w-[300px] max-h-[300px] xl:max-w-[506px] xl:max-h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle 
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap= "round"
            strokeLinejoin="round"
            initial={{strokeDasharray:"24 10 0 0"}}
            animate={{strokeDasharray:["15 120 25 25", "16 25 92 72","4 250 22 22"],
            rotate:[120,360],
            }}
            transition={{
                duration: 10,
                repeat:Infinity,
                repeatType:'reverse'
            }}
            />
        </motion.svg>
     </motion.div>
        </div>
  );
};

export default Photo;