import React from 'react';
import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "I specialize in building responsive, fast, and accessible user interfaces using modern technologies like React.js and Tailwind CSS. My focus is on creating seamless user experiences that look great on all devices.",
      icon: <FaCode className="text-3xl text-white" />,
    },
    {
      title: "Backend Integration",
      description:
        "I integrate frontend applications with robust backend systems, APIs, and databases using Node.js or similar stacks. This includes handling authentication, data fetching, and server-side logic to ensure smooth functionality.",
      icon: <FaServer className="text-3xl text-white" />,
    },
    {
      title: "UI/UX Design",
      description:
        "With a strong eye for detail, I design clean and intuitive interfaces that enhance usability. I focus on user-centric design principles, wireframing, and maintaining visual consistency across platforms.",
      icon: <FaPaintBrush className="text-3xl text-white" />,
    },
    {
      title: "Mobile-First Design",
      description:
        "I adopt a mobile-first approach to ensure websites are fully optimized for smaller screens before scaling up. This helps create responsive layouts that deliver excellent performance across all devices.",
      icon: <FaMobileAlt className="text-3xl text-white" />,
    },
  ];


  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-center text-[var(--color-accent)] mb-12">Services</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-accent-hover)] rounded-full shadow-md">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center text-[var(--color-text-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-center text-[var(--color-text-secondary)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
