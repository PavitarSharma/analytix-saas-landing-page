import { motion } from "motion/react";

/*
 * Assets
 */
import { brands } from "@/assets";

/*
 *Framer  Motion variants
 */
import * as variants from "@/lib/motionVariants";

const Brand = () => {
  return (
    <section className="section">
      <div className="container max-w-screen-lg">
        <motion.p
          variants={variants.fadeInUp}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="text-center mb-4 md:mb-6"
        >
          Powerinf data insights for today's startup and tomorrow's leader.
        </motion.p>

        <motion.div
          variants={variants.staggerContainer}
          initial="start"
          whileInView="end"
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-5 md:gap-10"
        >
          {brands.map((brand, index) => (
            <motion.figure variants={variants.fadeInUp} key={index}>
              <img src={brand} alt="brand" className="opacity-[0.6]" />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;