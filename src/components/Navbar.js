import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button.js';
import { BriefcaseBusiness, Terminal, BrainCircuit, Mail, Menu, X, House, Trophy } from 'lucide-react';
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = [
        { href: "#home", label: "Home", icon: House },
        { href: "#experience", label: "Experience", icon: BriefcaseBusiness },
        { href: "#skills", label: "Skills", icon: BrainCircuit },
        { href: "#projects", label: "Projects", icon: Terminal },
        { href: "#achievements", label: "Achievements", icon: Trophy }
    ];
    return (_jsxs("nav", { className: `fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 ${isScrolled
            ? ' backdrop-blur-md shadow-lg shadow-black/10'
            : 'bg-transparent'}`, children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full", children: _jsxs("div", { className: "flex justify-between items-center h-full", children: [_jsx("div", { className: "hidden md:flex items-center flex-1 justify-center", children: _jsx("div", { className: "flex px-8 py-2  backdrop-blur-md rounded-full border border-orange-800 shadow-xl", children: _jsx("div", { className: "flex space-x-8 items-center justify-center", children: navItems.map((item) => (_jsxs(IslandNavLink, { href: item.href, children: [_jsx(item.icon, { className: "w-4 h-4 mr-2" }), item.label] }, item.href))) }) }) }), _jsx("div", { className: "hidden md:block", children: _jsx(Button, { className: "px-8 py-2 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 hover:from-red-600 hover:via-orange-400 hover:to-yellow-400 text-white focus:ring-2 focus:ring-red-600 hover:shadow-xl transition duration-200 hover:text-white", asChild: true, children: _jsx("a", { href: "mailto:aeijthabet01@gmail.com", children: _jsxs("span", { className: "relative flex items-center", children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact"] }) }) }) }), _jsx("div", { className: "md:hidden", children: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setMobileMenuOpen(!mobileMenuOpen), className: "text-orange-500 border-orange-500 bg-black", children: mobileMenuOpen ? _jsx(X, { className: "w-6 h-6" }) : _jsx(Menu, { className: "w-6 h-6" }) }) })] }) }), mobileMenuOpen && (_jsx(motion.div, { className: "md:hidden p-4 bg-black border-t border-yellow-200 backdrop-blur-md", initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, children: _jsxs("div", { className: "flex flex-col space-y-3", children: [navItems.map((item) => (_jsxs(MobileNavLink, { href: item.href, onClick: () => setMobileMenuOpen(false), children: [_jsx(item.icon, { className: "w-4 h-4 mr-2" }), item.label] }, item.href))), _jsxs(MobileNavLink, { href: "#contact", onClick: () => setMobileMenuOpen(false), children: [_jsx(Mail, { className: "w-4 h-4 mr-2" }), "Contact"] })] }) }))] }));
};
const IslandNavLink = ({ href, children }) => {
    return (_jsxs("a", { href: href, className: "relative px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 group flex items-center", children: [_jsx("span", { className: "relative z-10 flex items-center", children: children }), _jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-black-500/20 group-hover:via-orange-500/20 group-hover:to-yellow-500/20 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-all duration-300" }), _jsx("span", { className: "absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300" })] }));
};
const MobileNavLink = ({ href, children, onClick }) => (_jsx("a", { href: href, onClick: onClick, className: "text-gray-300 hover:text-white py-2 px-4 block hover:bg-gray-800 rounded-md transition-colors flex items-center", children: children }));
export default Navbar;
//# sourceMappingURL=Navbar.js.map