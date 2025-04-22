
const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container-custom py-20 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building <span className="text-secondary">Excellence</span> in Every Project
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Crown Construction delivers premium quality construction services with unmatched expertise and reliability. From planning to execution, we build your vision with excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-secondary">Our Services</a>
            <a href="#contact" className="btn-primary border border-white">Get a Quote</a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <a href="#about" className="animate-bounce p-2 bg-white/20 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
