
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Award, Truck } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Satisfied Clients", color: "text-blue-600" },
  { icon: Award, value: "25+", label: "Years Experience", color: "text-purple-600" },
  { icon: Star, value: "99%", label: "Success Rate", color: "text-green-600" },
  { icon: Truck, value: "50K+", label: "Orders Delivered", color: "text-orange-600" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-blue-600 border-blue-600">About TexaFlow</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leading the Future of
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Textile Innovation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 25 years, TexaFlow Textile has been at the forefront of textile innovation, 
                combining traditional craftsmanship with cutting-edge technology to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to sustainability, quality, and customer satisfaction has made us the 
                preferred partner for businesses worldwide seeking premium textile solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-0">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More About Us
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300" 
                alt="Textile Manufacturing Process" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&h=300" 
                alt="Quality Control" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">ISO 9001:2015</div>
                  <div className="text-gray-600">Certified Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
