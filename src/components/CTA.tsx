
const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container-custom text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Construction Project?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/80">
            Partner with Crown Construction for exceptional quality, on-time delivery, and unmatched expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="btn-secondary">Get a Free Quote</a>
            <a href="#services" className="bg-transparent border-2 border-white py-3 px-6 rounded-md hover:bg-white/10 transition-colors duration-300">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
