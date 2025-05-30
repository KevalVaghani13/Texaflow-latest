import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98794 16806", "+91 99789 87181", "+91 90990 78284"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["texaflow@gmail.com", "support@texaflowtextile.com"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Palazzo, Ring Road", "Beside Hotel Tex", "Surat, Gujarat 395002"],
    color: "bg-blue-100 text-blue-600"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-600 text-blue-600 font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm bg-blue-50 shadow-sm" style={{letterSpacing: '0.08em'}}>
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
            Let's discuss how we can bring your textile vision to life. Our team is ready to provide personalized solutions for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-1.5 sm:pb-2 md:pb-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg ${info.color} flex items-center justify-center`}>
                      <info.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <CardTitle className="text-sm sm:text-base md:text-lg text-gray-900">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-xs sm:text-sm md:text-base text-gray-600">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-white border-gray-200 focus:border-blue-500 h-8 sm:h-9 md:h-10 text-xs sm:text-sm" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-white border-gray-200 focus:border-blue-500 h-8 sm:h-9 md:h-10 text-xs sm:text-sm" 
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">Email</label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-white border-gray-200 focus:border-blue-500 h-8 sm:h-9 md:h-10 text-xs sm:text-sm" 
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="bg-white border-gray-200 focus:border-blue-500 h-8 sm:h-9 md:h-10 text-xs sm:text-sm" 
                    />
                  </div>
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">Company</label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="bg-white border-gray-200 focus:border-blue-500 h-8 sm:h-9 md:h-10 text-xs sm:text-sm" 
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements..." 
                    className="bg-white border-gray-200 focus:border-blue-500 min-h-[80px] sm:min-h-[100px] md:min-h-[120px] text-xs sm:text-sm"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg transition-all duration-300 hover:-translate-y-1">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};
