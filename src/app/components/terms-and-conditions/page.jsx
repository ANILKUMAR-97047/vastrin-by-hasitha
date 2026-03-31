import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="bg-[#FFF0F3] min-h-screen py-10 px-4 sm:px-8 md:px-16 lg:px-32 font-inika text-[#4A4A4A]">
            <div className="max-w-4xl mx-auto bg-transparent">

                {/* Gradient Header Box */}
                <div className="relative w-full mb-12 overflow-hidden rounded-2xl shadow-sm">
                    <div className="bg-gradient-to-r from-[#FF758C] via-[#FF7E5F] to-[#FEB47B] py-6 px-4 text-center">
                        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-widest uppercase font-inknut">
                            Terms and Conditions
                        </h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-8 leading-relaxed text-sm md:text-base">

                    <section>
                        <h2 className="text-[#D4AF37] font-bold text-lg mb-2">Vastrin by Hasitha</h2>
                        <p>
                            Welcome to Vastrin by Hasitha. By accessing or using our website, you agree to the following Terms & Conditions.
                            Please read them carefully before making a purchase.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">1. General</h3>
                        <p>
                            Vastrin by Hasitha is an ecommerce platform offering women's fashion including Kurti Sets, Co-ord Sets,
                            Best Sellers, Special Category items, and Accessories. By using this website, you confirm that you are
                            18 years or older or accessing under parental supervision. We reserve the right to update these terms
                            at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">2. Product Information</h3>
                        <p>We strive to display accurate product details and images. However:</p>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Colors may vary due to screen settings</li>
                            <li>Measurements may differ slightly due to handcrafted designs</li>
                            <li>Images are for reference only</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">3. Orders & Payments</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Order placement does not guarantee acceptance</li>
                            <li>Orders may be cancelled due to stock issues, pricing errors, or suspected fraud</li>
                            <li>All prices are in INR and payable via secure payment gateways</li>
                            <li>We are not responsible for third-party payment failures</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">4. Shipping & Delivery</h3>
                        <p>Orders are shipped within the estimated timeframe shown at checkout. Delivery delays caused by couriers, natural events, or external factors are beyond our control.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">5. Returns & Cancellations</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Returns/exchanges are subject to our Return & Refund Policy</li>
                            <li>Items must be unused and in original condition</li>
                            <li>Accessories, Special Category, and customized items may be non-returnable</li>
                            <li>Orders can only be cancelled before dispatch</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">6. Intellectual Property</h3>
                        <p>All website content belongs to Vastrin by Hasitha. Unauthorized use or reproduction is strictly prohibited.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">7. User Responsibility</h3>
                        <p>Users must not engage in unlawful activities, provide false information, or attempt to harm or misuse the website.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">8. Privacy & Liability</h3>
                        <p>Your data is handled as per our Privacy Policy. Vastrin by Hasitha is not liable for indirect damages, data loss, or misuse of products.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">9. Governing Law</h3>
                        <p>These terms are governed by the laws of India, and disputes fall under Indian jurisdiction.</p>
                    </section>

                    <section>
                        <h3 className="font-bold text-black mb-2">10. Contact</h3>
                        <div className="space-y-1">
                            <p>For any queries, contact us at:</p>
                            <p className="font-semibold">Email: support@vastrinbyhasitha.com</p>
                            <p className="font-semibold">Brand: Vastrin by Hasitha</p>
                        </div>
                    </section>

                </div>

                {/* Footer Brand Line */}
                <div className="mt-20 text-center">
                    <p className="text-[#FF758C] text-lg md:text-xl font-medium font-inknut">
                        Designed with elegance. Crafted with care.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;