import recharge from '../../assets/partners/recharge.png';
import border from '../../assets/partners/border.png';
import inspire from '../../assets/partners/inspire.png';
import minty from '../../assets/partners/minty.png';
import snowflake from '../../assets/partners/snowflake.png';
import sitemark from '../../assets/partners/sitemark.png';
import image1 from '../../assets/aboutdata/image1.jpg';
import image2 from '../../assets/aboutdata/image2.jpg';
import image3 from '../../assets/aboutdata/image3.jpg';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Lights from '../../Components/Lights';
import Lightning from '../../Components/Lightning';
import Earth from '../../Components/Earth';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Mobile App Development',
    description: `We develop sleek and high-performing mobile apps tailored for both iOS and Android platforms. Our services span native development, cross-platform capabilities, intuitive UI/UX design, and continuous support to keep your app aligned with evolving technology trends.`,
    gradient: 'from-purple-600 to-black'
  },
  {
    title: 'Web Design & Development',
    description: `Our team crafts responsive and engaging websites that offer seamless experiences across all screen sizes. Leveraging modern technologies and innovative design, we build visually appealing websites that convert visitors and align with your strategic goals.`,
    gradient: 'from-pink-600 to-black'
  },
  {
    title: 'Software Testing Service',
    description: `Deliver bug-free software with our all-inclusive testing services. From functionality and performance to security and automation, our QA specialists ensure your product is dependable, safe, and provides an exceptional user experience before going live.`,
    gradient: 'from-blue-600 to-black'
  },
];

const partners = [
  { name: 'Recharge', img: recharge },
  { name: 'Inspire', img: border },
  { name: 'Minty', img: inspire },
  { name: 'Sitemark', img: minty },
  { name: 'Snowflake', img: snowflake },
  { name: 'Border', img: sitemark },
  { name: 'Border', img: recharge },
  { name: 'Border', img: border },
];

const aboutData = [
  {
    title: 'User-Friendly Websites',
    description:
      'Create websites that are visually appealing, user-centric, and simple to explore. Guarantee consistent user experiences across various devices and screen resolutions.',
    img: image1,
    gradient: 'from-purple-400 to-black',
  },
  {
    title: 'Optimize Performance',
    description:
      'Build websites with quick load speeds, fluid usability, and few glitches. Apply mobile responsiveness, SEO strategies, and inclusive web standards effectively.',
    img: image2,
    gradient: 'from-pink-500 to-black',
  },
  {
    title: 'Deliver Business Value',
    description:
      "Match design decisions to business goals—be it conversions, outreach, or retention. Use attention-grabbing CTAs and impactful design strategies smartly.",
    img: image3,
    gradient: 'from-blue-600 to-black',
  },
];

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="home" className="text-white font-sans ">
      <div className="fixed w-full h-screen bg-black overflow-hidden">
        {/* 3D Canvas */}
        <Canvas
          className='pointer-events-none touch-none'
          camera={{ position: [0, 0, 6], fov: 45 }}
        >
          <Lights />
          <Lightning />
          <Earth />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.25}
            touches={{ rotate: 0, pan: 0, zoom: 0 }}
          />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Canvas>
      </div>

      <div className="relative top-20 left-0 w-full h-screen " />
      <div className="absolute w-full h-screen inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10 pointer-events-none">
        <h1 className="text-[11vw] font-extrabold tracking-wide font-[Host_Grotesk] text-center">
          PigoPi
        </h1>
        <p className="text-xl font-[Host_Grotesk] tracking-wider text-center">Your website is - the face of your brand.</p>
      </div>
      <div className="relative z-0">

        {/* Services Section */}
        <section className="relative w-full bg-zinc-900 px-6 text-center">
          <div className=" bg-zinc-900 max-w-7xl mx-auto text-white py-20 px-6">
            <h2 className="text-[5vw] text-center font-bold mb-18">Services we offer</h2>

            <div className="max-w-7xl text-start mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`p-6 font-[Host_Grotesk] rounded-3xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-400 hover:scale-105`}
                >
                  <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg leading-relaxed ">{service.description}</p>
                </motion.div>
              ))}
            </div>
            {/* <div className="mt-30">
              <h2 className="text-lg">Our partners are such companies as</h2>
              <div className="flex justify-center gap-10 mt-4">
                {partners.map((partner, index) => (
                  <div key={index} className="md:w-[140px] w-[1000px]">
                    <img
                      className="w-full h-full object-cover filter invert"
                      src={partner.img}
                      alt={partner.name}
                    />
                  </div>
                ))}
              </div>
            </div> */}

            <h2 id="about" className="text-[5vw] font-bold text-center mt-35 mb-15">The Main Goals of our Company</h2>
            <div className="max-w-7xl text-start mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {aboutData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`w-full bg-gradient-to-b ${item.gradient} p-6 rounded-3xl text-white`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-2xl mb-4"
                  />
                  <h3 className="text-4xl font-bold py-3">{item.title}</h3>
                  <p className="mt-2 text-xl leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Benefits */}
        <div className="w-full bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white px-20 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
            {/* Left Section Title */}
            <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal">The Benefits</h2>
            </div>

            {/* Right Section Content */}
            <div className="w-full lg:w-3/5 space-y-8 sm:space-y-10">
              {[
                {
                  title: "Professional Designs",
                  desc: "A web design company creates unique, tailor-made websites that reflect your brand identity. Unlike generic templates, a custom design sets."
                },
                {
                  title: "User-Friendly",
                  desc: "With most web traffic coming from mobile devices, a web design company ensures your site is fully responsive and optimized for all screen sizes."
                },
                {
                  title: "SEO Optimization",
                  desc: "A beautifully designed website is useless if no one can find it. Web design companies incorporate SEO best practices, optimizing your site structure, speed, and content."
                },
                {
                  title: "Faster Loading",
                  desc: "Slow websites frustrate users and lead to high bounce rates. Professional web designers optimize your site's performance, ensuring fast loading times."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                >
                  <h3 className="text-2xl sm:text-3xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;