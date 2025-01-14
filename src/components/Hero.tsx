/*
 * Components
 */

import { heroData } from "@/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactPlayer from "react-player/youtube";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "motion/react";

/*
 * Assets
 */
import { heroBanner } from "@/assets";
import { CirclePlay } from "lucide-react";
import { useRef } from "react";

/*
 *Framer  Motion variants
 */

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVariant = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const heroBannerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  const scale = useSpring(scollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-10 md:py-16">
      <div className="container text-center">
        <motion.div
          initial="start"
          animate="end"
          variants={heroVariant}
          className="max-w-screen-md mx-auto"
        >
          <motion.p
            initial="start"
            animate="end"
            variants={heroChildVariant}
            className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full bordert-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVariant}
            className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            {heroData.sectionTitle}
            <span className=" relative isolate ms-4">
              {heroData.decoTitle}
              <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_3px_0px] shadow-foreground md:top-3 md:bottom-1 lg:top-4 lg:bottom-2"></span>
            </span>
          </motion.h2>

          <motion.p
            variants={heroChildVariant}
            className="text-muted-foreground md:text-xl"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVariant}
            className="flex items-center justify-center gap-2 md:mt-10 mt-6"
          >
            <Button>Start Free Trial</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost">
                  <CirclePlay size={24} />
                  Watch Demo
                </Button>
              </DialogTrigger>

              <DialogContent className="p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]">
                <AspectRatio ratio={16 / 9}>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    style={{
                      minWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                    controls
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>

        <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
          <motion.figure
            initial={{
              y: 120,
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                duration: 1.5,
                delay: 0.5,
                ease: "backInOut",
              },
            }}
            ref={heroBannerRef}
            style={{ scale }}
            className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden"
          >
            <img
              src={heroBanner}
              alt="Analytix dashboard"
              width={1468}
              height={815}
            />
          </motion.figure>

          {/* Blurry Glow effect */}
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "backInOut",
            }}
            className="absolute bg-primary inset-5 blur-[50px] -z-10"
          ></motion.div>
          <motion.div
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "backOut",
            }}
            className="absolute inset-0 bg-primary blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
