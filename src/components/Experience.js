import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "./ui/card.js";
const workData = [
    {
        id: 1,
        year: "July 2025 – August 2025",
        title: "Mobile Developer",
        description: `Developed a cross-platform mobile application (Android ) for job seekers and employers using Flutter.

Followed MVC architecture for clean code separation and maintainability.

Used GetX state management for efficient UI updates and reactive programming.

Created dynamic job posting and search features with filtering, sorting, and real-time updates.

Built chat functionality between job posters and job seekers using Firebase 

Implemented push notifications for job offers, application status updates, and messages.Developed a cross-platform mobile application (Andro`,
    },

    {
        id: 2,
        year: "July 2024 – August 2024",
        title: "Mobile Developer",
        description: `
Application Development: Design and implement a Flutter-based mobile application that utilizes Google ML Kit's text recognition capabilities to scan and extract data from passports, driver's licenses, and ID cards.

Plugin Testing: Test and evaluate various plugins related to text recognition to ensure they meet the project's requirements and provide the best possible performance`,
    },
    {
        id: 3,
        year: "February 2024 – May 2024",
        title: "Mobile Developer",
        description: `Contributed to the development and maintenance of EDUMS, a web application for educational management. Implemented new features and improved UI components using HTML, CSS, JavaScript, and Laravel. Handled backend development tasks including database operations with MySQL.`,
    },

    {
        id: 4,
        year: "May 2024 – Jul 2024",
        title: "Full Stack Developer",
        description: `Designed user interfaces using Figma
Developed RESTful APIs in Node.js for seamless communication between frontend and backend systems.
Constructed responsive UIs with Flutter and utilized GetX for efficient state management.
Implemented MVC architecture to maintain scalable and maintainable codebases.
Built API endpoints for email functionality in Node.js,
Implemented role-based authentication 
Integrated Firebase for uploading and downloading PDF documents(files management)
Utilized Dio for making HTTP requests within Flutter applications.
used mysql database`,
    },

    {
        id: 5,
        year: "Jan 2024 – May 2024",
        title: "Part-time Web Developer – Devnet",
        description: `
    Developed and implemented user interfaces from scratch,
Consumed APIs to integrate backend services
Utilized GetX for state management and Dio for handling HTTP requests
Collaborated closely with cross-functional teams, including designers, product managers, and other developers,
Actively contributed to code reviews, feature planning, and troubleshooting, fostering a collaborative and innovative development environment.`,
    },


    {
        id: 6,
        year: "Nov 2022 – Oct 202t",
        title: "Full Stack Developer",
        description: `
    Developed and implemented user interfaces from scratch,
Consumed APIs to integrate backend services
Utilized GetX for state management and Dio for handling HTTP requests
Collaborated closely with cross-functional teams, including designers, product managers, and other developers,
Actively contributed to code reviews, feature planning, and troubleshooting, fostering a collaborative and innovative development environment.

i did build an E learning plateform(LMS) , using MERN technologies , and it's made to make evey client understand the functionalities of the company application(Rais).
*I made a chatbot using flask in the company application that responds to the client's questions and whenever the chatbot doesen't understand a question or can't provide an aswear , it will inform the support team and they will contact the client.
*i did worked with jira and its pluggin zephyr and did import large amount of data using java from them to the company application


I wrote many large specific test casess to identify issues and i made necessary modifications to them , using tools robotframework and selenium , I learned and tried a bit of cypress alos , and i gained lots of QA informations and much of scrum knowlege through this experience.
I worte tickets that shows and identifies bugs of the company applicationusing other tools like squash , jira , its pluggin(zephyr...) and gitlab.
I wrote documents that explain these test cases , explain the regression and how it was fixed







`,
    },

];
const Experience = () => {
    return (_jsxs("section", { id: "experience", className: "section-container text-white mb-10 lg:max-w-5xl max-w-xl", children: [_jsx("h2", { className: "section-title lg:text-4xl text-3xl font-sans font-medium mb-9", children: "Professional Experience" }), _jsx("div", { className: "w-full", children: _jsx("div", { className: "w-full lg:max-w-5xl mx-auto", children: _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-4 sm:left-6 top-5 bottom-5 w-1 sm:w-1 bg-gradient-to-b from-red-600 to-yellow-400 shadow-lg rounded-full" }), _jsx("div", { className: "md:space-y-16 space-y-10", children: workData.map((item, idx) => (_jsxs("div", { className: "relative pl-16 flex items-start group", children: [_jsx("div", { className: "absolute left-0 top-1 w-9 h-9 md:w-12 md:h-12 bg-gradient-to-r from-red-600 to-yellow-400 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition", children: _jsx(WorkIcon, {}) }), _jsx(Card, { className: "glass-card rounded-xl border-muted shadow-xl group-hover:border-red-500 transition-all w-full", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "text-sm font-medium text-muted-foreground mb-1", children: item.year }), _jsx("h3", { className: "text-xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text", children: item.title }), _jsx("ul", { className: "list-disc pl-5 text-muted-foreground text-sm md:text-lg text-left space-y-2", children: item.description
                                                            .split(". ")
                                                            .filter(Boolean)
                                                            .map((point, i) => (_jsxs("li", { children: [point.trim(), point.endsWith(".") ? "" : "."] }, i))) })] }) })] }, item.id))) })] }) }) })] }));
};
const WorkIcon = () => (_jsx("svg", { className: "w-3 h-3 sm:w-5 sm:h-5 text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }));
export default Experience;
//# sourceMappingURL=Experience.js.map