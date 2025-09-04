export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-20 py-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Description */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg sm:text-xl leading-relaxed">
              Hello! I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Hamza Naeem</span>, 
              currently pursuing my <span className="font-semibold text-blue-600 dark:text-blue-400">
              Bachelor’s degree</span> at{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Khwaja Fareed University of Engineering and Information Technology
              </span>.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              My academic journey has given me a strong foundation in 
              <span className="text-blue-600 dark:text-blue-400"> computer science and software development</span>, 
              and I’ve developed a passion for building modern, user-friendly web 
              applications. Alongside my studies, I’m enhancing my skills in 
              <span className="text-blue-600 dark:text-blue-400"> React.js, JavaScript, and TailwindCSS</span>.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              Beyond academics, I’m constantly exploring new technologies, 
              challenging myself with personal projects, and aiming to grow into 
              a well-rounded developer who can contribute meaningfully to the 
              tech industry.
            </p>
          </div>

          {/* Right Side - Skills Box */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-4 border border-blue-600 dark:border-blue-500">
            <h3 className="text-2xl font-semibold text-center md:text-left mb-4 text-blue-600 dark:text-blue-400">
              Skills & Tools
            </h3>
            <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">React.js</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">JavaScript</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">TailwindCSS</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">HTML & CSS</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Git & GitHub</li>
              <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

