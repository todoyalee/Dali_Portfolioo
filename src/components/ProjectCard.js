import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card.js";
const ProjectCard = ({ project }) => {
    return (_jsx("div", { className: "h-full group", children: _jsx("a", { href: project.githubUrl, children: _jsxs(Card, { className: "overflow-hidden transition-all duration-300 h-full flex flex-col bg-black border-yellow-500 rounded-xl relative project-card-hover card-shadow-effect", children: [_jsx("div", { className: "absolute inset-0 bg-black rounded-xl transition-all duration-300 blur-md scale-150 group-hover:scale-100 -z-10" }), _jsxs("div", { className: "overflow-hidden h-48 relative", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" })] }), _jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl font-semibold text-white text-center ", children: project.title }) }), _jsx(CardContent, { className: "flex-grow", children: _jsx(CardDescription, { className: "text-sm text-gray-400", children: project.description }) })] }) }) }));
};
export default ProjectCard;
//# sourceMappingURL=ProjectCard.js.map