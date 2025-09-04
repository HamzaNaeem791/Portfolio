import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/HamzaNaeem791"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaGithub size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hamza-naeem-30a906311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <FaLinkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>

        {/* Rights Reserved */}
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Hamza Naeem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
