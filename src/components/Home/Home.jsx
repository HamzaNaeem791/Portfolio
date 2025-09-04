import Picture from "../../assets/Picture.jpg"; // adjust path if needed

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300 w-full">
      
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
          Hi, I’m <span className="text-blue-600">Hamza Naeem</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          A passionate <span className="font-semibold">Frontend Developer</span> skilled in React.js, JavaScript, 
          and TailwindCSS. Currently focused on frontend, exploring backend next, and aiming for 
          Data Science in the future.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center mb-10 md:mb-0">
        <img
          src={Picture}
          alt="Profile"
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
      </div>
    </section>
  );
}


