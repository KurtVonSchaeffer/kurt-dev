"use client";
import CountUp from "react-countup";

const stats =[
    {
     num: 5 ,
     text: "years of experience",
    },
    {
        num: 12 ,
        text: "projects completed",
       },
       {
        num: 15 ,
        text: "technologies mastered",
       },
       {
        num: 500 ,
        text: "code commits",
       },

]



const Stats = () => {
  return (
  <section className="pt-4 pb-12 xl:pt-0">
    <div className="container mx-auto">
    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => {
        return (
        <div className="flex-1 flex gap-4 items-center justify-center
        xl:justify-start" 
            key={index}>
            <CountUp
            end={item.num}
            duration={1}
            delay={0.05}
            className="text-4xl xl:text-6xl font-extrabold"
            />
           <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} 
           leading-snug text-white/80`}>
           {item.text}
           </p>

        </div>
        );
})}
    </div>
    </div>
    
</section>
);
};
export default Stats;