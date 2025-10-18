import React from 'react';
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
declare const ProjectCard: React.FC<ProjectCardProps>;
export default ProjectCard;
//# sourceMappingURL=ProjectCard.d.ts.map