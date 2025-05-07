import React from "react";
import image6 from '../../assets/services/image6.jpg'
import image7 from '../../assets/services/image7.jpg'
import image9 from '../../assets/services/image9.jpg'
import image13 from '../../assets/services/image13.jpg'
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "backOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Services = () => {
  return (
    <motion.div
      className="bg-gradient-to-r from-black to-blue-950 text-white relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-24 relative">
        
        {/* Images Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 mb-12 lg:mb-0"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {[image6, image7].map((img, idx) => (
            <motion.div
              key={idx}
              variants={imageVariants}
              className="w-90 h-50 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300"
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={img} alt={`Decor ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left"
          variants={fadeInRight}
          viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              variants={fadeInLeft}
              className="text-xl font-semibold font-[Host_Grotesk] bg-gradient-to-r from-white via-slate-300 to-blue-500 bg-clip-text text-transparent tracking-wide"
              viewport={{ once: true, amount: 0.2 }}
            >
              PigoPi
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 font-[Host_Grotesk] py-4 text-white leading-tight"
              viewport={{ once: true, amount: 0.2 }}
            >
              Build a Bold <br /> Digital Identity with Ease
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-slate-300 max-w-md font-[Host_Grotesk] mx-auto lg:mx-0 text-base sm:text-lg"
              viewport={{ once: true, amount: 0.2 }}
            >
              Your website should do more than look good — it should drive results, connect with users, and grow your business effortlessly.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="mt-8"
              viewport={{ once: true, amount: 0.2 }}
            >
              <a
                href="#contact"
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-[Host_Grotesk] text-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Launch Now
              </a>
            </motion.div>
          </motion.div>
        </div>

      {/* Feature Box */}
      <motion.div
        className="w-full bg-black py-16 px-6"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-full max-w-7xl mx-auto bg-zinc-900 p-6 rounded-xl flex flex-col md:flex-row gap-6"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Section */}
          <motion.div
            variants={fadeInLeft}
            className="w-full md:w-1/2 p-4 md:p-8"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-[Host_Grotesk] font-semibold">
            Built for Impact
            </h2>
            <p className="text-gray-300 mt-4 sm:mt-6 font-[Host_Grotesk] text-base sm:text-lg">
            Designed to be visually striking, easy to navigate, and optimized for performance—websites that reflect your brand’s vision and elevate your online presence.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInRight}
            className="w-full md:w-1/2 p-4 md:p-8 overflow-hidden"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={image9}
              alt="Feature"
              className="w-full h-64 sm:h-80 md:h-full rounded-xl object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Final Section */}
      <motion.div
        className="bg-black text-white px-6 sm:px-10 py-20 sm:py-30"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
      >     
        <motion.div
          className="w-full flex items-center justify-center mx-auto max-w-7xl h-[2px]"
          style={{
            background: `radial-gradient(circle at center, rgba(59,130,246,1) 0%, rgba(168,85,247,1) 30%, rgba(236,72,153,0.4) 70%, transparent 100%)`
          }}
          variants={scaleIn}
          viewport={{ once: true, amount: 0.2 }}
        />

        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 sm:mt-40 z-10">
          {/* Left Text */}
          <motion.div
            variants={fadeInLeft}
            className="flex flex-col justify-between"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
              Elevate Your Online<br />
              Identity with Innovative<br />
              Website Solutions
            </h1>
            <div
              className="w-full h-[2px] mt-6 sm:mt-10"
              style={{
                background: `linear-gradient(to right, rgba(255,255,255,0.5), rgba(255,255,255,0.05), transparent)`
              }}
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={fadeInRight}
            className="rounded-2xl overflow-hidden bg-cover h-[30vh] sm:h-[50vh] shadow-lg"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={image13}
              alt="Web design preview"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default Services;