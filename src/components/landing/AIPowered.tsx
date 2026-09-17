'use client';

import React, { useEffect, useRef, useState } from 'react';

export function AIPowered() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-full bg-brand-dark py-20 md:py-42 px-6 flex flex-col items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center text-center">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-[100px] opacity-0'}`}>
                    <h2 className="text-[40px] md:text-[110px] text-white font-medium leading-none mb-2">
                        AI-powered
                    </h2>
                </div>
                <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'}`}>
                    <h2 className="text-brand-primary text-[48px] md:text-[125px] font-bold leading-none">
                        Dental Pulse
                    </h2>
                </div>
            </div>
        </section>
    );
}
