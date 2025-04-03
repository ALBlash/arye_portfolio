import React, { useState } from 'react';
import GitHubButton from './GithubBtn';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const Projects = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <p className="text-center text-gray-600">No projects available</p>;
    }

    // Each project has its own open/close state
    const [openProject, setOpenProject] = useState(null);

    const toggleProject = (projectId) => {
        setOpenProject(openProject === projectId ? null : projectId);
    };

    return (
        <div className="h-full py-10">
            <div className="flex flex-col items-center container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h2>
                <p className="text-lg text-center text-gray-600 mb-12">Here are some of my projects:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const isOpen = openProject === project.id;

                        return (
                            <div
                                key={project.id}
                                className="bg-white w-80 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex flex-row justify-between items-center">
                                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                                        <FontAwesomeIcon
                                            icon={faAnglesRight}
                                            className={`text-gray-500 size-5 ml-1 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                                            onClick={() => toggleProject(project.id)}
                                        />
                                    </div>

                                    {/* Description with smooth transition */}
                                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isOpen ? "max-h-50 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <p className="text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="w-full flex flex-row justify-between">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            View Project
                                        </a>
                                        <GitHubButton githubLink={project.githubLink} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
