import Card from "./Card";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React.js and TailwindCSS showcasing my skills and projects.",
      image: "/images/Portfolio.PNG",
      link: "https://github.com/HamzaNaeem791/Portfolio", 
    },
    {
      title: "Todo App",
      description:
        "A simple and responsive Todo App with task management, built using React and local storage.",
      image: "/images/TodoApp.PNG",
      link: "https://github.com/HamzaNaeem791/Todo-App",
    },
     {
      title: "Weather App",
      description:
        "A simple Weather App with API call, built using React and local storage.",
      image: "/images/Weather.PNG",
      link: "https://github.com/HamzaNaeem791/WeatherApp", 
    },
    {
      title: "Router App",
      description:
        "A simple Router App with just functioning of routing concept, built using React and local storage.",
      image: "/images/Router.PNG",
      link: "https://github.com/HamzaNaeem791/Router",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-20 py-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
