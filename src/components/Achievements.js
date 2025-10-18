import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dataquest from "../assets/achievements/cer.jpg";
import jcr from "../assets/achievements/adp.jpg";
import nvidia from "../assets/achievements/nvidia.png";
const achievementsData = [
    {
        title: " AI competition 1st prize winner",
        description: ", I won the first prize in  AI challenge competition, an event organised by IssatM organisation.",
        image: dataquest,
        year: "Feb 2025",
    },
    {
        title: "Data protection performance Award",
        description: "Employee of the month",
        image: jcr,
        year: "Oct 2024",
    },
   
];
const Achievements = () => (_jsxs("section", { id: "achievements", className: "section-container relative mt-16 mb-16", children: [_jsx("h2", { className: "section-title mb-8 text-white text-4xl font-sans font-medium", children: "Achievements" }), _jsx("p", { className: "text-lg text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto", children: "Here are some highlights of my journey in AI and software engineering. Each achievement reflects my commitment to innovation, teamwork, and impactful solutions." }), _jsx("div", { className: "flex flex-col gap-10 px-6  ", children: achievementsData.map((achievement, idx) => (_jsxs("div", { className: "bg-black/60 border border-yellow-500 rounded-xl p-6 flex md:flex-row flex-col items-center shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300", children: [_jsx("div", { className: "flex-shrink-0 lg:w-80 lg:h-30 w-50 h-30 rounded-lg overflow-hidden bg-gray-800 mr-6 flex items-center justify-center", children: achievement.image ? (_jsx("img", { src: achievement.image, alt: achievement.title, className: "w-full h-full object-cover", loading: "lazy" })) : (_jsx("span", { className: "text-3xl", children: "\uD83C\uDFC6" })) }), _jsxs("div", { className: "flex flex-col", children: [_jsx("h3", { className: "text-xl font-bold text-yellow-400 mb-2 mt-2", children: achievement.title }), _jsx("span", { className: "text-xs text-gray-400 mb-2", children: achievement.year }), _jsx("p", { className: "text-gray-200", children: achievement.description })] })] }, idx))) })] }));
export default Achievements;
//# sourceMappingURL=Achievements.js.map