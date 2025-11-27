import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiGraphql, 
  SiDocker, 
  SiHtml5, 
  SiCss3, 
  SiTypescript 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Technologies = () => {
  const techs = [
    { name: 'React', icon: <SiReact />, color: 'text-cyan-400' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
    { name: 'Express', icon: <SiExpress />, color: 'text-gray-400' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-400' },
    { name: 'TailwindCSS', icon: <SiTailwindcss />, color: 'text-cyan-300' },
    { name: 'GraphQL', icon: <SiGraphql />, color: 'text-pink-500' },
    { name: 'Docker', icon: <SiDocker />, color: 'text-blue-500' },
    { name: 'HTML', icon: <SiHtml5 />, color: 'text-orange-500' },
    { name: 'CSS', icon: <SiCss3 />, color: 'text-blue-400' },
    { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit for building scalable and efficient applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-default"
            >
              <div className={`mb-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                {React.cloneElement(tech.icon, { size: 40 })}
              </div>
              <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
