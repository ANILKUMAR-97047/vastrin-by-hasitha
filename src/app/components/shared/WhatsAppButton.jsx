"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-[#4D6A39] hover:bg-[#4D6A39] text-white px-4 py-2 rounded-md shadow-lg transition-all transform hover:scale-105 active:scale-95"
        >

            <img className='w-6 h-6' src="/images/logos/whats-icon.svg" alt="WhatsApp" />

            <span className="font-bold text-sm tracking-wide">Chat With Us</span>
        </a>
    );
}
