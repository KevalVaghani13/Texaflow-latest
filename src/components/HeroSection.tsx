import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Clock, Users, Star, BarChart, Settings, Shield, Zap, LineChart, Database, X, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setIsCalendarOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add your form submission logic
    setIsDemoDialogOpen(false);
  };

  return (
    <>
      <section id="home" className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="flex flex-col items-center">
            {/* Main Content */}
            <div className="max-w-5xl mx-auto">
              {/* Center Content */}
              <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
                {/* Main Heading */}
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                    <div className="space-y-1 sm:space-y-2 md:space-y-4">
                      <div className="text-gray-900 hover:text-gray-900 transition-colors duration-300">Powerful Software</div>
                      <div className="text-gray-900 hover:text-gray-900 transition-colors duration-300">Driving Textile</div>
                      <div className="text-gray-900 hover:text-gray-900 transition-colors duration-300">Business Forward</div>
                    </div>
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed animate-fade-in-up px-2 sm:px-4 md:px-0">
                    Streamline your operations with our innovative management solutions.
                    <br className="hidden sm:block" />
                    Built for modern businesses that demand efficiency and excellence.
                  </p>
                </div>

                {/* Feature Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-2 sm:px-4 md:px-0">
                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900">Support 24/7</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Always Available</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900">100% Satisfaction</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-blue-100 p-1.5 sm:p-2 rounded-lg">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900">Premium Features</h3>
                        <p className="text-xs sm:text-sm text-gray-600">Best in Class</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center px-2 sm:px-4 md:px-0">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg group border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                    onClick={() => setIsDemoDialogOpen(true)}
                  >
                    Book Demo
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Link
                    to="dashboard-image"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={300}
                    className="w-full sm:w-auto"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg group border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 w-full"
                    >
                      <Play className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Section */}
              <div id="dashboard-image" className="relative mt-8 sm:mt-12 md:mt-16 max-w-5xl mx-auto w-full px-2 sm:px-4 md:px-0">
                {/* Desktop Frame */}
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-400/10 p-0.5 sm:p-1 rounded-lg sm:rounded-xl md:rounded-2xl">
                  <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl overflow-hidden">
                    {/* Desktop Content Only - removed header and buttons */}
                    <div className="relative">
                      <img 
                        src="/dashboard.webp" 
                        alt="Textile Dashbord Image" 
                        className="w-full h-auto object-cover"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* Demo Booking Dialog */}
      <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
        <DialogContent className="sm:max-w-[400px] bg-white rounded-2xl shadow-2xl border-0 p-0 overflow-hidden mx-3 sm:mx-4">
          <form onSubmit={handleSubmit}>
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 sm:px-6 py-4 sm:py-5 text-center">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <DialogTitle className="text-lg sm:text-xl font-bold text-white">
                Book a Demo
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-xs sm:text-sm mt-1 sm:mt-1.5">
                Schedule your personalized demo
              </DialogDescription>
            </div>

            <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4">
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="company" className="text-xs sm:text-sm font-medium text-gray-700">
                  Company
                </Label>
                <Input
                  id="company"
                  placeholder="Enter company name"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label className="text-xs sm:text-sm font-medium text-gray-700">
                  Preferred Date
                </Label>
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal border-gray-200 rounded-lg h-8 sm:h-9 md:h-10 text-xs sm:text-sm",
                        !date && "text-gray-500"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={handleDateSelect}
                      initialFocus
                      className="rounded-lg border shadow-lg"
                      required
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 flex gap-2 sm:gap-3">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setIsDemoDialogOpen(false)}
                className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50 h-8 sm:h-9 md:h-10 text-xs sm:text-sm"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white h-8 sm:h-9 md:h-10 text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
