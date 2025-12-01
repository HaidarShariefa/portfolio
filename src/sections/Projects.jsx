import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Foodify (SaaS) (My Project at Diraya)",
      description:
        "A full-featured SaaS restaurants management system with WhatsApp integration from admin management panel to a stylish modern menu for users.",
      tech: ["React", "Firebase", "TailwindCSS", "Firestore", "React-Router"],
      image: project1,
      demo: "https://foodify-19a85.web.app/admin/example-restaurant/categories",
      github: "https://github.com/HaidarShariefa/foodify-showcase",
    },
    {
      title: "Task Manager",
      description:
        "A robust full-stack web application designed to streamline task management, user administration, and reporting.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "ExcelJS"],
      image: project2,
      demo: "https://codex-task-manager.vercel.app",
      github: "https://github.com/HaidarShariefa/Task-Manager",
    },
    {
      title: "Mine Reporter (University Senior Project)",
      description:
        "Entire management system for demining companies, with multiple responsibility levels (searcher, supervisor, manager). Helped companies IRL increase safety.",
      tech: ["PHP", "HTML", "CSS", "Bootstrap", "JavaScript", "MySQL"],
      image: project3,
      demo: null,
      github: "https://github.com/HaidarShariefa/mine-reporter",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects I'm Proud Of
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my favourite work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              {/* Project Image */}
              <div className="h-48 w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {project.demo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demo}
                      className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.demo}
                      className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all group-hover:border-cyan-500/30"
                    >
                      View Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.github}
                    className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all group-hover:border-purple-500/30"
                  >
                    Github
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
