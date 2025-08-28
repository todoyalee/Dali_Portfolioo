import ProjectCard, { Project } from './ProjectCard';
import projetPfa from '../assets/projects/projet_pfa.png';
import projet_ml from '../assets/projects/projet_ml.png';
import projet_ppp from '../assets/projects/projet_ppp.png';
import spotify_big_data from '../assets/projects/spotify_big_data.png';
import yummy from '../assets/projects/yummy.png';
import chatbot from '../assets/projects/chatbot.png';


const projectsData: Project[] = [
  {
    id: 1,
    title: "My Portfolio's chatbot",
    description: "Developped a chatbot for my portfolio to facilitate the interaction with visitors. The chatbot is capable of answering questions about my skills, projects, and experience. It was built using RAG techniques with Langchain",
    image: chatbot,
    tags: [ "Python","Langchain","Hugging Face", "RAG"],
    githubUrl: "https://github.com/rozee01/AI_Visual_Analytics"
  },
  {
    id: 2,
    title: "AI Visual Analytics",
    description: "Participated in the development of an AI Tool that allows UI designers and frontend developers to enhance user interactions of their websites. It analyzes the UI using web scrapping techniques , predicts user interactions and concentration zones using the developed ML model, and recommends enhancements using LLMs",
    image: projetPfa,
    tags: [ "Python","Scikit-learn","Pandas", "Web Scrapping", "ReactJS"],
    githubUrl: "https://github.com/rozee01/AI_Visual_Analytics"
  },
  {
    id: 3,
    title: "Local Vibes – Music Trends by Country",
    description: "Participated in the development of a big data project that analyzes music trends across different countries using Spotify batch and streaming data.",
    image: spotify_big_data,
    tags: ["Apache Spark", "Kafka", "Docker", "MongoDB", "Python"],
    githubUrl: "https://github.com/rozee01/ProjetBigData"
  },
  {
    id: 4,
    title: "MovieMind AI",
    description: "Participated in the development of MovieMind AI, a tool that predicts a movie's success (financial profit and viewers' rating) based on the synapsis and the budget of a movie.",
    image: projet_ml,
    tags: ["Scikit-learn", "Python", "Hugging Face", "Flask","ReactJS"],
    githubUrl: "https://github.com/rozee01/projet-data-mining"
  },
  {
    id: 5,
    title: "Urlize",
    description: "Participated in the development of Urlize, a website generator aiming to help student entrepreneurs create their first websites to showcase their products. In just a few minutes, users can compose their website by selecting a template, uploading their content and the webapp takes care of the assembling and deployment.",
    image: projet_ppp,
    tags: ["React.js", ".NET Core", "Docker", "Github API", "PostgreSQL"],
    githubUrl: "https://github.com/rozee01/urlize_front"
  },
  {
    id: 6,
    title: "Yummy",
    description: "Participated in the development of Yummy, a culinary platform that allows users to discover, search, like and comment recipes and meal plans. The project relied on a public recipe API to fetch and display a wide variety of recipes.",
    image: yummy,
    tags: ["AngularTS", "Rest API"],
    githubUrl: "https://github.com/rozee01/Yummi"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8 mt-16 text-white lg:text-4xl text-3xl font-sans font-medium">Projects</h2>
    
        <p className="text-lg text-gray-300 leading-relaxed mb-12">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          The projects below are the most recent projects I worked on, other projects can be found on my GitHub profile.
        </p>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-14 md:px-14 px-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

    </section>
  );
};

export default Projects;
