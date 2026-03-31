import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-[#FFF0F3] min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-32 font-serif text-[#4A4A4A]">
            <div className="max-w-4xl mx-auto font-inika">

                {/* Gradient Header Box */}
                <div className="relative w-full mb-12 overflow-hidden rounded-2xl shadow-sm">
                    <div className="bg-gradient-to-r from-[#FF758C] via-[#FF7E5F] to-[#FEB47B] py-6 px-4 text-center">
                        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-widest uppercase font-inknut">
                            Privacy Policy
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8 leading-relaxed text-sm md:text-base">

                    <section>
                        <h2 className="text-[#D4AF37] font-bold text-lg mb-2">Vastrin by Hasitha</h2>
                        <p>
                            At Vastrin by Hasitha, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or shop on our website.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">1. Information We Collect</h3>
                        <p>When you use our website, we may collect the following information:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Personal details such as name, email address, phone number, and shipping address</li>
                            <li>Order and transaction details</li>
                            <li>Payment information (processed securely via third-party payment gateways)</li>
                            <li>Device, browser, and usage data for website improvement</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">2. How We Use Your Information</h3>
                        <p>We use your information to:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Process and deliver orders for Kurti Sets, Co-ord Sets, Accessories, and other products</li>
                            <li>Communicate order updates, confirmations, and customer support response</li>
                            <li>Improve our website, products, and user experience</li>
                            <li>Send promotional offers or updates (only if you opt in)</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">3. Payment Security</h3>
                        <p>
                            All payments are handled through secure, authorized third-party payment gateways.
                            Vastrin by Hasitha does not store or access your card or payment details.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">4. Sharing of Information</h3>
                        <p>We do not sell or rent your personal information. Your data may be shared only with:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Delivery and logistics partners for order fulfillment</li>
                            <li>Payment service providers for transaction processing</li>
                            <li>Legal or regulatory authorities when required by law</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">5. Cookies & Tracking Technologies</h3>
                        <p>Our website may use cookies and similar technologies to:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Enhance website functionality</li>
                            <li>Understand user behavior and preferences</li>
                            <li>Improve performance and shopping experience</li>
                            <li>You can manage or disable cookies through your browser settings.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">6. Data Protection</h3>
                        <p>
                            We implement appropriate security measures to protect your personal data from unauthorized access, misuse, or loss. However, no online transmission is completely secure.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">7. Your Rights</h3>
                        <p>You have the right to:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Access, update, or correct your personal information</li>
                            <li>Opt out of marketing communications at any time</li>
                            <li>Request deletion of your data, subject to legal requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">8. Third-Party Links</h3>
                        <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">9. Policy Updates</h3>
                        <p>
                            Vastrin by Hasitha reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting on the website.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">10. Contact Us</h3>
                        <div className="space-y-1">
                            <p>If you have questions or concerns regarding this Privacy Policy, please contact us:</p>
                            <p className="font-semibold">Email: support@vastrinbyhasitha.com</p>
                            <p className="font-semibold">Business Name: Vastrin by Hasitha</p>
                        </div>
                    </section>

                </div>

                {/* Footer Brand Line */}
                <div className="mt-20 text-center">
                    <p className="text-[#FF758C] italic text-lg md:text-xl font-medium font-inknut">
                        Your trust matters. Your privacy is protected.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;