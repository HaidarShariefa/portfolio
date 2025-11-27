import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Self-employed',
      period: 'Aug 2024 - Present',
      description: 'Developing custom web solutions for clients using modern technologies.',
      color: 'text-cyan-400',
      border: 'border-cyan-400'
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Diraya',
      period: 'Jun 2025 - Oct 2025',
      description: 'Built full-stack applications and collaborated with cross-functional teams.',
      color: 'text-purple-400',
      border: 'border-purple-400'
    },
    {
      title: 'IT Specialist',
      company: 'Creative Glass',
      period: 'Feb 2025 - Apr 2025',
      description: 'Managed IT infrastructure and provided technical support.',
      color: 'text-pink-400',
      border: 'border-pink-400'
    },
    {
      title: 'Computer Science Tutor',
      company: 'Bright Champs',
      period: 'Jan 2024 - Apr 2024',
      description: 'Mentored students in computer science fundamentals and programming.',
      color: 'text-blue-400',
      border: 'border-blue-400'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group"
            >
              
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className={`font-medium ${exp.color}`}>{exp.company}</p>
                </div>
                <div className="p-2 bg-white/5 rounded-lg">
                  <Briefcase className={`w-5 h-5 ${exp.color}`} />
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
