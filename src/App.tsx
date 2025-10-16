import { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Terminal } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  architectureUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({});

  const projects: Project[] = [
    {
      id: 1,
      title: 'ERP Manufacturing Project',
      description: 'Modernized manufacturing operations with cloud-based ERP system. Built planner proposals backend with heuristic algorithms, React Query UI with SVG FlowCanvas for visual workflows.',
      technologies: ['React Query', 'SVG', 'Node.js', 'PostgreSQL', 'Cloud ERP'],
      imageUrl: '/erp-frontend.png',
      architectureUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      githubUrl: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'FLEX Basketball Training App',
      description: 'Mobile app helping athletes record and track basketball shooting sessions with timestamps and video cuts. Doubled focus-group engagement using Agile methodology.',
      technologies: ['Expo Go', 'React Native', 'TestFlight', 'Video Processing'],
      imageUrl: '/flex-app.png',
      githubUrl: '#',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'RChelpU - Credit Union AI Service',
      description: 'AI-powered customer service interface for Rotman Credit Union. Integrated Microsoft Copilot bot with Direct Line authentication and secure iframe embedding.',
      technologies: ['React', 'Microsoft Copilot', 'Direct Line API', 'Azure AI'],
      imageUrl: '/rcu-frontend.png',
      architectureUrl: '/Union AI banking service backend (RChelpU).png',
      githubUrl: '#',
      liveUrl: 'https://justinfan591.github.io/ai_banking_agent/',
      category: 'ai'
    },
    {
      id: 5,
      title: 'Synvio AI',
      description: 'Co-founded agentic AI platform for personalized interview prep. Accepted into Microsoft for Startups. Built persona-driven agents with voice-to-text pipelines.',
      technologies: ['Grog AI', 'Azure', 'Speech-to-Text', 'Agentic Workflows', 'Python'],
      imageUrl: '/SynvioAI-frontend.png',
      architectureUrl: '/synvio-backend.png',
      githubUrl: '#',
      liveUrl: 'https://synvio.ai/',
      category: 'ai'
    },
    {
      id: 6,
      title: 'Dr. Mario Game (Assembly)',
      description: 'CSC258 course project in MIPS Assembly. Implemented gravity, collision detection, capsule preview, score counters, background music, and sound effects.',
      technologies: ['MIPS Assembly', 'Saturn Environment', 'Low-level Programming'],
      imageUrl: '/dr-mario.png',
      architectureUrl: '/dr-mario-architecture.png',
      githubUrl: '#',
      category: 'systems'
    },
    {
      id: 7,
      title: 'CallGuard',
      description: 'NewHacks 2024 winning project for GenAI in Telecom (TELUS challenge). Real-time scam-call detection using AI with scalable pricing model.',
      technologies: ['GenAI', 'Real-time Detection', 'Python', 'TELUS API'],
      imageUrl: '/callguard-frontend.png',
      architectureUrl: '/callguard-architecture.png',
      githubUrl: '#',
      category: 'ai'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'ai', label: 'AI & ML', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Code2 },
    { id: 'systems', label: 'Systems', icon: Terminal }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Profile"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                  Computer Science
                </span>
                <span className="text-slate-900"> + </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600">
                  Commerce
                </span>
                <br />
                <span className="text-slate-900">Student at UofT</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                Bridging business and technology to build impactful solutions that drive innovation
                and deliver real-world value.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
                <ExternalLink size={18} />
              </a>
              <a
                href="mailto:justinfan951@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border-2 border-slate-200 hover:border-blue-300"
              >
                <Mail size={18} />
                Get in Touch
              </a>
            </div>
            <div className="flex gap-6 justify-center pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/justinfan951/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:justinfan951@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A collection of my academic and personal projects showcasing diverse technical skills
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-50 shadow hover:shadow-md border-2 border-slate-200'
                  }`}
                >
                  <Icon size={18} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div
                  className="relative h-64 overflow-hidden bg-slate-100 cursor-ew-resize select-none"
                  onMouseMove={(e) => {
                    if (e.buttons === 1 && project.architectureUrl) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPositions(prev => ({
                        ...prev,
                        [project.id]: Math.max(0, Math.min(100, percentage))
                      }));
                    }
                  }}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="relative w-full h-full">
                    {project.architectureUrl && (
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          clipPath: `inset(0 0 0 ${sliderPositions[project.id] || 50}%)`
                        }}
                      >
                        <img
                          src={project.architectureUrl}
                          alt={`${project.title} Architecture`}
                          className="absolute inset-0 w-full h-full object-contain bg-white"
                        />
                        <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-white pointer-events-none">
                          Backend Architecture
                        </div>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        clipPath: `inset(0 ${100 - (sliderPositions[project.id] || 50)}% 0 0)`
                      }}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain bg-white"
                      />
                      {project.architectureUrl && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 pointer-events-none whitespace-nowrap">
                          Project Preview
                        </div>
                      )}
                    </div>
                  </div>

                  {project.architectureUrl && (
                    <>
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
                        style={{
                          left: `${sliderPositions[project.id] || 50}%`,
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                          <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-xs font-medium text-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                        Drag to compare
                      </div>
                    </>
                  )}
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-slate-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="inline-flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">Technical Skills</h2>
            <p className="text-xl text-slate-600">Technologies and tools I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js']
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB']
              },
              {
                title: 'DevOps & Tools',
                skills: ['Docker', 'Kubernetes', 'Git', 'AWS', 'CI/CD']
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400">© 2025 CS Portfolio. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
