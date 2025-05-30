import { BarChart, Settings, Shield, Zap, LineChart, Database } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-24 bg-[#10172a] relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Badge */}
        <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
          <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-400 text-blue-300 font-semibold uppercase tracking-wider text-[10px] sm:text-xs md:text-sm bg-blue-400/10 shadow-sm backdrop-blur-sm" style={{letterSpacing: '0.08em'}}>
            Specialized Features
          </span>
        </div>
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Features for Textile Professionals
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-4 md:px-0">
            Comprehensive tools designed for the modern textile industry
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {/* Feature Box 1 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <BarChart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Fabric & Material Management</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Track different fabrics, yarns, and materials with specialized attributes like GSM, weave type, dye specifications, and color variations.</p>
            </div>
          </div>

          {/* Feature Box 2 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Settings className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Production Process Tracking</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Monitor textile manufacturing processes from yarn to finished fabric with specialized workflows and quality checkpoints.</p>
            </div>
          </div>

          {/* Feature Box 3 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Inventory Management</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Smart inventory tracking and optimization for raw materials and finished goods.</p>
            </div>
          </div>

          {/* Feature Box 4 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Order Processing</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Efficiently manage orders from entry to shipment. Automate tasks, reduce errors, and ensure timely deliveries for your clients.</p>
            </div>
          </div>

          {/* Feature Box 5 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <LineChart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Performance Tracking</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Monitor business performance with clear analytics. Visualize KPIs, spot trends, and make data-driven decisions for growth.</p>
            </div>
          </div>

          {/* Feature Box 6 */}
          <div className="group relative" style={{minHeight: '220px'}}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-[#1a2234] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 md:mb-6">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1.5 sm:mb-2 md:mb-3">Data Management</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-300">Securely handle all your business data, from inventory logs to financial records. Ensure easy access and data integrity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};
