import { useState } from "react";
import ContactModal from "./ContactModel";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <footer className="bg-gray-900 text-white py-8 mt-12 ">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/ari-blashnikov-137870268/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 text-2xl"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/ALBlash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 text-2xl"
                    >
                        <FaGithub />
                    </a>
                </div>
                <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-900 hover:bg-blue-950 px-4 py-2 rounded text-white transition"
                >
                    Contact Me
                </button>
            </div>

            <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </footer>
    );
}
