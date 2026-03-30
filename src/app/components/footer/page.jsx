import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-yellow-500 py-12 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                {/* Logo / Brand */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        className="w-40 h-24 object-contain"
                        src="images/logos/vastrinfooter.svg"
                        alt="Vastrin Logo"
                    />
                </div>

                {/* Collections */}
                <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                    <h2 className="text-white text-xl md:text-2xl font-bold font-['Archivo'] uppercase tracking-[2.40px]">
                        Collections
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {[
                            "Kurtas and Kurtis",
                            "Ethnic Sets",
                            "Ethnic Sets with Dupatta",
                            "Dresses",
                            "Bottom Wear",
                            "All Collections",
                        ].map((item) => (
                            <li
                                key={item}
                                className="text-gray-200 text-sm font-bold font-['Inknut_Antiqua'] cursor-pointer hover:text-white transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex flex-col gap-3">
                        <span className="text-white text-xs font-normal font-['Inknut_Antiqua']">
                            Follow Us on
                        </span>
                        <div className="flex gap-5 justify-center lg:justify-start">
                            <div className="w-6 h-6 bg-white rounded-sm cursor-pointer hover:bg-gray-200 transition-colors"></div>
                            <div className="w-6 h-6 bg-white rounded-sm cursor-pointer hover:bg-gray-200 transition-colors"></div>
                        </div>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                    <h2 className="text-white text-xl md:text-2xl font-bold font-['Archivo'] uppercase tracking-[2.40px]">
                        Useful Links
                    </h2>
                    <ul className="flex flex-col gap-2">
                        {[
                            "Track Your Order",
                            "Term's and Conditions",
                            "Return and Exchange Policy",
                            "Privacy Policy",
                            "Contact US",
                        ].map((item) => (
                            <li
                                key={item}
                                className="text-gray-200 text-sm font-bold font-['Inknut_Antiqua'] cursor-pointer hover:text-white transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-center lg:items-start gap-4 text-center lg:text-left">
                    <h2 className="text-white text-xl md:text-2xl font-bold font-['Archivo'] uppercase tracking-[2.40px]">
                        Newsletter
                    </h2>
                    <p className="text-gray-200 text-sm font-bold font-['Inknut_Antiqua'] max-w-xs">
                        Sign up now for exclusive deals, the latest drops, and style inspiration!
                    </p>
                    <div className="flex flex-col sm:flex-row w-full max-w-sm gap-2 mt-2">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 w-full min-w-[150px] h-10 px-3 py-2 bg-transparent border border-neutral-300 text-white placeholder-white/70 rounded-sm focus:outline-none focus:ring-1 focus:ring-white"
                        />
                        <button className="h-10 px-6 bg-gray-200 text-black font-semibold text-xs font-['Inknut_Antiqua'] rounded-sm hover:bg-white transition-colors whitespace-nowrap cursor-pointer">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}