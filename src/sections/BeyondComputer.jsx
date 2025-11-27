import { motion } from 'framer-motion';
import { Trophy, Gamepad2, PenTool, Users } from 'lucide-react';

const BeyondComputer = () => {
  const hobbies = [
    {
      title: 'Football',
      icon: <Trophy className="w-8 h-8" />,
      description: 'Passionate about the beautiful game. Regular player and avid supporter.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-400/10',
      border: 'border-yellow-400/20'
    },
    {
      title: 'Gaming',
      icon: <Gamepad2 className="w-8 h-8" />,
      description: 'Exploring immersive worlds and competitive gaming strategies.',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/20'
    },
    {
      title: 'Writing',
      icon: <PenTool className="w-8 h-8" />,
      description: 'Expressing thoughts and creativity through technical writing and blogging.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/20'
    },
    {
      title: 'Socializing',
      icon: <Users className="w-8 h-8" />,
      description: 'Cherishing quality time with friends and family.',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10',
      border: 'border-pink-400/20'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Beyond Computer
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What keeps me busy when I'm away from the keyboard.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${hobby.border} ${hobby.bg} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
            >
              <div className={`mb-4 ${hobby.color}`}>
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{hobby.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondComputer;
