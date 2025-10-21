import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    tech: ["React", "framer", "tailwind"],
    github: "https://github.com/username/portfolio",
    live: "https://lnkd.in/e8G9Tx3P]",
    image: "/portfolio.png",
  },
  {
    title: "SUN APP(project management)",
   
    tech: ["React", "tailwind", "React Router","Axios","JSON Server"],
    github: "https://github.com/sumayyaibrahim/solarprojects",
    live: "https://solarprojectsfrontend.vercel.app/",
    image: "/sunapp.png",
  },{
    title: "STUD HUB(LMS platform)",
    
    tech: ["React", "Bootstrap", "React Router"],
    github: "https://github.com/sumayyaibrahim/learning-app",
    live: "https://learning-app-orcin-alpha.vercel.app/",
    image: "/studhub.png",
  },{
    title: "Country details search bar",
    description:
      "A full-featured todo app with authentication and local storage support.",
    tech: ["HTML", "Tailwind", "Async await"],
    github: "https://github.com/sumayyaibrahim/asyncawait",
    live: "https://asyncawait.vercel.app/",
    image: "/country.png",
  },{
    title: "Flower app(website of a flower shop)",
    description:
      "A full-featured todo app with authentication and local storage support.",
    tech: ["HTML",  "CSS"],
    github: "https://github.com/sumayyaibrahim/flowerapp",
    live: "https://sumayyaibrahim.github.io/flowerapp/",
    image: "/getflower.png",
  },
];

export  function Projects() {
  return (
    <section id="projects" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <motion.h2
        initial={{opacity:0,y:-50}}
          whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1,
            ease: [0.25, 0.1, 0.25, 1],  }} 
         className="text-4xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500 ">
            Projects
          </span>
        </motion.h2>

        <motion.div 
        
        className="grid md:grid-cols-4 gap-10 mt-20 p-5">
          {projects.map((project, index) => (
            <motion.div
            initial={{opacity:0,scale: 0.8}}
          whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 ,duration: 1,
            ease: [0.25, 0.1, 0.25, 1],  }} 
      
              key={index}
              className="bg-white/4 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 max-h-80"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-35 object-contain  "
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap  gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 px-3 py-1 text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-violet-600"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Projects