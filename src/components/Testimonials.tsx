
const Testimonials = () => {
  const testimonialsList = [
    {
      content: "Crown Construction exceeded our expectations in every way. Their attention to detail and commitment to quality was evident throughout the entire project. We're extremely satisfied with our new office space!",
      author: "Michael Chen",
      position: "CEO, Nexus Innovations",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "Working with Crown Construction was a seamless experience from start to finish. Their team was professional, responsive, and delivered our dream home exactly as we envisioned it, on time and on budget.",
      author: "Sarah Johnson",
      position: "Homeowner",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "The quality of work delivered by Crown Construction is truly exceptional. Their expertise in commercial construction helped us create a space that perfectly aligns with our brand and business needs.",
      author: "David Williams",
      position: "Operations Director, Retail Chain",
      image: "https://randomuser.me/api/portraits/men/86.jpg"
    }
  ];
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our <span className="text-primary">Clients Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it – hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative">
              <svg className="absolute top-6 left-6 text-secondary/20 w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
              </svg>
              
              <p className="text-gray-700 mb-6 mt-8 z-10 relative">{testimonial.content}</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
