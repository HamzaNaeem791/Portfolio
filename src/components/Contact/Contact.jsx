import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-20 py-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I’d love to hear from you! Whether it’s a project, a job opportunity, or just a chat —
          feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {/* Phone */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-3 hover:shadow-2xl transition duration-300">
            <FaPhone className="text-blue-600 dark:text-blue-400 text-3xl" />
            <h3 className="font-semibold text-lg">Phone</h3>
            <a href="tel:+923036717744" className="text-blue-600 dark:text-blue-400 hover:underline">
              +92 303 6717744
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-3 hover:shadow-2xl transition duration-300">
            <FaEnvelope className="text-blue-600 dark:text-blue-400 text-3xl" />
            <h3 className="font-semibold text-lg">Email</h3>
            <a href="mailto:hamzanaeem1024@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              hamzanaeem1024@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-3 hover:shadow-2xl transition duration-300">
            <FaLinkedin className="text-blue-600 dark:text-blue-400 text-3xl" />
            <h3 className="font-semibold text-lg">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/hamza-naeem-30a906311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/HamzaNaeem
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-3 hover:shadow-2xl transition duration-300">
            <FaGithub className="text-blue-600 dark:text-blue-400 text-3xl" />
            <h3 className="font-semibold text-lg">GitHub</h3>
            <a
              href="https://github.com/HamzaNaeem791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/HamzaNeem791
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

