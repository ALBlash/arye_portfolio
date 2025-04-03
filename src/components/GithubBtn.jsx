import { FaGithub } from "react-icons/fa";

export default function GitHubButton({ githubLink }) {
    return (
        <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
            <FaGithub size={24} />
            <span>GitHub</span>
        </a>
    );
}
