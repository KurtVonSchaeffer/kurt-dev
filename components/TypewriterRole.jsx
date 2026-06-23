"use client";
import { TypeAnimation } from "react-type-animation";

const TypewriterRole = () => {
  return (
    <div className="flex items-center justify-center xl:justify-start gap-x-2 text-xl mb-6 min-h-[2rem]">
      <span className="text-white/60">I'm a</span>
      <TypeAnimation
        sequence={[
          "Senior Full Stack Developer", 2500,
          "Product Owner", 2000,
          "AI Automation Specialist", 2500,
          "Systems Architect", 2000,
        ]}
        wrapper="span"
        repeat={Infinity}
        className="text-accent font-semibold"
      />
    </div>
  );
};

export default TypewriterRole;
