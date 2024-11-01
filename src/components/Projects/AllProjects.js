import React from "react";
import { ProjectList } from "../../data/ProjectData"; // Adjusted import path
import ProjectCard from "./ProjectCard/ProjectCard"; // Adjust the import path as necessary

function AllProjects() {
    return (
        <div>
            <h1>All Projects</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {ProjectList.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default AllProjects;
