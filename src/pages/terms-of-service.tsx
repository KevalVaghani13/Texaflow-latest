import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#10172a] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link to="/">
              <Button 
                variant="ghost" 
                className="text-white hover:text-blue-400 flex items-center gap-2 group transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using TexaFlow Textile Solutions' services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
              <p>
                These Terms of Service constitute a legally binding agreement between you and TexaFlow Textile Solutions regarding your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily use our services for personal or business purposes, subject to the following restrictions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must not modify or copy our materials without explicit permission</li>
                <li>You must not use our materials for any unauthorized commercial purpose</li>
                <li>You must not attempt to reverse engineer any software or systems</li>
                <li>You must not remove any copyright or proprietary notations</li>
                <li>You must not transfer the materials to another person or mirror the materials on any other server</li>
                <li>You must not use our services for any illegal or unauthorized purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Service Description</h2>
              <p className="mb-4">
                Our comprehensive textile industry solutions include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Textile industry management software and tools</li>
                <li>Business process automation solutions</li>
                <li>Inventory and supply chain management</li>
                <li>Quality control and compliance tracking</li>
                <li>Technical support and maintenance services</li>
                <li>Training and consultation services</li>
                <li>Custom development and integration services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
              <p className="mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information during registration and use</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Use the services only for lawful purposes</li>
                <li>Notify us immediately of any security breaches</li>
                <li>Maintain appropriate backups of your data</li>
                <li>Pay all applicable fees and charges on time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                Our payment terms include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are due in advance of service delivery</li>
                <li>Payment methods accepted: Credit Card, Bank Transfer, and other approved methods</li>
                <li>Subscription services are billed on a recurring basis</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                TexaFlow Textile Solutions shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business interruption</li>
                <li>Any damages arising from the use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                All content and materials available through our services are protected by intellectual property rights:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All software, code, and technology are our exclusive property</li>
                <li>All trademarks, logos, and branding are protected</li>
                <li>User content remains your property, but you grant us a license to use it</li>
                <li>You may not use our intellectual property without written permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For violation of these Terms of Service</li>
                <li>For fraudulent or illegal activity</li>
                <li>For non-payment of fees</li>
                <li>At our sole discretion, with or without cause</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website. Continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at:
                <br />
                Email: support@texaflowtextile.com
                <br />
                Last Updated: March 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 