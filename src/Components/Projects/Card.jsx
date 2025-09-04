import { Link } from "react-router-dom";

export default function Card({ title, description, image, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>

        {/* Link (Client-side Navigation) */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
           className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-300"
         >
  View Project
</a>
      </div>
    </div>
  );
}
