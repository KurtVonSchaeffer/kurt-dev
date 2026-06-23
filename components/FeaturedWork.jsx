"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

const featured = [
  {
    title: "AlgoLend",
    role: "Product Owner",
    description:
      "End-to-end corporate credit & risk management platform. Configurable underwriting engine, DebiCheck mandate collections, open-banking via Tru ID, biometric compliance, and a full portfolio analytics dashboard.",
    tags: ["Fintech", "Next.js", "Supabase", "Node.js"],
    live: "https://algolend-opal.vercel.app/auth/login.html",
    accent: "border-accent",
  },
  {
    title: "MINT Platform",
    role: "Lead Architect",
    description:
      "Wealth-as-a-service for South Africa. Automated credit engines, Lombard lending models, and parent-child investment account structures — full mobile and web stack architected end to end.",
    tags: ["Fintech", "React", "Node.js", "Flutter"],
    live: "https://mint-henna.vercel.app/",
    accent: "border-white/20",
  },
  {
    title: "Zwane Financial Services",
    role: "Full Stack Developer",
    description:
      "Registered credit provider platform with secure client authentication, loan management, and a modern compliance-ready UI tailored for an FSP operating under NCRSA regulations.",
    tags: ["Fintech", "Next.js", "Tailwind"],
    live: "https://zwane-official-three.vercel.app/",
    accent: "border-white/20",
  },
];

const FeaturedWork = () => {
  return (
    <section className="pb-16 xl:pb-24">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-accent text-sm tracking-[4px] uppercase">Case Studies</span>
            <h2 className="text-3xl xl:text-4xl font-bold mt-1">Featured Work</h2>
          </div>
          <Link
            href="/work"
            className="hidden xl:flex items-center gap-2 text-white/60 hover:text-accent transition-colors duration-200 text-sm"
          >
            View all projects <BsArrowUpRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-[#27272c] rounded-xl p-7 flex flex-col gap-4 border-t-2 ${item.accent} hover:border-accent transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-accent text-xs tracking-widest uppercase">{item.role}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                <Link
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex justify-center items-center hover:bg-accent hover:text-primary transition-all duration-300 shrink-0"
                  aria-label={`View ${item.title} live`}
                >
                  <BsArrowUpRight className="text-sm" />
                </Link>
              </div>

              <p className="text-white/60 text-sm leading-relaxed flex-1">{item.description}</p>

              <ul className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex xl:hidden justify-center mt-8">
          <Link href="/work" className="text-accent hover:underline text-sm flex items-center gap-2">
            View all projects <BsArrowUpRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
