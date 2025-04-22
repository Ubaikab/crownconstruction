
const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">About <span className="text-primary">Crown Construction</span></h2>
          <p className="section-subtitle">Building dreams into reality with precision and passion</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-primary absolute top-[-20px] left-[-20px] w-32 h-32 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Construction site" 
                className="rounded-lg shadow-xl z-10 relative w-full h-auto"
              />
              <div className="bg-secondary absolute bottom-[-20px] right-[-20px] w-32 h-32 z-0"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Your Partner in Construction Excellence Since 2005</h3>
            <p className="text-gray-700 mb-4">
              Crown Construction has been delivering exceptional construction services for over 18 years. Our commitment to quality, transparency, and client satisfaction has made us one of the most trusted names in the industry.
            </p>
            <p className="text-gray-700 mb-6">
              With a team of skilled professionals and a passion for innovation, we transform your vision into reality. From residential buildings to commercial spaces, our expertise spans across all domains of construction.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-primary mb-2">200+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-primary mb-2">98%</h4>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-primary mb-2">18+</h4>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-primary mb-2">50+</h4>
                <p className="text-gray-600">Expert Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
