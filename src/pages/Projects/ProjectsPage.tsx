import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art office complex featuring modern amenities and sustainable design principles.",
      location: "Downtown Business District",
      completion: "2024",
      size: "50,000 sq ft",
      features: [
        "LEED Gold Certified",
        "Smart Building Technology",
        "Rooftop Garden",
        "Underground Parking"
      ]
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Premium residential tower offering luxurious living spaces with panoramic city views.",
      location: "Waterfront District",
      completion: "2023",
      size: "40,000 sq ft",
      features: [
        "24/7 Concierge",
        "Infinity Pool",
        "Private Balconies",
        "Fitness Center"
      ]
    },
    {
      id: 3,
      title: "Community Shopping Center",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Modern shopping complex designed to serve the local community with essential retail spaces.",
      location: "Suburban Area",
      completion: "2024",
      size: "75,000 sq ft",
      features: [
        "Ample Parking",
        "Food Court",
        "Children's Play Area",
        "Green Spaces"
      ]
    },
    {
      id: 4,
      title: "Eco-Friendly Apartments",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Sustainable apartment complex incorporating green building practices and energy-efficient systems.",
      location: "Green Valley",
      completion: "2023",
      size: "60,000 sq ft",
      features: [
        "Solar Panels",
        "Rainwater Harvesting",
        "EV Charging Stations",
        "Community Garden"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16 md:py-24">
        {/* Add back button at the top */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft size={20} />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="section-title">Our <span className="text-primary">Projects</span></h1>
          <p className="section-subtitle">
            Discover our portfolio of successful projects across residential and commercial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <CardHeader className="p-0">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-6">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Location</TableHead>
                          <TableHead>Completion</TableHead>
                          <TableHead>Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>{project.location}</TableCell>
                          <TableCell>{project.completion}</TableCell>
                          <TableCell>{project.size}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
