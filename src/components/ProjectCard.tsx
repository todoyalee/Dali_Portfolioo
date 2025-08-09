import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="h-full group">
      <a href={project.githubUrl}>
        <Card className="overflow-hidden transition-all duration-300 h-full flex flex-col bg-black border-yellow-500 rounded-xl relative project-card-hover card-shadow-effect">
          <div className="absolute inset-0 bg-black rounded-xl transition-all duration-300 blur-md scale-150 group-hover:scale-100 -z-10"></div>

          <div className="overflow-hidden h-48 relative">
            <img
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
        
        <CardHeader>
            <CardTitle className="text-xl font-semibold text-white text-center ">
              {project.title}
            </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <CardDescription className="text-sm text-gray-400">
            {project.description}
          </CardDescription>
        </CardContent>
        
      </Card>
      </a>
    </div>
  );
};

export default ProjectCard;