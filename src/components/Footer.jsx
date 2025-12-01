import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              Haidar Shariefa
            </h3>
            <p className="text-gray-400 text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex gap-6">
            <a target="_blank" href="https://github.com/HaidarShariefa" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/haidarshariefa/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a target="_blank" href="mailto:haidar.shariefa.dev@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a target="_blank" href="https://www.instagram.com/haidar_shariefa?igsh=bGoxNGU4NmdheW1o&utm_source=qr" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with React, TailwindCSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
