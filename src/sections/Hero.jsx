import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import profileImg from '../assets/portfolio-image.jpg';

const Hero = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 font-medium tracking-wider mb-4">FULL STACK DEVELOPER</h2>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            Full-stack web developer focused on building clean, dependable, and high-performance applications. With solid experience in developing modern UI/UX, I transform ideas into scalable digital products—from structured backend systems to polished, interactive user experiences.
          </p>
          
          {/* Buttons with smooth scroll */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-white/10 rounded-full font-medium text-white hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              Contact Me
              <Mail className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full opacity-20 animate-pulse" />
            <div className="absolute inset-4 bg-black rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
              <img src={profileImg} alt="Hero Image" className="w-full h-full object-cover" />
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl"
            >
              <span className="text-cyan-400 font-bold">2+</span> Years Exp.
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 left-0 p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl shadow-xl"
            >
              <span className="text-purple-400 font-bold">10+</span> Projects
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
