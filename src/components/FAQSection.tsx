import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is TexaFlow?",
    answer: "TexaFlow is a comprehensive textile management platform designed to streamline operations, enhance efficiency, and drive growth in the textile industry. It combines advanced technology with industry-specific features to help businesses manage their entire textile workflow."
  },
  {
    question: "How does TexaFlow help my business?",
    answer: "TexaFlow helps your business by providing tools for inventory management, order processing, quality control, and production tracking. It reduces manual work, minimizes errors, and provides real-time insights to make better business decisions."
  },
  {
    question: "Is TexaFlow suitable for small businesses?",
    answer: "Yes, TexaFlow is designed to scale with your business. We offer different pricing plans to accommodate businesses of all sizes, from small startups to large enterprises. Our platform is flexible and can be customized to meet your specific needs."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including 24/7 technical assistance, training sessions, and regular updates. Our support team is always ready to help you with any questions or issues you may have."
  },
  {
    question: "Can I integrate TexaFlow with my existing systems?",
    answer: "Yes, TexaFlow offers seamless integration with various business systems and software. Our platform is designed to work with your existing tools, making the transition smooth and efficient."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-20 bg-[#10172a] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#10172a] to-[#1a2540] opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center mb-4 md:mb-6">
            <span className="px-3 py-1 rounded-full border border-blue-400 text-blue-400 font-semibold uppercase tracking-wider text-xs md:text-sm bg-blue-900/20 shadow-sm" style={{letterSpacing: '0.08em'}}>
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 md:px-0">
            Find answers to common questions about TexaFlow
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-700 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 text-left text-white hover:text-blue-400 transition-colors text-sm md:text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 py-3 md:py-4 text-gray-300 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}; 