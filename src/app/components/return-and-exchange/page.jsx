import React from 'react';

const ReturnAndExchange = () => {
    return (
        <div className="bg-[#FFF0F3] min-h-screen py-10 px-6 sm:px-12 md:px-20 lg:px-40 font-serif text-[#333333]">
            <div className="max-w-4xl mx-auto font-inika">

                {/* Gradient Header */}
                <div className="w-full mb-10 overflow-hidden rounded-2xl">
                    <div className="bg-gradient-to-r from-[#FF758C] via-[#FFB347] to-[#FDB813] py-6 px-4 text-center">
                        <h1 className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase font-inknut">
                            Return and Exchange Policy
                        </h1>
                    </div>
                </div>

                {/* Brand and Intro */}
                <div className="mb-8">
                    <h2 className="text-[#D4AF37] font-bold text-lg mb-2">Vastrin by Hasitha</h2>
                    <p className=" text-[15px]">
                        At Vastrin by Hasitha, we ensure quality in every product. Please review our return and exchange guidelines below.
                    </p>
                </div>

                {/* Policy Sections */}
                <div className="space-y-8 text-[15px] leading-relaxed">

                    {/* Returns & Exchanges */}
                    <section>
                        <h3 className="font-bold text-black mb-2">Returns & Exchanges</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Requests must be raised within 7 days of delivery</li>
                            <li>Items must be unused, unwashed, and in original condition</li>
                            <li>Original tags and packaging are required</li>
                        </ul>
                    </section>

                    {/* Non-Returnable Items */}
                    <section>
                        <h3 className="font-bold text-black mb-1">Non-Returnable Items</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Accessories</li>
                            <li>Special Category items</li>
                            <li>Customized or made-to-order products</li>
                            <li>Sale or clearance items (unless defective)</li>
                        </ul>
                    </section>

                    {/* Exchanges */}
                    <section>
                        <h3 className="font-bold text-black mb-1">Exchanges</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Only size or color exchanges, subject to availability</li>
                            <li>If unavailable, a refund or store credit may be offered</li>
                        </ul>
                    </section>

                    {/* Refunds */}
                    <section>
                        <h3 className="font-bold text-black mb-2">Refunds</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Processed after inspection</li>
                            <li>Credited to the original payment method within 7–10 business days</li>
                            <li>Shipping charges are non-refundable</li>
                        </ul>
                    </section>

                    {/* Cancellations */}
                    <section>
                        <h3 className="font-bold text-black mb-2">Cancellations</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>Allowed before dispatch only</li>
                            <li>Not permitted once shipped</li>
                        </ul>
                    </section>

                    {/* Contact */}
                    <section>
                        <h3 className="font-bold text-black mb-2">Contact</h3>
                        <ul className="list-disc ml-5 space-y-1">
                            <li>For any queries, contact us at:</li>
                            <li className="list-none ml-0 mt-1">
                                <span className="block">Email: <span className="underline">support@vastrinbyhasitha.com</span></span>
                                <span className="block">Brand: Vastrin by Hasitha</span>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ReturnAndExchange;