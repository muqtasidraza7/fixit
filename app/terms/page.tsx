import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";

export default function TermsPage() {
    const lastUpdated = "January 20, 2026";

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-gray-600">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Fixit's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our services.
                        </p>

                        <h2>2. Description of Service</h2>
                        <p>
                            Fixit provides a platform that connects customers with verified service professionals for home repairs, maintenance, and installations. We act as an intermediary and do not directly provide the services ourselves.
                        </p>

                        <h2>3. User Responsibilities</h2>
                        <h3>3.1 Account Registration</h3>
                        <p>
                            You may be required to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                        </p>

                        <h3>3.2 Accurate Information</h3>
                        <p>
                            You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                        </p>

                        <h3>3.3 Prohibited Activities</h3>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the service for any illegal purpose</li>
                            <li>Harass, abuse, or harm service providers or other users</li>
                            <li>Post false, inaccurate, or misleading information</li>
                            <li>Interfere with or disrupt the service or servers</li>
                            <li>Attempt to gain unauthorized access to any portion of the service</li>
                        </ul>

                        <h2>4. Service Provider Terms</h2>
                        <h3>4.1 Verification</h3>
                        <p>
                            All service providers must undergo our verification process, including background checks and credential verification.
                        </p>

                        <h3>4.2 Service Quality</h3>
                        <p>
                            Service providers are expected to deliver high-quality services and maintain professional conduct at all times.
                        </p>

                        <h2>5. Booking and Cancellation</h2>
                        <h3>5.1 Booking</h3>
                        <p>
                            When you book a service, you enter into a direct agreement with the service provider. Fixit facilitates this connection but is not a party to the service agreement.
                        </p>

                        <h3>5.2 Cancellation Policy</h3>
                        <p>
                            Cancellations made at least 24 hours before the scheduled service time will not incur any charges. Cancellations made within 24 hours may be subject to a cancellation fee.
                        </p>

                        <h2>6. Payments and Fees</h2>
                        <h3>6.1 Service Fees</h3>
                        <p>
                            Service providers set their own rates. The prices displayed are starting rates and may vary based on the complexity of the job.
                        </p>

                        <h3>6.2 Platform Fee</h3>
                        <p>
                            Fixit may charge a platform fee for facilitating the connection between customers and service providers.
                        </p>

                        <h3>6.3 Payment Methods</h3>
                        <p>
                            We accept various payment methods including cash, credit/debit cards, and mobile wallets. All online payments are processed securely.
                        </p>

                        <h2>7. Liability and Disclaimers</h2>
                        <h3>7.1 No Warranty</h3>
                        <p>
                            The service is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted or error-free.
                        </p>

                        <h3>7.2 Limitation of Liability</h3>
                        <p>
                            Fixit shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                        </p>

                        <h3>7.3 Service Provider Actions</h3>
                        <p>
                            While we verify our service providers, we are not responsible for their actions, work quality, or any damages that may occur during service delivery.
                        </p>

                        <h2>8. Intellectual Property</h2>
                        <p>
                            All content on the Fixit platform, including text, graphics, logos, and software, is the property of Fixit or its content suppliers and is protected by intellectual property laws.
                        </p>

                        <h2>9. Privacy</h2>
                        <p>
                            Your use of the service is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
                        </p>

                        <h2>10. Modifications to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
                        </p>

                        <h2>11. Termination</h2>
                        <p>
                            We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
                        </p>

                        <h2>12. Governing Law</h2>
                        <p>
                            These Terms of Service shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
                        </p>

                        <h2>13. Contact Information</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <ul>
                            <li>Email: legal@fixit.com</li>
                            <li>Phone: +92 300 1234567</li>
                            <li>Address: Lahore, Pakistan</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
