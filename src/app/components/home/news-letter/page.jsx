import React from 'react';

export default function Newsletter() {
    return (
        <section className="bg-[#1a1a1a] py-20 px-6">
            <div className="max-w-4xl mx-auto text-center font-inknut">
                {/* Top Label */}
                <p className="text-white text-xs md:text-sm tracking-[0.2em] uppercase font-light mb-4">
                    Keep Me Updated
                </p>

                {/* Main Heading */}
                <h2 className="text-white text-[24px] leading-[28px] tracking-[2.16px]  uppercase mb-6">
                    Newsletter
                </h2>

                {/* Subtext */}
                <p className="text-gray-300 text-sm md:text-base lg:text-[16px] font-light tracking-wide mb-10 mx-auto leading-relaxed">
                    Get exclusive offers, latest collections and style tips ,stright to your inbox!
                </p>

                {/* Subscription Form */}
                <form className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
                    <input
                        type="email"
                        placeholder="E-MAIL"
                        required
                        className="w-full md:w-auto md:flex-1 bg-transparent border border-gray-500 px-6 py-4 text-white text-xs tracking-[0.3em] outline-none focus:border-white transition-colors placeholder:text-white uppercase  lg:text-[16px]"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto bg-white text-black border border-white px-10 py-4 text-xs tracking-[0.3em] font-bold uppercase transition-all hover:bg-transparent hover:text-white mt-4 md:mt-0 cursor-pointer lg:text-[16px]"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}