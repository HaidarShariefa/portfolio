import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Copy, Check, ArrowUpRight, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "haidar.shariefa.dev@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      value: '@haidarshariefa',
      link: 'https://www.linkedin.com/in/haidarshariefa/',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/20'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      value: '@HaidarShariefa',
      link: 'https://github.com/HaidarShariefa',
      color: 'text-gray-200',
      bg: 'bg-white/5',
      border: 'border-white/10'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      value: '@haidar_shariefa',
      link: 'https://www.instagram.com/haidar_shariefa?igsh=bGoxNGU4NmdheW1o&utm_source=qr',
      color: 'text-pink-500',
      bg: 'bg-pink-500/10',
      border: 'border-pink-500/20'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-6 h-6" />,
      value: '+96178986316',
      link: 'https://wa.me/96178986316',
      color: 'text-green-500',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's collaborate on your next project or just say hi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Email Card - Special Layout */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-cyan-500/40 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Email Me</h3>
                <p className="text-gray-400">{email}</p>
              </div>
            </div>
            
            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={handleCopy}
                className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={`mailto:${email}`}
                className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black font-medium flex items-center justify-center gap-2 transition-all"
              >
                Send Email
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Other Contacts */}
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${contact.border} ${contact.bg} backdrop-blur-sm hover:scale-[1.02] transition-all group`}
            >
              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-white/5 ${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{contact.name}</h3>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </div>
                <ArrowUpRight className={`w-5 h-5 ${contact.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
