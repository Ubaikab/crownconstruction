
import { Link } from "react-router-dom";

const Projects = () => {
  const projectsList = [
    {
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxury Residential Tower",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Community Shopping Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Eco-Friendly Apartments",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our <span className="text-primary">Projects</span></h2>
          <p className="section-subtitle">
            Showcasing our excellence through successful project deliveries across various domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-secondary font-medium mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <Link 
                  to="/projects" 
                  className="inline-block mt-2 text-secondary hover:text-white transition-colors duration-300"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
