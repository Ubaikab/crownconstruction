
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary mr-2">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.727 6.727 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
              </svg>
              <span className="text-2xl font-bold">Crown Construction</span>
            </div>
            <p className="text-gray-300 mb-6">
              Building excellence, delivering trust, and creating lasting value in every project we undertake.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-secondary transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07c0-5.525-4.475-10-10-10s-10 4.475-10 10c0 4.988 3.663 9.113 8.438 9.875v-6.987h-2.54v-2.888h2.54V9.85c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.24 0-1.629.771-1.629 1.562v1.875h2.773l-.443 2.888h-2.33v6.987C18.337 21.183 22 17.058 22 12.07z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm5.976 15.443c-.316.443-.884.575-1.327.258-.34-.242-7.611-4.688-7.835-4.828-.226-.14-.226-.467 0-.607.224-.14 7.495-4.587 7.835-4.83.442-.316 1.01-.183 1.327.26.316.442.183 1.01-.26 1.326l-6.41 3.851 6.41 3.85c.443.318.576.884.26 1.327z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-secondary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-secondary transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-secondary transition-colors duration-300">Services</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-secondary transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-secondary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Residential Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Commercial Construction</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Renovation & Remodeling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Project Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-300">Interior Designing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates on our projects and services.
            </p>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button type="submit" className="bg-secondary text-primary font-medium py-3 px-4 rounded-md hover:bg-secondary/90 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} Crown Construction. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
