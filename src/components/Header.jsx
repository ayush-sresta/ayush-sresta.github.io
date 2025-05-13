import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#services", label: "Services" },
    { id: "#skills", label: "Skills" },
    { id: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort by intersection ratio in descending order
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries[0];
          setActiveLink(`#${mostVisible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -80% 0px", // Adjusted to better detect the active section
        threshold: [0.2, 0.5, 0.75], // more sensitivity
      }
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const offset = 80; // Adjust for the height of the navbar
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    // setSidebarOpen((prev) => prev(false));
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full h-[8vh] bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex justify-between items-center">
          <div className="text-2xl text-[var(--color-accent)] cursive-font font-bold">
            A.S
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-8 font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`hover:text-[var(--color-accent-hover)] ease-in-out duration-150 ${activeLink === item.id
                    ? "text-[var(--color-accent)] font-semibold"
                    : ""
                    }`}
                >
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="lg:hidden">
            {!sidebarOpen ? (
              <button onClick={() => setSidebarOpen(true)} className="focus:outline-none">
                <FaBars className="text-2xl" />
              </button>
            ) : (
              <button onClick={() => setSidebarOpen(false)} className="focus:outline-none">
                <FaXmark className="text-3xl" />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full flex justify-center flex-col gap-20 items-center bg-white shadow-md transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 z-40 lg:hidden p-6 pt-20`}
      >
        <ul className="space-y-6 flex flex-col items-center text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                href={item.id}
                onClick={() => handleClick(item.id)}
                className={`block hover:text-[var(--color-accent-hover)] ${activeLink === item.id
                  ? "text-[var(--color-accent)] font-semibold"
                  : ""
                  }`}
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
