import { useState } from "react";
// import { FaBehance, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from '../assets/img_1.jpg';
import { FaInstagram, FaLinkedin } from "react-icons/fa"; // Add missing imports

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error("Failed to load image");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        {/* <h5 className="text-blue-300 text-sm md:text-base">Welcome to my portfolio!</h5> */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hello,<br />I'm <span className="text-blue-500">Ajay Karthi</span>
        </h1>
        <p className="text-gray-300 max-w-md mx-auto md:mx-0">
          I’m a video Editor from CBE. Currently working with <span className="text-blue-400">@CCmedia</span> as a senior Video Editor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
          >
            Download cv
          </a> */}
          <a
            href="#"
            className="border border-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            See my work →
          </a>
        </div>
      </div>

      {/* Right Content (Image & Social Links) */}
      <div className="flex-1 flex flex-col items-center mt-10 md:mt-0 relative">
        <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-blue-600 shadow-xl">  {/* Changed from w-64 h-80 to w-72 h-96 */}
          {!imageError ? (
            <img
              src={img}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-800">
              <span className="text-gray-400">Image not available</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
          <a href="#" className="text-pink-400 hover:text-pink-500 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
