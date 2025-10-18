import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ProjectCard, {} from './ProjectCard.js';
import projetPfa from '../assets/projects/pi.png';
import projet_ml from '../assets/projects/footApp.jpg';
import projet_ppp from '../assets/projects/projet_ppp.png';
import spotify_big_data from '../assets/projects/Funi.png';
import yummy from '../assets/projects/yummy.png';
import chatbot from '../assets/projects/por.png';
import MP from '../assets/projects/MarketPlace.png';
import scan from '../assets/projects/scan.jpg';

const projectsData = [
    
    {
        id: 1,
        title: "LearnSphere LMS",
        description: "I developed a comprehensive LMS using Spring Boot and Angular, featuring a real-time AI-powered chatbot.The platform supports three roles—Admin, Teacher, and Student—with tailored functionalities for each.It leverages AI and real-time interactions to enhance learning, engagement, and user experience.",
        image: projetPfa,
        tags: [ "Flask", "Angular", "Spring boot","MYSQL"],
        githubUrl: "https://github.com/todoyalee/angular-pi"
    },
    {
        id: 2,
        title: "French University Web App",
        description: "Participated in the development of a French uni web app .",
        image: spotify_big_data,
        tags: ["React", "Docker", "MongoDB", "Python"],
        githubUrl: "https://github.com/todoyalee/French-univerisity-web-app"
    },
    {
        id: 3,
        title: "MovieMind AI",
        description: "Participated in the development of MovieMind AI, a tool that predicts a movie's success (financial profit and viewers' rating) based on the synapsis and the budget of a movie.",
        image: projet_ml,
        tags: ["Flutter", "Getx", "dio","MVC"],
        githubUrl: "https://github.com/todoyalee/AILogin"
    },
    {
        id: 4,
        title: "My Portfolio's chatbot",
        description: "Developped a chatbot for my portfolio to facilitate the interaction with visitors. The chatbot is capable of answering questions about my skills, projects, and experience. It was built using RAG techniques with Langchain",
        image: chatbot,
        tags: ["Python", "Langchain", "Hugging Face", "RAG"],
        githubUrl: "https://github.com/todoyalee/Dali_Portfolioo"
    },

    {
        id: 5,
        title: "jOB MarketPlace",
        description: "This is a full-stack job board application that allows users to browse, post, and manage job listings.(in future updates)",
        image: MP,
        tags: ["Flutter","MVC"],
        githubUrl: "https://github.com/todoyalee/Job-marketplace"
    },

    {
        id: 6,
        title: "PassportScan",
        description: "A Prototype Flutter application that can scan and extract text from passports, driver's licenses, and ID cards using the google_ml_text_recognition_kit",
        image: scan,
        tags: ["Flutter","MVC","google ml kit"],
        githubUrl: "https://github.com/todoyalee/flutterScanner"
    },
    
];
const Projects = () => {
    return (_jsxs("section", { id: "projects", className: "section-container relative", children: [_jsx("h2", { className: "section-title mb-8 mt-16 text-white lg:text-4xl text-3xl font-sans font-medium", children: "Projects" }), _jsx("p", { className: "text-lg text-gray-300 leading-relaxed mb-12", children: "Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. The projects below are the most recent projects I worked on, other projects can be found on my GitHub profile." }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-14 md:px-14 px-3", children: projectsData.map((project, index) => (_jsx(ProjectCard, { project: project, index: index }, project.id))) })] }));
};
export default Projects;
//# sourceMappingURL=Projects.js.map