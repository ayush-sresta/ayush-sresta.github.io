const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        {/* Footer Content */}
        <div className="flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0">
          {/* Copyright */}
          <div className="text-gray-700 text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} <span className="text-[var(--color-accent)] font-bold">Ayush Shrestha</span>. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
