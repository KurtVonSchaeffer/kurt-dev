import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import TypewriterRole from "@/components/TypewriterRole";
import FeaturedWork from "@/components/FeaturedWork";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-3">
              Hello I'm<br /> <span className="text-accent">Kurt Von Schaeffer</span>
            </h1>
            <TypewriterRole />
            <p className="max-w-[500px] mb-9 text-white/80">
              Building scalable, enterprise-grade digital products. From automated credit engines
              and investment ledgers to renewable energy platforms — I engineer complex logic into
              seamless, modern experiences.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/CV/CV.pdf"  // Link to your CV PDF file
                download="kurtvonschaefferCV.pdf"  // File name to be downloaded
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 w-full max-w-[300px] xl:max-w-[500px] mx-auto xl:mx-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <FeaturedWork />
    </section>
  );
};

export default Home;
