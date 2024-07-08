import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Home } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative bg-gray-900 text-white py-20">
        <img src="/placeholder.svg" alt="Town Landscape" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Pineville</h1>
            <p className="text-xl mb-8">A charming small town nestled in the heart of nature.</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">Learn More</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="Pineville" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-3xl font-bold mb-4">About Pineville</h2>
              <p className="text-gray-600 mb-4">
                Pineville is a picturesque small town founded in 1850. Surrounded by lush forests and clear streams, 
                our community prides itself on its rich history, friendly atmosphere, and commitment to preserving nature.
              </p>
              <p className="text-gray-600">
                Whether you're looking for outdoor adventures, quaint shops, or simply a peaceful getaway, 
                Pineville offers something for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="h-64 bg-gray-300 rounded-lg">
                {/* Placeholder for map */}
                <div className="h-full flex items-center justify-center text-gray-500">
                  <MapPin className="h-8 w-8 mr-2" />
                  <span>Map of Pineville</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Home className="h-6 w-6 mr-2" />
              <span className="text-lg font-semibold">Pineville</span>
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#home" className="hover:text-green-400">Home</a></li>
                <li><a href="#about" className="hover:text-green-400">About</a></li>
                <li><a href="#events" className="hover:text-green-400">Events</a></li>
                <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-green-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-green-400"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2023 Pineville. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const events = [
  {
    title: "Annual Pine Festival",
    date: "July 15-17, 2023",
    description: "Celebrate our town's heritage with music, food, and crafts."
  },
  {
    title: "Summer Farmers Market",
    date: "Every Saturday, June-September",
    description: "Fresh local produce, artisanal goods, and community fun."
  },
  {
    title: "Pineville Marathon",
    date: "September 3, 2023",
    description: "Join us for our scenic run through town and surrounding nature trails."
  }
];

export default Index;