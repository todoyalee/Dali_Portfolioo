import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const techGroups = [
    {
        label: 'Languages',
        items: [
                        { name:'Flutter',icon:"https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg"},

            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        ],
    },
    {
        label: 'Data',
        items: [
            { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
            { name: 'Apache Spark', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
            { name: 'Hadoop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg' }
        ]
    },
    {
        label: 'Backend',
        items: [
            { name: 'Flask', icon: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon.svg' },
            { name: '.NetCore', icon: 'https://www.vectorlogo.zone/logos/dotnet/dotnet-official.svg' },
            { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
            { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
        ],
    },
    {
        label: 'Database',
        items: [
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'SQL Server', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Microsoft_SQL_Server_2025_icon.svg' },
            { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4' },
            { name: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
        ],
    },
    {
        label: 'DevOps',
        items: [
            { name: 'GCP', icon: 'https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000' },
            { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Kafka', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Apache_Kafka_logo.svg' },
        ],
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};
const Skills = () => {
    const [imageErrors, setImageErrors] = React.useState({});
    const handleImageError = (techName) => {
        setImageErrors(prev => ({ ...prev, [techName]: true }));
    };
    return (_jsxs("section", { id: "skills", className: "section-container text-center mb-16 mt-16", children: [_jsx("h2", { className: "lg:text-4xl text-3xl font-sans font-medium mb-9 text-white", children: "Technologies I Work With" }), _jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Cutting-edge tools and frameworks for building the future" }), _jsx("div", { className: "mt-11 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12", children: techGroups.map((group) => (_jsxs("div", { className: "flex flex-col items-center h-full", children: [_jsx("h3", { className: "text-xl font-bold mb-6 text-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-transparent bg-clip-text", children: group.label }), _jsx("div", { className: "grid grid-cols-2 gap-6", children: group.items.map((tech) => (_jsxs("a", { target: "_blank", rel: "noopener noreferrer", className: "flex flex-col items-center group no-underline", children: [_jsx("div", { className: "relative p-2 rounded-xl bg-black/40 border border-blue-500/20 w-16 h-16 flex items-center justify-center", children: !imageErrors[tech.name] ? (_jsx("img", { src: tech.icon, alt: tech.name, loading: "lazy", className: "w-10 h-10 object-contain", onError: () => handleImageError(tech.name) })) : (_jsx("div", { className: "w-10 h-10 flex items-center justify-center border-2 border-orange-400/40 rounded-lg bg-black/30 text-red-600 font-bold text-lg", children: tech.name.charAt(0) })) }), _jsx("span", { className: "mt-1 text-xs text-gray-400 group-hover:text-yellow-400 transition-colors duration-300 text-center", children: tech.name })] }, tech.name))) })] }, group.label))) })] }));
};
export default Skills;
//# sourceMappingURL=Skills.js.map