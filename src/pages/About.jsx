import React from 'react';
import MyPhoto from '../assets/pp_5.png';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Image */}
          <div className="w-48 lg:w-60 rounded-full overflow-hidden shadow-xl">
            <img src={MyPhoto} alt="Ayush" className="w-full h-full object-cover" />
          </div>
          {/* About Section */}
          <div className="space-y-6">
            <h1 className="text-[var(--color-accent)] font-bold text-3xl lg:text-4xl">About Me</h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Hey there! I’m <strong>Ayush Shrestha</strong>, a passionate front-end developer based in Dharan, Nepal. I specialize in building sleek, responsive websites using React.js, Tailwind CSS, and JavaScript.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              I'm passionate about crafting beautiful UIs that feel intuitive and perform well. Whether it's turning a rough idea into a polished design or optimizing performance, I enjoy every step of the development process.
            </p>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Outside of coding, I enjoy editing cinematic videos, capturing moments in nature, and exploring new tech gear. Creativity and curiosity fuel everything I do — from frontend development to video editing.
            </p>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-[var(--color-accent)] font-bold text-3xl lg:text-4xl mb-6">📫 Contact Details</h1>
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4 text-left">
              <div>
                <p><span className="font-semibold">Full Name:</span> Ayush Shrestha</p>
                <hr className="my-2 border-gray-300" />
              </div>
              <div>
                <p><span className="font-semibold">Email:</span> shresthaaayush863@gmail.com</p>
                <hr className="my-2 border-gray-300" />
              </div>
              <div>
                <p><span className="font-semibold">Location:</span> Dharan, Nepal</p>
                <hr className="my-2 border-gray-300" />
              </div>
              <div>
                <p><span className="font-semibold">Open to:</span> Freelance & Front-End Roles</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
