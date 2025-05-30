import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const pricingPlans = [
  {
    name: "Free Trial",
    price: "Free",
    duration: "1 Month",
    description: "Perfect for testing our platform",
    features: [
      "Basic textile management",
      "Up to 100 products",
      "Standard support",
      "Basic reporting",
      "Single user access"
    ],
    popular: false,
    buttonText: "Start Free Trial",
    buttonStyle: "outline"
  },
  {
    name: "Professional",
    price: "₹2,999",
    duration: "1 Year",
    description: "Ideal for growing textile businesses",
    features: [
      "Advanced textile management",
      "Unlimited products",
      "Priority support",
      "Advanced analytics",
      "Up to 10 users",
      "Custom workflows",
      "API access"
    ],
    popular: true,
    buttonText: "Get Started",
    buttonStyle: "default"
  },
  {
    name: "Enterprise",
    price: "₹5,499",
    duration: "3 Years",
    description: "Complete solution for large operations",
    features: [
      "Everything in Professional",
      "Unlimited users",
      "24/7 premium support",
      "Custom integrations",
      "Advanced security",
      "Training & onboarding",
      "Dedicated account manager"
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonStyle: "outline"
  }
];

export const PricingSection = () => {
  const [isSalesDialogOpen, setIsSalesDialogOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const form = document.querySelector('form') as HTMLFormElement;
    const formData = new FormData(form);

    // Validate First Name
    if (!formData.get('firstName')) {
      errors.firstName = 'First name is required';
    }

    // Validate Last Name
    if (!formData.get('lastName')) {
      errors.lastName = 'Last name is required';
    }

    // Validate Email
    const email = formData.get('email') as string;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate Phone
    const phone = formData.get('phone') as string;
    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Validate Company
    if (!formData.get('company')) {
      errors.company = 'Company name is required';
    }

    // Validate Question
    if (!formData.get('question')) {
      errors.question = 'Please select a question';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Show success message
      toast.success("Request submitted successfully! We'll contact you within 12 hours.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#10B981",
          color: "white",
          border: "none",
          padding: "16px",
          borderRadius: "8px",
          fontSize: "16px",
        },
      });
      
      // Close the form
      setIsSalesDialogOpen(false);
      
      // Reset form errors
      setFormErrors({});
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-3 py-1 rounded-full border border-blue-600 text-blue-600 font-semibold uppercase tracking-wider text-xs md:text-sm bg-blue-50 shadow-sm" style={{letterSpacing: '0.08em'}}>
              PRICING PLANS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
            Flexible pricing options designed to grow with your textile business
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-blue-500 border-2 lg:scale-105' : 'border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 md:px-4 py-1 flex items-center space-x-1 text-xs md:text-sm">
                    <Star className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6 md:pb-8">
                <CardTitle className="text-xl md:text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-sm md:text-base text-gray-600 ml-2">/ {plan.duration}</span>
                </div>
                <CardDescription className="text-sm md:text-base text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 md:space-y-6">
                <ul className="space-y-2 md:space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 md:space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm md:text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  variant={plan.buttonStyle as "default" | "outline"} 
                  className={`w-full py-2 md:py-3 text-sm md:text-base ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Need a custom solution?</p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50 py-2 md:py-3 text-sm md:text-base"
            onClick={() => setIsSalesDialogOpen(true)}
          >
            Contact Our Sales Team
          </Button>
        </div>
      </div>

      {/* Sales Contact Dialog */}
      <Dialog open={isSalesDialogOpen} onOpenChange={setIsSalesDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white rounded-xl md:rounded-2xl shadow-2xl border-0 p-0 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 md:px-6 py-3 md:py-4 text-center">
            <DialogTitle className="text-lg md:text-xl font-bold text-white">
              Contact Sales Team
            </DialogTitle>
            <DialogDescription className="text-blue-100 text-xs md:text-sm mt-0.5">
              Get in touch with our sales team for a custom solution
            </DialogDescription>
          </div>

          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="firstName" className="text-xs md:text-sm font-medium text-gray-700">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name"
                  className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 md:h-9 text-xs md:text-sm ${formErrors.firstName ? 'border-red-500' : ''}`}
                />
                {formErrors.firstName && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.firstName}</p>
                )}
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <Label htmlFor="lastName" className="text-xs md:text-sm font-medium text-gray-700">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name"
                  className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 md:h-9 text-xs md:text-sm ${formErrors.lastName ? 'border-red-500' : ''}`}
                />
                {formErrors.lastName && (
                  <p className="text-xs text-red-500 mt-1">{formErrors.lastName}</p>
                )}
              </div>
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="email" className="text-xs md:text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 md:h-9 text-xs md:text-sm ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && (
                <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="phone" className="text-xs md:text-sm font-medium text-gray-700">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 md:h-9 text-xs md:text-sm ${formErrors.phone ? 'border-red-500' : ''}`}
              />
              {formErrors.phone && (
                <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
              )}
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="company" className="text-xs md:text-sm font-medium text-gray-700">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Enter company name"
                className={`border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg h-8 md:h-9 text-xs md:text-sm ${formErrors.company ? 'border-red-500' : ''}`}
              />
              {formErrors.company && (
                <p className="text-xs text-red-500 mt-1">{formErrors.company}</p>
              )}
            </div>

            <div className="space-y-1.5 md:space-y-2">
              <Label htmlFor="question" className="text-xs md:text-sm font-medium text-gray-700">
                What would you like to know?
              </Label>
              <Select name="question">
                <SelectTrigger className={`h-8 md:h-9 text-xs md:text-sm ${formErrors.question ? 'border-red-500' : ''}`}>
                  <SelectValue placeholder="Select a question" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pricing">Pricing & Plans</SelectItem>
                  <SelectItem value="features">Features & Capabilities</SelectItem>
                  <SelectItem value="integration">Integration & Setup</SelectItem>
                  <SelectItem value="other">Other Questions</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.question && (
                <p className="text-xs text-red-500 mt-1">{formErrors.question}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 md:py-3 text-sm md:text-base"
            >
              Submit Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
