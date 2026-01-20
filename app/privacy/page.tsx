import Navigation from "@/app/Components/Navigation";
import Footer from "@/app/Components/Footer";

export default function PrivacyPage() {
    const lastUpdated = "January 20, 2026";

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <div className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-600">
                            Last updated: {lastUpdated}
                        </p>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
                        <h2>1. Introduction</h2>
                        <p>
                            At Fixit, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.
                        </p>

                        <h2>2. Information We Collect</h2>
                        <h3>2.1 Personal Information</h3>
                        <p>We may collect personal information that you provide to us, including:</p>
                        <ul>
                            <li>Name and contact information (email, phone number, address)</li>
                            <li>Account credentials (username and password)</li>
                            <li>Payment information</li>
                            <li>Profile information and preferences</li>
                            <li>Communication records with service providers and support</li>
                        </ul>

                        <h3>2.2 Automatically Collected Information</h3>
                        <p>When you use our service, we automatically collect certain information:</p>
                        <ul>
                            <li>Device information (IP address, browser type, operating system)</li>
                            <li>Usage data (pages visited, time spent, features used)</li>
                            <li>Location data (with your permission)</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>

                        <h3>2.3 Information from Third Parties</h3>
                        <p>
                            We may receive information from third parties such as social media platforms if you choose to connect your account, or from payment processors when you make transactions.
                        </p>

                        <h2>3. How We Use Your Information</h2>
                        <p>We use the collected information for various purposes:</p>
                        <ul>
                            <li>To provide, maintain, and improve our services</li>
                            <li>To process bookings and facilitate connections with service providers</li>
                            <li>To process payments and prevent fraud</li>
                            <li>To send you confirmations, updates, and administrative messages</li>
                            <li>To respond to your inquiries and provide customer support</li>
                            <li>To personalize your experience and provide relevant recommendations</li>
                            <li>To send marketing communications (with your consent)</li>
                            <li>To analyze usage patterns and improve our platform</li>
                            <li>To comply with legal obligations and enforce our terms</li>
                        </ul>

                        <h2>4. Information Sharing and Disclosure</h2>
                        <h3>4.1 Service Providers</h3>
                        <p>
                            When you book a service, we share necessary information with the service provider to facilitate the service delivery, including your name, contact information, and service address.
                        </p>

                        <h3>4.2 Third-Party Service Providers</h3>
                        <p>
                            We may share information with third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
                        </p>

                        <h3>4.3 Legal Requirements</h3>
                        <p>
                            We may disclose your information if required by law or in response to valid requests by public authorities.
                        </p>

                        <h3>4.4 Business Transfers</h3>
                        <p>
                            In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                        </p>

                        <h2>5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul>
                            <li>Encryption of data in transit and at rest</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication mechanisms</li>
                            <li>Employee training on data protection</li>
                        </ul>
                        <p>
                            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>

                        <h2>6. Your Rights and Choices</h2>
                        <h3>6.1 Access and Update</h3>
                        <p>
                            You have the right to access and update your personal information through your account settings or by contacting us.
                        </p>

                        <h3>6.2 Data Deletion</h3>
                        <p>
                            You can request deletion of your account and personal information. Note that we may retain certain information as required by law or for legitimate business purposes.
                        </p>

                        <h3>6.3 Marketing Communications</h3>
                        <p>
                            You can opt out of receiving marketing communications by clicking the unsubscribe link in our emails or adjusting your account settings.
                        </p>

                        <h3>6.4 Cookies</h3>
                        <p>
                            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our service.
                        </p>

                        <h2>7. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
                        </p>
                        <p>Types of cookies we use:</p>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Necessary for the service to function</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our service</li>
                            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>

                        <h2>8. Children's Privacy</h2>
                        <p>
                            Our service is not intended for children under 18 years of age. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                        </p>

                        <h2>9. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and maintained on servers located outside of your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                        </p>

                        <h2>10. Data Retention</h2>
                        <p>
                            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                        </p>

                        <h2>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h2>12. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy or our data practices, please contact us at:
                        </p>
                        <ul>
                            <li>Email: privacy@fixit.com</li>
                            <li>Phone: +92 300 1234567</li>
                            <li>Address: Lahore, Pakistan</li>
                        </ul>

                        <h2>13. Your Consent</h2>
                        <p>
                            By using our service, you consent to our Privacy Policy and agree to its terms.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
